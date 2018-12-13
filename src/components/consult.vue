<template>
  <div class="main">
    <div class="bigdata_bg pos_r">
      <div class="bigdata">
        <div class="index_content">

          <!-- lcr_left -->
          <div class="lcr_left">
            <div class="lcr_left_con">
              <div class="logo img100">
                <img src="../../static/img/logo.png" />
              </div>
              <div class="opacity_box_con lcr_left_nav_box">
                          <span class="opacity_box_top_b1"></span>
                          <span class="opacity_box_top_b2"></span>
                          <span class="opacity_box_top_b3"></span>
                          <span class="opacity_box_bottom_b1"></span>
                          <span class="opacity_box_bottom_b2"></span>
                          <span class="opacity_box_bottom_b3"></span>
                <div class="opacity_box_bg_box">
                
                <div class="lcr_left_nav">
                  <ul>
                    <li class="on">店铺经营指数</li>
                    <li>品牌分布</li>
                    <li>品牌联盟</li>
                    <li>技术统计</li>
                    <li>大事记</li>
                    <li>关于我们</li>
                  </ul>
                </div>
                </div>

              </div>
            </div>
          </div>

          <!-- lcr_center -->
          <div class="lcr_center">
            <div class="con_title">
               总热度（℃）<img src="../../static/img/hot_ico.png" alt="hot_ico">
            </div>
            <div class="con_data_box">
              <!-- <span class="span_bg_box fl">901000</span> -->
              <span class="fl span_bg_boxbig">
              <span class="span_bg_boxb fl">9</span>
              <span class="span_bg_boxb fl">0</span>
              <span class="span_bg_boxb fl">1</span>
              <span class="span_bg_boxb fl">9</span>
              <span class="span_bg_boxb fl">9</span>
              <span class="span_bg_boxb fl">8</span>
</span>
              <div class="fl">
                <p>店铺总数</p>
                <span>8899</span>
              </div>
              <div class="fl">
                <p>品牌总数</p>
                <span>1200</span>
              </div>
              <div class="fl">
                <p>增长率</p>
                <span class="add">+12%</span>
              </div>
              <div class="clear"></div>
            </div>

            <div class="con_select">
              <el-select v-model="value" placeholder="近一个月">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="全国">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="排行榜">
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
              </el-select>

            </div>

            <div class="consult_graph_box">
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
                      <div class="consult_graph_shop_hot">+2 ℃</div>
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

          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div class="consult_profile_box">
            <div class="ranking_title"><i></i>咨询摘要</div>
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
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              热度上涨<span class="fr ranking_degree">8个品牌</span>
                            </div>
                          </div>
                        </div>
                        
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              热度下降<span class="fr ranking_degree">8个品牌</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              最大涨幅<span class="fr ranking_degree">8%</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              最大跌幅<span class="fr ranking_degree">4%</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              最大增量<span class="fr ranking_degree">4℃</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_box">
                            <div class="hot_data">
                              最大跌量<span class="fr ranking_degree">4℃</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
              </div>

              <div class="consult_profile_box">
              <div class="ranking_title"><i></i>同区品牌</div>
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
                        <li>
                          <div class="rank">
                            <div class="fl hot_on">1</div>
                            <div class="fl hot_box">
                              <div class="hot_data">
                                品牌A<span class="fr ranking_degree">8%</span>
                                <span class="fr">87632 ℃</span>
                              </div>
                            </div>
                          </div>
                          
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_on">1</div>
                            <div class="fl hot_box">
                              <div class="hot_data">
                                品牌A<span class="fr ranking_degree">8%</span>
                                <span class="fr">87632 ℃</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_on">1</div>
                            <div class="fl hot_box">
                              <div class="hot_data">
                                品牌A<span class="fr ranking_degree">8%</span>
                                <span class="fr">87632 ℃</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="rank">
                            <div class="fl hot_on">1</div>
                            <div class="fl hot_box">
                              <div class="hot_data">
                                品牌A<span class="fr ranking_degree">8%</span>
                                <span class="fr">87632 ℃</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
              <apppager v-on:pageon="pageurl" v-bind:current="page" :allpage="allpage"></apppager>
            
            
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
  import apppager from '@/components/pagetion.vue'

  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        allpage: '',
        page:'1',
      }
    },
    mounted: function() {

    },
    
    methods: {

    }
  }

</script>
<style>

</style>



