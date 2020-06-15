<template>
  <div id="main">
    <h2 class="title">These are some of my projects</h2> 
    <div class="items">
        <a href="">
          <img src="../assets/imgs/blog.png" alt="">
          <p>xblog</p>
        </a>
        <a href="">
          <img src="../assets/imgs/blog.png" alt="">
          <p></p>
        </a>
        <a href="">
          <img src="../assets/imgs/blog.png" alt="">
          <p></p>
        </a>
        <a href="">
          <img src="../assets/imgs/blog.png" alt="">
          <p></p>
        </a>
        <a href="">
          <img src="../assets/imgs/blog.png" alt="">
          <p></p>
        </a>
        <a href="">
          <img src="../assets/imgs/blog.png" alt="">
          <p>
            <span class="code">&lt;</span>
              Random Quote Machine
            <span class="code">&#47;&gt;</span>
          </p>
        </a>
    </div>
    <div class="btn-show">
      <i class="el-icon-share"></i>
      <a href="" class="btn" target="_blank">Show all </a>
      
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
}
</script>

<style lang="scss" scoped>
#mian{
  
}
.title{
  padding-top: 50px;
  max-width: 640px;
  margin: 0 auto 3rem auto;
  font: 40px Raleway, sans-serif;
  border-bottom: 0.2rem solid white;
  color: white;
}
.items{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr) ;
  grid-gap: 40px;
  margin: auto;
  width: 1280px;
  a{
    width: 400px;
  }
  
  img{
    height: 400px;
  }
  p{
    height: 60px;
    background-color: rgb(48,56,65);
    font-size: 2rem;
    text-align: center;
    margin: 0;
    color: white;

    .code {
      color: var(--main-gray);
      transition: color 0.3s ease-out;
    }
  }
}
.btn-show{
  padding: 100px;
  height: px;

  .btn{
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(202, 217, 235);
    // height: 4.5rem;
    // width: 140px;
    color: white;
    font-size: 1.92rem;

    i{
      width: 20px;
      height: 20px;
      // transform: translateX(0);
      // transition: transform 0.3s ease-out;
    }
    :hover i{
      transform: translateX(2px);
    }
  }
}
@media (max-width: 1280px) {
  .items{
    width: 840px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 860px) {
  .items{
    width: 400px;
    grid-template-columns: 1fr;
  }
}
</style>