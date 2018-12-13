<template>
  <div class="main">
    <div class="bigdata_bg pos_r">
      <div class="bigdata">
        <div class="index_content">

          <!-- lcr_left -->
          <div class="lcr_left">
            <div class="lcr_left_con hot_big_box">
              <div class="logo img100">
                <img src="../../static/img/logo.png" />
              </div>
              <div class="lcr_left_nav_box">
              <div class="ranking_title"><i></i>同品牌店铺</div>
              <div class="opacity_box_con ">
                          <span class="opacity_box_top_b1"></span>
                          <span class="opacity_box_top_b2"></span>
                          <span class="opacity_box_top_b3"></span>
                          <span class="opacity_box_bottom_b1"></span>
                          <span class="opacity_box_bottom_b2"></span>
                          <span class="opacity_box_bottom_b3"></span>
                <div class="opacity_box_bg_box">
                  <div class="consult_profile ranking">
                    <ul>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              北京店<span class="fr ranking_degree">8%</span>
                              <span class="fr">87632 ℃</span>
                            </div>
                          </div>
                        </div>
                        
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              北京店<span class="fr ranking_degree">8%</span>
                              <span class="fr">87632 ℃</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              北京店<span class="fr ranking_degree">8%</span>
                              <span class="fr">87632 ℃</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              北京店<span class="fr ranking_degree">8%</span>
                              <span class="fr">87632 ℃</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>

          <!-- lcr_center -->
          <div class="lcr_center">
            <div class="con_title">
               总热度（℃）<img src="../../static/img/hot_ico.png" alt="hot_ico">
            </div>
            <div class="con_data_box">
              <!-- <span class="span_bg_box fl">901000</span> -->
              <span class="fl span_bg_boxbig">
              <span class="span_bg_boxb fl">9</span>
              <span class="span_bg_boxb fl">0</span>
              <span class="span_bg_boxb fl">1</span>
              <span class="span_bg_boxb fl">9</span>
              <span class="span_bg_boxb fl">9</span>
              <span class="span_bg_boxb fl">8</span>
</span>
              <div class="fl">
                <p>店铺总数</p>
                <span>8899</span>
              </div>
              <div class="fl">
                <p>品牌总数</p>
                <span>1200</span>
              </div>
              <div class="fl">
                <p>增长率</p>
                <span class="add">+12%</span>
              </div>
              <div class="clear"></div>
            </div>

            <div class="con_select">
              <el-select v-model="value" placeholder="近一个月">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="全国">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="排行榜">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="店铺">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

            </div>
            <div id="myChart" :style="{width: '600px', height: '400px'}"></div>
          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div class="consult_profile_box">
              
              <div class="ranking_list">
                <div class="hot_shop_case">
                  <img src="../../static/img/hot_shop_top.png">
                  <div class="hot_shop_box">
                    <div class="hot_shop_name tc">阳光智慧店</div>
                  </div>
                  <img src="../../static/img/hot_shop_bottom.png">
                </div>

              </div>
            
              <div class="ranking_list">
              <div class="ranking_title"><i></i>店铺战绩</div>
              <div class="opacity_box_con">
                <span class="opacity_box_top_b1"></span>
                <span class="opacity_box_top_b2"></span>
                <span class="opacity_box_top_b3"></span>
                <span class="opacity_box_bottom_b1"></span>
                <span class="opacity_box_bottom_b2"></span>
                <span class="opacity_box_bottom_b3"></span>

                <div class="opacity_box_bg_box">
                  <div class="ranking">
                    <ul>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              北京店<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">3次</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              北京店<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">3次</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              北京店<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">3次</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
              </div>

            </div>
            
            
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],

      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
              xAxis: {
                name: '时间',
                type: 'category',
                axisLine:{
                  lineStyle:{
                      color:'#0087ED',
                      width:1,
                  }
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
              },
              yAxis: {
                name: '指数',
                type: 'value',
                splitLine:{show: false},//去除网格线
                axisLine:{
                  lineStyle:{
                    color:'#0087ED',
                    width:1,

                  }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
              },

              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line',
                  color:'#966cf6',
                  symbolSize:0,
                  smooth: true
              },{
                  data: [720, 732, 701, 734, 890, 1230, 1280],
                  type: 'line',
                  color:'#fff',
                  symbolSize:0,
                  smooth: true
              },{
                  data: [620, 632, 601, 934, 990, 1360, 1380],
                  type: 'line',
                  color:'#996b16',
                  symbolSize:0,
                  smooth: true
              }]
          });
      }
    }
}
</script>
<style>

</style>



