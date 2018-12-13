<template>
  <div class="main">
    <div class="bigdata_bg pos_r">
      <div class="bigdata">
        <div class="index_content">

          <!-- lcr_left -->
          <leftnav></leftnav>

          <!-- lcr_center -->
          <div class="lcr_center">
            <div class="tc box_title_box">
              <div v-if="!is_phone" class="con_select great_event_box">
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
                  @change="time_get()"
                  range-separator="-"
                  :default-value="timeDefaultShow"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions1">
                  </el-date-picker>
                  </div>
                </div>
              </div>
              <div class="box_title">大事记</div>
              <div class="box_title_right">
              </div>
              
              <div v-if="is_phone" class="con_select">
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
                  @change="time_get()"
                  range-separator="-"
                  :default-value="timeDefaultShow"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions1">
                  </el-date-picker>
                  </div>
                </div>
              </div>
            </div>

            <div class="great_event_box">
              <div class="great_event_list">
                <div class="great_event" v-for="articlelist in article_list">
                  <div class="great_event_title">
                    <div>
                    {{articlelist.article_title}}
                    </div>
                    <span class="no_phone great_event_time">
                     {{articlelist.article_date}}
                    </span>
                  </div>
                  <div class="clear"></div>
                  <div class="great_event_brief">
                    {{articlelist.resp_desc}}                        
                  </div>
                  <span class="phone great_event_time fr">
                      {{articlelist.article_date}}
                    </span>
                </div>
              </div>
            </div>
          </div>

          <!-- lcr_right -->

            
            
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
import leftnav from '@/components/left_nav.vue'

  export default {
    data() {
      return {
        nav_on: '',
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
        is_phone: false,
        article_list:'',
        value1:'',
        value2:'',
        show_time: '今日',
        RealmUrl:domain.realmurl,

      }
    },

    mounted: function() {
      this.detectmob();
      this.get_big_news();

    },
    methods: {
      time_get() {
        if(this.value1){
          this.show_time = this.value1[0]+' - '+this.value1[1];
        }
        let Data = {
          'start_time': this.value1[0],
          'end_time': this.value1[1]
        };
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.article', Data, {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.article', {
          emulateJSON: true
        }).then(function(response) {
          this.article_list = response.data.data;
        }, function(response) {
          console.log('region Interface error')
        })
      },
      get_big_news() { 
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.article', {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.article', {
          emulateJSON: true
        }).then(function(response) {
          this.article_list = response.data.data;
        }, function(response) {
          console.log('region Interface error')
        })
      },
      detectmob() { 
        if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) )
        { 
          this.is_phone = true
        }
      } 

      
    },
    components: { leftnav },
}
</script>
<style>

</style>



