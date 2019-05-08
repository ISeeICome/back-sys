<template>
    <div class="addClass">
      <table>
        <thead>
          <tr><td colspan="2">新建班级信息</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">班级编号</label></td>
            <td><el-input v-model="classNum" placeholder="请输入班级编号"></el-input></td>
          </tr>
          <tr>
            <td><label for="">年级：</label></td>
            <td>
                <el-select v-model="grade" placeholder="请选择" class="selectMajor">
                <el-option
                  v-for="(item, index) in gradeOptions"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td><label for="">班级名称</label></td>
            <td><el-input v-model="className" placeholder="请输入年级"></el-input></td>
          </tr>
          <tr>
            <td>
              <el-button type="primary" @click="goBack" id="backBtn">返回</el-button>
            </td>
            <td>
              <el-button type="success" id="subBtn" @click="updateClass">修改</el-button>
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
  name: 'AddStuIngo',
  components: {
    Vheader,
    adminVslider
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    updateClass () {
      this.$axios.post('http://127.0.0.1:3000/admin/updateClass', {
        params: {
          grade: this.grade,
          className: this.className,
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
  data () {
    return {
      grade: '',
      className: '',
      ID: '',
      gradeOptions: [],
      classList: '',
      classNum: ''
    }
  },
  mounted () {
    var that = this
    this.ID = this.$route.params.ID
    this.$axios.post('http://127.0.0.1:3000/admin/getSingleClass', {
      params: {
        ID: this.ID
      }
    }).then(res => {
      var result = res.data
      if (result.code === 1) {
        console.log(result)
        that.grade = result.data[0].grade
        that.className = result.data[0].className
        that.classNum = result.data[0].classNum
      } else {
        alert('查询失败', result.msg)
      }
    })
    this.$axios.post('http://127.0.0.1:3000/getClassList', {
      params: {
        page: 0
      }
    }).then(res => {
      var result = res.data
      console.log(result)
      if (result.code === 1) {
        that.classList = result.data
        that.classList.forEach((item, index) => {
          if (that.gradeOptions.indexOf(item.grade) < 0) {
            that.gradeOptions.push(item.grade)
          }
        })
        console.log(that.gradeOptions)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .addClass{
        width:800px;
        margin: 0 auto;
        padding:10px 0 0 15px;
        position:relative;
        margin:0 auto;
        table{
          margin-top: 30px;
          padding-top:10px;
          width:60%;
          position:absolute;
          left:50%;
          transform: translate(-50%,0);
          border:1px solid #000;
        }
        thead{
          td{
            text-align:center;
            line-height:40px;
            font-size: 24px;
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
         text-align: center;
        }
        #subBtn{
          float:right;
          margin-top:20px;
          margin-bottom:20px;
          margin-right:30px;
        }
        .selectMajor{
          width:100%;
        }
        .selectGrade{
          width:100%;
        }
  }
</style>
