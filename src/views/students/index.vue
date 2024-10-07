<template>
    <div class="student_mainContainer">
        <div class="student_header">
            <div class="headerButton">
                <h1 class="student_subheading">
                Add offer
                <i class="pi pi-file-plus" 
                 style="font-size: 1rem"></i>
            </h1>
            </div>

            <div>
                <!-- <h2>
                Logout
                <i class="pi pipi-sign-out" style="font-size: 1rem"></i>
            </h2> -->

            <button @click="handleLogout"
            class="nav_button" style="margin-top: 10px;">
                <i class="pi pi-sign-out" style="font-size: 1.1rem"></i>
                Logout
            </button>
            </div>

        </div>
        <div class= "dataTableContainer">
             <DataTable />
        </div>
            <div class = "saddButtonContainer">
                <button class= "sAddButton" >  <i  @click = "handleAddOffer" class="pi pi-plus" style="font-size: 1.5rem; cursor: pointer;"></i></button>
            </div>
    </div>
</template>
<script>
import "primeicons/primeicons.css";
import DataTable from "./components/dataTable.vue";


export default {
    name: 'StudentHome',
    components:{
        DataTable
    },
    methods:{
        handleAddOffer(){
            this.$router.push('/student/addOffer');
        },
        handleLogout(){
            localStorage.removeItem('token');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userId');
            this.$router.push('/');
        }
    }
}
</script>
<style scoped>
@import '../students/students.css';
</style>
