<template>
    <div class="stuInfo">
        <div class="statusBar">
            <label>学生信息列表</label>
        </div>
        <div class="searchBar">
            <label>年级</label><input type = "text"/>
            <label>专业</label><input type = "text"/>
            <label>班级</label><input type = "text"/>
            <label>姓名</label><input type = "text"/>
            <button>搜索</button>
        </div>
        <div class="stuInfoTable">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>学号</td>
                        <td>姓名</td>
                        <td>专业</td>
                        <td>毕业年份</td>
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
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
                        <td>
                            <el-button type="primary" class='update'>修改</el-button>
                            <el-button type="danger"  class='del'>删除</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>B2014102136</td>
                        <td>王强</td>
                        <td>计算机科学与技术</td>
                        <td>2018</td>
                        <td>阿里巴巴</td>
                        <td>江苏省</td>
                        <td>黑龙江</td>
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
  name: 'stuInfoMg'
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
            height:60px;
        }
        .stuInfoTable{
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
