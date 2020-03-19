<template>
    <div class="home">
        <mhead></mhead>
        <div class="main">
            <a-row :gutter="30">
                <a-col :span="6">
                    <div class="left_1">
                        <div class="title">
                            <span class="point"></span>
                            <span class="word">基础信息</span>
                        </div>
                        <div class="left_1_main">
                            <table>
                                <tr>
                                    <td>所在地区：</td>
                                    <td v-if="jcxx.companyAddress">{{jcxx.companyAddress}}</td>
                                </tr>
                                <tr>
                                    <td>基地/企业：</td>
                                    <td v-if="jcxx.companyName">{{jcxx.companyName}}</td>
                                    <!-- <td>五华茶叶种植基地五华茶叶种植基地</td> -->
                                </tr>
                                <tr>
                                    <td>地理位置：</td>
                                    <td v-if="jcxx.area">{{jcxx.area}}</td>
                                </tr>
                                <tr>
                                    <td>主要品种：</td>
                                    <td v-if="jcxx.platCrop">{{jcxx.platCrop}}</td>
                                </tr>
                                <tr>
                                    <td>管理面积(亩)：</td>
                                    <td v-if="jcxx.manageArea">{{jcxx.manageArea}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="left_2">
                        <div class="title">
                            <span class="point"></span>
                            <span class="word">环境监测</span>
                        </div>
                        <div class="left_2_main">
                            <a-tabs type="card" v-model="tabnum">
                                <a-tab-pane v-for="(v,k) in monitor" :key="k" :tab="v.equipment?v.equipment.baseName:'暂无'">
                                    <div style="height:325px;margin-top:-20px;background:#124440;padding:10px 20px;">
                                        <div style="height:100%;cursor: pointer;" @mouseout="out" @mouseover="over" @click="gotodata(v.equipment,k)">
                                            <a-row :gutter="16" style="height:20%;">
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsdqwd.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">大气温度</div>
                                                            <div class="tbdata">{{v.airTemperature}}℃</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsfs.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">风速</div>
                                                            <div class="tbdata">{{v.windSpeed}}m/s</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsgzd.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">光照度</div>
                                                            <div class="tbdata">{{v.illIntensity}}Lux</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                            </a-row>
                                            <a-row :gutter="16" style="height:20%;">
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsdqsd.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">大气湿度</div>
                                                            <div class="tbdata">{{v.airHumidity}}%</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsfx.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">风向</div>
                                                            <div class="tbdata">{{v.windDirection}}°</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zstrsd.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">土壤湿度</div>
                                                            <div class="tbdata">{{v.soilHumidity}}%</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                            </a-row>
                                            <a-row :gutter="16" style="height:20%;">
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsdqyl.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">大气压力</div>
                                                            <div class="tbdata">{{v.airPressure}}KPa</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsjrjyl.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">今日降雨量</div>
                                                            <div class="tbdata">{{v.rainfall}}mm</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zseyht.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">CO2浓度</div>
                                                            <div class="tbdata">{{v.co2Value}}ppm</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                            </a-row>
                                            <a-row :gutter="16" style="height:20%;">
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zstrddl.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">土壤电导率</div>
                                                            <div class="tbdata">{{v.soilEc}}uS/cm</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zstrwd.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">土壤温度</div>
                                                            <div class="tbdata">{{v.soilTemperature}}℃</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zsph.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">土壤PH</div>
                                                            <div class="tbdata">{{v.soilPh}}</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                            </a-row>
                                            <a-row :gutter="16" style="height:20%;">
                                                <a-col :span="8">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:20%;margin-top:5px;">
                                                            <img src="../assets/zspm2.5.png">
                                                        </div>
                                                        <div style="float:left;width:80%">
                                                            <div class="tbtitle">PM2.5</div>
                                                            <div class="tbdata">{{v.pm25Value}}ug/m3</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                                <a-col :span="16">
                                                    <div class="tubiao">
                                                        <div style="float:left;width:10%;margin-top:5px;">
                                                            <img src="../assets/zstime.png">
                                                        </div>
                                                        <div style="float:left;width:90%">
                                                            <div class="tbtitle">更新时间</div>
                                                            <div class="tbdata">{{v.monitorTime}}</div>
                                                        </div>
                                                    </div>
                                                </a-col>
                                            </a-row>
                                        </div>
                                    </div>
                                </a-tab-pane>
                            </a-tabs>
                        </div>
                    </div>
                </a-col>
                <a-col :span="12">
                    <div class="center_1">
                        <div id="mapmap">
                            <div class="menu">
                                <div @click="hezuo1">
                                    <!-- <span style="background:rgba(217,48,9,1);" class="ditupoint"></span> -->
                                    <img style="width:20px;height:25px;margin-right:5px;" src="../assets/hezuojd.png">
                                    <span class="dituword">种植基地</span>
                                </div>
                            </div>
                            <!-- <div class="ditubut" @click="all">查看全部</div> -->
                            <div class="base">
                                <div class="basenum">{{baseLength}}</div>
                                <div class="baseword">已管理基地</div>
                            </div>
                            <div class="area">
                                <div class="basenum">{{totalArea}}</div>
                                <div class="baseword">已管理面积</div>
                            </div>
                            <div v-if="tip" class="tip">{{tip}}</div>
                        </div>
                    </div>
                    <div class="center_2">
                        <div class="imgtop" v-if="jcxx.companyPicture&&jcxx.companyPicture.length<=2">
                            <div class="imgmove0">
                                <div style="height:220px;margin:auto;padding:15px 0;text-align:center;"><img v-for="(v,k) in jcxx.companyPicture" :key="k" style="height:190px;margin-right:20px" :src="getpicurl(v.pictureUrl)"></div>
                            </div>
                        </div>
                        <!-- <div class="imgtoptop" v-if="realwhid&&jcxx.companyPicture&&jcxx.companyPicture.length>2&&jcxx.companyPicture.length<=8">
                            <div class="imgtop" :style="realwhid">
                                <div class="imgmove" :style="realwhid">
                                    <div style="float:left;height:220px;padding:15px 0;overflow: hidden;"><img v-for="(v,k) in jcxx.companyPicture" :key="k" ref="allimg" :style="{ height:'190px',marginRight:'20px'}" :src="getpicurl(v.pictureUrl)"></div>
                                    <div style="float:left;height:220px;padding:15px 0;overflow: hidden;"><img v-for="(v,k) in jcxx.companyPicture" :key="k" :style="{ height:'190px',marginRight:'20px'}" :src="getpicurl(v.pictureUrl)"></div>
                                </div>
                            </div>
                        </div> -->
                        <div class="imgtop" v-if="jcxx.companyPicture&&jcxx.companyPicture.length>2&&jcxx.companyPicture.length<=5">
                            <div class="imgmove">
                                <div style="float:left;width:50%;height:220px;padding:15px 0;"><img v-for="(v,k) in jcxx.companyPicture" :key="k" :style="{ height:'190px',marginRight:'1%',width:(100-jcxx.companyPicture.length)/jcxx.companyPicture.length+'%'}" :src="getpicurl(v.pictureUrl)"></div>
                                <div style="float:left;width:50%;height:220px;padding:15px 0;"><img v-for="(v,k) in jcxx.companyPicture" :key="k" :style="{ height:'190px',marginRight:'1%',width:(100-jcxx.companyPicture.length)/jcxx.companyPicture.length+'%'}" :src="getpicurl(v.pictureUrl)"></div>
                            </div>
                        </div>
                        <div class="imgtop" v-if="jcxx.companyPicture&&jcxx.companyPicture.length>5&&jcxx.companyPicture.length<=8">
                            <div class="imgmove1">
                                <div style="float:left;width:50%;height:220px;padding:15px 0;"><img v-for="(v,k) in jcxx.companyPicture" :key="k" :style="{ height:'190px',marginRight:'1%',width:(100-jcxx.companyPicture.length)/jcxx.companyPicture.length+'%'}" :src="getpicurl(v.pictureUrl)"></div>
                                <div style="float:left;width:50%;height:220px;padding:15px 0;"><img v-for="(v,k) in jcxx.companyPicture" :key="k" :style="{ height:'190px',marginRight:'1%',width:(100-jcxx.companyPicture.length)/jcxx.companyPicture.length+'%'}" :src="getpicurl(v.pictureUrl)"></div>
                            </div>
                        </div>
                    </div>
                </a-col>
                <a-col :span="6">
                    <div class="right_1">
                        <div class="title">
                            <span class="point"></span>
                            <span class="word">预期目标</span>
                        </div>
                        <div class="right_1_main">
                            <div style="width:33.3%;height:50%;float:left;text-align:center;" v-for="(v,k) in expect" :key="k">
                                <img v-if="v.pictureInfo" style="width:50px;height:50px;" :src="getpicurl(v.pictureInfo.pictureUrl)">
                                <div style="text-align:center;color:#ffff00;font-size:13px;padding:5px 20px 0px 20px;">{{v.expect}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="right_2">
                        <div class="title">
                            <span class="point"></span>
                            <span class="word">基地视频</span>
                        </div>
                        <div class="sec">
                            <Cascader @on-change="selectAddress" style="width:60%;" :data="addresss"></Cascader>
                        </div>
                        <div class="vid">
                            <video id="myVideo" width="100%" height="100%" ref="myPlayer" controls :src="address"></video>
                        </div>
                    </div>
                </a-col>  
            </a-row>              
        </div>
        <Foot style="margin:0px;"/>
    </div>
</template>
<script>
import mhead  from '@/components/header/header1.vue'
import Foot from '@/components/layouts/GlobalFooter.vue'
import MapLoader from '@/utils/loadMap.js'
import {getCompanyExpect,getLastMonitor,getCompanyInfoById,getAllBase,getVideoList,getChannelList,getBaseIdVideo,getPanoramaUrl,getEquipmentByBaseId,getPlatform,getLogoPic} from '@/api/allapi'
import axios from 'axios'

export default {
    components:{
        mhead,  
        Foot
    },
    data(){
        return{
            map:null,
            polygonss:[],
            address:'',
            expect:[],
            monitor:[],
            jcxx:{},
            allbasearea:0,
            baseLength:0,
            baseinfo:[],
            allinfo:[],
            totalArea:0,
            markers:[],
            allpoint:[],
            allbase:[],
            infoWindow:null,
            videolist:[],
            channellist:[],
            addresss:[],
            curLock:false,
            info:[],
            kkk:'',
            baseidky:'',
            equipmentId1:'',
            par:[],
            allw:0,
            realwhid:{},
            jcxxx:false,
            tabnum:0,
            timeout:null,
            tip:'',
            //diqu:['五华县'],
            // diqu:['兴宁市','五华县','丰顺县','大埔县','平远县','蕉岭县','梅江区','梅县区']
        }
    },
    watch:{
    baseidky:function(){
      getEquipmentByBaseId({
        baseId:this.baseidky
      }).then(res => {
        if (res.success) {
          if (res.result.length) {
              this.equipmentId1 = res.result[0].id
          if(this.equipmentId1){
              window.sessionStorage.equipmentName = res.result[0].equipmentName;
            } 
            this.$router.push({
              path: '/test',
              query: {
                baseId: this.baseidky,
                equipmentId: this.equipmentId1,
                from:'home',
              }
            })
          }
        }
      })
    },
    // par:function(){
    //     //   console.log(this.par)
    //       this.allw=0;
    //       for(let i=0;i<this.par.length;i++){
    //           this.allw+=this.par[i]+22;
    //       }
    //       this.$nextTick(()=>{
    //           this.realwhid.width=this.allw*2+'px';
    //       })
    //     //   console.log(this.realwhid);
    //   },
    // jcxx:function(){
    //     this.jcxxx=true;
    // }  
  },
//   updated(){
//       if(this.$refs.allimg){
//       this.$nextTick(()=>{
//             this.par=[];
//             for(let i=0;i<this.$refs.allimg.length;i++){
//                 // console.log(this.$refs.allimg[i].width);
//                 this.par.push(this.$refs.allimg[i].width);
//             }
//             // console.log(this.par);
//         })
//         // this.jcxxx=false;
//       }
//   },
    created(){
        getCompanyExpect({companyId:1}).then(res=>{
            if(res.success){
                this.expect=res.result.filter((item,index)=>{
                if(index<6){
                    return item;
                }
                })
            }
        });
        getCompanyInfoById().then(res=>{
            if(res.success){
                this.jcxx=res.result;
            }
        });
        getVideoList().then(res=>{
            if(res.success){
                this.videolist=res.result;
                getChannelList().then(res=>{
                    if(res.success){
                        this.channellist=res.result;
                        this._getAddress();
                    }
                })       
            }
        })
        let params = 'appKey=a2d2fe985f9f4c6b80d6bb582b8f51d3&appSecret=cf1dff0a4ae63194ec20b3d4f74a709e'
        // let params ='appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
        axios.post('https://open.ys7.com/api/lapp/token/get', params, {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            if (res.data.code == 200) {
            let token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
            window.localStorage.setItem('token', token)
            }
        })
    },
    mounted(){
        getPlatform().then(res=>{
            if (res.success) {
                for(let i=0;i<res.result.list.length;i++){
                    if(res.result.list[i].type==1){
                        document.title=res.result.list[i].title
                        if(res.result.list[i].ico){
                            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                            link.type = 'image/x-icon';
                            link.rel = 'shortcut icon';
                            link.href = '/api/pictureInfo/show/'+res.result.list[i].ico.pictureUrl
                            document.getElementsByTagName('head')[0].appendChild(link);
                        }
                    }
                }
            }
        })
        getLastMonitor().then(res=>{
            if(res.success){
                this.monitor=res.result;
                this.timeout=setInterval(()=>{
                    this.tabnum++;
                    if(this.tabnum==this.monitor.length){
                        this.tabnum=0;
                    }
                },5000);
            }
        })
        let that=this;
        that.allbasearea=0;
        getAllBase().then(res=>{
            if(res.success){
                that.allinfo=res.result;
                that.creatmap();
            }
        })
        window.addEventListener('done1', function(){
        that.baseinfo=[];
        that.baseLength=0;

        for(let i=0;i<that.allinfo.length;i++){
          if(that.allinfo[i].baseType.value==2){
            that.totalArea += that.allinfo[i].acreage
            that.baseLength++;
            that.allbase.push(that.allinfo[i]);
            that.baseinfo.push(that.allinfo[i]);
            let lng=that.allinfo[i].longitude;
            let lat=that.allinfo[i].latitude;
         var jicon = new AMap.Icon({
              size: new AMap.Size(25, 30),    // 图标尺寸
              image: require('../assets/hezuojd1.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
            });
            var jicon1 = new AMap.Icon({
              size: new AMap.Size(35, 40),    // 图标尺寸
              image: require('../assets/hezuojd.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
            });
          let marker= new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            icon:jicon
          });
            that.markers.push(marker);
            that.allpoint.push(marker);
            that.map.add(marker);
            marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.allinfo[i].id),baseName:that.allinfo[i].baseName}})});
            marker.on("mousemove",function(e) {
              //marker.setAnimation("AMAP_ANIMATION_BOUNCE" );
              marker.setIcon(jicon1);
              that.tip=that.allinfo[i].baseName
            });
            marker.on("mouseout",function(e) {
              //marker.setAnimation("AMAP_ANIMATION_NONE" );
              marker.setIcon(jicon);
              that.tip=''
            });
          }
        }
        });
    },
    methods:{
        over(){
            if(this.timeout){
                clearInterval(this.timeout);
            }
        },
        out(){
            this.timeout=setInterval(()=>{
                    this.tabnum++;
                    if(this.tabnum==this.monitor.length){
                        this.tabnum=0;
                    }
                },5000);
        },
            gotodata(par,k){
                this.kkk=k;
                this.baseidky='';
                if(par){
                this.baseidky=par.baseId;
                }
            },
        _getAddress (token) {
        let params = 'appKey=a2d2fe985f9f4c6b80d6bb582b8f51d3&appSecret=cf1dff0a4ae63194ec20b3d4f74a709e'
        // let params ='appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
        let curToken = token ? token : window.localStorage.token
        axios.post('https://open.ys7.com/api/lapp/live/video/list', curToken, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
          if (res.data.code == 200) {
              console.log(res.data.data)
            if (res.data.data && res.data.data.length) {             
                for (let i = 0; i < res.data.data.length; i++) {
                  if(res.data.data[i].deviceName!='鲜言'){
                    this.addresss.push({
                      label: res.data.data[i].deviceName,
                      value: res.data.data[i].deviceSerial,
                      children: []
                    })
                    break;
                  }
                }
                for (let i = 0; i < res.data.data.length; i++) {
                  for (let j = 0; j < this.addresss.length; j++) {
                    if (this.addresss[j].label === res.data.data[i].deviceName) {
                        this.curLock = true
                        this.addresss[j].children.push({
                            label: '通道' + res.data.data[i].channelNo,
                            value: res.data.data[i].hdAddress,
                            name: res.data.data[i].deviceName
                        })
                    }
                  }
                  if (!this.curLock&&res.data.data[i].deviceName!='鲜言') {
                    this.addresss.push({
                      label: res.data.data[i].deviceName,
                      value: res.data.data[i].deviceSerial,
                      children: [{
                        label: '通道' + res.data.data[i].channelNo,
                        value: res.data.data[i].hdAddress,
                        }]
                    })
                  }
                  this.curLock = false
              }
            }
            
            let aa=[];
            aa=this.addresss.filter(item=>{
              let show=false;
              for(let i=0;i<this.videolist.length;i++){
                if(item.value==this.videolist[i].serialNumber){
                  show=true;
                  break;
                }
              }
              if(show){
                return item;
              }
            });
            this.addresss=[];
            this.addresss=aa;
            for(let i=0;i<this.addresss.length;i++){
              let newchild=[];
              for(let j=0;j<this.addresss[i].children.length;j++){
                for(let k=0;k<this.channellist.length;k++){
                  let par=this.addresss[i].children[j].label.split('通道')[1];
                  if(this.addresss[i].label==this.channellist[k].videoEquipment.videoName&&par==this.channellist[k].channelNo){
                    // this.addresss[i].children[j].label=this.addresss[i].children[j].label+'-'+this.channellist[k].channelName;
                    this.addresss[i].children[j].label=this.channellist[k].channelName;
                    newchild.push(this.addresss[i].children[j]);
                  }
                }
              }
              this.addresss[i].children=newchild;
            }
          } else if (res.data.code == 10002) {
          axios.post('https://open.ys7.com/api/lapp/token/get', params, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
          }).then(res => {
            if (res.data.code == 200) {
              token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
              window.localStorage.setItem('token', token)
              this._getAddress(token)
            }
          })
          } else if (res.data.code == 10001) {
              axios.post('https://open.ys7.com/api/lapp/token/get', params, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }).then(res => {
                if (res.data.code == 200) {
                token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
                window.localStorage.setItem('token', token)
                this._getAddress(token)
                }
              })
          }
          this.$nextTick(() => {
            myVideo.addEventListener('play', () => {
              this.player.on()
            })
          })
        })
      },
      infowindow(a,b){
        this.getinfo(b);
          this.infoWindow = new AMap.InfoWindow({
          content: this.info.join(""),
          });
            this.infoWindow.open(this.map,a);
        },
        getinfo(b){
        this.info = [];
        this.info.push("<div style=\"color:#fff;overflow:hidden;text-align:center\"><span>"+this.allbase[b].baseName+"</span></div>");

    },
      selectAddress(datas, selectedData) {
      this.all();
      if (datas.length != 0) {
          var no='';
          for(let i=0;i<this.channellist.length;i++){
              if(selectedData[0].value==this.channellist[i].videoEquipment.serialNumber&&selectedData[1].label==this.channellist[i].channelName){
                  no=this.channellist[i].channelNo;
              }
          }
        // let no=selectedData[1].label.split('-')[0].split('通道')[1];
      getBaseIdVideo({serialNumber:selectedData[0].value,channelNo:no}).then(res=>{
        if(res.success){
           for(let i=0;i<this.allbase.length;i++){
              if(this.allbase[i].id==res.result.baseId){
              this.infowindow(this.allpoint[i].getPosition(),i);
          }
        }
        this.address = datas[1]
        this.$nextTick(() => {
          this.player = new EZUIPlayer('myVideo');
        })
        }else{
          this.$message.warning(res.message);
        }
      })
      }
    },
        all(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      that.markers=[];
      for(let i=0;i<that.baseinfo.length;i++){
           let lng=that.baseinfo[i].longitude;
           let lat=that.baseinfo[i].latitude;
          var jicon = new AMap.Icon({
              size: new AMap.Size(25, 30),    // 图标尺寸
              image: require('../assets/hezuojd1.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
            });
            var jicon1 = new AMap.Icon({
              size: new AMap.Size(35, 40),    // 图标尺寸
              image: require('../assets/hezuojd.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
            });
          let marker= new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            icon:jicon
          });
    that.markers.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.baseinfo[i].id),baseName:that.baseinfo[i].baseName}})});
    marker.on("mousemove",function(e) {marker.setIcon(jicon1);that.tip=that.baseinfo[i].baseName});
      marker.on("mouseout",function(e) {marker.setIcon(jicon);that.tip=''});
         }

    },
            removepoint(){
     this.map.remove(this.markers);
    },
            hezuo1(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      that.markers=[];
      for(let i=0;i<that.baseinfo.length;i++){
        let lng=that.baseinfo[i].longitude;
        let lat=that.baseinfo[i].latitude;
           var jicon = new AMap.Icon({
              size: new AMap.Size(25, 30),    // 图标尺寸
              image: require('../assets/hezuojd1.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
            });
            var jicon1 = new AMap.Icon({
              size: new AMap.Size(35, 40),    // 图标尺寸
              image: require('../assets/hezuojd.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
            });
          let marker= new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            icon:jicon
          });
        that.markers.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.baseinfo[i].id),baseName:that.baseinfo[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(jicon1);that.tip=that.baseinfo[i].baseName});
      marker.on("mouseout",function(e) {marker.setIcon(jicon);that.tip=''});
      }
    },
        getpicurl(url){
            return '/api/pictureInfo/show/'+url
        },
        handleChange(){

        },
        handleProvinceChange(value) {
            this.cities = cityData[value];
            this.secondCity = cityData[value][0];
        },
        creatmap() {
            let that = this
            MapLoader().then(AMap => {
                let googleLayer = new AMap.TileLayer({
                    getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
                });//定义谷歌卫星切片图层
                    let roadNetLayer = new AMap.TileLayer.RoadNet({
                    opacity:0
                }); //定义一个路网图层
                that.map = new AMap.Map('mapmap', {
                    layers:[googleLayer,roadNetLayer],
                    zooms: [10,18],
                });
                AMap.plugin('AMap.DistrictSearch',function(){
                    var district=new AMap.DistrictSearch({
                        extensions:'all',
                        subdistrict:0
                    })
                    district.search('五华县',function(status,result){
                        let bounds = result.districtList[0].boundaries
                        var outer = [
                            new AMap.LngLat(-360,90,true),
                            new AMap.LngLat(-360,-90,true),
                            new AMap.LngLat(360,-90,true),
                            new AMap.LngLat(360,90,true),
                        ];
                        var pathArray = [
                            outer
                        ];
                        pathArray.push.apply(pathArray,bounds)
                        var polygon = new AMap.Polygon( {
                            path:pathArray,
                            strokeColor: '#000000',
                            strokeWeight: 1,
                            fillColor: '#021f23',
                            fillOpacity: 1
                        });
                        polygon.setPath(pathArray);
                        that.map.add(polygon)
                        var polygons=[];
                        if (bounds) {
                            for (var i = 0, l = bounds.length; i < l; i++) {
                                //生成行政区划polygon
                                let polygon1 = new AMap.Polygon({
                                    map: that.map,
                                    strokeWeight: 3,
                                    path: bounds[i],
                                    fillOpacity: 0,
                                    fillColor: '#CCF3FF',
                                    strokeColor: '#13B068'
                                })
                                polygons.push(polygon1)
                            }
                            // 地图自适应
                            that.map.setFitView(polygons)
                        }
                    })
                    that.map.on("complete", function(){
                        var myEvent = new CustomEvent('done1',{});
                        if(window.dispatchEvent) {
                            window.dispatchEvent(myEvent);
                        } else {
                            window.fireEvent(myEvent);
                        }
                    });

                })
            })
        },
    }
}
</script>
<style scoped>
#mapmap >>> .amap-info-content {
  background-color:rgba(35, 35, 35, 0.6);
  border-radius:10px 10px;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
  }
