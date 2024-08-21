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
                <input class="batchInput" v-model="BatchDetails.year" placeholder="Year" type="text" required />
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Total Number of Students </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.totalStudents" placeholder="Total Number of students"  type="number" required />
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Placed Number of Students </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model ="BatchDetails.studentsPlaced" placeholder="Placed Number of students"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Students Interested in Placements </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model = "BatchDetails.studentsInterest"  placeholder="students Interested in Placement" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Students not Interested in Placements </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model  ="BatchDetails.studentsNotInterest" placeholder="students not Interested in Placement" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Students not get Placed </p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.studentsNotPlaced" placeholder="students not get Placed" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Total number of companies</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.NumberofCompanies" placeholder="Total Number of companies" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Total number of offers</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model ="BatchDetails.NumberofOffers" placeholder="Total Number of Offers" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Placement Percentage</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model ="BatchDetails.PlacementPercentage"   placeholder="Placement Percentage" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Average Salary Package</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.avSalary"  placeholder="Average Salary Package" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Highest Salary Package</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.highSalary" placeholder="Highest Salary Package" type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails">Lowest Salary Package</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.lowSalary" placeholder="Lowest Salary Package"  type="number" required/>
            </div>
            <div class="inputContainer">
                <div class="inputQuestionContainer">
                    <p class="InputDetails"> Number of Available students Proof</p>
                    <p class="required_symbol">*</p>
                </div>
                <input class="batchInput" v-model="BatchDetails.proofCount" placeholder="Number of Available students Proof" type="number"  required/>
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
                const response =  await axios.post('http://localhost:5000/batch/addBatch',this.BatchDetails)
                // year : this.BatchDetails.year,
                // totalStudents : this.BatchDetails.totalStudents,
                // studentsPlaced : this.BatchDetails.studentsPlaced,
                // studentsInterest : this.BatchDetails.studentsInterest,
                // studentsNotInterest :this.BatchDetails.studentsNotInterest,
                // studentsNotPlaced: this.BatchDetails.studentsNotPlaced,
                // NumberofCompanies:this.BatchDetails.NumberofCompanies,
                // NumberofOffers: this.BatchDetails.NumberofOffers,
                // PlacementPercentage:this.BatchDetails.PlacementPercentage,
                // avSalary:this.BatchDetails.avSalary,
                // highSalary : this.BatchDetails.highSalary,
                // lowSalary : this.BatchDetails.lowSalary,
                // proofCount: this.BatchDetails.proofCount
                
            // )
            if(response){
                console.log("add completed")   
            }
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
