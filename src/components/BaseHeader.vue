<template>
  <div id="header">
    <nav id="nav">
      <a href="#header">About</a>
      <a href="#main">Work</a>
      <a href="#footer">Contact</a>
      <el-dropdown>
      <span class="el-dropdown-link">
        个人中心 <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人资料</el-dropdown-item>
        <el-dropdown-item divided>后台管理</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </nav>
    <div class="hello">
      <vue-typed-js :strings="['没有梦想，何必远方', '道阻且长，行则将至', '前途似海，来日方长', '一如既往，万事顺意～']" :fadeOut='true'>
        <h1 class="typing"></h1>
      </vue-typed-js>
    </div>
    <div class="iconnext">
        <a @click="scrollAnimation(currentY, targetY)">
          <transition name="fade">
          <i class="el-icon-arrow-down"></i>
          </transition>
        </a>
    </div>
  </div>
</template>

<script type="text/javascript">
import $ from 'jquery'
export default {
  name: 'base-header',
  data () {
    return {
      show: true,
      targetY: 500,
      currentY: document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  methods: {
    shows(){
      this.show = !this.show
    },
    scrollAnimation(currentY, targetY) {        
      //currentY  当前滑动高度       targetY  目标滑动高度
      // 获取当前位置方法
      // currentY: document.documentElement.scrollTop || document.body.scrollTop
      // 计算需要移动的距离
      let needScrollTop = targetY - currentY
      console.log(needScrollTop)
      let _currentY = currentY
      let viewHeight = document.documentElement.clientHeight
      setTimeout(() => {
          // 一次调用滑动帧数，每次调用会不一样
          const dist = Math.ceil(needScrollTop / 10)
          _currentY += dist
          window.scrollTo(_currentY, currentY)
          // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
          if (needScrollTop > 10 || needScrollTop < -10) {
              this.scrollAnimation(_currentY, targetY)
          } else {
              window.scrollTo(_currentY, viewHeight - 50)
          }
      }, 4)
    }
  },
  mounted() { 
    // this.scrollAnimation()
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}
#nav {
  z-index: 1;
  background-color: rgb(44, 62, 80);
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  a {
    line-height: 50px;
    text-align: center;
    position: relative;
    font-size: 1.8rem;
    font-weight: 100;
    color: #bdd1e6;
    padding: 0 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover{
      background-color: #bdd1e6;
      color:  rgb(48, 56, 65);
      border-radius: 5px;
    }
  }
  span{
    font-size: 20px;
    color: #bdd1e6;
  }
}
.hello{
  padding-top: 150px;
  padding-left: calc(50% - 150px);
  width: 300px;
  height: 300px;
}
.iconnext{
  font-size: 50px;
  height: 100px;
}
</style>
