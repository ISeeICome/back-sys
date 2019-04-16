<template>
    <div class="personInfo">
      <div class="statusBar">
            <label>个人信息管理</label>
        </div>
      <table>
        <thead>
          <tr><td colspan="2">个人信息</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">姓&ensp;&ensp;&ensp;&ensp;名：</label></td>
            <td><el-input v-model="uName" placeholder="请输入姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">年&ensp;&ensp;&ensp;&ensp;级</label></td>
            <td><el-input v-model="grade" placeholder="请输入年级"></el-input></td>
          </tr>
          <tr>
            <td><label for="">专&ensp;&ensp;&ensp;&ensp;业：</label></td>
            <td><el-input v-model="major" placeholder="请输入专业"></el-input></td>
          </tr>
          <tr>
            <td><label for="">班&ensp;&ensp;&ensp;&ensp;级：</label></td>
            <td><el-input v-model="className" placeholder="班级"></el-input></td>
          </tr>
          <tr>
            <td><label for="">联系电话：</label></td>
            <td><el-input v-model="tel" placeholder="请输入联系电话"></el-input></td>
          </tr>
          <tr>
            <td><label for="">工作单位：</label></td>
            <td><el-input v-model="company" placeholder="请输入工作单位"></el-input></td>
          </tr>
          <tr>
            <td><label for="">就业省市：</label></td>
            <td>
                <el-input v-model="workCity" placeholder="请输入就业城市"></el-input>
            </td>
          </tr>
           <tr>
            <td><label for="">生&ensp;源&ensp;地：</label></td>
            <td>
                <el-input v-model="fromCity" placeholder="请输入生源地"></el-input>
            </td>
          </tr>
          <tr>
            <td colspan="2" id="subBtnWrap">
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
      uName: '李斌',
      grade: '2016',
      major: '计算机科学与技术',
      className: '2班',
      tel: '1234567126',
      company: '北京思飞科技',
      workCity: '北京',
      fromCity: '上海'
    }
  }
}
</script>

<style lang="scss" scoped>
 .personInfo{
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
      text-align: center;
      width:600px;
      margin:50px auto 0;
      // border-collapse: collapse;
       border:1px solid #666;
      thead{
        line-height:40px;
        font-size: 22px;
      }
      tbody{
        tr{
          td:nth-child(1){
            text-align:left;
            padding-left:40px;
            width:100px;
          }
        }
      }
    }
    #subBtnWrap{
      text-align: center;
      padding:20px 0;
    }
}
</style>
