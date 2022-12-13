import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import storeVuex from './storeVuex';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    storeVuex,
    render: (h) => h(App),
}).$mount('#app');

