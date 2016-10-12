<template>
    <div id="listContainer">
        <goods-list :goods="goods" :index="index"></goods-list>
    </div>
</template>
<style>
    #listContainer{
        position:relative;
        width:600px;
    }
</style>

<script>
    import list from "./list.vue";
    export default{
        props:["index","goods"],
        components:{
            goodsList:list
        }
    }
</script>