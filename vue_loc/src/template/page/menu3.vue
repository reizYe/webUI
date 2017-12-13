<template>
   <el-container class="bc-continer">
   		<el-header class="bc-Breadcrumb">
   			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/index' }"><i class="iconfont icon-homepage_fill"></i>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>{{currentName}}</el-breadcrumb-item>
			</el-breadcrumb>	
   		</el-header>
   		<el-main>
   			<!-- 是否开启斑马纹  stripe -->
   			<!-- 表格是否需要边框  border -->
   			<!-- 表格固定表头 给一个固定的高度即可 -->
			<el-table
			  :data="tableData"
			  stripe 
			  border
			  height="500"
			  :row-class-name="tableRowClassName"
			  style="width: 100%">
			  <el-table-column
			    prop="date"
			    label="日期"
			    width="180">
			  </el-table-column>
			  <el-table-column
			    prop="name"
			    label="姓名"
			    width="180">
			  </el-table-column>
			  <el-table-column
			    prop="address"
			    label="地址">
			  </el-table-column>
			</el-table>
   		</el-main>
   </el-container>
</template>
<script>
  export default{
    data () {
      return {
        currentName: this.$route.meta.pageName,
        tableData: []
      }
    },
    created () {
      this.$store.dispatch('getTableData', {}).then((data) => {
        this.tableData = data.data
      })
    },
    methods: {
      tableRowClassName ({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        } else if (rowIndex % 2 === 0) {
          return 'error-row'
        }
        return ''
      }
    }
  }
</script>
<style scoped lang="scss">

</style>