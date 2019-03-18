<template>
  <div class="recruit">
    <table>
      <thead>
        <tr>
          <td colspan="2">校友招聘</td>
        </tr>
      </thead>
      <tr>
        <td>招聘人</td>
        <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
      </tr>
      <tr>
        <td>职位要求</td>
        <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
      </tr>
      <tr>
        <td>企业信息</td>
        <td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
      </tr>
      <tr>
        <td>面向专业</td>
        <td>
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
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
