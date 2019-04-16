<template>
    <div class="superAdmin">
        <div class="statusBar">
            <label>超级管理员信息列表</label>
        </div>
        <div class="adminInfoTable">
            <table>
                <thead>
                    <tr class="tableName"><td colspan="4">超级管理员信息表</td></tr>
                    <tr>
                        <td>序号</td>
                        <td>管理员</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                     <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                     <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                     <tr>
                        <td>1</td>
                        <td>王强</td>
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
  name: 'superAdmin'
}
</script>

<style lang="scss" scoped>
    .superAdmin{
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
        .adminInfoTable{
            margin-top: 20px;
            padding:0 30px 0 0;
            table{
                width:600px;
                border-collapse: collapse;
                margin:0 auto;
                text-align: center;
                thead{
                    text-align:center;
                    td{
                        padding:5px 0;
                    }
                    .tableName{
                        line-height:40px;
                        color:#fff;
                        background-color: #52baf6;
                        font-size: 22px;
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
                .setting{
                    width:170px;
                }
            }
        }
        .update{
            float:left;
        }
        .del{
            float:left;
        }
    }
</style>
