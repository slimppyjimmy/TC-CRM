<template>
  <section>
    <!--    头部区-->
    <div class="header-nav">
      <ul class="grid-content bg-purple-dark item-content">
        <li class="found">快速创建</li>
        <li class="li-add">
          <div class="banner-top">
            <div class="banner-top-item ">
              <div>
                <img src="../../../static/images/customers.png" alt="录客户" title="录客户">
              </div>
              <div class="top-text">录客户</div>
            </div>
            <div class="banner-top-item">
              <div>
                <img src="../../../static/images/follow.png" alt="写跟进" title="写跟进">
              </div>
              <div class="top-text">写跟进</div>
            </div>
            <div class="banner-top-item">
              <div>
                <img src="../../../static/images/deal.png" alt="录订单" title="录订单">
              </div>
              <div class="top-text">录订单</div>
            </div>
            <!--              <div class="banner-top-item">-->
            <!--                <div>-->
            <!--                  <img src="../../../static/images/waittask.png" alt="建任务" title="建任务">-->
            <!--                </div>-->
            <!--                <div class="top-text">建任务</div>-->
            <!--              </div>-->
            <!--              <div class="banner-top-item">-->
            <!--                <div>-->
            <!--                  <img src="../../../static/images/worklog.png" alt="写日志" title="写日志">-->
            <!--                </div>-->
            <!--                <div class="top-text">写日志</div>-->
            <!--              </div>-->
          </div>
        </li>
      </ul>
    </div>

    <div class="buju-box">
      <!--表一div-->
      <div class="RYXbingtu">
        <div class="yejititle">
          <span>销售额</span>
          <!--          <div class="ri-date">-->
          <!--            <el-date-picker-->
          <!--              v-model="time1"-->
          <!--              type="date"-->
          <!--              placeholder="选择日期"-->
          <!--              style="width: 135px;"-->
          <!--              @change="changeTime">-->
          <!--            </el-date-picker>-->
          <!--          </div>-->
        </div>
        <div class="picOne">
          <div id="myEcharts" class="echarts"></div>
          <div>
            <h3 style="font-size: 24px"><span class="moneyFuhao">￥</span><span class="moneyColor">12345678</span></h3>
          </div>
        </div>

        <div class="picOne">
          <div id="weekEcharts" class="echarts"></div>
          <div>
            <h3 style="font-size: 24px"><span class="moneyFuhao">￥</span><span class="moneyColor">12345678</span></h3>
          </div>
        </div>


        <div class="picOne">
          <div id="monthEcharts" class="echarts"></div>
          <div>
            <h3 style="font-size: 24px"><span class="moneyFuhao">￥</span><span class="moneyColor">12345678</span></h3>
          </div>
        </div>
      </div>
      <!--表二div-->
      <div class="div30">
        <div class="yejititle">
          <span>大销售类</span>
        </div>
        <div class="echarts" id="typeEacharts" style="width: 600px;height: 400px;"></div>
      </div>
      <div class="div40">
        <h2 class="top10-title">畅销商品</h2>
        <table class="goods-Tabel">
          <thead>
          <tr style="color: rgba(39,39,39,0.75);">
            <th style="width: 30%;">商品名称</th>
            <th style="width: 30%;"></th>
            <th style="width: 40%;">销售数量</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in Hotgoods">
            <td>{{ item.name }}</td>
            <td></td>
            <td style="position: relative;">{{ item.count }}
              <span style="position: absolute;right: 30px;">
                <span class="hot">Hot</span>
                <span class="el-icon-top"></span>
              </span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="div40">
        <h2 class="top10-title">滞销商品</h2>
        <table class="goods-Tabel">
          <thead>
          <tr style="color: rgba(39,39,39,0.75);">
            <th style="width: 30%;">商品名称</th>
            <th style="width: 30%;"></th>
            <th style="width: 40%;">销售数量</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in unHotgoods">
            <td>{{ item.name }}</td>
            <td></td>
            <td style="position: relative;">{{ item.count }}
              <span style="position: absolute;right: 30px;">
                <span class="ccc">low</span>
                <span class="el-icon-bottom"></span>
              </span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </section>
