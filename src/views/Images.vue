<template>
  <div class="loadingImg">
    <!-- /*ondragstart="return false" 图片禁止拖动*/ -->
    <div v-for="img in list" :key="img.index">
      <img v-lazy="img.cover" alt='bb' ondragstart="return false" />
      <div>
        {{img.title}}
      </div>
    </div>
    
    <div class="gototop" @click="BackToTop">
      <a>
        回到
        <br />顶部
      </a>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'images',
  data() {
    return {
      list: [
        { cover: '../../static/img/2.jpg', title: 'aaaa' },
        { cover: '../../static/img/3.jpg', title: 'aaaa' },
        { cover: '../../static/img/4.jpg', title: 'aaaa' },
        { cover: '../../static/img/5.jpg', title: 'aaaa' },
        { cover: '../../static/img/6.jpg', title: 'aaaa' },
        { cover: '../../static/img/7.jpg', title: 'aaaa' },
        { cover: '../../static/img/8.jpg', title: 'aaaa' }
      ]
    }
  },
  methods: {
    BackToTop() {
      $('html,body').animate({ scrollTop: 0 })
      console.log(111)
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      console.log(scrollTop)
      if (scrollTop > 100) {
        $('.gototop').fadeIn(500)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    $('.gototop').hide()
  },
  created() {}
}
</script>
<style>
img[lazy='loading'] {
}
img[lazy='loaded'] {
  animation: fade 0.5s;
}
img {
  transition: all 0.5s;
  display: block;
  width: 400px;
  height: 100px;
  margin: 0 auto;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.gototop {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #f2f2f5;
  position: fixed;
  right: 30px;
  bottom: 50px;
  font-size: 12px;
  cursor: pointer;
}
.gototop a {
  color: #666;
  line-height: 20px;
  display: inline-block;
}
</style>