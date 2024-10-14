<template>
    <div class="dasboard_mainContainer">
        <div class="dashboard_header">
            <h1 class="dashboard_subheading">Batch Details</h1>
            <input type="text" class="analytics_search" v-model="search" placeholder="Search " />
        </div>
        <div class="dashboard_batch_container">
            <div class="Batch__details_card" v-for="batch in batchesWithImages" :key="batch._id"
                @click="handleNaviagte(batch._id)">
                <div class="pattern_container">
                    <img :src="batch.image" alt="Group" class="pattern_image" />
                </div>
                <div class="batch_name_card">
                    <h1 class="Batch_details_name">Batch : {{ batch.year }}</h1>
                </div>
            </div>
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


export default {
    name: 'DashboardPage',
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
            const response = await axios.get('http://localhost:5000/analytics/getBatch');
            this.Batches = response.data;
            console.log(this.Batches._id)
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