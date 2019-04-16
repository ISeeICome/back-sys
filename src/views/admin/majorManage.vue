<template>
    <div class="majorInfo">
        <div class="statusBar">
            <label>专业信息列表</label>
        </div>
        <div class="majorInfoTable">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>专业ID</td>
                        <td>专业名称</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>
                            <el-button type="warning" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-button type="primary"  class='add' @click = "toAddMajor">添加</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'majorInfo',
  methods: {
    toAddMajor () {
      this.$router.push({path: '/admin/addMajor'})
    }
  }
}
</script>

<style lang="scss" scoped>
    .majorInfo{
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
            height:60px;
        }
        .majorInfoTable{
            padding:0 30px 0 0;
            width: 1300px;
            table{
                width: 100%;
                margin:20px 0 0 0;
                border-collapse: collapse;
                thead{
                    line-height:40px;
                    text-align:center;
                    background-color: #52baf6;
                    .setting{
                        width:200px;
                    }
                }
                tbody{
                    td{
                        text-align: center;
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
