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
            <!--
              <el-select v-model="oncity" @change="get_distribution" placeholder="全国">
                  <el-option
                    v-for="(item,key) in province"
                    :key="key"
                    :label="item.province"
                    :value="item.province">
                  </el-option>
                </el-select>
              -->
            </div>
            <div id="myChart" :style="{width: '600px', height: '400px'}"></div>
          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div class="consult_profile_box">
              <div class="ranking_title"><i></i>店铺热度情况</div>
              <div class="opacity_box_con">
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
                              {{storedata.name}}<span class="fr ranking_degree">{{storedata.addlv}}</span>
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
        oncity:'',
        province:'',
        store_data:'',
        distribution:'',
        hhre:[
          {name: '广东省', value: ["1", "30", "30", "30"]},
          {name: '广西区', value: ["2", "30", "100", "30"]},
          
{name: "河北省", value: ["5", "3", "60", "0", "0"]},
{name: "山西省", value: ["6", "0", "30", "0", "0"]},
{name: "台湾省", value: ["7", "0", "30", "0", "0"]},
{name: "辽宁省", value: ["8", "0", "30", "0", "0"]},
{name: "吉林省", value: ["9", "0", "30", "0", "0"]},
{name: "黑龙江省", value: ["10", "0", "30", "0", "0"]},
{name: "江苏省", value: ["11", "0", "30", "0", "0"]}
          
          ],
        RealmUrl:domain.realmurl,
      }
    },
    mounted(){
      this.get_distribution();
      this.get_store();
      this.detectmob();
    },
    methods: {
      get_store() {
        //this.$http.post(this.RealmUrl+'&r=kbaindex.kba.store', {
        this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.store', {
          emulateJSON: true
        }).then(function(response) {
          this.store_data = response.data.data;
        }, function(response) {
          console.log('region Interface error')
        })
      },
      get_distribution() {
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.store_map', {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.store_map', {
          emulateJSON: true
        }).then(function(response) {
          this.distribution = response.data.data;
          this.drawLine();
        }, function(response) {
          console.log('region Interface error')
        })
      },
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            tooltip : {
              trigger: 'item',
              formatter: function(params) {
                return [
                    '地区: ' + params.data.name + '<hr size=1 style="margin: 3px 0">',
                    '累计商家占全国: ' + params.data.value[1] + '%<br/>',
                    '成交商家占全国: ' + params.data.value[3] + '%<br/>',
                    '累计粉丝占全国: ' + params.data.value[4] + '%<br/>'
                ].join('');
               
               },
               backgroundColor: 'rgba(2, 91, 113, 0.6)',

            },  
                        visualMap: {
                min: 0,
                max: 60,
                show:false,
                dimension:2, 
                inRange: {
                    color: ['#1d90a5','#24b2c5', '#00ffff']
                }
            },

            //配置属性
            series: [{
                name: '数据',  
                type: 'map',  
                mapType: 'china',   
                itemStyle:{ // 定义样式
                  normal:{       // 普通状态下的样式
                    areaColor:'#1d90a5',
                    borderColor: '#072c49',
                  },
                  emphasis: {         // 高亮状态下的样式
                    areaColor: '#ffde00'
                  }
                },
                roam: false,  
                label: {
                  normal: {
                    show: false  //省份名称  
                  },  
                  emphasis: {
                    show: false  
                  }  
                },  
                data:this.distribution  //数据
            }]  
          });
      },
      onresize() {
            let imgbox = document.getElementsByClassName("lcr_center")[0];
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            let Chart = document.getElementById('myChart');
            Chart.style.width = imgbox.clientWidth  - '5' +'px';
            Chart.style.height = '250px';
            myChart.resize();
      },
      detectmob() { 
        if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) )
        { 
          this.onresize();
        }
      } 
    },
    components: { leftnav, alldata },
}
</script>
<style>

</style>



