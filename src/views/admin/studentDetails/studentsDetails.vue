<template>
    <div class="Details_mainContainer">
        <div class="student_details_header">
            <h1 class="details_subheading">Student Details</h1>
            <input type="text" class="DetailsSearch" v-model="search" placeholder="Search " />
        </div>

        <div class="details_batchContainer">
            <div class="Details_BatchCard" v-for="batch in batchesWithImages" :key="batch._id"
                >
                <div class="details_BatchImage" @click="handleNaviagte(batch._id)">
                    <img :src="batch.image" alt="Group" class="pattern_image" />
                </div>
                <div class="detailsNameCard">
                    <h1 class="details_BatchName" @click="handleNaviagte(batch._id)">Batch : {{ batch.batchName }}</h1>
                    <i class="pi pi-trash" style="font-size: 1.1rem; cursor: pointer;    margin: 0vw 0vw 0vw 2vw;" @click= "handleDeleteBatch(batch._id)"></i>
                </div>
            </div>
        </div>
        <footer>
            <div class="footer_container">
                <button class="add_button" @click="showModal = true"> +</button>
            </div>
        </footer>
        <Toast />
        <UserModal :isVisible="showModal" @close="showModal = false">
            <template v-slot:header>
                <h1 class="modal_heading">Create Batch </h1>  
            </template>
            <template v-slot:body>
                <div>
                    <h1 class="modal_heading"> Batch Name </h1>
                    <input v-model="batchName" type="text" class="Batch_year_input" placeholder="XXXX - XXXX" required />
                </div>
            </template> 
            <template v-slot:footer>
                <div class="modal_buttonContainer">
                    <button @click="showModal = false" class="ModalCancelButton">  Cancel </button>
                    <button @click="addBatch" class="ModalSaveButton"> Save </button>
                </div>
            </template>
        </UserModal>
    </div>
</template>

<script>
import axios from 'axios';
import UserModal from '../../../components/Modal.vue';
import Image from '../../../assets/group8.jpg';
import Toast from 'primevue/toast';

export default {
    name: 'StudentsDetails',
    components: {
        UserModal,
        Toast
    },
    data() {
        return {
            search: '',
            showModal: false,
            batchName: '',  
            images: [Image],
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
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        },
        async addBatch() {
            try {
                console.log('Adding batch:', this.batchName);
                await axios.post('https://napoleon-p829.onrender.com/batches/createBatch', {
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
        },
        async handleDeleteBatch(batchId) {
            try {
                await axios.delete(`https://napoleon-p829.onrender.com/batches/deleteBatch/${batchId}`);
                this.fetchBatches();
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
    mounted() {
        this.fetchBatches();
    }
};
</script>

<style scoped>
@import '../studentDetails/studentDetails.css'
</style>