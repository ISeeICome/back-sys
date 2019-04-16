<template>
    <div class="commonAdmin">
        <div class="statusBar">
            <label>普通管理员信息列表</label>
        </div>
        <div class="adminInfoTable">
            <table>
                <thead>
                    <tr class="tableName"><td colspan="4">普通管理员信息表</td></tr>
                    <tr>
                        <td>序号</td>
                        <td>管理员姓名</td>
                        <td>密码</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>123456</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                            <el-button type="danger"  class='setSuper'>设为超级管理员</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>123456</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                            <el-button type="danger"  class='setSuper'>设为超级管理员</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>123456</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                            <el-button type="danger"  class='setSuper'>设为超级管理员</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>王强</td>
                        <td>123456</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                            <el-button type="danger"  class='setSuper'>设为超级管理员</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ol>
                <li><el-button type="success" id="prevBtn">上一页</el-button></li>
                <li><el-button type="success" id="nextBtn">下一页</el-button></li>
            </ol>
            <el-button type="primary"  class='add' @click="toAddCommonAdmin">添加</el-button>
        </div>
        <!-- <div class="addAdmin">
            <table>
                <thead>
                    <tr class="tableName"><td colspan="4">添加管理员</td></tr>
                    <tr>
                        <td>管理员</td>
                        <td>密码</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><el-input v-model="uName" placeholder="请输入管理员名称"></el-input></td>
                        <td><el-input v-model="uName" placeholder="请输入密码"></el-input></td>
                        <td>
                            <el-button type="primary" class='add'>添加</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>
</template>

<script>
export default {
  name: 'superAdmin',
  methods: {
    toAddCommonAdmin () {
      this.$router.push({path: '/admin/addAdmin'})
    }
  }
}
</script>

<style lang="scss" scoped>
    .commonAdmin{
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
            padding:0 30px 0 0;
            margin-top: 20px;
            table{
                width:1000px;
                border-collapse: collapse;
                margin:0 auto;
                thead{
                    text-align:center;
                    td{
                        padding:5px 0;
                    }
                }
                .tableName{
                    line-height:40px;
                    color:#fff;
                    background-color: #52baf6;
                    font-size: 22px;
                }
                tbody{
                    td{
                        text-align: center;
                    }
                    td:nth-child(1){
                        width:80px;
                    }
                }
                td{
                    border:1px solid #000;
                }
                .setting{
                    width:340px;
                }
            }
        }
        .update{
            float:left;
            margin-left:10px;
        }
        .del{
            float:left;
            margin-left:10px;
        }
        .setSuper{
            float:left;
            margin-left:10px;
        }
        .addAdmin{
            width:600px;
            margin:80px auto 0;
            text-align: center;
            table{
                border-collapse: collapse;
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
                border:1px solid #666;
            }
        }
    }
    ol{
        position:absolute;
        left:300px;
        width:300px;
        height:40px;
        li{
            float:left;
            margin:0 10px;
        }
    }
    .add{
        position:absolute;
        right:300px;
        margin-top:10px;
    }
</style>
