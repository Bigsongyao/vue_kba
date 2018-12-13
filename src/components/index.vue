<template>
  <div class="main">
    <div class="bigdata_bg pos_r">
      <div class="bigdata">
        <div class="index_content">

          <!-- lcr_left -->
          <leftnav></leftnav>

          <!-- lcr_center -->
          <div class="lcr_center">
            <alldata></alldata>

            <div class="con_select">
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
                  @change="get_time()"
                  range-separator="-"
                  :default-value="timeDefaultShow"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions1">
                  </el-date-picker>
                </div>
              </div>
              <el-select v-model="oncity" @change="get_time" placeholder="全国">
                <el-option
                  v-for="(item,key) in province"
                  :key="key"
                  :label="item.province"
                  :value="item.province">
                </el-option>
              </el-select>
              <el-select v-model="style_type" placeholder="排行榜" @change="GetType">
                <el-option
                  v-for="item in rand"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!--el-select v-model="brand_type" placeholder="店铺" >
                <el-option
                  v-for="item in brand"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select-->

            </div>
            <!-- 排行榜 -->
            <div id="myChart" v-show="style_type == '1'" :style="{width: '600px', height: '400px'}"></div>
            <!-- 资讯 -->
            <div v-show="style_type == '2'" class="consult_graph_box">
              <div class="consult_graph">
                <div class="consult_graph_list">
                <div>品牌名称</div> <div>热度变量</div> <div class="consult_graph_shop_box">旗下店铺热度情况</div>
                </div>
                <div class="consult_graph_list consult_graph_a">
                  <div class="consult_graph_brand">阳光品牌</div>
                  <div class="consult_graph_change add_color">+2℃</div>
                  <div class="consult_graph_shop_box">
                    <div class="consult_graph_shop add_color">
                      <div class="consult_graph_shop_name">阳光品牌店A</div>
                      <div class="consult_graph_shop_star">3星</div>
                      <div class="consult_graph_shop_nb">YS200809</div>
                      <div class="consult_graph_shop_hot">+2℃</div>
                    </div>
                    <div class="consult_graph_shop">阳光品牌店B</div>
                  </div>
                </div>
                <div class="consult_graph_list consult_graph_b">
                  <div class="consult_graph_brand">阳光品牌</div>
                  <div class="consult_graph_change decline_color">-2℃</div>
                  <div class="consult_graph_shop_box">
                    <div class="consult_graph_shop decline_color">
                      <div class="consult_graph_shop_name">阳光品牌店A</div>
                      <div class="consult_graph_shop_star">3星</div>
                      <div class="consult_graph_shop_nb">YS200809</div>
                      <div class="consult_graph_shop_hot">+2 ℃</div>
                    </div>
                    <div class="consult_graph_shop">阳光品牌店B</div>
                  </div>
                </div>
                <div class="consult_graph_list consult_graph_a">
                  <div class="consult_graph_brand">阳光品牌</div>
                  <div class="consult_graph_change add_color">+2℃</div>
                  <div class="consult_graph_shop_box">
                    <div class="consult_graph_shop add_color">
                      <div class="consult_graph_shop_name">阳光品牌店A</div>
                      <div class="consult_graph_shop_star">3星</div>
                      <div class="consult_graph_shop_nb">YS200809</div>
                      <div class="consult_graph_shop_hot">+2 ℃</div>
                    </div>
                    <div class="consult_graph_shop">阳光品牌店B</div>
                  </div>
                </div>
              </div>

            </div>
            <!-- 资讯end -->
            <!-- K -->
            <div id="kline" v-show="style_type == '3'" :style="{width: '600px', height: '600px'}"></div>
            <!-- Kend -->
          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div class="ranking_list">
              <div class="ranking_title"><i></i>{{geregion}}门店热度排行</div>
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
                      <li v-for="(shop_rank,index) in shop_data.data">
                        <div class="rank">
                          <div class="fl hot_on">{{index+1}}</div>
                          <div class="fl hot_box">
                            <div class="hot_tu">
                              <el-progress :text-inside="true" :stroke-width="30" :percentage="shop_rank.addlv"></el-progress>
                            </div>
                            <div class="hot_data">
                            
                            <router-link  :to="{ name: 'shop', query: {merchant_id: shop_rank.merchant_id, store_id: shop_rank.store_id }}">
                              {{shop_rank.name}}
                            </router-link>
                            <span class="fr ranking_degree">+{{shop_rank.addlv}}%</span><span class="fr">{{shop_rank.add}} ℃</span>
                            </div>
                          </div>
                        </div>
                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div class="ranking_list">
              <div class="ranking_title"><i></i>{{geregion}}商户热度排行</div>
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
                      <li v-for="(data_store,index) in shop_data.data_store">
                        <div class="rank">
                          <div class="fl hot_on">{{index+1}}</div>
                          <div class="fl hot_box">
                            <div class="hot_tu">
                              <el-progress :text-inside="true" :stroke-width="30" :percentage="data_store.addlv"></el-progress>
                            </div>
                            <div class="hot_data">
                            <router-link  :to="{ name: 'shop_consult', query: {merchant_id: data_store.merchant_id}}">
                              {{data_store.name}} 
                            </router-link>
                            <span class="fr ranking_degree">+{{data_store.addlv}}%</span><span class="fr">{{data_store.add}} ℃</span></div>
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
</template>
<script>
  import leftnav from '@/components/left_nav.vue'
  import alldata from '@/components/all_data.vue'


  export default {
    data() {
      return {
        style_type: '1',
        brand_type: '1',
        geregion: '全国',
        show_time: '今日',
        value: '1',
        RealmUrl:domain.realmurl,
        categoryData: '',
        valuesb: '',
        volumes: '',
        timeDefaultShow:new Date(Date.now() - 3600 * 1000 * 24 * 30),
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          
          shortcuts: [{
            text: '今日',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
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
        dates: '37997',
        shop_data:'',
        province:'',
        value1: '',
        rand: [{
          value: '1',
          label: '排行榜'
        },{
          value: '3',
          label: 'K线'
        }
        ],
        brand: [{
          value: '1',
          label: '店铺'
        }, {
          value: '2',
          label: '品牌'
        }],
        oncity: '',
        myData: [
          {name: '广州', value: [113.327,23.168, 190]},
          {name: '深圳', value: [115.07,22.12, 100]},
          {name: '北京', value: [116.46,39.92, 90]},
          {name: '上海', value: [121.48,31.22, 123]},
          {name:'天津',value:[117.26,39.13,86]}
        ],
        getfData: '',
      }
    },
    created () {
      //this.splitData()
    },
    mounted(){
      this.get_data();
      this.drawLine();
      this.detectmob();
      this.geregion ='全国',
      this.get_province();
      
    },
    methods: {
      GetType() {
        this.geregion ='全国',
        this.show_time ='今日',
        this.oncity = "";
        this.value1 = "";
        if(this.style_type == '1'){
          
          this.get_data();
        }else{
          this.splitData()
        }
      },
      get_province() {
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.province', {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.province', {
          emulateJSON: true
        }).then(function(response) {
          this.province = response.data.data;
        }, function(response) {
          console.log('region Interface error')
        })
      },
      get_time() {
        if(this.value1){
          this.show_time = this.value1[0]+' - '+this.value1[1];
        }
        this.geregion = this.oncity;
        if(this.oncity == "全国"){
          this.oncity = "";
        }
        if(this.style_type == '1'){
          this.get_data();
        }else{
          this.splitData();
        }
        
      },
      get_data() {
        //let loadingInstance = this.$loading({text:'正在加载' });
        let Data = {
          'province': this.oncity,
          'start_time': this.value1[0],
          'end_time': this.value1[1]
        };
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.common', Data,{
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.common', Data,{
          emulateJSON: true
        }).then(function(response) {
          this.shop_data = response.data;
          //loadingInstance.close();
        }, function(response) {
          console.log('region Interface error');
          //loadingInstance.close();
        })
      },
      splitData() {
        //let loadingInstance = this.$loading({text:'正在加载' });
        let Data = {
          'province': this.oncity,
          'start_time': this.value1[0],
          'end_time': this.value1[1]
        };
        var categoryDatab = [];
        var values = [];
        var volumesb = [];
        //this.$http.get('static/css/stock-DJI.json',).then(function(response) {
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.k_map', Data, {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.k_map', {
            emulateJSON: true
          }).then(function(response) {
            var k_data = response.data.data;
            //var k_data = response.data;
            for (var i = 0; i < k_data.length; i++) {
              categoryDatab.push(k_data[i].splice(0, 1)[0]);
              values.push(k_data[i]);
              volumesb.push([i, k_data[i][4], k_data[i][0] > k_data[i][1] ? 1 : -1]);
            }
            this.categoryData = categoryDatab;
            this.valuesb = values;
            this.volumes = volumesb;
            //loadingInstance.close();
            this.Kline();
        }, function(response) {
            console.log('Interface error');
            //loadingInstance.close();
        })
        
    },

    calculateMA(dayCount) {
        var result = [];
        for (var i = 0, len = this.valuesb.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += this.valuesb[i - j][1];
            }
            result.push(+(sum / dayCount).toFixed(3));
        }
        return result;
    },
      Kline(){
          // 基于准备好的dom，初始化echarts实例
          let Kline = this.$echarts.init(document.getElementById('kline'))
          // 绘制图表
          Kline.setOption({
          
            animation: false,
            legend: {
		            bottom: '20px',
		            left: 'center',
		            data: [
		            	{name: 'MA5', textStyle: {color: '#FF9326'}},
		            	{name: 'MA10', textStyle: {color: '#9370F7'}},
		            	{name: 'MA20', textStyle: {color: '#FFFF26'}},
		            	{name: 'MA30', textStyle: {color: '#fff'}},
		            ],
		        },
          tooltip: {
		            trigger: 'axis',
		            axisPointer: {
		            	type: 'line',
			            animation: false,
			            lineStyle: {
			            	type: 'solid',
			                color: '#fff',
			                width: 1,
			                opacity: 1
			            }
			        },
			        textStyle: {
			        	fontFamily: 'Microsoft YaHei, "Helvetica Neue", Helvetica, STHeiTi, sans-serif'
			        },
			        padding: 10,
			        backgroundColor: 'rgba(2, 91, 113, 0.8)',
			        borderColor: '#ccc',
			        borderWidth: 1,
			        formatter: function (param) {
                        var param = param[0];
                        if(param.seriesType == "bar") {
                        	return  param.name + '<br />总度数：' + param.value+'°C';
                        }else {
	                        return [
	                            '' + param.name + '<br />',
	                            '开市: ' + param.data[1] + '°C<br/>',
	                            '收市: ' + param.data[2] + '°C<br/>',
	                            '最低: ' + param.data[3] + '°C<br/>',
	                            '最高: ' + param.data[4] + '°C<br/>'
	                        ].join('');
                        }
                    }
		        },
          /*
          axisPointer: {
              link: {xAxisIndex: 'all'},
              label: {
                  backgroundColor: '#777'
              }
          },
          toolbox: {
              feature: {
                  dataZoom: {
                      yAxisIndex: false
                  },
                  brush: {
                      type: ['lineX', 'clear']
                  }
              }
          },
        brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: {
                colorAlpha: 0.1
            }
        },
        visualMap: {
            show: false,
            seriesIndex: 5,
            dimension: 2,
            pieces: [{
                value: 1,
                color: '#f20'
            }, {
                value: -1,
                color: '#f20'
            }]
        },
       */
        grid: [
            {
                left: '10%',
                right: '8%',
                height: '50%'
            },
            {
                left: '10%',
                right: '8%',
                top: '63%',
                height: '16%'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: this.categoryData,
                scale: true,
                name: '时间',
                boundaryGap : true,
                axisLine: {
                  onZero: false,
                  lineStyle:{
                    color:'#0087ED',
                    width:1,
                  }
                },
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisTick: {
                  inside: true,
                  lineStyle: {
                    color: '#0087ED'
                  }
                },
                axisLabel: {
                  textStyle: {
                    color: '#0087ED'
                  }
                }
            },
            {
                type: 'category',
                gridIndex: 1,
                data: this.categoryData,
                scale: true,
                boundaryGap : false,
                axisLine: {onZero: false},
                axisTick: {show: false},
                splitLine: {show: false},
                axisLabel: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            }
        ],
        yAxis: [
            {
                scale: true,
		                splitArea: {
		                    show: true
		                },
		                name: '指数',
		                axisLine: {
		                	lineStyle: {
		                		color: '#0087ED',
		                	}
		                },
		                axisTick: {
		                	inside: true,
		                	lineStyle: {
		                		color: '#0087ED'
		                	}
		                },
		                axisLabel: {
		                	textStyle: {
		                		color: '#0087ED'
		                	}
		                },
		                splitArea: {
		                	show: false
		                },
		                splitLine: { show: false }
            },
            {
                scale: true,
                gridIndex: 1,
                splitNumber: 2,
                axisLabel: {show: false},
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
            }
        ],
        dataZoom: [
          {
              type: 'inside',
              xAxisIndex: [0, 1],
              start: 60,
              end: 100
          },
          {
              show: true,
              xAxisIndex: [0, 1],
              type: 'slider',
              bottom: '11%',
              left: '8%',
              right: '8%',
              start: 50,
              end: 60,
              textStyle: {
                color: '#fff'
              },
              dataBackground: {
                lineStyle: {
                  color: 'rgba(241,91,91,.9)',
                  width: 2
                },
                areaStyle: {
                  color: 'rgba(241,89,89,0.4)'
                }
              },
              fillerColor: 'rgba(241,89,89,0.5)',
              borderColor: '#666666',
              handleStyle: {
                color: '#F15959'
              }
          }
        ],
        color: ['#FF9326','#9370F7','#FFFF26','#fff'],
        series: [
		            {
		                name: '',
		                type: 'candlestick',
		                data: this.valuesb,
		                itemStyle: {
		                    normal: {
		                    	color: 'rgba(241,89,89,.7)',
		                        color0: 'rgba(89,178,0,.7)',
		                        borderColor: 'rgba(241,89,89,1)',
		                        borderColor0: 'rgba(89,178,0,1)'
		                    }
		                },
		                tooltip: {
		                    
		                }
		            }
		            ,
		            {
		                name: 'MA5',
		                type: 'line',
		                data: this.calculateMA(5),
		                smooth: true,
		                lineStyle: {
		                    normal: {color:'#FF9326'}
		                },
		                symbol: 'circle'
		            },
		            {
		                name: 'MA10',
		                type: 'line',
		                data: this.calculateMA(10),
		                smooth: true,
		                lineStyle: {
		                    normal: {color:'#9370F7'}
		                },
		                symbol: 'circle'
		            },
		            {
		                name: 'MA20',
		                type: 'line',
		                data: this.calculateMA(20),
		                smooth: true,
		                lineStyle: {
		                    normal: {color:'#FFFF26'}
		                },
		                symbol: 'circle'
		            },
		            {
		                name: 'MA30',
		                type: 'line',
		                data: this.calculateMA(30),
		                smooth: true,
		                lineStyle: {
		                    normal: {color:'#FFFFFF'}
		                },
		                symbol: 'circle'
		            },
		            {
		                name: '总值',
		                type: 'bar',
		                xAxisIndex: 1,
		                yAxisIndex: 1,
		                data: this.volumes,
		                itemStyle: {
		                	normal: {
		                		color: '#F15959'
		                	}
		                }
		            }
		        ]

  });
  /*
  Kline.dispatchAction({
        type: 'brush',
        areas: [
            {
                brushType: 'lineX',
                coordRange: ['2016-06-02', '2016-06-20'],
                xAxisIndex: 0
            }
        ]
    }); */
      },
      
      drawLine(){
      var self  = this;
          // 基于准备好的dom，初始化echarts实例
          let myChart = self.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            // 新建一个地理坐标系 geo ，
          geo: {
            map: 'china',//地图类型为中国地图,要是世界那就是world,要是省市区：例如beijing、shanghai
            itemStyle:{ // 定义样式
              normal:{       // 普通状态下的样式
                areaColor:'#1d90a5',
                borderColor: '#072c49',
              },
              emphasis: {         // 高亮状态下的样式
                areaColor: '#ffde00'
              },
              padding: '20'
            }
 
          },
          grid: [
            {
                left: '0',
                right: '0',
                height: '0'
            },
            {
                left: '0',
                right: '0',
                top: '0',
                height: '0'
            }
        ],
          legend: {
              padding: 5, 
            },
          // hover显示目标数据
          tooltip : {
            trigger: 'item',
            formatter: function(params) {
              return [
                  params.data.name,
              ].join('');
               
            },
            backgroundColor: 'rgba(2, 91, 113, 0.6)',
            borderRadius: 6,
            textStyle:{
              align:'left'
            },
          },
          // 图表背景色 
          // 标志颜色
          color:'red',
          // 新建散点图series
          series:[{
            name:'',//series名称
            type:'scatter',//为散点类型
            coordinateSystem: 'geo',// series坐标系类型
            data:self.myData,
            color: '#d94e5d',
            symbolSize: function (val) {
                return val[2] / 10;
            },
          },
          {
              //name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: [ //这里是城市数据 
              ],
              symbolSize: function (val) {
                 return val[2] / 100;
              },
              showEffectOn: 'render',
              rippleEffect: {
                  brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                  normal: {
                      formatter: function(p){
                          return '';
                      },
                      textStyle: {
                          color: '#fff'
                      },
                      position: 'top',
                      show: true,
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#f35a58',
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              zlevel: 1
          }
          
          ],
 
        })
        setInterval(function() { //定时获取数据
          getValue();
        }, 5000);
        
        function getValue(){ //新增数据
          var option = myChart.getOption();
          option.series[1].data = [];  
          myChart.setOption(option);
          self.$http.post(self.RealmUrl+'&r=kbaindex.m_map',{
          //self.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.m_map',{
            emulateJSON: true
          }).then(function(response) {
            if (response.data.code == 200) {
              self.getfData = response.data.data;
              var _len = self.getfData.length;
              for (var i = 0; i < _len; i ++) {
                var citydata = {
                  name: self.getfData[i].name, 
                  value: self.getfData[i].value,
                  label: {
                    normal: {
                      formatter: self.getfData[i].name+' +'+self.getfData[i].add+'°C',
                      textStyle: {
                        color: '#fff'
                      },
                      position: 'top',
                      show:true
                    }
                  }
                };
                option.series[1].data[i] = citydata;
              }
              myChart.setOption(option);
            }
          }, function(response) {
            console.log('region Interface error')
          })
          
        }
      },
     
      onresize() {
            let imgbox = document.getElementsByClassName("lcr_center")[0];
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            let Chart = document.getElementById('myChart');
            Chart.style.width = imgbox.clientWidth  - '5' +'px';
            Chart.style.height = '250px';
            myChart.resize();
            let Kline = this.$echarts.init(document.getElementById('kline'))
            let klin = document.getElementById('kline');
            klin.style.width = imgbox.clientWidth - '5' +'px';
            klin.style.height = '250px';
            Kline.resize();
      },
      detectmob() { 
        if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) )
        { 
          this.onresize();
        }
      } 
    
    },
    components: { leftnav ,alldata },
}
</script>
<style>

</style>



