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
              <div class="con_select">
              </div>
              <div class="box_title">关于我们</div>
              <div class="box_title_right">
                
              </div>
            </div>
            <div class="img100">
              <img src="../../static/img/about.jpg">
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

      }
    },

    mounted: function() {
      this.nav_on = this.$route.name;
    },
    methods: {

      
    },
    components: { leftnav },
}
</script>
<style>

</style>



