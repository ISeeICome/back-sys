<template>
  <div class="recruit">
    <table>
      <thead>
        <tr>
          <td colspan="2">校友帮扶</td>
        </tr>
      </thead>
      <tr>
        <td>帮扶人</td>
        <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
      </tr>
      <tr>
        <td>原因</td>
        <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
      </tr>
      <tr>
        <td>希望获取帮助</td>
        <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
      </tr>
      <tr>
        <td colspan="2">
          <el-button type="success">提交</el-button>
          <el-button type="warning">清空</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'recruit'
}
</script>

<style lang="scss" scoped>
  .recruit{
    padding:10px 0 0 15px;
    margin-left:180px;
    position:relative;
    table{
      width:800px;
      position:absolute;
      left:50%;
      transform:translate(-50%,0);
    }
    thead{
      text-align:center;
    }
  }

</style>
