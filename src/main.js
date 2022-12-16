import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import InputFacade from 'vue-input-facade';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;
Vue.use(InputFacade, { name: 'mask' });
Vue.use(VueSweetalert2);

new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

