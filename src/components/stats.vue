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
                @change="get_stats()"
                range-separator="-"
                :default-value="timeDefaultShow"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                </div>
              </div>
              
              <el-select v-model="oncity" @change="get_stats" placeholder="全国">
                <el-option
                    v-for="(item,key) in province"
                    :key="key"
                    :label="item.province"
                    :value="item.province">
                  </el-option>
              </el-select>
              <!--el-select v-model="value" placeholder="排行榜">
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
              </el-select-->
            </div>


            <div class="stats_box">
              <div class="stats_list">
                  <div class="ranking stats1">
                    <div class="stats_circle ">
                      <el-progress type="circle" :show-text="false" stroke-width="3" width="120" :percentage="stats_data.c1_c" color="#fcfc26"></el-progress>
                    </div>
                    <p>1℃热度</p>
                    <span>{{stats_data.c1}}°C</span>

                  </div>
              </div>
              <div class="stats_list">
                <div class="ranking stats2">
                  <div class="stats_circle ">
                    <el-progress type="circle" :show-text="false" stroke-width="3" width="120" :percentage="stats_data.c2_c" color="#fc794d"></el-progress>
                  </div>
                  <p>2℃热度</p>
                  <span>{{stats_data.c2}}°C</span>
                </div>
              </div>
              <div class="stats_list">
                  <div class="ranking stats3">
                    <div class="stats_circle ">
                      <el-progress type="circle" :show-text="false" stroke-width="3" width="120" :percentage="stats_data.c3_c" color="#fc4c4c"></el-progress>
                    </div>
                    <p>3℃热度</p>
                    <span>{{stats_data.c3}}°C</span>
                  </div>
              </div>
            </div>
            <div class="stats_box stats_boxb">
                <div class="stats_list">
                  <div class="ranking stats4">
                    <div class="stats_circle ">
                      <el-progress type="circle" :show-text="false" stroke-width="3" width="120" :percentage="stats_data.add_c" color="#4dd2ff"></el-progress>
                    </div>
                    <p>新增店铺热度</p>
                    <span>{{stats_data.add}}°C</span>

                  </div>
                </div>
                <div class="stats_list">
                  <div class="ranking stats5">
                    <div class="stats_circle ">
                      <el-progress type="circle" :show-text="false" stroke-width="3" width="120" :percentage="stats_data.fensi_c" color="#9572fc"></el-progress>
                    </div>
                    <p>新增粉丝热度</p>
                    <span>{{stats_data.fensi}}°C</span>
                  </div>
                </div>
                <div class="stats_list">
                  <div class="ranking stats6">
                    <div class="stats_circle ">
                      <el-progress type="circle" :show-text="false" stroke-width="3" width="120" :percentage="stats_data.huo_c" color="#d900d9"></el-progress>
                    </div>
                    <p>店铺活跃热度</p>
                    <span>{{stats_data.huo}}°C</span>
                  </div>
                </div>
            </div>
          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div class="consult_profile_box">
              
              <div class="ranking_list">
                <div class="ranking_title"><i></i>{{geregion}}热度占比</div>
                <div class="opacity_box_con">
                  <span class="opacity_box_top_b1"></span>
                  <span class="opacity_box_top_b2"></span>
                  <span class="opacity_box_top_b3"></span>
                  <span class="opacity_box_bottom_b1"></span>
                  <span class="opacity_box_bottom_b2"></span>
                  <span class="opacity_box_bottom_b3"></span>

                  <div class="opacity_box_bg_box">
                    <div class="ranking statsranking">
                      <div id="myChart" :style="{width: '280px', height: '250px'}"></div>
                      
                    </div>
                  </div>
                </div>

              </div>
              
              <div class="ranking_list">
                <div class="ranking_title"><i></i>{{geregion}}商家热度占比</div>
                <div class="opacity_box_con">
                  <span class="opacity_box_top_b1"></span>
                  <span class="opacity_box_top_b2"></span>
                  <span class="opacity_box_top_b3"></span>
                  <span class="opacity_box_bottom_b1"></span>
                  <span class="opacity_box_bottom_b2"></span>
                  <span class="opacity_box_bottom_b3"></span>

                  <div class="opacity_box_bg_box">
                    <div class="ranking statsranking">
                      <div id="myChartb" :style="{width: '280px', height: '250px'}"></div>
                      
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
import leftnav from '@/components/left_nav.vue'
import alldata from '@/components/all_data.vue'

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
        value1:'',
        value:'',
        show_time: '今日',
        geregion: '全国',
        merchant_id:'',
        RealmUrl:domain.realmurl,
        stats_data:'',
        province:'',
        oncity:'',

      }
    },
    mounted(){
      if(this.$route.query.merchant_id){
        this.merchant_id = this.$route.query.merchant_id;
      }
      
      this.get_stats();
      this.get_province();
      this.geregion = '全国';
    },
    methods: {
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
      get_stats() {
        this.geregion = this.oncity;
        if(this.value1){
          this.show_time = this.value1[0]+' - '+this.value1[1];
        }
        if(this.oncity == "全国"){
          this.oncity = "";
        }
        let Data = {
          'merchant_id': this.merchant_id,
          'province': this.oncity,
          'start_time': this.value1[0],
          'end_time': this.value1[1]
        };
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.Skill', Data, {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.Skill', Data, {
          emulateJSON: true
        }).then(function(response) {
          this.stats_data = response.data.data;
          this.drawLine();
          this.drawLineb();
        }, function(response) {
          console.log('region Interface error')
        })
      },
      drawLineb(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            tooltip : {
              trigger: 'item',
            },
            series : [
                {
                    name: '全国热度占比',
                    type: 'pie',
                    radius : '50%',
                    center: ['50%', '50%'],
                    data:[
                        {value:this.stats_data.c1, name:'1℃热度'},
                        {value:this.stats_data.c2, name:'2℃热度'},
                        {value:this.stats_data.c3, name:'3℃热度'}
                    ],
                    color:['#6151fe', '#069ce5','#74eb3f'],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ]
          });
      },
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChartb'))
          // 绘制图表
          myChart.setOption({
            tooltip : {
              trigger: 'item',
            },
            series : [
                {
                    name: '全国热度占比',
                    type: 'pie',
                    radius : '48%',
                    center: ['50%', '50%'],
                    data:[
                        {value:this.stats_data.huo, name:'店铺活跃 \n热度'},
                        {value:this.stats_data.fensi, name:'新增粉丝 \n热度'},
                        {value:this.stats_data.add, name:'新增店铺 \n热度'}
                    ],
                    
                    color:['#6151fe', '#069ce5','#74eb3f'],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ]
          });
      }
    },
    components: { leftnav, alldata },
}
</script>
<style>

</style>



