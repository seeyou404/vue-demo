<template>
    <div class="list" v-for="good in goods" :class="{show:$index==index}">
        <ul>
            <li v-for="goodDetail in good"> 
                <h3>{{goodDetail.name}}</h3>
                <h3>{{goodDetail.price}}</h3>
                <h3>{{goodDetail.introduce}}</h3>
            </li>
        </ul>
    </div>
</template>
<style>
    .list.show{
        opacity: 1;
        transform: translateX(0);
        opacity: 1;
    }
    .list{
        opacity:0;
        width:600px;
        min-height:264px;
        transition:all .5s linear;
        position: absolute;
        top:0;
        left:0;
        background-color:#31ff00;
        opacity: 0;
        overflow: hidden;
    }
    .list ul{
        overflow:hidden;
    }
    .list ul li{
        width:200px;
        height:264px;
        border-right:solid 1px #047104;
        box-sizing: border-box;
        float:left;
        text-align:center;
        font-family: "微软雅黑";
        border-bottom:solid 1px #047104;
    }
    .list ul li:nth-of-type(3){
        border-right:none;
    }
</style>
<script>
    export default{
        props:["goods","index"]
    }
</script>