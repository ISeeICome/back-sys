<template>
    <div class="recruitInfo">
      <div class="statusBar">
          <label>修改招聘信息</label>
      </div>
      <table>
        <thead>
          <tr><td colspan="2">校友招聘</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">招聘人：</label></td>
            <td><el-input v-model="recruitName" placeholder="请输入招聘人姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">招聘意向：</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="11"
                placeholder="请输入招聘意向"
                v-model="content">
              </el-input></td>
          </tr>
          <tr>
            <td><label for="">工作单位：</label></td>
            <td><el-input v-model="workAddress" placeholder="请输入工作地址"></el-input></td>
          </tr>
          <tr>
            <td>
              <el-button type="primary" @click="goBack">返回</el-button>
            </td>
            <td>
              <el-button type="success" id="addBtn"  @click="updateRecruit">修改</el-button>
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
      ID: '',
      recruitName: '',
      content: '',
      workAddress: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    updateRecruit () {
      this.$axios.post('http://127.0.0.1:3000/admin/updateRecruit', {
        params: {
          recruitName: this.recruitName,
          workAddress: this.workAddress,
          content: this.content,
          ID: this.ID
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          alert('修改成功')
          this.goBack()
        } else {
          alert('修改失败', result.msg)
        }
      })
    }
  },
  mounted () {
    this.ID = this.$route.params.ID
    var that = this
    this.$axios.post('http://127.0.0.1:3000/admin/getSingleRecruit', {
      params: {
        ID: this.ID
      }
    }).then(res => {
      var result = res.data
      if (result.code === 1) {
        console.log(result)
        that.recruitName = result.data[0].recruitName
        that.workAddress = result.data[0].workAddress
        that.content = result.data[0].content
        that.date = result.data[0].date
      } else {
        alert('查询失败', result.msg)
      }
    })
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
        #addBtn{
          float:right;
          margin-right:50px;
        }
  }
</style>
