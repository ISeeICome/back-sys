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
                        <td>系别</td>
                        <td>学院</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>001</td>
                        <td>计算机科学与技术</td>
                        <td>计算机系</td>
                        <td>信息与机电工程学院</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'majorInfo'
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
            width:1100px;
            table{
                width:100%;
                border-collapse: collapse;
                thead{
                    text-align:center;
                    background-color: #52baf6;
                    .setting{
                        width:200px;
                    }
                }
                tbody{
                    td{
                        padding-left:10px;
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
    }
</style>
