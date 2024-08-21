<template>
    <div class="student_mainContainer">
        <div class="student_header">
            <h1 class="student_subheading">
                Add offer
                <i class="pi pi-file-plus" 
                 style="font-size: 1.5rem"></i>
            </h1>
        </div>
            <div class="data_mainContainer"> 
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
        }
    }
}
</script>
<style scoped>
@import '../students/students.css';
</style>
