<template>
    <div class="admin_mainContainer">
        <div v-if="batchDetails" class="analyticsPageHeader">
            <i class="pi pi-arrow-left" style="font-size: 1.1rem; cursor: pointer; margin: 1vw 0vw 0.5vw 2vw;" @click="handleReturnNavigation"></i>
            <h1 class="analyticsSubheading">Analytics of Batch {{ batchDetails.year }}</h1>
        </div>
        <div class="chart_container">
            <div class="pieChart_card">
                <Chart type="pie" :data="chartData" :options="chartOptions" class="piechart" />
            </div>
            <div class="chart_container">
                <Barchart 
                    v-if="batchDetails"
                    :totalStudents="batchDetails.totalStudents" 
                    :totalCompanies="batchDetails.NumberofCompanies" 
                    :totalOffers="batchDetails.NumberofOffers" 
                    :availableStudents="batchDetails.proofCount" 
                />
            </div>
        </div>
        <div class="details_container">
            <div v-if="batchDetails" class="individualdetails_LeftContainer">
                <div class="individual_details">
                    <h2 class="individual_details_h3">1. Total Number of Students:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.totalStudents }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">2. Placed Number of Students:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.studentsPlaced }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">3. Students Interested in Placements:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.studentsInterest }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">4. Students Not Interested in Placements:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.studentsNotInterest }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">5. Students Not Get Placed:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.studentsNotPlaced }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">6. Total Number of Companies:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.NumberofCompanies }}</h2>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div v-if="batchDetails" class="individualdetails_LeftContainer">
                <div class="individual_details">
                    <h2 class="individual_details_h3">7. Total Number of Offers:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.NumberofOffers }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">8. Placement percentage:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.PlacementPercentage }}</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">9. Average Salary:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.avSalary }} LPA</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">10. Highest Salary Package:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.highSalary }} LPA</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">11. Lowest Salary Package:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.lowSalary }} LPA</h2>
                </div>
                <div class="individual_details">
                    <h2 class="individual_details_h3">12. Available Students Proof Count:</h2>
                    <h2 class="individual_details_h3">{{ batchDetails.proofCount }}</h2>
                </div>
                <button class="download_button" @click="downloadExcel">
                    <i class="pi pi-cloud-download" style="font-size: 1rem"></i>
                    Download
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css';
import Chart from 'primevue/chart';
import Barchart from './Barchart.vue';
import axios from 'axios';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';
// import '../../dashboard/dashboard.css';

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
            chartOptions: {}
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
        async getBatchDetails(id) {
            try {
                const response = await axios.get(`https://napoleon-p829.onrender.com/analytics/getBatch/${id}`);
                this.batchDetails = response.data;
                this.chartData = this.setChartData();
            } catch (error) {
                console.error('Error fetching batch details:', error);
            }
        },
        handleReturnNavigation() {
            this.$router.push('/organisers/home');
        },
        setChartData() {
            return {
                labels: ['Students Get Placed', 'Students not placed', 'Placement interested', 'Placement not Interested'],
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
        async downloadExcel() {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Analytics');

            worksheet.columns = [
                { header: 'Total Number of Students', key: 'totalStudents', width: 40 },
                { header: 'Placed Number of Students', key: 'studentsPlaced', width: 40 },
                { header: 'Students Interested in Placements', key: 'studentsInterest', width: 40 },
                { header: 'Students Not Interested in Placements', key: 'studentsNotInterest', width: 40 },
                { header: 'Students Not Get Placed', key: 'studentsNotPlaced', width: 40 },
                { header: 'Total Number of Companies', key: 'NumberofCompanies', width: 40 },
                { header: 'Total Number of Offers', key: 'NumberofOffers', width: 40 },
                { header: 'Placement percentage', key: 'PlacementPercentage', width: 40 },
                { header: 'Average Salary', key: 'avSalary', width: 40 },
                { header: 'Highest Salary Package', key: 'highSalary', width: 40 },
                { header: 'Lowest Salary Package', key: 'lowSalary', width: 40 },
                { header: 'Available Students Proof Count', key: 'proofCount', width: 40 }
            ];

            worksheet.addRow({
                totalStudents: this.batchDetails.totalStudents,
                studentsPlaced: this.batchDetails.studentsPlaced,
                studentsInterest: this.batchDetails.studentsInterest,
                studentsNotInterest: this.batchDetails.studentsNotInterest,
                studentsNotPlaced: this.batchDetails.studentsNotPlaced,
                NumberofCompanies: this.batchDetails.NumberofCompanies,
                NumberofOffers: this.batchDetails.NumberofOffers,
                PlacementPercentage: this.batchDetails.PlacementPercentage,
                avSalary: this.batchDetails.avSalary,
                highSalary: this.batchDetails.highSalary,
                lowSalary: this.batchDetails.lowSalary,
                proofCount: this.batchDetails.proofCount
            });

            const buffer = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, `Analytics of ${this.batchDetails.year}.xlsx`);
        }
    }
}
</script>

