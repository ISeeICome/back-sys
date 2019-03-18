<template>
    <div class="slider">
        <el-collapse accordion>
            <el-collapse-item title="校友信息管理">
                <div class='itemWrap'><router-link to="/" class="item">学生信息列表</router-link></div>
                <div class='itemWrap'><router-link to="/home/AddStuInfo" class="item">添加学生信息</router-link></div>
                <div class='itemWrap'><router-link to="/home/showBiogenicDis" class="item">显示就业分布</router-link></div>
                <div class='itemWrap'><router-link to="/home/showeEploymentDis" class="item">显示生源分布</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="班级与专业管理">
                <div class='itemWrap'><router-link to="/" class="item">班级信息列表</router-link></div>
                <div class='itemWrap'><router-link to="/" class="item">专业信息列表</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="校友互助">
                <div class='itemWrap'><router-link to="/" class="item">校友招聘</router-link></div>
                <div class='itemWrap'><router-link to="/" class="item">校友帮扶</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="管理员管理">
                <div class='itemWrap'><router-link to="/" class="item">普通管理员</router-link></div>
                <div class='itemWrap'><router-link to="/" class="item">超级管理员</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="系统工具">
                <div class='itemWrap'><router-link to="/" class="item">学生信息列表</router-link></div>
                <div class='itemWrap'><router-link to="/" class="item">添加学生信息</router-link></div>
                <div class='itemWrap'><router-link to="/" class="item">显示就业分布</router-link></div>
                <div class='itemWrap'><router-link to="/" class="item">显示生源分布</router-link></div>
            </el-collapse-item>
        </el-collapse>
        <div class="admin">
            管理员：李伟梁
        </div>
    </div>
</template>
<script>

export default {
  name: 'slider'
}
</script>

<style lang="scss">
    .slider{
        .el-collapse{
            background-color:#293038;
            position:fixed;
            width:180px;
            top:80px;
            bottom:0;
            overflow: hidden;
            .el-collapse-item__header{
                background-color: #22282e;
                color:#fff;
                padding-left:30px;
            }
            .el-collapse-item__header:hover{
                background-color: #414d5c;
            }
            .el-collapse-item__content{
                padding-bottom:0;
            }
            .itemWrap{
                background-color:#293038;
            }
            .itemWrap:hover{
                background-color: #414d5c;
            }
            .item{
                color:#fff;
                display: block;
                width:100%;
                height:40px;
                line-height:40px;
                padding-left:20px;
            }
        }
        .admin{
            position:absolute;
            padding-left:20px;
            bottom:50px;
            color:#fff;
        }
    }
</style>
