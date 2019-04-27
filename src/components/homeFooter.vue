<template>
  <div class="footer">
    <div class="footer1">
        <div class="container">
            <router-link to="/"><img src="../../static/img/logo.png" alt=""></router-link>
            <div class="info">
                <p>单位地址：福建省宁德市东侨经济开发区学院路1号</p>
                <p>邮箱地址：123456XXXXXX@163.com</p>
                <p>联系电话：123456789251</p>
                <p>邮政编码：352100   闽ICP备10024257号</p>
            </div>
        </div>
    </div>
    <div class="footer2">
        <p class = "friendlyLink container">友情链接：<a href="http://www.ndnu.edu.cn/">宁德师范学院官网</a><a href="http://jwc.ndnu.edu.cn/">宁德师范学院教务处</a><a href="http://tieba.baidu.com/f?kw=%C4%FE%B5%C2%CA%A6%B7%B6%D1%A7%D4%BA&fr=ala0&tpl=5">宁德师范学院吧</a> </p>
    </div>
    <div class="footer3">
        <div class="container"><span>版权所有 Copyright@ 2016 宁德师范学院*****学院</span><span>隐私政策 使用条款</span></div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.footer{
    margin-top:30px;
    width:100%;
    min-width: 1000px;
    .footer1{
        padding-top:10px;
        height:100px;
        background: #2e2e2e;
        line-height:24px;
        color: #868585;
        font-size: 12px;
        img{
            float:left;
        }
        .info{
            float:right;
        }
    }
    footer{
        height:60px;
        line-height:60px;
        font-size: 12px;
    }
    .footer2{
        border-top:1px solid #555;
        background: #2e2e2e;
        line-height:50px;
        font-size: 12px;
        color: #666;
        a{
            color: #666;
            margin: 0 20px;
        }
        a:hover{
            color:#fff;
        }
    }
    .footer3{
        background: #232323;
        color: #868585;
        font-size: 12px;
        width: 100%;
        height: 50px;
        line-height:50px;
        span:nth-child(1){
            float:left;
        }
        span:nth-child(2){
            float:right;
        }
    }
    .friendlyLink{

    }
    .container{
        width:1200px;
        margin:0 auto;
    }
}
</style>
