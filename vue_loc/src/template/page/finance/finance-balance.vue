<template>
   <el-container class="bc-continer">
   		<el-header class="bc-Breadcrumb">
   			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/index' }"><i class="iconfont icon-homepage_fill"></i>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>{{currentName}}</el-breadcrumb-item>
			</el-breadcrumb>	
   		</el-header>
   		<el-main>1</el-main>
   </el-container>
</template>
<script>
  export default{
    data () {
      return {
        currentName: this.$route.meta.pageName
      }
    }
  }
</script>