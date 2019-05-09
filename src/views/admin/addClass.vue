<template>
    <div class="addClass">
      <table>
        <thead>
          <tr><td colspan="2">新建班级信息</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">班级编号：</label></td>
            <td><el-input v-model="classNum" placeholder="请输入班级编号"></el-input></td>
          </tr>
          <tr>
          <tr>
            <td><label for="">年级：</label></td>
            <td><el-input v-model="grade" placeholder="请输入年级"></el-input></td>
          </tr>
          <tr>
            <td><label for="">入学时间：</label></td>
            <td><el-input v-model="studyTime" placeholder="请输入年级"></el-input></td>
          </tr>
          <tr>
            <td><label for="">班级类型：</label></td>
            <td>
               <el-select v-model="eduType" placeholder="请选择" class="selectEduType">
                <el-option
                  v-for="(item, index) in typeOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td><label for="">学制：</label></td>
            <td><el-input v-model="eduSys" placeholder="请输入学制年数" class= "selectEduSys"></el-input></td>
          </tr>
          <tr>
            <td><label for="">班级名称</label></td>
            <td><el-input v-model="className" placeholder="请输入班级名称"></el-input></td>
          </tr>
          <tr>
            <td>
              <el-button type="primary" @click="goBack" id="backBtn">返回</el-button>
            </td>
            <td>
              <el-button type="success" id="subBtn" @click="addClass">提交</el-button>
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
  data () {
    return {
      grade: '',
      className: '',
      classNum: '',
      studyTime: '',
      eduType: '',
      eduSys: '',
      typeOptions: [
        {
          label: '统招',
          value: '统招'
        },
        {
          label: '夜校',
          value: '夜校'
        }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    addClass () {
      if (this.grade === '' || this.className === '' || this.classNum === '') {
        alert('请将信息输入完整')
        return
      }
      this.$axios.post('http://127.0.0.1:3000/addClass', {
        params: {
          grade: this.grade,
          className: this.className,
          classNum: this.classNum,
          studyTime: this.studyTime,
          eduType: this.eduType,
          eduSys: this.eduSys
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          alert('添加成功')
          this.goBack()
        } else {
          console.log(result)
          alert('添加失败:' + result.msg)
        }
      })
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
  .addClass{
        width:800px;
        margin: 0 auto;
        padding:10px 0 0 15px;
        margin-left:180px;
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
        .selectEduType{
          width:100%;
        }
        .selectEduSys{
          width:100%;
        }
  }
</style>