<style scoped>
/* @import '../dashboard/organisersHome.css'; */
.organiserMainContainer {
    --background: #08080B;
    --text: #D4D4D7;
    --secondary: #8540ca;
    --accent: #18191A;
    --accent2: #4489DC;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    color: var(--text);
    overflow-y: auto;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #08080B;
}

::-webkit-scrollbar-thumb {
    background: #A55EED;
    border-radius: 2rem;
}

.dashboardMainContainer {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 92vh;
    background-color: var(--background);
    color: var(--text);
    padding: 0;
    margin: 0;
}

.dashboardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 8vh;
    color: var(--text);
    padding: 0;
    margin: 0;
}

.dashboardSubheading {
    font-size: 1.62em;
    margin: 1vh 0 1vh 1vw;
    padding: 0;
}

.organisersSearch {
    display: flex;
    background-color: #3F4448;
    border: none;
    color: var(--text);
    width: 20vw;
    height: 4vh;
    padding: 0 0 0 1vw;
    margin: 0 1vw 0 1vw;
    border-radius: 0.8rem;
    font-size: 1em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.organisersSearch:focus {
    outline: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(165, 94, 237, 0.5);
    background-color: #4A4F54;
}

.organisersSearch::placeholder {
    color: var(--text);
    opacity: 0.7;
}

.dashboardBatchContainer {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 80vh;
    justify-content: flex-start;
    background-color: var(--background);
    color: var(--text);
    flex-wrap: wrap;
    padding: 0;
    margin: 0 0 0 5vw;
    overflow-y: auto;
}

.patternContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 1rem;
}

.batchDetailsCard {
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 30vh;
    background-color: var(--accent);
    color: var(--text);
    margin: 1vh 1vw 1vh 1vw;
    border-radius: 1rem;
    padding: 1vh 1vw 1vh 1vw;
    transition: 0.3s;
}

.batchDetailsCard:hover {
    transform: scale(1.05);
}

.batchNameCard {
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.batchDetailsName {
    font-size: 1.3em;
    padding: 0;
    margin: 0;
}

.footerContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    width: 100vw;
    height: 8vh;
    color: var(--text);
    padding: 0;
    z-index: 1;
}


.analyticsHeader{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 9vh;
    color: var(--text);
    padding: 0 0 0 0;
    /* margin: 0 2vw 0 3vw; */
    /* background-color: var(--accent); */
}

.analytics_subheading{
    font-size: 1.5em;
    margin: 0 0vw 0vw 2vw;
    padding: 0 0 0 0;
}

.chart_container{
    width : 100vw;
    height : 35vh;
    background-color: var(--background);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.details_container{
    width : 100vw;
    height :90%;
    background-color: var(--background);
    display: flex;
    flex-direction: row;
}


.individualDetails{
    width : 90%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
}

.individual_details_h3{
    font-size: 1.2rem;  
    color: var(--text);
    margin: 2vw 2vw 2vw 2vw;
}

.individualdetails_LeftContainer{
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.download_button{
    width: 9rem;
    height : 3rem;
    border: none;
    display: flex;
    background-color: var(--secondary);
    color: var(--text);
    align-items: center;
    justify-content: space-evenly;
    border-radius: 2rem;
    margin: 2vw -36vw 0 0;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;

    &:active{
        color: #ff0000;
        transition: all 0.3s ease-out;
    }
}
.pieChart_card {
    display: flex;
    justify-content: center;
    width: 50rem;
  }
  .piechart {
    width: 50rem;
    margin: 0 0 0 10vw;
  }

.analytics_chartHeading{
    font-size: 1.5em;
    margin: 0 0vw 0.5vw 5.8vw;
    padding: 0 0 0 0;
}
.mainInput_container{
    display: flex;
    align-items: center;
    width: 90vw;
    height: 80vh;
    background-color: var(--accent);
    color: var(--text);
    overflow-y: auto;
    flex-direction: column;
    overflow-x: hidden;
}

</style>