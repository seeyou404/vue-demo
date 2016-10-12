<template>
    <ul id="header">
        <li v-for="list in lists" @click="clickFn($index)" :class="{active:$index==index}">{{list.name}}
    </li>
    </ul>
</template>
<style>
    #header{
        width:100%;
        height:35px;
        line-height:35px;
        list-style:none;
        overflow:hidden;
        margin:0;
        padding:0;
        border-bottom:solid 1px #08b236; 
    }
    #header li{
        padding:0 15px;
        width:100px;
        float:left;
        background-color:rgb(0, 255, 157);
        text-align: center;
        color:white;
        font-family: "微软雅黑";
        margin-right:1px;
        font-size:16px;
        cursor: pointer;
    }
    #header li:hover{
        background-color:rgba(0, 255, 157,0.6);
    }
    #header li.active{
        background-color:rgba(0, 255, 157,0.6);
    }
</style>
<script>
    export default{
        props:["lists","index"],
        data:function(){
            return {
                //index:""
            }
        },
        methods:{
            clickFn:function(index){
               this.index = index; 
            }
        }
    }
</script>