<template>
    <div class="excellentStu">
        <div class="statusBar">
            <label>杰出校友信息列表</label>
        </div>
        <div class="content">
            <ul>
                <li>
                    <h2>最美义工--李森</h2>
                    <p><label>主要事迹：</label>李森，广州青年志愿者协会启智服务总队队长、创始人，广州市启智社会工作服务中心总干事。多年来，他凝聚万千青年志愿者，以奉献精神播撒深情暖人心，积极开展大量助残志愿服务，李森服务的对象多是独居老人、智障者、脑瘫者、弱智人士和残障露宿者等等，都是社会上的最需要“阳光”和“温暖”的弱势群体，“老吾老以及人之老，幼吾幼以及人之幼”，“独乐乐，不如众乐乐”的理想社会境界在李森身上得到践行。</p>
                </li>
                 <li>
                    <h2>最美义工--李森</h2>
                    <p><label>主要事迹：</label>李森，广州青年志愿者协会启智服务总队队长、创始人，广州市启智社会工作服务中心总干事。多年来，他凝聚万千青年志愿者，以奉献精神播撒深情暖人心，积极开展大量助残志愿服务，李森服务的对象多是独居老人、智障者、脑瘫者、弱智人士和残障露宿者等等，都是社会上的最需要“阳光”和“温暖”的弱势群体，“老吾老以及人之老，幼吾幼以及人之幼”，“独乐乐，不如众乐乐”的理想社会境界在李森身上得到践行。</p>
                </li>
                 <li>
                    <h2>最美义工--李森</h2>
                    <p><label>主要事迹：</label>李森，广州青年志愿者协会启智服务总队队长、创始人，广州市启智社会工作服务中心总干事。多年来，他凝聚万千青年志愿者，以奉献精神播撒深情暖人心，积极开展大量助残志愿服务，李森服务的对象多是独居老人、智障者、脑瘫者、弱智人士和残障露宿者等等，都是社会上的最需要“阳光”和“温暖”的弱势群体，“老吾老以及人之老，幼吾幼以及人之幼”，“独乐乐，不如众乐乐”的理想社会境界在李森身上得到践行。</p>
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
.excellentStu{
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
                font-weight: 700;
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
