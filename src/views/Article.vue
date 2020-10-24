<template>
  <div>
    <!-- 内容区域 -->
    <img
      :class="['lazy', className]"
      :src="defaultImg"
      :data-src="url"
      :data-srcset="`${url} 1x`"
      alt="fordeal"
    />
    <div class="content">
      <div>
        在页面中经常会用到滚动，下拉刷新，下拉加载等功能，vux的scroller可以使用，但是它不再维护，而且要配合load-more组件一起使用。所以一般在项目中我都是用vue-scroller.
        vue-scroller文档
        1.在项目中安装：
        npm i vue-scroller -S
        2.在main.js中引用
        import VueScroller from 'vue-scroller'
        Vue.use(VueScroller)
        3.在需要用到滚动的地方直接使用
      </div>
      <div>
        4.使用技巧
        （1）一般来说，我们都是在一个列表中使用这个滚动，经过实践，在使用scroller时，
        最好的布局方法是以下这种，一个外部的容器元素，将滚动标签和滚动内容包裹起来，
        然后这个外层元素进行定位，要是有头部标签需要留出header的高度，并且滚动容器的高度要减小，
        不然会出现滚动条，在手机上导致滚动到底部看不到头部的情况，
        在scroller里面再加一层容器的原因是一般scroller里面只有一个元素性能会比较好，
        滚动也比较流畅，不然可能会有滚动卡顿，上拉回弹等问题。
      </div>
      <div>
        (2)scroller提供的属性（常用）：
        onRefresh:下拉刷新
        refresh(done){//下拉刷新
        //your code
        },
        onInfinite:上拉加载
        infinite(done){//上拉加载
        if(this.isBottom){//当没有更多数据的时候结束加载
        this.loadingTips ="无更多数据"
        setTimeout(()=>{
        done&&done(true);
        },1000);
        }else{//有更多数据时进行数据分页显示
        setTimeout(() => {
        this.page++;
        this.getDataList(this.page);
        this.$nextTick(() => {
        this.$refs.scrollerBottom.reset()
        })
        },1500)
        }
        }
      </div>
      <div>
        refreshText: 下拉刷新的提示文字
        noDataText: 上拉加载没有数据的提示文字
        (3)scroller提供的方法（常用）：
        getPosition(): 得到滚动区域当前的位置
        scrollTo(): 滚动到页面的某一个位置
        scrollBy();滚动到内容的相对位置
      </div>
      <div>content-4</div>
    </div>
    <!-- 导航区域 -->
    <ul class="navs">
      <li :class="{active: active===0}" @click="scrollTo(0)">content-0</li>
      <li :class="{active: active===1}" @click="scrollTo(1)">content-1</li>
      <li :class="{active: active===2}" @click="scrollTo(2)">content-2</li>
      <li :class="{active: active===3}" @click="scrollTo(3)">content-3</li>
      <li :class="{active: active===4}" @click="scrollTo(4)">content-4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    url: {
      type: String
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: 0 // 当前激活的导航索引
    }
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll)
  },
  destroy () {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // 滚动监听器
    onScroll () {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.content div')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      this.active = navIndex
    },
    // 跳转到指定索引的元素
    scrollTo (index) {
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(
        `.content div:nth-child(${index + 1})`
      ).offsetTop
      // 获取当前 offsetTop
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown () {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp () {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

<style scoped>
/* 内容区的样式 */
.content {
  background-color: white;
  width: 500px;
}
.content div {
  width: 100%;
  font-size: 36px;
  padding: 20px;
  background-color: #7ec384;
}
.content div:nth-child(2n) {
  background-color: #847ec3;
}
/* 导航栏的样式 */
.navs {
  position: fixed;
  top: 80px;
  left: 700px;
  background-color: #efefef;
}
.navs li {
  padding: 0 20px;
  line-height: 1.6;
  font-size: 24px;
}
/* 当导航被点亮后改变颜色 */
.navs .active {
  color: #847ec3;
  background-color: #e2e2e2;
}
</style>
