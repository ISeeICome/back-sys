<template>
    <div class="addAdmin">
        <div class="statusBar">
            <label>添加管理员</label>
        </div>
        <table>
            <thead>
                <tr class="tableName"><td colspan="2">添加管理员</td></tr>
            </thead>
            <tbody>
                <tr>
                    <td>管理员</td>
                    <td><el-input v-model="uName" placeholder="请输入管理员名称"></el-input></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><el-input v-model="uName" placeholder="请输入密码"></el-input></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <el-button type="primary" class='add'>添加</el-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'superAdmin'
}
</script>

<style lang="scss" scoped>
    .addAdmin{
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
        table{
            width:400px;
            text-align: center;
            border-collapse: collapse;
            border:1px solid #999;
            margin-left:500px;
            margin-top:30px;
        }
        .tableName{
            line-height:40px;
            color:#fff;
            background-color: #52baf6;
            font-size: 22px;
        }
        thead{
            td{
                padding:5px 0;
            }
        }
        tbody{
            td{
                padding:10px 10px;
            }
        }
        td{
            // border:1px solid #666;
        }
    }
</style>
