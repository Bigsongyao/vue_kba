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
          </div>

          <!-- lcr_right -->
          <div class="lcr_right">
            <div class="ranking_list">
              <div class="ranking_title"><i></i>全国店铺热度排行</div>
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
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_tu"></div>
                            <div class="hot_data">北京店铺 <span class="fr ranking_degree">+2.9%</span><span class="fr">87632 ℃</span></div>
                          </div>
                        </div>
                        
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_tu"></div>
                            <div class="hot_data">上海店铺 <span class="fr ranking_degree">+2.9%</span><span class="fr">87632 ℃</span></div>
                          </div>
                        </div>
                        
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_tu"></div>
                            <div class="hot_data">
                              广州店铺 
                              <span class="fr ranking_degree">+2.9%</span>
                              <span class="fr">87632 ℃</span></div>
                          </div>
                        </div>
                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div class="ranking_list">
              <div class="ranking_title"><i></i>全国品牌热度排行</div>
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
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_tu"></div>
                            <div class="hot_data">北京店铺 <span class="fr ranking_degree">+2.9%</span><span class="fr">87632 ℃</span></div>
                          </div>
                        </div>
                        
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_tu"></div>
                            <div class="hot_data">上海店铺 <span class="fr ranking_degree">+2.9%</span><span class="fr">87632 ℃</span></div>
                          </div>
                        </div>
                        
                      </li>
                      <li>
                        <div class="rank">
                          <div class="fl hot_on">1</div>
                          <div class="fl hot_box">
                            <div class="hot_tu"></div>
                            <div class="hot_data">
                              广州店铺 
                              <span class="fr ranking_degree">+2.9%</span>
                              <span class="fr">87632 ℃</span></div>
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
        value: ''
      }
    }
  }

</script>
<style>

</style>



