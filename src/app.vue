<template>
<div id="container">
    <tab-header :lists="lists" :index.sync="indexValue"></tab-header>
    <tab-body :index="indexValue" :goods="goods"></tab-body>
</div>
</template>
<style>
    #container{
        width:600px;
        min-height:300px;
        background-color:#68eb68;
        position:relative;
    }
    ul{
        list-style: none;
        padding:0;
        margin:0;
    }
</style>
<script>
    import tabHeader from "./components/header.vue";
    import tabBody from "./components/body.vue";
    export default {
        props:["lists","goods"],
        data:function(){
            return {
                indexValue:0
            }
        },
        components:{
            "tabHeader":tabHeader,
            "tabBody":tabBody
        }
    }
</script>