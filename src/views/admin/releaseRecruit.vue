<template>
    <div class="recruitInfo">
      <div class="statusBar">
          <label>发布招聘信息</label>
      </div>
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
            <td><label for="">招聘意向：</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="11"
                placeholder="请输入招聘意向"
                v-model="recruitIntention">
              </el-input></td>
          </tr>
          <tr>
            <td><label for="">工作单位：</label></td>
            <td><el-input v-model="workAddress" placeholder="请输入工作地址"></el-input></td>
          </tr>
          <tr>
            <td>
              <el-button type="primary">返回</el-button>
            </td>
            <td>
              <el-button type="success">提交</el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import adminVslider from '@/components/adminVslider.vue'
export default {
  name: 'home',
  components: {
    Vheader,
    adminVslider
  },
  data () {
    return {
      uName: '',
      recruitIntention: '',
      workAddress: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .recruitInfo{
        width:1300px;
        padding:10px 0 0 15px;
        margin-left:180px;
        position:relative;
        .statusBar{
            padding:10px 0 0 0;
            height:30px;
            width:100%;
            border-bottom:1px dashed #d9dfe4;
            label{
                border-left:2px solid #2a94de;
                padding-left:20px;
                font-size:16px;
            }
        }
        table{
          margin-top:30px;
          width:55%;
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
        #subBtn{
          float:right;
          margin-right:50px;
        }
  }
</style>
