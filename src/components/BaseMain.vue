<template>
  <div id="main">
    <h2 class="title">These are some of my projects</h2>
    <div class="items">
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp placement="top">
            <el-card class="card">
              <a href="http://ixyx.top">
                <img src="../assets/imgs/blog.png" alt />
                <p>
                  <span class="code">&lt;</span>
                  Random Quote Machine
                  <span class="code">&#47;&gt;</span>
                </p>
              </a>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp placement="top">
            <el-card class="card">
              <a href>
                <img src="../assets/imgs/blog.png" alt />
                <p>
                  <span class="code">&lt;</span>
                  Random Quote Machine
                  <span class="code">&#47;&gt;</span>
                </p>
              </a>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp placement="top">
            <el-card class="card">
              <a href>
                <img src="../assets/imgs/blog.png" alt />
                <p>
                  <span class="code">&lt;</span>
                  ｂｌｏg
                  <span class="code">&#47;&gt;</span>
                </p>
              </a>
            </el-card>
          </el-timeline-item>
          <el-timeline-item></el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <div class="items"></div>
    <div class="btn-show">
      <i class="el-icon-share"></i>
      <a href class="btn" target="_blank">Show all</a>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Main',
  data() {
    return {
      items: document.querySelectorAll(".el-timeline-item")
    }
  },
  mounted(){
    window.addEventListener("load", this.callbackFunc);
    window.addEventListener("scroll", this.callbackFunc);
  },
  methods: {
    isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      },

    callbackFunc() {
      for (var i = 0; i < this.items.length; i++) {
          if (isElementInViewport(items[i])) {
          if(!items[i].classList.contains("in-view")){
              items[i].classList.add("in-view");
          }
          } else if(items[i].classList.contains("in-view")) {
              items[i].classList.remove("in-view");
          }
      }
      }
}
  // props: { name: String },
  // setup (props, { refs, root }) {
  //   const count = ref(0)// 修改值需要count.value = '' ,reactive不需要
  //   const obj = reactive({ a: 'a', b: 'b' })// 后面可以用return toRefs(obj) 转化成响应式对象，此外zai template可以直接{{a}}不需要{{obj.a}}
  //   const onScroll = () => {
  //     const navContents = document.querySelectorAll('.block el-timeline-item')
  //     // 所有锚点元素的 offsetTop
  //     const offsetTopArr = []
  //     navContents.forEach(item => {
  //       offsetTopArr.push(item.offsetTop)
  //     })
  //     // 获取当前文档流的 scrollTop
  //     // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  //   }
  //   onMounted(() => {
  //     window.addEventListener('scroll', onScroll, true)
  //   })
  //   onUnmounted(() => {
  //     window.removeEventListener('scroll', onScroll, true)
  //   })
  //   return {
  //     count,
  //     obj
  //     // isElementInViewport,
  //     // handleScroll,
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.el-timeline-item {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;
}
.el-timeline-item ::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  z-index: 2;
  background: #eee;
}
.card {
  position: relative;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  bottom: 0;
  width: 400px;
  padding: 20px;
  background: #fff;
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.el-timeline-item .in-view .card {
  transform: none;
  visibility: visible;
  opacity: 1;
}
// .block {
//   z-index: -1;
// }
// .card {
//   animation-name: fade;
//   animation-duration: 2s;
//   animation-timing-function: ease-in;
// }
@keyframes fade {
  0% {
    opacity: 0;
    left: 60%;
  }
  60% {
    opacity: 1;
    left: 0;
  }
}
.title {
  padding-top: 50px;
  max-width: 640px;
  margin: 0 auto 3rem auto;
  font: 40px Raleway, sans-serif;
  border-bottom: 0.2rem solid white;
  color: white;
}
.items {
  width: 61%;
  margin: 0 auto;
  a {
    width: 100%;
  }
  img {
    height: 200px;
  }
  p {
    height: 30px;
    background-color: rgb(48, 56, 65);
    font-size: 1rem;
    text-align: center;
    margin: 0;
    color: white;

    .code {
      color: var(--main-gray);
      transition: color 0.3s ease-out;
    }
  }
}

// @media (max-width: 1280px) {
//   .items{
//     width: 840px;
//     grid-template-columns: repeat(2, 1fr);
//   }
// }
@media (max-width: 860px) {
  .items {
    width: 400px;
    grid-template-columns: 1fr;
  }
}
</style>
