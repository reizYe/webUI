<template>
   <el-container class="bc-continer">
   		<el-header class="bc-Breadcrumb">
   			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/index' }"><i class="iconfont icon-homepage_fill"></i>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>{{currentName}}</el-breadcrumb-item>
			</el-breadcrumb>	
   		</el-header>
   		<el-main>
   			<el-container class="bc-menu-layout">
   				<el-aside class="bc-tree">
   					<el-card class="box-card" header="菜单树">
   						<el-input
						  placeholder="输入菜单名称"
						  v-model="filterText">
						</el-input>
	   					<el-tree
						  class="filter-tree"
						  :data="treeData"
						  :props="defaultProps"
						  :expand-on-click-node="expandOnClickNode"
						  highlight-current
						  :filter-node-method="filterNode"
						  node-key="menuId"
						  :default-expanded-keys="['root']"
						  ref="treeel">
						</el-tree>
   					</el-card>
   				</el-aside>
   				<el-main>
   					<el-card class="box-card" header="菜单列表">
				   		<el-form :inline="true"  class="demo-form-inline bc-form" label-position="right" label-width="80px">
						  	<el-form-item class="bc-form-row bc-toolbar">
						    	<el-button type="primary" @click="onAdd" icon="el-icon-circle-plus-outline">新增</el-button>
						    	<el-button type="primary" @click="onEdit" icon="el-icon-edit-outline">修改</el-button>
						    	<el-button type="primary" @click="onDel"><i class="iconfont icon-empty"></i>删除</el-button>
							</el-form-item>
						</el-form>
   					</el-card>
   				</el-main>
   			</el-container>
   		</el-main>
   </el-container>
</template>
<script>
export default{
  data () {
    return {
      currentName: this.$route.meta.pageName,
      treeData: [],
      expandOnClickNode: false,
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'menuName'
      }
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.menuName.indexOf(value) !== -1
    },
    onAdd () {},
    onEdit () {},
    onDel () {}
  },
  mounted () {
    let [params, that] = [{}, this]
    this.$store.dispatch('getMenuItem', params).then((data) => {
      let root = [{'menuName': '顶级菜单', 'menuId': 'root', children: [], expand: true}]
      Array.prototype.push.apply(root[0].children, data)
      that.treeData = root
    })
  },
  watch: {
    filterText (val) {
      this.$refs.treeel.filter(val)
    }
  }
}
</script>
<style lang="scss">
	.filter-tree{
	    margin-top: 20px;
    }
	.bc-menu-layout{
		height:100%;
		overflow: hidden;
		.bc-tree{
			height:100%;
			overflow: hidden;
		}
		.el-main{
			padding:0 5px;
		}
		.box-card{
			height:calc(100% - 2px);
			overflow: hidden;
			.el-card__body{
				height:calc(100% - 75px);
			}
		}
		.el-tree.filter-tree{
			height:calc(100% - 60px);
			overflow: auto;
		}
	}
</style>