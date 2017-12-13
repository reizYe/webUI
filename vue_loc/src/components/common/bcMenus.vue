<template>
    <el-menu-item :index="model.path" v-if='!isFolder'>
    <i class="iconfont" :class="getIcon(model)"></i><span>{{model.menuName}}</span></el-menu-item>
    <el-submenu :index="model.path" v-else-if='isFolder'>
        <template slot="title"><i class="iconfont" :class="getIcon(model)"></i><span slot="title">{{model.menuName}}</span></template>
        <menus v-for='sel in model.children' :model='sel':key='sel.menuId'></menus>
    </el-submenu>
</template>
<script type="text/javascript">
export default {
  name: "menus",
  props: ["model"],
  components: {},
   
  data() {
    return {};
  },
  computed: {
    isFolder: function() {
     
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    getIcon(model) {
      return model.icon ? model.icon : "icon-createtask";
    }
  }
};
</script>