</template>
<script>
  Date.prototype.getFutures = function (day) {
    let nowDate = this.getDate();
    this.setDate(nowDate + day);
    let newMonth = (this.getMonth() + 1) > 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
    let newDay = this.getDate() > 10 ? this.getDate() : ('0' + this.getDate());
    return this.getFullYear() + '-' + newMonth + '-' + newDay;
  };
  let myChart;
  let weekEcharts;
  let monthEcharts;
  let typeEacharts;
  import api from '../../api/home'

  export default {
    name: "Home",
    data() {
      return {
        totalMoney: '',
        Hotgoods:[

        ],
        unHotgoods:[
        ],
        Proportion:[]
      }
    },
    mounted() {

      /*今日的销售额Echarts*/
      myChart = this.$echarts.init(document.getElementById('myEcharts'));
      myChart.setOption({
        title: {
          left: 'center',
          text: '今日销售额',
          textAlign: 'left',
          textStyle: {
            fontSize: 16,
            color: ['#919191'],
          }
        },
        color: ['#D53A35'],
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: '日销售额',
            type: 'pie',
            radius: ['50%', '65%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '26',
                  // fontWeight: 'bold'
                  color: ['black'],
                }
              },
            },

            data: [
              {value: 10, name: '100%'}
            ]
          }
        ]
      })


      /*本周的销售额Echarts*/
      weekEcharts = this.$echarts.init(document.getElementById('weekEcharts'));
      weekEcharts.setOption({
        title: {
          left: 'center',
          text: '本周销售额',
          textAlign: 'left',
          textStyle: {
            fontSize: 16,
            color: ['#919191'],
          }
        },
        color: ['#41CAC0'],
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: '周销售额',
            type: 'pie',
            radius: ['50%', '65%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '26',
                  // fontWeight: 'bold'
                  color: ['black'],
                }
              },
            },

            data: [
              {value: 10, name: '100%'}
            ]
          }
        ]
      });



      /*本月的销售额*/
      /*本周的销售额Echarts*/
      monthEcharts = this.$echarts.init(document.getElementById('monthEcharts'));
      monthEcharts.setOption({
        title: {
          left: 'center',
          text: '本月销售额',
          textAlign: 'left',
          textStyle: {
            color: ['#919191'],
            fontSize: 16,
          }
        },
        color: ['#4D88E9'],
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: '月销售额',
            type: 'pie',
            radius: ['50%', '65%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '26',
                  // fontWeight: 'bold'
                  color: ['black'],
                }
              },
            },

            data: [
              {value: 10, name: '100%'}
            ]
          }
        ]
      });


      /*各种种类的销售数量*/
      typeEacharts = this.$echarts.init(document.getElementById('typeEacharts'));
      typeEacharts.setOption({
        title: {},
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          left: 'center',
          bottom: 0,
          textStyle: {
            fontSize: 16
          },

          // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
          {
            name: '各类商品销售量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '45%'],
            data: [],
            label: {
              normal: {
                show: true,
                formatter: '{b}: {c}({d}%)',//自定义显示格式(b:name, c:value, d:百分比)
                textStyle: {
                  fontSize: 14
                }

              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                // shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });


    },
    methods: {
      changeTime() {
        // this.$echarts.dispose(myChart)  摧毁表的方法
      }
    },
    created() {
      // api.getAlldata().then(res=>{
      //   // console.log(res)
      // });

      /*热销商品请求*/
      api.getHotShop().then(res=>{
        this.Hotgoods = res
      });

      /*滞销商品请求*/
      api.getLowShop().then(res=>{
        this.unHotgoods = res
      });
      /*各分类商品的占比*/
      api.getTypeCount().then(res=>{

        typeEacharts.setOption({
          series: [
            {
              data: res

            }
          ]
        })
      });

     //
      /*今日的日期*/
      console.log(new Date().getFutures(0))

      /*今7天的日期*/
     // new Date().getFuture(0);
     //  new Date().getFuture(-6);

    },


  }

</script>
<style scoped lang="less">
  .buju-box {
    padding: 20px;

    > div {
      position: relative;
      padding: 10px 10px 0 10px;
      /*float: left;*/
      /*height: 400px;*/
      /*width: 45%;*/
      background-color: white;
      border-radius: 10px;
    }

    .yejititle {
      text-align: center;

      > span {
        color: #252525;
        font-weight: 600;
        font-size: 26px;
        -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 bottom, from(pink), to(rgba(0, 0, 255, 0.6)));
      }
    }

    .ri-date {
      color: rgba(0, 250, 154, 0.62);
      position: absolute;
      top: 10px;
      right: 30px;
    }

  }

  /*成交金额*/

  .picOne {
    padding: 40px 0;
    text-align: center;
    width: 30%;
    margin-left: 2.5%;
    display: inline-block;

    .echarts {
      display: inline-block;
      height: 300px;
      width: 300px;
      /*border: 1px solid red;*/
    }
  }

  .moneyColor {
    color: #EE5E48;
    font-size: 20px;
  }

  .moneyFuhao {
    color: #EE5E48;
    font-size: 16px;

  }

  /*各种销售种类占比*/
  .div30 {
    /*background-color: white;*/
    margin-top: 20px;
    text-align: center;

    #typeEacharts {
      display: inline-block;
    }
  }

  /*销售排行表*/
  .div40 {
    display: inline-block;
    width: 40%;
    /*height: 400px;*/
    margin: 20px 4% 0 4.5%;
    text-align: center;
    padding-bottom: 30px!important;
    .top10-title {
      -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 bottom, from(pink), to(rgba(0, 0, 255, 0.6)));
    }

    .goods-Tabel {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      margin-top: 15px;
      border-collapse: collapse;
      .hot{
        display: inline-block;
        background-color: rgba(225, 37, 27, 0.72);
        color: white;
        padding: 3px;
        border-radius: 3px;
        margin-left: 5px;
      }
      .ccc{
        display: inline-block;
        background-color: rgba(0, 142, 190, 0.45);
        color: #fff;
        padding: 3px;
        border-radius: 3px;
        margin-left: 5px;
      }
      .el-icon-top{
        color: red;
        font-weight: 600;
        font-size: 16px;
      }
      .el-icon-bottom{
        color: #ccc;
        font-weight: 600;
        font-size: 16px;
      }
      th {
        font-size: 18px;
      }

      td {
        border-bottom: 1px solid rgba(204, 204, 204, 0.55);
        padding: 10px 0;
        color: rgba(87, 87, 87, 0.84);
        font-weight: 600;
      }
    }
  }


  section {
    background-color: #EEF1F5;
  }

  /*头部区*/
  .item-content {
    min-height: 55px;
    background-color: white;
    border-radius: 5px;
  }

  .item-content > li {
    float: left;
  }

  .found {
    background-color: #1E9FFF;
    color: #ffffff;
    text-align: center;
    padding: 0 25px;
    height: 55px;
    line-height: 55px;
  }

  .li-add {
    width: 89%;
    padding: 4px 8px;
  }

  .banner-top {
    width: 100%;
  }

  .banner-top-item {
    padding: 0 20px;
    float: left;
    cursor: pointer;
    text-align: center;
    color: rgb(51, 51, 51);
    box-sizing: border-box;
  }

  .banner-top-item:hover {
    background-color: #EEF1F5;
    border-radius: 5px;
  }

  .banner-top-item > div > img {
    margin-top: 2px;
    width: 26px;
    height: 26px;
    border: none;
  }

  .top-text {
    text-align: center;
    color: #999;
  }

  .header-nav {
    padding: 20px;
  }

  .grid-content {
    background-color: #fff;
    border-radius: 5px;
  }
</style>
