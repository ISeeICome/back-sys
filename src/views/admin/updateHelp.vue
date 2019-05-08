
<template>
    <div class="recruitInfo">
      <div class="statusBar">
          <label>修改帮扶信息</label>
      </div>
      <div class="contentWrap">
        <table>
            <thead>
                <tr><td colspan="2">校友帮扶</td></tr>
            </thead>
            <tbody>
                <tr>
                    <td><label for="">帮扶人：</label></td>
                    <td><el-input v-model="stuName" placeholder="请输入帮扶人姓名"></el-input></td>
                </tr>
                <tr>
                    <td><label for="">具体内容：</label></td>
                    <td>
                    <el-input
                        type="textarea"
                        :rows="11"
                        placeholder="请输入招聘意向"
                        v-model="content">
                    </el-input></td>
                </tr>
                <tr>
                  <td><el-button type="primary" @click="goBack">返回</el-button></td>
                  <td><el-button type="success" id="addBtn"  @click="updateHelp">修改</el-button></td>
                </tr>
            </tbody>
        </table>
      </div>
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
      stuName: '',
      content: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    updateHelp () {
      this.$axios.post('http://127.0.0.1:3000/admin/updateHelp', {
        params: {
          stuName: this.stuName,
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
    this.$axios.post('http://127.0.0.1:3000/admin/getSingleHelp', {
      params: {
        ID: this.ID
      }
    }).then(res => {
      var result = res.data
      if (result.code === 1) {
        console.log(result)
        that.stuName = result.data[0].stuName
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
        .contentWrap{
          width:55%;
          position:absolute;
          left:50%;
          transform: translate(-50%,0);
          border:1px solid #000;
        }
        table{
          width:100%;
          margin-top:30px;
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
        #backBtn{
          float:left;
        }
        .el-button--success{
          float:right;
          margin-right:50px;
        }
  }
</style>
