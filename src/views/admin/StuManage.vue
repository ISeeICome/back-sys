<template>
    <div class="stuInfo">
        <div class="statusBar">
            <label>学生信息列表</label>
        </div>
        <div class="searchBar">
            <label>年级:</label><el-input v-model="major" placeholder="请输入内容"></el-input>
            <label>专业:</label><el-input v-model="major" placeholder="请输入内容"></el-input>
            <label>班级:</label><el-input v-model="major" placeholder="请输入内容"></el-input>
            <label>姓名:</label><el-input v-model="major" placeholder="请输入内容"></el-input>
            <el-button type="success" id="search">搜索</el-button>
        </div>
        <div class="stuInfoTable">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>学号</td>
                        <td>姓名</td>
                        <td>年级</td>
                        <td>专业</td>
                        <td>班级</td>
                        <td>联系电话</td>
                        <td>工作单位</td>
                        <td>就业省市</td>
                        <td>生源地</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>2018</td>
                        <td>计算机科学与技术</td>
                        <td>1班</td>
                        <td>12345648642</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-button type="primary" class='add' ref = "add" @click="toAddStu">添加</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'stuInfoMg',
  methods: {
    toAddStu () {
      console.log(11)
      this.$router.push({path: '/admin/AddStuInfo'})
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
    .stuInfo{
        padding:10px 0 0 15px;
        margin-left:180px;
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
        .searchBar{
            width: 1300px;
            label{
                line-height:40px;
                width:140px;
                display: block;
            }
            display: flex;
            height:60px;
            .el-input{
                width:500px;
                margin-right:30px;
            }
            #search{
                height:40px;
                margin-left:10px;
            }
        }
        .stuInfoTable{
            width: 1300px;
            padding:0 30px 0 0;
            table{
                width:100%;
                border-collapse: collapse;
                thead{
                    text-align:center;
                    background-color: #52baf6;
                    line-height:40px;
                    .setting{
                        width:200px;
                    }
                }
                tbody{
                    td{
                        padding-left:0;
                        text-align: center;
                        // padding:0;
                    }
                }
                td{
                    border:1px solid #000;
                }
            }
        }
        .update{
            float:left;
            margin-left:20px;
        }
        .del{
            float:right;
            margin-right:20px;

        }
        .add{
            float:right;
            margin-right:20px;
            margin-top:20px;
        }
    }
</style>
