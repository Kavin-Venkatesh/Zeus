<template>
    <div class="admin_mainContainer">
        <div class="analytics_header">
            <i class="pi pi-arrow-left" style="font-size: 1.1rem; cursor: pointer;" @click="handleReturnNavigation"></i>
            <h1 class="analytics_subheading">Add Batch</h1>
        </div>
        <div class="mainInput_container">
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Batch Year </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.year" type="text" required />
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Total Number of Students </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.totalStudents" type="number" required />
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Placed Number of Students </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model ="BatchDetails.studentsPlaced"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Students Interested in Placements </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model = "BatchDetails.studentsInterest"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Students not Interested in Placements </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model  ="BatchDetails.studentsNotInterest"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Students not get Placed </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.studentsNotPlaced"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Total number of companies</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.NumberofCompanies"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Total number of offers</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model ="BatchDetails.NumberofOffers" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Placement Percentage</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model ="BatchDetails.PlacementPercentage"   type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Average Salary Package</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.avSalary"   type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Highest Salary Package</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.highSalary"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Lowest Salary Package</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.lowSalary"   type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails"> Number of Available students Proof</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.proofCount"  type="number"  required/>
            </div>
            <div class = "addBatch_buttonContainer" >
            <button class ="cancelBatch_button" @click="handleCancelSubmit">
                <i class = "pi pi-times" style = "font-size : 1rem;"></i>    
                Cancel
            </button>
            <button class ="addBatch_button" @click.prevent = "handleSubmit">
                <i class = "pi pi-plus" style ="font-size: 1rem;"></i>
                    Add Batch
            </button>
        </div>
        </div>
        <Toast />
    </div>
</template>

<script>
import 'primeicons/primeicons.css';
import Toast from 'primevue/toast';
import axios from 'axios';

export default {
    name: 'AddBatch',
    components: {
        Toast
    },
    data() {
        return {
            BatchDetails: this.getInitialBatchDetails()
        }
    },
    methods: {
        getInitialBatchDetails() {
            return {
                year: '',
                totalStudents: '',
                studentsPlaced: '',
                studentsInterest: '',
                studentsNotInterest: '',
                studentsNotPlaced: '',
                NumberofCompanies: '',
                NumberofOffers: '',
                PlacementPercentage: '',
                avSalary: '',
                highSalary: '',
                lowSalary: '',
                proofCount: '',
            }
        },
        handleReturnNavigation() {
            this.$router.push('/admin/home');
        },
        
        handleSubmit() {
            if (this.areAllFieldsFilled()) {
                this.handleFormSubmit()
                this.$toast.add({severity:'success', summary: 'Success', detail: 'Form submitted successfully', life : 3000});
            } else {
                this.$toast.add({severity:'info', summary: 'Info', detail: 'Please fill all the fields' , life : 3000});
            }
        },
        areAllFieldsFilled() {
            return Object.values(this.BatchDetails).every(value => value !== '');
        },
        async handleFormSubmit() {
            console.log(this.BatchDetails);
            try{
                 await axios.post('http://localhost:5000/analytics/addBatch',this.BatchDetails)
            }
            catch(error){
                console.log("An errored while adding the batch", error)
            }
        },

        handleCancelSubmit() {
            this.BatchDetails = this.getInitialBatchDetails();
            this.$router.push('/admin/home');
        }
    }
}
</script>

<style>
@import '../dashboard.css';
</style>
