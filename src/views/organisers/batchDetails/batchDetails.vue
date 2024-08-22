<template>
    <div class= "Details_mainContainer">
        <div class = "details_header">
            <i class="pi pi-arrow-left" style="margin: 1vh 0 1vh 5vh;font-size: 1.5rem; cursor: pointer;" @click="handleBackNavigation"></i>
            <h1 class="details_subheading">Students Details</h1>
        </div>
        
        <DataTable/>

        <div  class="Download_ButtonContainer">
            <button class="DownloadDetails_button">
                <i class ="pi pi-cloud-download"></i>
                Download
            </button>
        </div>
    </div>
</template>

<script>

import DataTable from './components/dataTable.vue';
export default {
    name : "OrganiserBatchDetails",
    components: {
        DataTable
    },
    methods:{
        handleBackNavigation(){
            this.$router.push('/organisers/home')
        }
    
    }
}
</script>

<style scoped>
@import './batchDetails.css';
</style>
