<template>
  <div>
    <div class="con_title">
       总热度（℃）<img src="../../static/img/hot_ico.png" alt="hot_ico">
    </div>
    <div class="con_data_box">
    <span class="fl span_bg_boxbig">
      <span class="span_bg_box fl" v-for="dat in shopdata.sum">{{dat}}</span>
    </span>
      <div class="fl">
        <p>店铺总数</p>
        <span>{{shopdata.store}}</span>
      </div>
      <div class="fl">
        <p>商户总数</p>
        <span>{{shopdata.merchant}}</span>
      </div>
      <div class="fl">
        <p>增长率</p>
        <span class="add">+{{shopdata.addlv}}</span>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>


<script>

  export default {
    data() {
      return {
        nav_on: '',
        nav_show: false,
        shopdata:'',
        RealmUrl:domain.realmurl,
        dates: '',

      }
    },
    mounted: function() {
      this.get_all_data();
    },
    methods: {
      get_all_data(){
        this.$http.post(this.RealmUrl+'&r=kbaindex.kba.common', {
        //this.$http.post('/apis/app/index.php?i=2&c=entry&m=sunny_storev1&do=mobile&r=kbaindex.kba.common', {
          emulateJSON: true
        }).then(function(response) {
          this.shopdata = response.data;
          var reg=/\d{1}/g;
          this.shopdata.sum = this.shopdata.sum.match(reg);
          
        }, function(response) {
          console.log('region Interface error')
        })
      }
    },
  }
</script>