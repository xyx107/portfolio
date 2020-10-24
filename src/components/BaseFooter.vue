<template>
  <div id="footer">
    <section class="songs">
      <p>超好听的歌单~~</p>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in musicList" :key="item.id">
          <audio controls>
            <source :src="item.musicUrl" type="audio/mp3">
            <!-- <source src="viper.ogg" type="audio/ogg"> -->
            <p>你的浏览器不支持 HTML5 音频，可点击<a href="../assets/audios/Holy.mp3">此链接</a>收听。</p>
          </audio>
        </el-carousel-item>
      </el-carousel>
    </section>   
    <section class="contact">
      <p>关于我</p>
      <div>联系me</div>  
      <div> github </div>
      <div> 邮箱 </div>
    </section>
    <section class="todo">
      <p>TODO-LIST</p>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        >
        <el-table-column
          type="selection"
          width="45" >
        </el-table-column>
        <el-table-column
          prop="address"
          width="255"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column width="45" >
          <!-- <template slot-scope="scope"> -->
            <i class="el-icon-delete"></i>
            <!-- <el-button class="addTodo" icon="el-icon-delete" size="mini"></el-button> -->
          <!-- </template> -->
        </el-table-column>
      </el-table>
      <el-button class="addTodo" type="primary" icon="el-icon-edit" size="mini">添加</el-button>
    </section>   
  </div>
</template>

<script type="text/javascript">
export default {
  data(){
    return{
      tableData: [{
          date: '2016-05-07',
          address: 'todo1'
        },{
          date: '2016-05-07',
          address: 'todo2'
        }],
        multipleSelection: [],
        musicList: [{
          id: 1,
          musicUrl: require('../assets/audios/古风2016.mp3')
        },{
          id: 2,
          musicUrl: require('../assets/audios/古风2016.mp3')
        },{
          id: 3,
          musicUrl: require('../assets/audios/古风2016.mp3')
        },{
          id: 4,
          musicUrl: require('../assets/audios/古风2016.mp3')
        }]
    }
  }
}
</script>

<style lang="scss" scoped>
#footer{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgb(44, 62, 80);
  flex: 1;
  color: #bdd1e6;
}
.contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  div {
    margin: 20px 20px;
  }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
.songs{
  width: 350px;
  height: 390px;
  background: linear-gradient(
      35deg,
      rgb(250, 230, 193),
      #ccffff
  );
}
.todo{
  width: 350px;
  height: 390px;
  background: linear-gradient(
      35deg,
      #ccffff,
      #ffccff
  );
}
.todo /deep/ .el-checkbox__inner{
  border-radius: 15px;
}
.todo /deep/ .el-table__header-wrapper{
      display: none;
}
.todo /deep/ .el-button--mini{
  padding-left: 10px;
  padding-right: 10px;
}
.addTodo{
  margin-top: 10px;
  border-radius: 35px;
}

</style>
