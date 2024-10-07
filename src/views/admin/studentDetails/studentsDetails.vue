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
                    <h1 class="details_BatchName">Batch : {{ batch.batchName }}</h1>
                </div>
            </div>
        </div>
        <footer>
            <div class="footer_container">
                <button class="add_button" @click="showModal = true"> +</button>
            </div>
        </footer>
        <UserModal :isVisible="showModal" @close="showModal = false">
            <template v-slot:header>
                <h1 class="modal_heading">Add Student</h1>  
            </template>
            <template v-slot:body>
                <div>
                    <h1> Batch Name </h1>
                    <input v-model="batchName" type="text" class="details_input" placeholder="XXXX - XXXX" required />
                </div>
            </template> 
            <template v-slot:footer>
                <button @click="showModal = false" class="CancelButton">  Cancel </button>
                <button @click="addBatch" class="SaveButton"> Save </button>
            </template>
        </UserModal>
    </div>
</template>

<script>
import axios from 'axios';
import UserModal from '../../../components/Modal.vue';
import Group1 from '../../../assets/group1.jpg';
import Group2 from '../../../assets/group2.jpg';
import Group3 from '../../../assets/group3.jpg';
import Group4 from '../../../assets/group4.jpg';
import Group5 from '../../../assets/group5.jpg';
import Group6 from '../../../assets/group6.jpg';
import Group7 from '../../../assets/group7.png';
import Group8 from '../../../assets/group8.jpg';

export default {
    name: 'StudentsDetails',
    components: {
        UserModal
    },
    data() {
        return {
            search: '',
            showModal: false,
            batchName: '',  
            images: [Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group8],
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
                const response = await axios.get('http://localhost:5000/batches/getBatch'); // Replace with your actual endpoint
                this.Batches = response.data;
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        },
        async addBatch() {
            try {
                console.log('Adding batch:', this.batchName);
                await axios.post('http://localhost:5000/batches/createBatch', {
                    batchName: this.batchName
                });
                this.fetchBatches();
                this.showModal = false; 
                this.batchName = ''; 
            } catch (error) {
                console.error('Error adding batch:', error);
            }
        },
        handleNaviagte(batchId) {
            console.log(batchId);
            this.$router.push(`/admin/batchStudentDetails/${batchId}`);
        }
    },
    mounted() {
        this.fetchBatches();
    }
};
</script>

<style scoped>
@import '../studentDetails/studentDetails.css'
</style>