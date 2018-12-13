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
                <a href="javascript:history.back(-1)" class="back">《返回主菜单</a>
              <div class="ranking_title"><i></i>全国商户</div>
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
                      <li v-for="(storedata,index) in store_data">
                        <div class="rank kline_rank">
                          <div class="fl hot_on">{{index+1}}</div>
                          <div class="fl hot_box">
                            <div class="hot_data">
                              {{storedata.name}}<span class="fr ranking_degree">{{storedata.addlv}}%</span>
                              <span class="fr">{{storedata.add}}℃</span>
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
            <div class="tc box_title_box">
              <div class="box_title_left con_select great_event_box">
                <div class="time_box fl pos_r">
                  <span class="">{{show_time}}</span>
                  <span class="el-input__suffix">
                  <span class="el-input__suffix-inner">
                  <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                  </span>
                  </span>
                  <div class="time_box_data fl pos_a">
                  <el-date-picker
                  v-model="value1"
                  type="daterange"
                  align="right"
                  value-format="yyyy-MM-dd"
                  @change="get_data()"
                  range-separator="-"
                  :default-value="timeDefaultShow"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions1">
                  </el-date-picker>
                  </div>
                </div>
              </div>
              <div class="box_title">{{shop_data.name}}</div>
              <div class="box_title_right con_select">
                <el-select v-model="style_type" placeholder="资讯">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>

            <div v-show="style_type == '2'" class="shop tc">
              <div class="consult_graph_list">
                <div>店铺名称</div> <div>等级</div> <div>编号</div><div>热度</div> <div>热度变量</div> <div>订单量</div><div>总粉丝</div><div>新增粉丝</div>
              </div>
              <div class="consult_graph_list consult_graph_a">
                  <div class="consult_graph_brand">阳光品牌</div>
                  <div class="consult_graph_change add_color">3星</div>
                  <div class="consult_graph_shop_nb add_color">YS200809</div>
                  <div class="consult_graph_shop_hot add_color">218 ℃</div>
                  <div class="consult_graph_shop_hot">+2 ℃</div>
                  <div class="consult_graph_shop_hot">432</div>
                  <div class="consult_graph_shop_hot">432</div>
                  <div class="consult_graph_shop_hot">32</div>
                  
                </div>
            </div>
            <!-- 热度图 -->
            <div v-show="style_type == '1'">
              <div id="myChart" :style="{width: '600px', height: '400px'}"></div>
              <br>
              <!--div class="m-bottom chart-line-bottom"><span class="s">注：</span>总热度 = 新粉丝订单*1°C + 新粉丝有记账订单*2°C + 老粉丝复购订单*3°C (其中新店铺前三十单的热度*2)</div-->
            </div>

            
          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div v-show="style_type == '2'" class="consult_profile_box">
              <div class="ranking_list">
                <div class="ranking_title"><i></i>资讯摘要</div>
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
                            <div class="fl hot_box">
                              <div class="hot_data">
                                热度上涨
                                <span class="fr">8个品牌</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_box">
                              <div class="hot_data">
                                热度下降
                                <span class="fr">2个品牌</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_box">
                              <div class="hot_data">
                                最大涨幅
                                <span class="fr">12%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_box">
                              <div class="hot_data">
                                最大跌幅
                                <span class="fr">-12%</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_box">
                              <div class="hot_data">
                                新粉丝数
                                <span class="fr">39</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_box">
                              <div class="hot_data">
                                订单数
                                <span class="fr">36</span>
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

            <div v-show="style_type == '1'" class="consult_profile_box">
              <div>
                <div class="fl bigshopimg img100">
                  <img :src="srcjgr+shop_data.logo" />
                  
                </div>
                <div class="fl bigshop_box">
                  <div class="bigshopname">{{shop_data.name}}</div>
                  <div class="bigshopheat">总热度：{{shop_data.heat}}</div>
                  <router-link  :to="{ name: 'stats', query: {merchant_id: merchant_id}}">
                    查看技术统计 >>
                  </router-link>
                  
                </div>
                <div class="clear"></div>
              </div>
              <div class="ranking_list">
              <div class="ranking_title"><i></i>商户旗下店铺</div>
              <div class="opacity_box_con">
                <span class="opacity_box_top_b1"></span>
                <span class="opacity_box_top_b2"></span>
                <span class="opacity_box_top_b3"></span>
                <span class="opacity_box_bottom_b1"></span>
                <span class="opacity_box_bottom_b2"></span>
                <span class="opacity_box_bottom_b3"></span>

                <div class="opacity_box_bg_box">
                  <div class="ranking">
                    <div class="lcr_right_title tr">
                      热度
                    </div>
                    <ul>
                      <li v-for="(data_store,index) in store_list">
                        <div class="rank">
                          <div class="fl hot_on">{{index+1}}</div>
                          <div class="fl hot_box">
                            <div class="hot_tu">
                              <el-progress :text-inside="true" :stroke-width="30" :percentage="data_store.heat"></el-progress>
                            </div>
                            <div class="hot_data">
                            <router-link  :to="{ name: 'shop', query: {merchant_id: merchant_id, store_id: data_store.store_id }}">
                              {{data_store.name}} 
                            </router-link><span class="fr">{{data_store.heat}} ℃</span></div>
                          </div>
                        </div>
                        
                      </li>
                    </ul>
                  </div>
                </div>
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
                      <!--li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              大区日冠军<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">3次</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              大区周冠军<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">3次</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              大区月冠军<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">3次</span>
                            </div>
                          </div>
                        </div>
                      </li-->
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              全国日冠军<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">{{shop_data.day_Champion}}次</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              全国周冠军<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">{{shop_data.week_Champion}}次</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              全国月冠军<span class="fr ranking_degree"><img src="../../static/img/champion_ico.png" alt="champion_ico"></span>
                              <span class="fr">{{shop_data.month_Champion}}次</span>
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
        timeDefaultShow:new Date(Date.now() - 3600 * 1000 * 24 * 30),
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          
          shortcuts: [{
            text: '今日',
            onClick(picker) {
              const end = '';
              const start = '';
              picker.$emit('pick', [start, end]);
            }
          },{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        options: [{
          value: '1',
          label: '热度图'
        }],
        store_data:'',
        srcjgr:'../attachment/',
        style_type: '1',
        RealmUrl:domain.realmurl,
        value1:'',
        show_time: '今日',
        merchant_id:'',
        shop_data:'',
        tutype: 'bar',
        xdata: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        ydata:[],
        store_list:'',

      }
    },
    mounted(){
      this.merchant_id = this.$route.query.merchant_id;
      this.get_data();
      this.get_store();
    },
    methods: {
      get_data() {
        if(this.value1){
          if(this.value1[0]){
            this.show_time = this.value1[0]+' - '+this.value1[1];
            this.tutype = "line";
          }else{
            this.show_time = "今日";
          }
          
        }
        let Data = {
          'merchant_id': this.merchant_id,
          'start_time': this.value1[0],
          'end_time': this.value1[1]
        };
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.shop_m', Data,{
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.shop_m',{
          emulateJSON: true
        }).then(function(response) {
          this.shop_data = response.data.merchant;
          this.store_list = response.data.store;
          this.xdata = response.data.data_x;
          this.ydata = response.data.y_xian;
          //this.xdata = this.xdata.slice(0,12);
          this.drawLine();
        }, function(response) {
          console.log('region Interface error')
        })
      },
      get_store() {
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.common', {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.common', {
          emulateJSON: true
        }).then(function(response) {
          this.store_data = response.data.data_store;
        }, function(response) {
          console.log('region Interface error')
        })
      },
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
              axisLine:{
                  lineStyle:{
                      color:'#0087ED',
                      width:1,
                  }
                },
                legend: {
                    enabled: true,
                    itemStyle: {
                        color: '#666',
                        fontSize: '14px'
                    },
                    left:'center',
                    bottom:'0%',
                    textStyle:{//图例文字的样式
                        color:'#fff',
                        fontSize:16
                    },
                    itemHoverStyle: {
                        color: '#888'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
              tooltip: {
                        trigger: 'axis'
                    },

                    xAxis: [
                        {
                          name: '时间',
                          type: 'category',
                          data: this.xdata,
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#fff'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                color:'#0087ED',
                                width:1,

                              }
                            }
                        }

                    ],
                    yAxis: [
                        {
                          splitLine:{show: false},//去除网格线
                            type: 'value',
                            name: '热度',
                            interval: 50,
                            axisLabel: {
                                formatter: '{value}'
                            },
                            axisLine:{
                              lineStyle:{
                                color:'#0087ED',
                                width:1,

                              }
                            }
                        }],
                    series: [
                       /*  
                        {
                            name:'全局度数',
                            type:this.tutype,
                            设置柱状图颜色
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        // build a color map as your need.
                                        var colorList = [
                                          '#ffffff','#00ffff'
                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                }
                            },
                            data:[100, 175, 200, 250, 200, 350, 250, 200, 295, 260, 220, 145]
                        },*/
                        {
                            name:'热度',
                            type:'line',
                            itemStyle : {  /*设置折线颜色*/
                                normal : {
                                   color:'#FF9326'
                                }
                            },
                            data: this.ydata
                        },
                       /* {
                            name:'2°C',
                            type:'line',
                            itemStyle : {  
                                normal : {
                                    color:'#9472FC'
                                }
                            },
                             data:[60, 85, 90, 130, 180, 300, 250, 100, 95, 160, 50, 55]
                        },
                        {
                            name:'3°C',
                            type:'line',
                            itemStyle : { 
                                normal : {
                                    color:'#FFFF26'
                                }
                            },
                             data:[10, 25, 50, 60, 70, 160, 150, 170, 95, 190, 90, 85]
                        }*/
                    ]
          });
      }
    }
}
</script>
<style>

</style>



