
<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="bar_chart"  />
    </div>
</template>

<script>
import Chart from 'primevue/chart';
export default {
    name : 'BarChart',
    props: ['totalStudents', 'totalCompanies', 'totalOffers', 'availableStudents'],
    components : {
        Chart
    },
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
    setChartData() {
        return {
            labels: ['Total number of Students', 'Total number of companies', 'Total number of offers', 'Available students count'],
            datasets: [
                {
                    label: 'Batch Data',
                    backgroundColor: '#00bcd4',
                    borderColor: '#00bcd4',
                    data: [this.totalStudents,this.totalCompanies, this.totalOffers, this.availableStudents] // Replace with your actual data
                }
            ]
        };
    },
    setChartOptions() {
        return {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: '#D4D4D7'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#D4D4D7',
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: '#D4D4D7'
                    },
                    grid: {
                        color: '#18191A',
                        drawBorder: false
                    }
                }
            }
        };
    }
}
};
</script>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    width: 50rem;
  }
  .bar_chart {
    width: 50rem;
    margin : 0 0 0 6vw;
  }
</style>
