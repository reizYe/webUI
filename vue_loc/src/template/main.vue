<template>
  <el-container style="height:100%;">
    <!-- header -->
    <el-header class="bc-header">
      <!-- logo -->
      <div class="hidden-sm-and-up menu-icon-expand" @click="isMobile=!isMobile"><i class="el-icon-menu"></i></div>
      <div class="logo-continer">
        <a>
          <h2>{{$t("platformInfo.name")}}</h2>
        </a>
      </div>
      <!-- 个人信息 -->
      <div class="user-basic">
        <ul>
          <li class="hidden-sm-and-down">
            <el-badge is-dot class="item">
              <div class="user-msg">
                <i class="el-icon-message"></i>
              </div>
            </el-badge>
          </li>
          <li>
            <el-popover
              ref="popover"
              placement="top-start"
              width="100"
              trigger="hover"
            >
              <ul class="user-op">
                <li>
                  <a><i class="iconfont  icon-people_fill"></i><span>帐号设置</span></a>
                </li>
                <li>
                  <a><i class="iconfont icon-logout"></i><span>退出</span></a>
                </li>
              </ul>
            </el-popover>
            <div class="user-info" v-popover:popover>
              <img class="user-photo" src="../assets/admin_photo.jpg">
              <span class="user-name hidden-sm-and-down">{{userName}}</span>
              <i class="el-icon-arrow-down hidden-sm-and-down"></i>
            </div>
          </li>
        </ul>
      </div>
    </el-header>
    <el-container class="app-main-container">
      <!-- 菜单 -->
      <div class="bc-menu-continer margin-sm-and-left" :class="{'bc-menu-continer-uncollapse':isCollapse,'show-sm-and-down':isMobile}">
        <el-radio-group class="bc-menu-title hidden-sm-and-down" v-model="isCollapse" :class="{'bc-menu-collapse':!isCollapse}">
          <span class="bc-nav-title" :class="{'bc-nav-title-show':!collapseNav&&navShow}"></span>
          <el-radio-button :label="!isCollapse">
            <i class="el-icon-menu"></i>
          </el-radio-button>
        </el-radio-group>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse='isCollapse'
          router
          class="bc-menu-main"
          :default-active="index"
          unique-opened>
          <menus v-for='model in menuData' :model='model' :key='model.menuId'></menus>
        </el-menu>
      </div>
      <!-- 主体信息 -->
      <router-view></router-view>
      <!-- 主体信息 -->
      <!-- </el-main> -->
    </el-container>
  </el-container>
</template>
<script>
import "../assets/iconFont/iconfont.css";
import "../style/bc.scss";
import menus from "../components/common/bcMenus";
export default {
  components: { menus },
  data() {
    return {
      userName: "demo",
      isCollapse: false,
      navShow: false,
      isMobile: false,
      menuData: this.$store.getters.menuItem
    };
  },
  computed: {
    index: function() {
      return this.$route.name;
    },
    collapseNav: function() {
      let vm = this;
      setTimeout(function() {
        vm.navShow = !vm.isCollapse;
      }, 100);
      return this.isCollapse;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../style/mixin";
.menu-icon-expand {
  font-size: 20px;
}
.bc-menu-title {
  padding: 10px 20px 10px 12px;
  height: 16px;
  display: block;
}
.bc-menu-main:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-op {
  li {
    padding: 5px 10px;
    a {
      cursor: pointer;
      display: block;
      span {
        margin-left: 5px;
      }
    }
  }
}
.bc-header {
  /*border-bottom: 1px solid #fff;*/
  .logo-continer {
    a {
      cursor: pointer;
      padding: 12px 0;
      display: block;
    }
    h2 {
      font-size: 24px;
    }
  }
  .user-basic {
    ul {
      display: inline-block;
      display: flex;
      li {
        margin: 0 25px;
      }
      li:last-child {
        margin-right: 0;
      }
    }
    .user-msg {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      font-size: 16px;
      cursor: pointer;
      @include fj(center);
    }
    .user-photo {
      width: 35px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .user-info {
      cursor: pointer;
      font-size: 14px;
    }
    .user-name {
      margin: 0 25px 0 10px;
    }
  }
}
</style>
