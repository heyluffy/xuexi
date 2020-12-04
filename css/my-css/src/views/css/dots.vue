<template>
  <div ref="dots" class="dots" :class="{ scrollable: scrollable }">
    <div ref="dotsScroll" class="dots-scroll" :style="scrollStyle">
      <div ref="dotsList" class="dots-list">
        <div
          ref="dotItem"
          v-for="item in dots"
          :key="item"
          @click="handleClick(item)"
          :class="{ active: activeIndex === item }"
          class="dots-item"
        ></div>
      </div>
    </div>
    <div class="dots-arrows" v-if="scrollable">
      <i class="dots-arrows-item left fa fa-chevron-left" @click="moveTo('left')"></i>
      <i class="dots-arrows-item right fa fa-chevron-right" @click="moveTo('right')"></i>
    </div>
    <!-- <div class="box">
      <div
      v-for="item in dots"
      :key="item"
      @click="handleClick(item)"
      :class="{ active: activeIndex === item }"
      class="dots-item dots-item1"
    ></div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'Dots',
  data() {
    return {
      dots: 10,
      activeIndex: 0,
      scrollable: true,
      resizeObserver: null,
      isMounted: false,
      updating: false,
      dotOffset: 0 // scroll的时候偏移量
    };
  },
  computed: {
    containerWidth() {
      return this.$refs.dotsScroll ? this.$refs.dotsScroll.clientWidth : 0;
    },
    contentWidth() {
      return this.$refs.dotsScroll ? this.$refs.dotsScroll.scrollWidth : 0;
    },
    scrollStyle() {
      return {
        transform: `translate3d(-${this.dotOffset}px, 0, 0)`
      };
    }
  },
  mounted() {
    this.isMounted = true;
    this.addResizeObserver();
  },
  updated() {
    this.update();
  },
  beforeDestroy() {
    this.discResizeObserver();
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
      this.moveToCurretn(index);
    },
    update() {
      this.updating = true;
      if (this.containerWidth < this.contentWidth) {
        this.scrollable = true;
      } else {
        this.scrollable = false;
      }
      this.updating = false;
    },
    addResizeObserver() {
      if (!this.resizeObserver && this.$refs.dots) {
        this.resizeObserver = new ResizeObserver(() => {
          this.update();
        });
        this.resizeObserver.observe(this.$refs.dots);
      }
    },
    discResizeObserver() {
      this.resizeObserver && this.resizeObserver.disconnect();
    },
    moveTo(type) {
      if (type === 'left') {
        this.dotOffset = this.dotOffset > this.containerWidth
          ? this.dotOffset - this.containerWidth
          : 0;
      } else if (type === 'right') {
        const lastOffset = this.contentWidth - this.containerWidth - this.dotOffset;
        this.dotOffset += lastOffset > this.containerWidth
          ? this.containerWidth
          : lastOffset;
      }
    },
    moveToCurretn(index) {
      if (!this.mounted) return;
      const containerBounding = this.$refs.dotsScroll.getBoundingClientRect();
      const activeBounding = this.$refs.dotItem[index].getBoundingClientRect();
      const maxOffset = this.containerWidth - this.contentWidth; // 最大偏移量
      let newOffset = this.dotOffset + (activeBounding.left - containerBounding.left);
      if (newOffset > maxOffset) {
        newOffset = maxOffset;
      } else if (newOffset < 0) {
        newOffset = 0;
      }
      this.dotOffset = newOffset;
    }
  }
};
</script>
<style lang='scss' scoped>
@import '../../assets/css/var.scss';
.dots {
  position: relative;
  text-align: center;
}
.dots.scrollable {
  padding: 0 20px;
}
.dots-scroll {
  overflow: hidden;
}
.dots-scroll::after {
  display: table;
  content: "";
  clear: both;
}
.dots-list {
  display: inline-block;
  white-space: nowrap;
}
.dots-item {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 3px;
  cursor: pointer;
  vertical-align: middle;
  border-radius: 10px;
  background: $--grey-color-1;
  transition: 0.3s ease;
  &.active {
    width: 36px;
    background: $--purple-color-1;
  }
}
.dots-arrows-item {
  position: absolute;
  top: 50%;
  color: $--grey-color-2;
  cursor: pointer;
  transform: translate3d(0, -50%, 0);
  transition: 0.3s;
}
.dots-arrows-item:hover {
  color: rgba($--grey-color-2, 0.8);
}
.dots-arrows-item.left {
  left: 5px;
}
.dots-arrows-item.right {
  right: 5px;
}
// .dots-item1 {
//   transition: 0.3s ease;
// }
</style>
