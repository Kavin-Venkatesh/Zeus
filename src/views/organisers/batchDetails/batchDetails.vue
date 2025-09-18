<template>
    <div class="Details_mainContainer">
        <div class="details_header">
            <i class="pi pi-arrow-left" style="margin: 1vh 0 1vh 5vh; font-size: 1.5rem; cursor: pointer;" @click="handleBackNavigation"></i>
            <h1 class="details_subheading">Students Details</h1>
        </div>
        
        <DataTable :students="students" />
        
        <Toast />
        
        <div class="Download_ButtonContainer" @click="showModal = true">
            <button class="DownloadDetails_button">
                <i class="pi pi-cloud-download"></i>
                Download
            </button>   
        </div>
        
        <!-- Modal for Download Options -->
        <Modal :isVisible="showModal" @close="showModal = false" customWidth="900px" customHeight="750px">
            <template v-slot:header>
                <h1 class="modal_heading">Download Details</h1>
            </template>
            
            <template v-slot:body>
                <div class="checkbox-container">
                    <div class="checkbox-row" v-for="(field, index) in fields" :key="index">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="selectedFields" :value="field.value" class="custom-checkbox" />
                            {{ field.label }}
                        </label>
                    </div>
                </div>
            </template>
            
            <template v-slot:footer>
                <button @click="downloadExcel" class="excelButton">Download as Excel (without Proof)</button>
                <button @click="downloadPDF" class="pdfButton">Download as PDF ( with Proof)</button>
            </template>
        </Modal>
    </div>
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';
import DataTable from './components/dataTable.vue';
import Modal from '../../../components/Modal.vue';

export default {
    name: "BatchStudentDetails",
    components: {
        DataTable,
        Toast,
        Modal
    },
    data() {
        return {
            showModal: false,
            students: [],
            selectedFields: [],
            fields: [
                { label: 'Name', value: 'name' },
                { label: 'Roll No', value: 'rollNo' },
                { label: 'Gender', value: 'gender' },
                { label: 'Date of Birth', value: 'dob' },
                { label: 'Mobile Number', value: 'mobile' },
                { label: 'Degree', value: 'degree' },
                { label: 'Branch', value: 'branch' },
                { label: 'Batch Name', value: 'batchName' },
                { label: 'Company Name', value: 'companyName' },
                { label: 'Company Category', value: 'companyCategory' },
                { label: 'Organized By', value: 'organizedBy' },
                { label: 'Company Location', value: 'companyLocation' },
                { label: 'Internship Date', value: 'internshipDate' },
                { label: 'Stipend', value: 'stipend' },
                { label: 'Company CTC', value: 'companyCtc' },
                { label: 'Placed Date', value: 'placedDate' },
                // { label: 'Mail Screenshots', value: 'mailScreenshots' },
                // { label: 'Letter of Intent', value: 'letterOfIntent' },
                // { label: 'Offer Letter', value: 'offerLetter' },
                // { label: 'Internship Letter', value: 'internshipLetter' }
            ]
        };
    },
    methods: {
        async fetchStudents() {
            try {
                const id = this.$route.params.id;
                const response = await axios.get(`https://napoleon-p829.onrender.com/batches/batchStudentDetails/${id}`);
                this.students = response.data;
            } catch (error) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error fetching students',
                    life: 3000,
                    detail: 'An error occurred while fetching students. Please try again later.'
                });
            }
        },
        handleBackNavigation() {
            this.$router.push('/admin/home');
        },
        async downloadPDF() {
            try {
                const id = this.$route.params.id;
                const response = await axios.post(`https://napoleon-p829.onrender.com/batches/download/pdf`, {
                    batchId: id,
                    selectedFields: this.selectedFields
                }, {
                    responseType: 'blob'
                });

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'students_details.pdf');
                document.body.appendChild(link);
                link.click();
            } catch (error) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error downloading PDF',
                    life: 3000,
                    detail: 'An error occurred while downloading the PDF. Please try again later.'
                });
            }
        },
        async downloadExcel() {
            try {
                const id = this.$route.params.id;
                const response = await axios.post(`https://napoleon-p829.onrender.com/batches/download/excel`, {
                    batchId: id,
                    selectedFields: this.selectedFields
                }, {
                    responseType: 'blob'
                });

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'students_details.xlsx');
                document.body.appendChild(link);
                link.click();
            } catch (error) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error downloading Excel',
                    life: 3000,
                    detail: 'An error occurred while downloading the Excel file. Please try again later.'
                });
            }
        }
    },
    mounted() {
        this.fetchStudents();
    }
};
</script>

<style scoped>
@import './batchDetails.css';

.checkbox-container {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    overflow-y: auto;
}

.checkbox-row {
    display: flex;
    align-items: center;
    width: 50%;
    padding: 5px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin: 5px 0;
    width: 100%;
}

.custom-checkbox {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.excelButton, .pdfButton {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.excelButton {
    background-color: #ccc;
    border: none;
    margin-right: 10px;
}

.pdfButton {
    background-color: #007bff;
    border: none;
    color: #fff;
}
</style>
