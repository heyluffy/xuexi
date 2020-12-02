<template>
  <div ref="dots" class="dots" :class="{ scrollable: scrollable }">
    <div ref="dotsScroll" class="dots-scroll">
      <div ref="dotsList" class="dots-list">
        <div
          v-for="item in dots"
          :key="item"
          @click="handleClick(item)"
          :class="{ active: activeIndex === item }"
          class="dots-item"
        ></div>
      </div>
    </div>
    <div class="dots-arrows" v-if="scrollable">
      <i class="dots-arrows-item fa fa-camera-retro"></i>
    </div>
    <i class="dots-arrows-item fa fa-camera-retro"></i>
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
      scrollable: false,
      resizeObserver: null
    };
  },
  mounted() {
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
    },
    update() {
      const scrollWidth = this.$refs.dotsScroll.clientWidth;
      const innerWidth = this.$refs.dotsList.offsetWidth;
      if (scrollWidth < innerWidth) {
        this.scrollable = true;
      } else {
        this.scrollable = false;
      }
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
      this.resizeObserver.disconnect();
    }
  }
};
</script>
<style lang='scss' scoped>
.dots.scrollable {
  padding: 0 20px;
}
.dots-scroll::after {
  display: table;
  content: "";
  clear: both;
}
.dots-list {
  float: left;
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
  background: var(--grey-color-1);
  transition: 0.3s ease;
  &.active {
    width: 36px;
    background: var(--purple-color-1);
  }
}
// .dots-item1 {
//   transition: 0.3s ease;
// }
</style>
