<template>
    <div class="releaseExcellentStu">
      <div class="statusBar">
          <label>发布杰出校友信息</label>
      </div>
      <table>
        <thead>
          <tr><td colspan="2">杰出校友</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">校友学号：</label></td>
            <td><el-input v-model="stuID" placeholder="请输入校友学号"></el-input></td>
          </tr>
          <tr>
            <td><label for="">校友姓名：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入校友姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">具体事迹</label></td>
            <td>
              <el-input
                type="textarea"
                :rows="10"
                placeholder="请输入校友具体事迹"
                v-model="content">
              </el-input>
            </td>
          </tr>
          <tr>
            <td>
               <el-button type="primary" @click="goBack" id="backBtn">返回</el-button>
            </td>
            <td>
                <el-button type="success" @click="updateExcellentStu">修改</el-button>
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
      stuName: '',
      stuID: '',
      content: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    updateExcellentStu () {
      this.$axios.post('http://127.0.0.1:3000/admin/updateExcellentStu', {
        params: {
          stuName: this.stuName,
          stuID: this.stuID,
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
    this.$axios.post('http://127.0.0.1:3000/admin/getSingleExcellentStu', {
      params: {
        ID: this.ID
      }
    }).then(res => {
      var result = res.data
      if (result.code === 1) {
        console.log(result)
        that.stuID = result.data[0].stuID
        that.stuName = result.data[0].stuName
        that.content = result.data[0].content
      } else {
        alert('查询失败', result.msg)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .releaseExcellentStu{
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
        table{
          margin-top: 30px;
          width:60%;
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
        #backBtn{
          float:left;
        }
        .el-button--success{
          float:right;
          margin-right:50px;
        }
  }
</style>
