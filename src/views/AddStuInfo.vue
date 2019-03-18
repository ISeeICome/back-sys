<template>
    <div class="addStuInfo">
      <table>
        <thead>
          <tr><td colspan="2">新建校友信息</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">学号：</label></td>
            <td><el-input v-model="stuID" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">姓名：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">专业：</label></td>
            <td>
              <el-col :span="12">
                <div class="sub-title">输入后匹配输入建议</div>
                <el-autocomplete
                  class="inline-input"
                  v-model="state2"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入内容"
                  :trigger-on-focus="false"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-col>
            </td>
          </tr>
          <tr>
            <td><label for="">毕业年月：</label></td>
            <td>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </td>
          </tr>
          <tr>
            <td><label for="">工作单位：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">就业省市：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">生源地：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入内容"></el-input></td>
          </tr>

          <tr>
            <el-row>
              <el-button type="success">提交</el-button>
            </el-row>
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
  }
}
</script>

<style lang="scss" scoped>
  .addStuInfo{
        padding:10px 0 0 15px;
        margin-left:180px;
        position:relative;
        table{
          width:90%;
          position:absolute;
          left:50%;
          transform: translate(-50%,0);
        }
        thead{
          td{
            text-align:center;
            line-height:30px;
          }
        }
        tbody{
          td:nth-child(2n){
            padding-left:80px;
          }
          td:nth-child(2n+1){
            padding-left:50px;
            input{
              display: block;
            }
          }
        }
  }
</style>
