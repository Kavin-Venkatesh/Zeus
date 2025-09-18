<template>
    <div class="Details_mainContainer">
        <div class="studentdetails_header">
            <h1 class="details_subheading">Student Details</h1>
            <input type="text" class="details_search" v-model="search" placeholder="Search " />
        </div>

        <div class="details_batchContainer">
            <div class="details_batchCard" v-for="batch in batchesWithImages" :key="batch._id"
                @click="handleNaviagte(batch._id)">
                <div class="details_BatchImage">
                    <img :src="batch.image" alt="Group" class="pattern_image" />
                </div>
                <div class="detailsNameCard">
                    <h1 class="details_BatchName">Batch: {{ batch.batchName }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Group1 from '../../../assets/group1.jpg';


export default {
    name: 'OrgraniserStudentsDetails',
    data() {
        return {
            search: '',
            images: [Group1],
            Batches: []
        };
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
                return batch.batchName && batch.batchName.includes(this.search);
            });
        }
    },
    methods: {
        async fetchBatches() {
            try {
                const response = await axios.get('https://napoleon-p829.onrender.com/batches/getBatch'); // Replace with your actual endpoint
                this.Batches = response.data;
                console.log(this.Batches);
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        },
        handleNaviagte(batchId) {
            this.$router.push(`/organisers/batchStudentDetails/${batchId}`);
        }
    },
    mounted() {
        this.fetchBatches();
    }
};
</script>

<style scoped>
@import '../studentdetails/studentDetails.css';
</style>