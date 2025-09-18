<template>
    <div class="dashboardMainContainer">
        <div class="dashboardHeader">
            <h1 class="dashboardSubheading">Batch Details</h1>
            <input type="text" class="organisersSearch" v-model="search" placeholder="Search " />
        </div>
        <div class="dashboardBatchContainer">
            <div class="batchDetailsCard" v-for="batch in batchesWithImages" :key="batch._id"
                @click="handleNaviagte(batch._id)">
                <div class="patternContainer">
                    <img :src="batch.image" alt="Group" class="patternImage" />
                </div>
                <div class="batchNameCard">
                    <h1 class="batchDetailsName">Batch : {{ batch.year }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Image from '../../../assets/group3.jpg';

export default {
    name: 'DashboardPage',
    data() {
        return {
            search: '',
            Batches: []
        }
    },
    computed: {
        batchesWithImages() {
            return this.Batches.map(batch => ({
                ...batch,
                image: Image
            })).filter(batch => {
                return batch.year && batch.year.includes(this.search);
            });
        }
    },
    methods: {
        async getBatches() {
            try {
                const response = await axios.get('https://napoleon-p829.onrender.com/analytics/getBatch');
                this.Batches = response.data;
                console.log(this.Batches);
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        },
        handleNaviagte(batchId) {
            this.$router.push(`/organisers/analytics/${batchId}`);
        }
    },
    mounted() {
        this.getBatches();
    }
}
</script>

<style scoped>
@import '../dashboard/organisersHome.css';
</style>