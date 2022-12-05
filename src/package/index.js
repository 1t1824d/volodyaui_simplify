// 引入封装好的组件
import MyButton from "../package/my-button/index.vue";
import MyClock from "../package/my-clock/index.vue";
import MyCustomchart from "../package/my-customchart/index.vue";

// 将来如果有其它组件,都可以写到这个数组里
const coms = [MyButton, MyClock, MyCustomchart];

// 批量组件注册
const install = function (Vue) {
    coms.forEach((com) => {
        Vue.component(com.name, com);
    });
};


// 注意这里的判断，很重要
if(typeof windwo !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
  }
  
export default install; // 这个方法以后再使用的时候可以被use调用
