import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import PrimeVue from 'primevue/config';
import App from './App.vue'
import ToastService from 'primevue/toastservice';
import Login from './views/Login/Login.vue'
import Dashboard from './views/admin/index.vue';
import AnalyticsPage from './views/admin/dashboard/components/AnalyticsPage.vue'
import AddBatch from './views/admin/dashboard/addBatch/addBatch.vue';
import BatchStudentDetails from './views/admin/studentDetails/batchStudentDetails/batchStudentDetails.vue';
import IndividualDetailsPage from './views/admin/studentDetails/detailsPage.vue';
// import AvailableUsers from './views/admin/adduser/home/AvailableUsers.vue';
import AddSingleUser from './views/admin/adduser/addsingleUser/addSingleUser.vue';


import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {   
            path: '/', 
            component: Login 
        },
        {   
            path : '/admin/home', 
            component: Dashboard
        },
        {
            path : '/admin/analytics/:id',
            component: AnalyticsPage
        },
        {
            path : '/admin/addBatch',
             component: AddBatch
        },{
            path : '/admin/batchStudentDetails',
            component: BatchStudentDetails
        },{
            path : '/admin/detailsPage',
            component : IndividualDetailsPage    
        },
        {
            path : '/admin/addSingleUser',
            component : AddSingleUser
        },
    ]
})

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');

