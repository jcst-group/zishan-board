<template>
  <div class="footer">
    <div class="copyright" style="color:#fff">
      Copyright
      <a-icon type="copyright" style="color:#fff"/>
      {{platObj.copyright}}
    </div>
     <div class="links">
      <a href="http://www.beian.miit.gov.cn" style="color:#fff">{{platObj.icp}}</a>
   </div>
  </div>
</template>

<script>
  import {
    getPlatInfo
  } from '@/api/allapi'
  export default {
    name: "LayoutFooter",
    data() {
      return {
        platObj: {}
      }
    },
    created() {
      getPlatInfo({
        type: 1
      }).then(res => {
        this.platObj = res.result ? res.result : {}
      })
    },
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;

    .links {
      vertical-align:bottom;
      margin-top: 8px;
      span{
        color: rgba(0, 0, 0, .45);
      }
      i{
        margin:0 8px 0 8px;
        color: rgba(0, 0, 0, .45);
        position: relative;
        top:-1px;
      }
      a {
        color: rgba(0, 0, 0, .45);

        &:hover {
          color: rgba(0, 0, 0, .65);
        }

        &:not(:last-child) {
          margin-right: 0px;
        }
      }
    }
    .copyright {
      color: rgba(0, 0, 0, .45);
      font-size: 14px;
    }
  }
</style>
