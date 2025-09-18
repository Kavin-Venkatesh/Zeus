<template>
    <div class="dasboard_mainContainer">
        <div class="dashboard_header">
            <h1 class="dashboard_subheading">Batch Details</h1>
            <input type="text" class="analytics_search" v-model="search" placeholder="Search " />
        </div>
        <div class="dashboard_batch_container">
            <div class="Batch__details_card" v-for="batch in batchesWithImages" :key="batch._id"
                >
                <div class="pattern_container" @click="handleNaviagte(batch._id)">
                    <img :src="batch.image" alt="Group" class="pattern_image" />
                </div>
                <div class="batch_name_card">
                    <h1 class="Batch_details_name" @click="handleNaviagte(batch._id)">Batch : {{ batch.year }}</h1>
                    <i class="pi pi-trash" style="font-size: 1.3rem; cursor: pointer;    margin: 0vw 0vw 0vw 2vw;" @click= "handleDeleteBatch(batch._id)"></i>
                    
                </div>
            </div>
            <Toast />
        </div>
        <footer>
            <div class="footer_container">
                <button class="add_button" @click="addBatch"> +</button>
            </div>
        </footer>
    </div>
</template>

<script>

import Image from '../../../assets/group6.jpg';

import axios from 'axios';
import Toast from 'primevue/toast';


export default {
    name: 'DashboardPage',
    components :{
        Toast
    },
    data() {
        return {
            search: '',
            images: [Image],
            Batches: [], 
        }
    },
    computed: {
  batchesWithImages() {
    if (!this.Batches || !Array.isArray(this.Batches)) {
      return [];
    }

    return this.Batches.map(batch => ({
      ...batch,
      image: this.images[Math.floor(Math.random() * this.images.length)]
    })).filter(batch => {
        return batch.year && batch.year.includes(this.search);
    });
  }
},
    methods: {
        handleNaviagte(batchId) {
            this.$router.push(`/admin/analytics/${batchId}`)
        },
        addBatch() {
            this.$router.push('/admin/addBatch');
        },
        async getBatches(){
            const response = await axios.get('https://napoleon-p829.onrender.com/analytics/getBatch');
            this.Batches = response.data;
        },
       async handleDeleteBatch(batchId) {
            try {
                await axios.delete(`https://napoleon-p829.onrender.com/analytics/deleteAnalytics/${batchId}`);
                this.getBatches();

                this.$toast.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Batch Analytics deleted successfully',
                    life: 3000
                });
            } catch (error) {
                console.error(error);
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to delete batch',
                    life: 3000
                });
            }
        }
    },
    mounted(){
       this.getBatches();
    }
}
</script>

<style scoped>
@import './dashboard.css';
</style>