<template>
<div>
  <!-- 面包屑导航区域 -->
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">用戶管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>用戶列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 卡片區域 -->
  <el-card>
    <!-- 1搜索區域 -->
    <el-input placeholder="请输入内容" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </el-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

</style>
