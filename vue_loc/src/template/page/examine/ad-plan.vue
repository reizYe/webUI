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
   			<!-- 表格 设置单选 highlight-current-row -->
			<el-table
			  ref="singleTable"
			  :data="tableData"
			  stripe 
			  border
			  max-height="500"
			  :row-class-name="tableRowClassName"
			  @current-change="handleCurrentChange"
			  @selection-change="handleSelectionChange"
			  highlight-current-row
			  @sort-change="sortChange"
			  style="width: 100%">
			  <el-table-column
			     type="selection"
			     width="55">
			  </el-table-column>
			  <el-table-column
			    prop="date"
			    label="日期"
			    sortable="custom"
			    width="180">
			  </el-table-column>
			  <el-table-column
			    prop="name"
			    label="姓名"
			    width="180">
			  </el-table-column>
			  <el-table-column
			    prop="address"
			    show-overflow-tooltip
			    label="地址">
			  </el-table-column>
			  <el-table-column
			      label="操作"
			      width="100">
			      <template slot-scope="scope">
			        <el-button @click="handleClick(scope.row, 'read')" type="text" size="small">查看</el-button>
			        <el-button @click="handleClick(scope.row, 'edit')" type="text" size="small">编辑</el-button>
			      </template>
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
        currentRow: null,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        multipleSelection: []
      }
    },
    mounted () {
      Array.prototype.push.apply(this.tableData, this.tableData)
      Array.prototype.push.apply(this.tableData, this.tableData)
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
      },
      handleClick (row, type) {
        console.log(row, type)
      },
      handleCurrentChange (val) {
        this.currentRow = val
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      sortChange () {
        console.log('arguments', arguments)  // 可以后台排序
      }
    }
  }
</script>
<style scoped lang="scss">

</style>