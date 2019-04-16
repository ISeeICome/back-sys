<template>
    <div class="addStuInfo">
      <div class="statusBar">
          <label>发布校友互助信息</label>
      </div>
      <table>
        <thead>
          <tr><td colspan="2">校友帮扶</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">帮扶人学号：</label></td>
            <td><el-input v-model="stuID" placeholder="请输入帮扶人学号"></el-input></td>
          </tr>
          <tr>
            <td><label for="">帮扶人姓名：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入帮扶人姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">具体事迹：</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="10"
                placeholder="请输入帮扶人具体事迹"
                v-model="recruitIntention">
              </el-input>
            </td>
          </tr>
          <tr>
            <td>
              <el-button type="primary" id="backBtn">返回</el-button>
            </td>
            <td>
              <el-button type="success" id="subBtn">提交</el-button>
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
      stuName: '',
      stuID: '',
      helpInrtoduction: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .addStuInfo{
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
          margin-top: 30px;
          width:55%;
          position:absolute;
          left:50%;
          transform: translate(-50%,0);
          border:1px solid #000;
           label{
            font-size: 14px;
          }
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
        #subBtn{
          float:right;
          margin-right:50px;
        }
  }
</style>
