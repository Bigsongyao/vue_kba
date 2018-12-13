<template>
  <div v-if="allpage > 1" id="apppager">
    <ul class="pagination fr" >
        <li v-show="current != 1" @click="current-- && goto(current)" ><a href="javascript:void(0)"><span class="glyphicon glyphicon-triangle-left"></span></a></li>
        <li v-show="current > showItem -1  " @click="goto(1)"><a href="javascript:void(0)" >1</a></li>
        <span v-if="current > showItem -1  " class="page-index">...</span>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
          <a href="javascript:void(0)" >{{index}}</a>
        </li>
        <span v-if="allpage - current > 2  && allpage > 5" class="page-index">...</span>
        <li v-if="allpage > 5" v-show="allpage - current > 2  " @click="goto(allpage)"><a href="javascript:void(0)" >{{allpage}}</a></li>
        <li  v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="javascript:void(0)" ><span class="glyphicon glyphicon-triangle-right"></span></a></li>
        
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current: 1,
        showItem: 5,
        allpage: ''
      }
    },
    
    props:['current','allpage'],
    computed:{
      pages:function(){
        var pag = [];
        if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showItem,this.allpage);
          while(i){
            pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
          var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
          i = this.showItem;
          if( middle >  (this.allpage - this.showItem)  ){
            middle = (this.allpage - this.showItem) + 1
          }
          while(i--){
            pag.push( middle++ );
          }
        }
        return pag
      }
    },
    methods:{
      goto:function(index){
          this.current = index
          this.$emit("pageon",index);
      }
    }
  }
</script>

<style>
    .pagination {
        position: relative;
      }
      .pagination li{
        display: inline-block;
        margin:0 5px;
      }
      .pagination li a{
        padding:5px 11px;
        display:inline-block;
        border:1px solid #ddd;
        background:#fff;

        color:#bc8252;
      }
      .pagination li a:hover{
        background:#eee;
      }
      .pagination li.active a{
        background:#edefed;
        color:#010101;
      }
  </style>




