<template>
<div class="lcr_left">
  <div class="phone_nav_ico pos_f" @click="nav_click()">
    <img src="../../static/img/phone_nav_ico.png" />
  </div>
  <div :class="{phone_nav_bg: nav_show}" @click="nav_click()"></div>
            <div class="lcr_left_con">
              <div class="logo img100">
                <img src="../../static/img/logo.png" />
              </div>
              <div class="opacity_box_con lcr_left_nav_box" :class="{phone_nav: nav_show}">
                          <span class="opacity_box_top_b1"></span>
                          <span class="opacity_box_top_b2"></span>
                          <span class="opacity_box_top_b3"></span>
                          <span class="opacity_box_bottom_b1"></span>
                          <span class="opacity_box_bottom_b2"></span>
                          <span class="opacity_box_bottom_b3"></span>
                <div class="opacity_box_bg_box">
                
                <div class="lcr_left_nav">
                  <ul>
                    <li :class="{on: nav_on == 'index'}">
                      <a href="#/">店铺经营指数</a>
                    </li>
                    <li :class="{on: nav_on == 'kline'}">
                      <a href="#/kline">商家分布</a>
                    </li>
                    <li :class="{on: nav_on == 'union'}">
                      <a href="#/union">店商联盟</a>
                    </li>
                    <li :class="{on: nav_on == 'stats'}">
                      <a href="#/stats">技术统计</a>
                    </li>
                    <li :class="{on: nav_on == 'great_event'}">
                      <a href="#/great_event">大事记</a>
                    </li>
                    <li :class="{on: nav_on == 'about'}">
                      <a href="#/about">关于我们</a>
                      </li>
                  </ul>
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
        nav_on: '',
        nav_show: false,

      }
    },

    mounted: function() {
      this.nav_on = this.$route.name;
    },
    methods: {
      nav_click: function () {
        this.nav_show = !this.nav_show;
        console.log(this.nav_show);
      },
    },
}
</script>