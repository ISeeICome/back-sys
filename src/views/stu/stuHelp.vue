<template>
    <div class="stuHelp">
        <div class="statusBar">
            <label>帮扶信息列表</label>
        </div>
        <div class="content">
            <ul>
                <li>
                    <h2>白血病--李森</h2>
                    <p><label>主要事迹</label>：白血病晚期。</p>
                </li>
                <li>
                    <h2>白血病--李森</h2>
                    <p><label>主要事迹</label>：白血病晚期。</p>
                </li>
                <li>
                    <h2>白血病--李森</h2>
                    <p><label>主要事迹</label>：白血病晚期。</p>
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
.stuHelp{
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
