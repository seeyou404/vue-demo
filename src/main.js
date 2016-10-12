import Vue from "vue";
import $ from "jquery";
import App from "./app.vue";

var vm = new Vue({
    el: "#app",
    data: {
        lists: [{
            name: "手机"
        }, {
            name: "电脑"
        }],
        goodsList: [[{
            name: "手机1",
            price: 1024,
            introduce: "这是异步好手机"
        }, {
            name: "手机1",
            price: 1024,
            introduce: "这是异步好手机"
        }, {
            name: "手机1",
            price: 1024,
            introduce: "这是异步好手机"
        }], [{
            name: "电脑1",
            price: 1024,
            introduce: "这是异步好电脑"
        }, {
            name: "电脑1",
            price: 1024,
            introduce: "这是异步好电脑"
        }, {
            name: "电脑1",
            price: 1024,
            introduce: "这是异步好电脑"
        }, {
            name: "电脑1",
            price: 1024,
            introduce: "这是异步好电脑"
        }]]
    },
    components: {
        tab: App
    }
})