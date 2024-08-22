<template>
    <div class="admin_mainContainer">
        <div v-if ="batchDetails" class="analyticsPageHeader">
            <i class="pi pi-arrow-left" style="font-size: 1.1rem; cursor: pointer;    margin: 1vw 0vw 0.5vw 2vw;" @click="handleReturnNavigation"></i>
            <h1 class="analyticsSubheading">Analytics of Batch {{ batchDetails.year }}</h1>
        </div>
        <div class = "chart_container">
            <div class="pieChart_card">
            <Chart type="pie" :data="chartData" :options="chartOptions" class="piechart" />
            </div>
            <div class="chart_container">
                <Barchart 
                     v-if = "batchDetails"
                    :totalStudents="batchDetails.totalStudents" 
                    :totalCompanies="batchDetails.NumberofCompanies" 
                    :totalOffers="batchDetails.NumberofOffers" 
                    :availableStudents="batchDetails.proofCount" 
                    />
            </div>
        </div>
        <div class="details_container">
            <div v-if ="batchDetails" class="individualdetails_LeftContainer">
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 1. Total Number of Students :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.totalStudents }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 2. Placed Number of Students :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.studentsPlaced }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 3. Students Interested in Placements :</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.studentsInterest }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 4. Students Not Interested in Placements :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.studentsNotInterest }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 5. Students Not Get Placed :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.studentsNotPlaced }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 6. Total Number of Companies :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.NumberofCompanies }}</h2>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div v-if ="batchDetails" class="individualdetails_LeftContainer">
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 7. Total Number of Offers :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.NumberofOffers }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 8. Placement percentage :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.PlacementPercentage }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 9.Average Salary : </h2>
                    <h2 class="individual_details_h3"> {{batchDetails.avSalary}}LPA</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 10. Highest Salary Package :</h2>
                    <h2 class="individual_details_h3"> {{batchDetails.highSalary}}LPA</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 11. Lowest Salary Package :</h2>
                    <h2 class="individual_details_h3"> {{batchDetails.lowSalary}}LPA</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3"> 12. Available Students Proof Count :</h2>
                    <h2 class="individual_details_h3"> {{ batchDetails.proofCount }}</h2>
                </div>
                <button class="download_button" @click = "downloadExcel" >
                    <i class = "pi pi-cloud-download" style="font-size: 1rem"></i>
                    Download
                </button>
            </div>
        </div>
        </div>
</template>

<script>
import 'primeicons/primeicons.css';
import Chart from 'primevue/chart';
import Barchart from './barchart.vue';
import axios from 'axios';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';
import '../../dashboard/dashboard.css';

export default {
    name: 'AnalyticsPage',
    components: {
        Chart,
        Barchart
    },
    data() {
        return {
            batchDetails: null,
            chartData: null,
            chartOptions:{
                
            }
        };
    },
    created() {
        const id = this.$route.params.id;
        console.log(id);
        this.getBatchDetails(id);
        this.chartOptions = this.setChartOptions();
        document.title = "Analytics Page";
    },
    methods: {
        getBatchDetails(id) {
            console.log(id);
            axios.get(`http://localhost:5000/batch/getBatch/${id}`)
                .then(response => {
                    this.batchDetails = response.data;
                    this.chartData = this.setChartData();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        handleReturnNavigation() {
            this.$router.push('/admin/home')
        },
        setChartData() {
            return {
                labels: ['Students Get Placed', 'Students not placed', 'Placement interesed','Placement not Interested'],
                datasets: [
                    {
                        data: [this.batchDetails.studentsPlaced, this.batchDetails.studentsNotPlaced, this.batchDetails.studentsInterest, this.batchDetails.studentsNotInterest],
                        backgroundColor: ['rgba(255, 0, 0, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)'],
                        hoverBackgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                        offset: [40, 35, 30, 30],
                        borderWidth: 0,
                    }
                ]
            };
        },
        setChartOptions() {
            return {
                plugins: {
                    legend: {
                        labels: {
                            cutout: '80%',
                            color: '#D4D4D7',
                        }
                    }
                }
            };
        },
        async downloadExcel(){
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Analytics');

            worksheet.columns = [
                {header : 'Total Number of Students', key : 'totalStudents', width : 40},
                {header : 'Placed Number of Students', key : 'studentsPlaced', width : 40},
                {header : 'Students Interested in Placements', key : 'studentsInterest', width : 40},
                {header : 'Students Not Interested in Placements', key : 'studentsNotInterest', width : 40},
                {header : 'Students Not Get Placed', key : 'studentsNotPlaced', width : 40},
                {header : 'Total Number of Companies', key : 'NumberofCompanies', width : 40},
                {header : 'Total Number of Offers', key : 'NumberofOffers', width : 40},
                {header : 'Placement percentage', key : 'PlacementPercentage', width : 40},
                {header : 'Average Salary', key : 'avSalary', width : 40},
                {header : 'Highest Salary Package', key : 'highSalary', width : 40},
                {header : 'Lowest Salary Package', key : 'lowSalary', width : 40},
                {header : 'Available Students Proof Count', key : 'proofCount', width : 40}
            ];
            
            worksheet.addRow({
                totalStudents : this.batchDetails.totalStudents,
                studentsPlaced : this.batchDetails.studentsPlaced,
                studentsInterest : this.batchDetails.studentsInterest,
                studentsNotInterest : this.batchDetails.studentsNotInterest,
                studentsNotPlaced : this.batchDetails.studentsNotPlaced,
                NumberofCompanies : this.batchDetails.NumberofCompanies,
                NumberofOffers : this.batchDetails.NumberofOffers,
                PlacementPercentage : this.batchDetails.PlacementPercentage,
                avSalary : this.batchDetails.avSalary,
                highSalary : this.batchDetails.highSalary,
                lowSalary : this.batchDetails.lowSalary,
                proofCount : this.batchDetails.proofCount
        });


        const buffer = await workbook.xlsx.writeBuffer();

        const blob = new Blob([buffer], {type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        saveAs(blob, `Analytics of ${this.batchDetails.year} .xlsx`);


        }
    }
}
</script>

<style scoped>
@import '../../dashboard/dashboard.css';
</style>
