<template>
   <el-container class="bc-continer">
   		<el-header class="bc-Breadcrumb">
   			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/index' }"><i class="iconfont icon-homepage_fill"></i>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>{{currentName}}</el-breadcrumb-item>
			</el-breadcrumb>
   		</el-header>
   		<el-main>
   			<!--  form查询方式一  -->
   			<!-- <el-card class="box-card" header="第一种方式">
		   		<el-form :inline="true" :model="formInline" ref="testFrom" class="demo-form-inline bc-form" label-position="right" label-width="80px">
				  <el-form-item class="bc-form-row">
				  	<el-form-item label="审批人" prop="user">
				    	<el-input v-model="formInline.user" placeholder="审批人"></el-input>
				    </el-form-item>
				    <el-form-item label="活动区域" prop="region">
				    	<el-select v-model="formInline.region" placeholder="活动区域">
				      		<el-option label="区域一" value="shanghai"></el-option>
				      		<el-option label="区域二" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  	<el-form-item>
				    	<el-button type="primary" @click="onSubmit">查询</el-button>
				    	<el-button type="default" @click="resetForm('testFrom')">重置</el-button>
				  	</el-form-item>
				  </el-form-item>
				</el-form>
			</el-card> -->

			<!--  form查询方式二  -->
   			<el-card class="box-card" header="第二种方式" style="margin-top:15px;">
		   		<el-form :inline="true" :model="formInline1" class="demo-form-inline bc-form" label-position="right" label-width="80px">
				  <el-form-item class="bc-form-row">
				  	<el-form-item label="审批人">
				    	<el-input  v-model="formInline1.user" placeholder="审批人"></el-input>
				    </el-form-item>
				    <el-form-item label="审批人">
				    	<el-input v-model="formInline1.user" placeholder="审批人"></el-input>
				    </el-form-item>
				    <el-form-item label="活动区域">
				    	<el-select v-model="formInline1.region" placeholder="活动区域">
				      		<el-option  label="区域一" value="shanghai"></el-option>
				      		<el-option label="区域二" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  </el-form-item>
				  <el-form-item class="bc-form-row">
				  	<el-form-item label="审批人">
				    	<el-input v-model="formInline1.user" placeholder="审批人"></el-input>
				    </el-form-item>
				    <el-form-item label="审批人">
				    	<el-input v-model="formInline1.user" placeholder="审批人"></el-input>
				    </el-form-item>
				    <el-form-item label="活动区域">
				    	<el-select v-model="formInline1.region" placeholder="活动区域">
				      		<el-option label="区域一" value="shanghai"></el-option>
				      		<el-option label="区域二" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  </el-form-item>
				  <el-form-item class="bc-form-row bc-toolbar">
				    	<el-button type="default" @click="onSubmit">查询</el-button>
				    	<el-button type="primary" @click="onSubmit">新增</el-button>
				    	<el-button type="primary" @click="onSubmit">修改</el-button>
				    	<el-button type="primary" @click="onSubmit">删除</el-button>
				  </el-form-item>
				</el-form>
			</el-card>

			<!--  form查询方式三  -->
   			<el-card class="box-card" header="第三种方式" style="margin-top:15px;">
		   		<el-form ref="form" :model="form" label-width="80px">
						 <input type="text">
				  <el-form-item label="活动名称">
				    <el-input v-model="form.name"></el-input>
				  </el-form-item>
				  <el-form-item label="活动区域">
				    <el-select v-model="form.region" placeholder="请选择活动区域">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="活动时间">
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				    </el-col>
				    <el-col class="line" :span="2"style="text-align: center;">-</el-col>
				    <el-col :span="11">
				      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				    </el-col>
				  </el-form-item>
				  <el-form-item label="即时配送">
				    <el-switch v-model="form.delivery"></el-switch>
				  </el-form-item>
				  <el-form-item label="活动性质">
				    <el-checkbox-group v-model="form.type">
				      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
				      <el-checkbox label="地推活动" name="type"></el-checkbox>
				      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
				      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				    </el-checkbox-group>
				  </el-form-item>
				  <el-form-item label="特殊资源">
				    <el-radio-group v-model="form.resource">
				      <el-radio label="线上品牌商赞助"></el-radio>
				      <el-radio label="线下场地免费"></el-radio>
				    </el-radio-group>
				  </el-form-item>
				  <el-form-item label="活动形式">
				    <el-input type="textarea"  v-model="form.desc"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <!-- <el-button type="primary" @click="onSubmit">立即创建</el-button> -->
				    <!-- <el-button  @click="onCancel" >取消</el-button> -->
				  </el-form-item>
				</el-form>
			</el-card>

   		</el-main>

   </el-container>
</template>
<script>
  export default{
    data () {
      return {
        currentName: this.$route.meta.pageName,
        formInline: {
          user: '',
          region: ''
        },
        formInline1: {
          user: '',
          region: ''
        },
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
				}
				
      }
    },
    methods: {
      onSubmit: function () {
				// this.aa=3;
				// console.log(this.aa);
				// console.log('点击了提交')
				
      },
      resetForm: function (formName) {
        this.$refs[formName].resetFields()
			},
			
    }
  }
</script>
<style scoped lang="scss">


</style>
