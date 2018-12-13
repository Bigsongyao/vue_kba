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
              <div v-if="!is_phone" class="con_select">
                  <el-select v-model="time" @change="time_get()" placeholder="全部">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="box_title">大事记</div>
              <div class="box_title_right">
              
              </div>
              
              <div v-if="is_phone" class="con_select">
                  <el-select v-model="time" @change="time_get()" placeholder="全部">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
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
        options: [
        {
          value: '',
          label: '全部'
        },{
          value: '1',
          label: '今天'
        },{
          value: '7',
          label: '近一周'
        }, {
          value: '30',
          label: '近一个月'
        }],
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        is_phone: false,
        article_list:'',
        value1:'',
        value2:'',
        time:'',
        RealmUrl:domain.realmurl,

      }
    },

    mounted: function() {
      this.detectmob();
      this.get_big_news();

    },
    methods: {
      time_get() {
        let Data = {
          'time': this.time
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



