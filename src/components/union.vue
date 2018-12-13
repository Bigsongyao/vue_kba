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
                <el-select v-model="oncity" @change="get_union" placeholder="全国">
                  <el-option
                    v-for="(item,key) in province"
                    :key="key"
                    :label="item.province"
                    :value="item.province">
                  </el-option>
                </el-select>
              </div>
              <div class="box_title">店商联盟</div>
              <div class="box_title_right">
              
                
              </div>
              <div v-if="is_phone" class="con_select">
                <el-select v-model="oncity" @change="get_union" placeholder="全国">
                  <el-option
                    v-for="(item,key) in province"
                    :key="key"
                    :label="item.province"
                    :value="item.province">
                  </el-option>
                </el-select>
              </div>
            </div>

            <div class="tc brand_union">
              <ul>
                <li v-for="brand in union_data.data">
                  <div class="brand_img_box">
                    <img :src="srcjgr+brand.logo">
                    <div class="icon-wrapper"></div>
                  </div>
                  <div class="tc">{{brand.name}}</div>
                </li>
                <li>
                  <div class="brand_img_box">
                    <img src="../../static/img/brand.png">
                    <div class="icon-wrapper"></div>
                  </div>
                  <div class="tc">阳光智慧品牌</div>
                </li>
                <li>
                  <div class="brand_img_box">
                    <img src="../../static/img/brand.png">
                    <div class="icon-wrapper"></div>
                  </div>
                  <div class="tc">阳光智慧品牌</div>
                </li>
                <li>
                  <div class="brand_img_box">
                    <img src="../../static/img/brand.png">
                    <div class="icon-wrapper"></div>
                  </div>
                  <div class="tc">阳光智慧品牌</div>
                </li>
                <li>
                  <div class="brand_img_box">
                    <img src="../../static/img/brand.png">
                    <div class="icon-wrapper"></div>
                  </div>
                  <div class="tc">阳光智慧品牌</div>
                </li>
              </ul>
            </div>
            <div class="clear"></div>
            
          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div class="consult_profile_box">
              
              <div class="ranking_list">
                <div class="ranking_title"><i></i>本月新加入</div>
                <div class="opacity_box_con" v-if="union_data.data_w">
                  <span class="opacity_box_top_b1"></span>
                  <span class="opacity_box_top_b2"></span>
                  <span class="opacity_box_top_b3"></span>
                  <span class="opacity_box_bottom_b1"></span>
                  <span class="opacity_box_bottom_b2"></span>
                  <span class="opacity_box_bottom_b3"></span>

                  <div class="opacity_box_bg_box">
                    <div class="ranking">
                      <div class="brand_union_list_box">
                      
                          <div class="brand_union_list" v-for="newbrand in union_data.data_w">
                            <div class="brand_union_img fl">
                            <div class="brand_img_box">
                              <img :src="srcjgr+newbrand.logo">
                              <div class="icon-wrapper"></div>
                            </div>
                            </div>
                            <div class="brand_union_name fl">{{newbrand.name}}</div>
                            <span class="fr ranking_degree">{{newbrand.addlv}}</span>
                            <div class="clear"></div>
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
    </div>
    
    
  </div>
</template>
<script>
import leftnav from '@/components/left_nav.vue'

  export default {
    data() {
      return {
        oncity:'',
        union_data:'',
        province:'',
        RealmUrl:domain.realmurl,
        srcjgr:'../attachment/',
        is_phone: false,

      }
    },
    mounted(){
      this.detectmob();
      this.get_union();
      this.get_province();
    },
    methods: {
      get_union() {
        if(this.oncity == "全国"){
          this.oncity = "";
        }
        let Data = {
          'province': this.oncity
        };
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.store', Data, {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.store', Data, {
          emulateJSON: true
        }).then(function(response) {
          this.union_data = response.data;
        
          
        }, function(response) {
          console.log('region Interface error')
        })
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



