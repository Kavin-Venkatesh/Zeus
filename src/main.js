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
import PendingdetailsPage from './views/admin/newRequests/pendingDetailsPage.vue';
import StudentHome from './views/students/index.vue';
import AddOffer from './views/students/addoffer/addOffer.vue';
import OrganisersPage from './views/organisers/index.vue';
import OrganisersAnalytics from './views/organisers/dashboard/Analytics';
import OrganiserBatchDetails from './views/organisers/batchDetails/batchDetails.vue';
import OrganisersIndividualDetailsPage from './views/organisers/detailspage/detailsPage.vue';

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
            path : '/admin/batchStudentDetails/:id',
            component: BatchStudentDetails
        },{
            path : '/detailsPage/:id',
            component : IndividualDetailsPage    
        },
        {
            path : '/admin/addSingleUser',
            component : AddSingleUser
        },
        {
            path : '/pendingdetailsPage/:id',
            component : PendingdetailsPage
        },{
            path : '/student/home',
            component : StudentHome
        },{
            path : '/student/addoffer',
            component : AddOffer
        },{
            path : '/organisers/home',
            component : OrganisersPage
        },{
            path : '/organisers/analytics/:id',
            component : OrganisersAnalytics
        },{
            path : '/organisers/batchStudentDetails/:id',
            component : OrganiserBatchDetails
        },{
            path : '/organisers/detailsPage',
            component : OrganisersIndividualDetailsPage
        }
    ]
})

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');

