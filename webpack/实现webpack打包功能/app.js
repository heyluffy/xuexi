const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser'); // 文件转换成AST语法树
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');


//解析某个模块，获取模块信息
// file 模块的真实路径
function getModuleInfo(file) {
  console.log(file);
  const body = fs.readFileSync(file, 'utf-8');
  const ast = parser.parse(body, {
    sourceType: 'module' // es语法模块
  });
  
  // 获取模块依赖
  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file); // 返回当前模块的目录名 ./src/index.js -> ./src
      deps[node.source.value] = './' + path.join(dirname, node.source.value); // 当前依赖的真实路径
    }
  });
  // es6转es5
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env'] // 指定转换范围，默认包含所有转换插件
  });
  return { deps, code, file };
}

 // 解析模块
 // file 入口文件真实路径
function parseModule(file) {
  const depsGraph = {};
  const entry = getModuleInfo(file);
  const temp = [ entry ];
  getDeps(temp, entry);
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = moduleInfo;
  });
  return depsGraph;
}

// 获取依赖的模块信息
function getDeps(temp, { deps }) {
  Object.keys(deps).forEach(key => {
    const child = getModuleInfo(deps[key]);
    temp.push(child);
    getDeps(temp, child);
  });
}

// 生成bundle文件
function bundle(file) {
  const depsGraph = JSON.stringify(parseModule(file));
  return `
    (function(graph) {
      function require(file) {
        const exports = {};
        const code = graph[file].code;
        function absRequire(relPath) {
          return require(graph[file].deps[relPath]);
        }
        (function(require, exports, code) {
          eval(code);
        })(absRequire, exports, code);
        return exports;
      }
      require('${file}');
    })(${depsGraph})
  `
}

const content = bundle('./src/index.js');
!fs.existsSync('./dist') && fs.mkdirSync('./dist');
fs.writeFileSync('./dist/bundle.js', content);
fs.writeFileSync('./dist/index.html', `<script src="./bundle.js"></script>`);