#mapmap >>> .amap-info-sharp{
  border-top: 8px solid rgba(35, 35, 35, 0.6);
}
#mapmap >>> .amap-info-outer {
  overflow-x: hidden
}
.ant-carousel >>> .slick-slide {
    text-align: center;
    height: 230px;
    line-height: 230px;
    overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
    color: #fff;
}
.center_1 >>> .amap-logo{
    display:none !important;
}
.center_1 >>> .amap-copyright{
    visibility: hidden !important;
}
.home{
    padding-bottom: 20px;
    min-width: 1600px;
    background-image: url("../../src/assets/background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;    
}
.seach{
    height:80px;
    margin-top:20px;
    text-align: center;
    line-height: 80px;
}
.seach .but{
    cursor: pointer;
    margin-left:20px;
    display: inline-block;
    width:68px;
    height:33px;
    background:rgba(19,176,104,1);
    border-radius:6px;
    text-align: center;
    line-height: 33px;
    font-size:16px;
    font-weight:400;
    letter-spacing:4px;
    color:rgba(255,255,255,1);
}
.main{
    padding:70px 20px 20px 20px;
}
.title{
    padding: 20px 15px;
}
.title span{
    display: inline-block;
    vertical-align: middle;
}
.title .point{
    width:5px;
    height:20px;
    background:rgba(19,176,104,1);
    border-radius:3px;
}
.title .word{
    padding: 0 10px; 
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:18px;
}
.title .eword{
    padding-left:10px; 
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(19,176,104,1);
    line-height:18px;
}
.left_1{
    height:340px;
    margin-bottom: 40px;
    background-image: url("../../src/assets/left_1_1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.left_1_main{
    margin: 0 10px 10px 10px;
    background: rgba(18,68,64,1);
    border-radius:0px 0px 10px 10px;
}
.left_1_main table{
    width:100%;
}
.left_1_main table tr td:first-child{
    text-align: right;
    min-width: 122px;
    font-size:18px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,203,21,1);
    line-height:52px;
}
.left_1_main table tr td:last-child{
    font-size:18px;
    font-family:Source Han Sans CN;
    color:rgba(255,255,255,1);
}
.left_2{
    height:440px;
    background-image: url("../../src/assets/left_1_2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%
}
.left_2_main >>> .ant-tabs-tab-next-icon{
    color:#fff !important;
}
.left_2_main >>> .ant-tabs-tab-prev-icon{
    color:#fff !important;
}
.left_2_main{
    padding:0 10px 10px 10px;
}
.left_2_main /deep/ .ant-tabs-tab{
    background-color:#13B068 !important;
    border: none !important;
    color:rgba(255,255,255,0.6) !important;
}
.left_2_main /deep/ .ant-tabs-tab-active{
    background-color:#124440 !important;
    color:rgba(255,255,255,1) !important;
}
.left_2_main /deep/ .ant-tabs-tab:hover{
    background-color:#124440 !important;
    color:rgba(255,255,255,1) !important;
}
.center_1{
    height:560px;
    margin-bottom: 30px;
}
#mapmap{
    width:100%;
    height:560px;
}
.center_2{
    padding: 5px;
    height:230px;
    background-image: url("../../src/assets/center_1_1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%
}
.right_1{
    height:390px;
    margin-bottom: 40px;
    background-image: url("../../src/assets/right_1_1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.right_1_main{
    height:310px;
    margin:0 20px 20px 20px;
    padding: 10px 20px;
    background:rgba(18,68,64,1);
    border-radius:0px 0px 10px 10px;
}
.right_1_main table{
    width:100%;
}
.right_1_main table tr td:first-child{
    text-align: left;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,203,21,1);
    line-height: 60px;
}
.right_1_main table tr td:last-child{
    text-align: right;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height: 60px;
}
.right_2{
    height:390px;
    background-image: url("../../src/assets/right_1_2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%
}
.right_2 .sec{
    padding: 0 20px;
}
.right_2 .vid{
    padding: 20px;
    height: 295px;
}
.menu{
    position: absolute;
    z-index: 99999;
    top:60px;
    left:10px;
}
.menu span{
    display: inline-block;
    vertical-align: middle;
}
.menu .ditupoint{
    width:20px;
    height:20px;
    border-radius:50%;
    margin-right:10px;
    cursor: pointer;
}
.menu .dituword{
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.ditubut{
    cursor: pointer;
    position: absolute;
    top:10px;
    left:10px;
    z-index: 9999;
    width:78px;
    height:40px;
    background:rgba(19,176,104,1);
    border-radius:6px;
    text-align: center;
    line-height: 40px;
    font-size:14px;
    letter-spacing: 2px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.base{
    position: absolute;
    z-index: 9999;
    bottom: 5%;
    right:25%;
    text-align: center;
}
.area{
    position: absolute;
    z-index: 9999;
    bottom: 5%;
    right:5%;
    text-align: center;
}
.basenum{
    font-size:38px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,203,21,1);
}
.baseword{
    font-size:22px !important;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.tubiao{
    width:100%;
    height:100%;
}
.tip{
    position: absolute;
    width: 54%;
    height: 30px;
    background-image: url("../../src/assets/tip.png") ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 9999;
    top: 5px;
    left: 23%;
    color: #fff;
    text-align: center;
    line-height: 30px;
}
.tbtitle{
    font-size:12px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(19,176,104,1);
    line-height:25px;
    margin-left:7px;
}
.tbdata{
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:25px;
    margin-left:7px;
}
.tubiao img{
    width:100%;
}
.imgtoptop{
    width: 100%;
    height:230px;
    overflow: hidden;
}
.imgtop{
    width: 100%;
    height:230px;
    overflow: hidden;
}
/* .imgtop{
    height:230px;
} */
.imgmove0{
    width:100%;
    height:220px;
}
/* .imgmove{
	height:220px;
	position:relative;
    animation-name:myfirst;
	animation-duration:25s;
	animation-timing-function:linear;
	animation-delay:3s;
	animation-iteration-count:infinite;
	animation-play-state:running;
	-webkit-animation-name:myfirst;
	-webkit-animation-duration:25s;
	-webkit-animation-timing-function:linear;
	-webkit-animation-delay:3s;
	-webkit-animation-iteration-count:infinite;
	-webkit-animation-play-state:running;
}
@keyframes myfirst
{
	0%   { right:0%;}
	100% { right:50%;}
}

@-webkit-keyframes myfirst
{
	0%   { right:0%;}
	100% { right:50%;}
} */
.imgmove{
    width:200%;
	height:220px;
	position:relative;
    animation-name:myfirst;
	animation-duration:20s;
	animation-timing-function:linear;
	animation-delay:3s;
	animation-iteration-count:infinite;
	animation-play-state:running;
	/* Safari and Chrome: */
	-webkit-animation-name:myfirst;
	-webkit-animation-duration:20s;
	-webkit-animation-timing-function:linear;
	-webkit-animation-delay:3s;
	-webkit-animation-iteration-count:infinite;
	-webkit-animation-play-state:running;
}
@keyframes myfirst
{
	0%   { right:0%;}
	100% { right:100%;}
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
	0%   { right:0%;}
	100% { right:100%;}
}
.imgmove1{
    width:400%;
	height:220px;
	position:relative;
    animation-name:myfirst1;
	animation-duration:20s;
	animation-timing-function:linear;
	animation-delay:3s;
	animation-iteration-count:infinite;
	animation-play-state:running;
	/* Safari and Chrome: */
	-webkit-animation-name:myfirst1;
	-webkit-animation-duration:20s;
	-webkit-animation-timing-function:linear;
	-webkit-animation-delay:3s;
	-webkit-animation-iteration-count:infinite;
	-webkit-animation-play-state:running;
}
@keyframes myfirst1
{
	0%   { right:0%;}
	100% { right:100%;}
}

@-webkit-keyframes myfirst1 /* Safari and Chrome */
{
	0%   { right:0%;}
	100% { right:100%;}
}
</style>