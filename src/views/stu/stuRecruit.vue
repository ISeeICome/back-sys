<template>
    <div class="stuRecruit">
        <div class="statusBar">
            <label>招聘信息列表</label>
        </div>
        <div class="content">
            <ul>
                <li>
                    <h2>中美国际--李森</h2>
                    <div>
                        <label>招聘意向：</label>
                        <p>1. 3年以上开发经验，计算机相关专业大专及以上学历，良好的编程习惯；2. 精通前端基本技术，包括HTML /CSS /Javascript /jQuery /Bootstrap 等；
                            3. 熟练掌握至少一种常用前端框架，如React、AngularJs、Vue等；4. 有Reac native实际开发经验优先考虑；5. 具备较强解决问题的能力，有良好的沟通能力和团队精神。
                        </p>
    ·               </div>
                    <div><label>工作单位：</label>北京中美国际贸易公司</div>
                </li>
                 <li>
                    <h2>中美国际--李森</h2>
                    <div>
                        <label>招聘意向：</label>
                        <p>1. 3年以上开发经验，计算机相关专业大专及以上学历，良好的编程习惯；2. 精通前端基本技术，包括HTML /CSS /Javascript /jQuery /Bootstrap 等；
                            3. 熟练掌握至少一种常用前端框架，如React、AngularJs、Vue等；4. 有Reac native实际开发经验优先考虑；5. 具备较强解决问题的能力，有良好的沟通能力和团队精神。
                        </p>
    ·               </div>
                    <div><label>工作单位：</label>北京中美国际贸易公司</div>
                </li>
                <li>
                    <h2>中美国际--李森</h2>
                    <div>
                        <label>招聘意向：</label>
                        <p>1. 3年以上开发经验，计算机相关专业大专及以上学历，良好的编程习惯；2. 精通前端基本技术，包括HTML /CSS /Javascript /jQuery /Bootstrap 等；
                            3. 熟练掌握至少一种常用前端框架，如React、AngularJs、Vue等；4. 有Reac native实际开发经验优先考虑；5. 具备较强解决问题的能力，有良好的沟通能力和团队精神。
                        </p>
    ·               </div>
                    <div><label>工作单位：</label>北京中美国际贸易公司</div>
                </li>
            </ul>
             <ol>
                <li><el-button type="success" id="prevBtn">上一页</el-button></li>
                <li><el-button type="success" id="nextBtn">下一页</el-button></li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.stuRecruit{
        width:1250px;
        margin: 0 auto;
        padding:10px 0 0 15px;
        margin-left:180px;
        position:relative;
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
    ul{
        li{
            h2{
                font-weight: 600;
                font-size: 20px;
                margin-bottom:10px;
            }
            label{
                color:#000;
                font-weight:700;
            }
            height:140px;
            padding:10px 0 10px 20px;
            border-bottom:1px solid #333;
            text-align: justify;
        }
    }
    ol{
        float:right;
        li{
            float:left;
            margin:0 10px;
        }
    }
}
</style>
