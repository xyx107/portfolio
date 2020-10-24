<template>
<el-scrollbar style=" height: 100%; width:100%;">
  <div id="main">
      <section class="timeline">
        <ul >
            <li v-for="item in workList" :key="item.id">
                    <div>
                        <a :href="item.workUrl">
                        <time>{{item.id}}</time>
                        <div class="discovery">
                            <p>{{item.workUrl}}</p>
                        </div>
                        </a>
                    </div>
            </li>
        </ul>
    </section>
    <!-- <el-timeline >
      <el-timeline-item placement="top" v-for="item in workList" :key="item.id">
        <a :href="item.workUrl">
            <el-card class="card">
                <h2>{{item.id}}</h2>
                <p>{{item.workUrl}}</p>
            </el-card>
        </a>
      </el-timeline-item>
    </el-timeline> -->
    <!-- Scroll down to see the bottom-right button.
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
  </div>
  </el-scrollbar>
</template>

<script>
import 'animate.css'
// import $ from 'jquery'

export default {
    data () {
        return {
            workList: [
                {
                id: 'xblog',
                imgUrl: '../assets/imgs/1.jpg',
                workUrl: 'https://iyxy.top/'
                },
                {
                id: 'xchat',
                imgUrl: '@/assets/imgs/2.jpg',
                workUrl: ''
                },
                {
                id: 'secLab507',
                imgUrl: '@/assets/imgs/3.jpg',
                workUrl: ''
                },
                {
                id: 'Github',
                imgUrl: '@/assets/imgs/3.jpg',
                workUrl: ''
                }
            ]
        }
    },
    methods: {
        isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                console.log('111', rect)
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            },
            callbackFunc() {
                var items = document.querySelectorAll(".timeline li");
                for (var i = 0; i < items.length; i++) {
                    if (this.isElementInViewport(items[i])) {
                        if(!items[i].classList.contains("in-view")){
                            items[i].classList.add("in-view");
                        }
                    } else if(items[i].classList.contains("in-view")) {
                        items[i].classList.remove("in-view");
                    }
                }
            },
        cards () {
            var items = document.querySelectorAll(".timeline li");
            console.log(items)
            window.addEventListener("load", this.callbackFunc);
            window.addEventListener("scroll", this.callbackFunc);
        }
    },
    mounted () {
        this.cards()
    }
}
</script>

<style lang="scss" scoped>
#main{
    width: 50%;
    margin: 0 auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.card{
    background: url('../assets/imgs/1.jpg');
    height: 300px;
    color: white;
}
#main >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}

  *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: normal 16px/1.5 'Titillium Web', sans-serif;
  background: linear-gradient(54deg, #9164ff, #8bfff4);
  color: #3c3f64;
  overflow-x: hidden;
  padding-bottom: 50px;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;
}
.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  z-index: 0;
  background: #eee;
}
.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 20px;
  background: #fff;
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.timeline ul li div time {
  position: absolute;
  background: #f5af19;
  width: 80px;
  height: 30px;
  top: -15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
}
.timeline ul li div div {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.timeline ul li div div p {
  text-align: center;
}
.timeline ul li div .discovery {
  margin-right: 10px;
}
.timeline ul li:nth-of-type(odd) > div {
  left: 45px;
}
.timeline ul li:nth-of-type(even) > div {
  left: -439px;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.timeline ul li:nth-of-type(odd) div {
  transform: translate3d(100px, -10px, 0) rotate(10deg);
}
.timeline ul li:nth-of-type(even) div {
  transform: translate3d(-100px, -10px, 0) rotate(10deg);
}
.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}

@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
    flex-direction: column;
  }
  .timeline ul li div div {
    width: 80%;
    margin: 10px;
  }
  .timeline ul li:nth-of-type(even) > div {
    left: -289px;
  }
}
@media screen and (max-width: 600px) {
  body {
    background: #8bfff4;
  }

  .timeline ul li {
    margin-left: 20px;
  }
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li:nth-of-type(even) > div {
    left: 45px;
  }
}
</style>
