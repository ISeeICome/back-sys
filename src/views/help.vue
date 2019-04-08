<template>
    <div class="addStuInfo">
      <table>
        <thead>
          <tr><td colspan="2">校友帮扶</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">帮扶人：</label></td>
            <td><el-input v-model="stuID" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">简介：</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入帮扶人简介"
                v-model="recruitIntention">
              </el-input>
            </td>
          </tr>
          <tr>
            <td><label for="">事迹</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入招聘意向"
                v-model="recruitIntention">
              </el-input>
            </td>
          </tr>
          <tr>
            <!-- <el-row> -->
            <td colspan="2">
              <el-button type="success">提交</el-button>
            </td>
            <!-- </el-row> -->
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import Vslider from '@/components/Vslider.vue'
export default {
  name: 'home',
  components: {
    Vheader,
    Vslider
  }
}
</script>

<style lang="scss" scoped>
  .addStuInfo{
        width:800px;
        margin: 0 auto;
        padding:10px 0 0 15px;
        margin-left:180px;
        position:relative;
        margin:0 auto;
        table{
          width:90%;
          position:absolute;
          left:50%;
          transform: translate(-50%,0);
          border:1px solid #000;
        }
        thead{
          td{
            text-align:center;
            line-height:70px;
          }
        }
        tbody{
          td:nth-child(2n){
            padding-left:80px;
          }
          td:nth-child(2n+1){
            padding-left:50px;
            width:100px;
            input{
              display: block;
            }
          }
        }
        .el-button--success{
          float:right;
          margin-right:60px;
          margin-top:20px;
        }
  }
</style>
