<template>
    <div class="dashboardMainContainer">
        <div class="dashboardHeader">
            <h1 class="dashboardSubheading">Batch Details</h1>
            <input type="text" class="organisersSearch" v-model="search" placeholder="Search " />
        </div>
        <div class="dashboardBatchContainer">
            <div class="batchDetailsCard" v-for="batch in batchesWithImages" :key="batch._id"
                @click="handleNaviagte">
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
import Image from '../../../assets/group3.jpg';

export default {
    name: 'DashboardPage',
    data() {
        return {
            search: '',
            Batches: [
                { _id: '1', year: '2019' },
                { _id: '2', year: '2020' },
                { _id: '3', year: '2021' },
                { _id: '4', year: '2022' },
                { _id: '5', year: '2023' },
                { _id: '6', year: '2024' },
                { _id: '7', year: '2025' },
                { _id: '8', year: '2026' },
                { _id: '9', year: '2027' },
                { _id: '10', year: '2028' },
                { _id: '11', year: '2029' },
                { _id: '12', year: '2030' }
            ]
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
        handleNaviagte() {
            this.$router.push(`/organisers/analytics`)
        }
    }
}
</script>

<style scoped>
@import '../dashboard/organisersHome.css';
</style>