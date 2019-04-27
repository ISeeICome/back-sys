<template>
    <div class="addStuInfo">
      <table>
        <thead>
          <tr><td colspan="2">新建校友信息</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">用户名</label></td>
            <td><el-input v-model="userName" placeholder="请输入用户名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">姓名：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">年级</label></td>
            <td>
                <el-select v-model="grade" placeholder="请选择" class="selectGrade" @change="getClassList">
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
            <td><label for="">班级</label></td>
            <td>
               <el-select v-model="className" placeholder="请选择" class="selectClass">
                <el-option
                  v-for="(item, index) in classOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td><label for="">联系电话：</label></td>
            <td><el-input v-model="tel" placeholder="请输入联系电话"></el-input></td>
          </tr>
          <tr>
            <td><label for="">工作单位：</label></td>
            <td><el-input v-model="company" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">就业省市：</label></td>
            <td><el-input v-model="workCity" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">生源地：</label></td>
            <td><el-input v-model="fromCity" placeholder="请输入内容"></el-input></td>
          </tr>

          <tr>
            <td>
              <el-button type="primary" @click="goBack" id="backBtn">返回</el-button>
            </td>
            <td>
              <el-button type="success" id="subBtn" @click="addStu">提交</el-button>
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
    getClassList () {
      this.classOptions = []
      for (const key in this.classList) {
        if (this.classList[key].grade === this.grade.toString()) {
          console.log(111)
          var object = {value: this.classList[key].className, label: this.classList[key].className}
          this.classOptions.push(object)
        }
      }
      console.log(this.classOptions)
    },
    addStu () {
      if (this.userName === '' || this.stuName === '' || this.grade === '' || this.className === '') {
        alert('学号、姓名、年级、专业、班级为必填项，请输入完整')
        return
      }
      console.log(this.className)
      this.$axios.post('http://127.0.0.1:3000/addStu', {
        params: {
          userName: this.userName,
          stuName: this.stuName,
          stuPwd: '123456',
          grade: this.grade,
          majorName: this.majorName,
          className: this.className,
          tel: this.tel,
          company: this.company,
          workCity: this.workCity,
          fromCity: this.fromCity
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          alert('添加成功')
          this.goBack()
        } else {
          alert(result.msg)
        }
      })
    }
  },
  data () {
    return {
      stuID: '',
      stuName: '',
      userName: '',
      company: '',
      workCity: '',
      fromCity: '',
      tel: '',
      grade: '',
      className: '',
      classList: [],
      gradeOptions: [],
      classOptions: []
    }
  },
  mounted () {
    var that = this
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
  .addStuInfo{
        width:800px;
        margin: 0 auto;
        padding:10px 0 0 15px;
        margin-left:180px;
        position:relative;
        margin:0 auto;
        table{
          margin-top: 30px;
          padding-top:10px;
          width:90%;
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
        .selectClass, .selectGrade, .selectMajor{
          width:100%
        }
  }
</style>
