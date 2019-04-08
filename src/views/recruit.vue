<template>
    <div class="recruitInfo">
      <table>
        <thead>
          <tr><td colspan="2">校友招聘</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">招聘人：</label></td>
            <td><el-input v-model="uName" placeholder="请输入招聘人姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">招聘方信息：</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入招聘方信息"
                v-model="recruitInfo">
              </el-input>
            </td>
          </tr>
          <tr>
            <td><label for="">招聘意向：</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入招聘意向"
                v-model="recruitIntention">
              </el-input></td>
          </tr>
          <tr>
            <td><label for="">工作单位：</label></td>
            <td><el-input v-model="workAddress" placeholder="请输入工作地址"></el-input></td>
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
  },
  data () {
    return {
      uName: '',
      recruitInfo: '',
      recruitIntention: '',
      workAddress: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .recruitInfo{
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
            font-size: 14px;
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
