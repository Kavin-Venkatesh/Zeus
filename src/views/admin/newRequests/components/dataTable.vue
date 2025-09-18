<template>
    <div class="details_searchContainer">
            <h2>
                New Requests
            </h2>
            <input type="text" class="details_search" v-model="search" placeholder="Search " />
    </div>
    <div class="card">
        <table class = "DataTable">
            <thead class ="table_header">
                <th>Name</th>
                <th>Roll Number</th>
                <th>Branch</th>
                <th>Company Name</th>
                <th>Salary Package</th>
                <th>Status</th>
            </thead>
            <tr v-if="displayedStudents.length === 0">
                    <td colspan="10" class="no-data">No data found.</td>
            </tr>

            <tr  class= " table-ContentConatiner" v-for="student in displayedStudents" :key="student.id" @click = gotoDetailsPage(student.id)>
                <td>{{ student.name }}</td>
                <td>{{ student.rollNumber }}</td>
                <td>{{ student.branch }}</td>
                <td>{{ student.companyName }}</td>
                <td>{{ student.salaryPackage }}</td>
                <td class= "PendingStatus">{{ student.status }}</td>
            </tr>
        </table>   
        <div class="ButtonContainer"> 
        <button class= " PreviousButton" @click = "previousPage" :disabled="currentPage === 1 ">
            <i class=" pi pi-arrow-left" style = "color : #D4D4D7," ></i>
            Previous 
        </button>
        <button class = "NextButton" @click = "nextPage" :disabled = "currentPage === maxPage">
            Next
            <i class="pi pi-arrow-right" style="color: #D4D4D7," ></i>
        </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MyDataTable",
    data() {
        return {
            search: '',
            Students: [],
            currentPage: 1,
            itemsPerPage: 8
        };
    },
    computed: {
        displayedStudents() {
            let Students = this.Students;

            if (this.search) {
                const searchLower = this.search.toLowerCase();

                Students = Students.filter(student =>
                    Object.values(student).some(value =>
                        String(value).toLowerCase().includes(searchLower)
                    )
                );
            }

            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;

            return Students.slice(start, end);
        },
        maxPage() {
            return Math.ceil(this.Students.length / this.itemsPerPage);
        }
    },
    methods: {
        async fetchStudents() {
            try {
                const response = await axios.get('https://napoleon-p829.onrender.com/offer/pendingOffers');
                this.Students = response.data;
            } catch (error) {
                console.error('Error fetching Students:', error);
            }
        },
        nextPage() {
            if (this.currentPage < this.maxPage) {
                this.currentPage++;
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        gotoDetailsPage(studentId) {
            this.$router.push(`/pendingdetailsPage/${studentId}`);
        }

    },
    mounted() {
        this.fetchStudents();
    }
};
</script>
<style scoped>
.card {
    margin-top: 2rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: transparent;
    overflow : auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.DataTable{
    width : 90%;
    height : 90%;
    border: none;
    border-collapse: collapse;
    border-radius: .5rem;

}
.table_header{
    background-color: #18191A;
    color: white;
    text-align: center;
    width : 100%;
    border : none;
    padding: 8px;
    height: 7vh;
    font-size: large;
}
.table-ContentConatiner{
    background-color: #08080B;
    border-bottom : 1px solid   rgb(67, 137, 208);
    padding: 8px;
    height : 7vh;
    font-size: larger;
    text-align: center;
    cursor : pointer;

    &:hover{
        background-color: #18191A;
    }
}
.ButtonContainer{
    width : 85%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    background-color: transparent;
}
.NextButton{
    width : 8rem;
    height: 2.8rem;
    background-color: #18191A;
    border: none;
    color: #D4D4D7;
    font-size: larger;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &:hover{
        background-color: #D4D4D7;
        color: #8540ca;
    }
}
.PreviousButton{
    width : 8.2rem;
    height: 2.8rem;
    background-color: #18191A;
    border: none;
    color: #D4D4D7;
    font-size: larger;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &:hover{
        background-color: #D4D4D7;
        color: #8540ca;
    }
}
.Green {
    color: #1DB954;
}
.red {
    color: red;
}
.details_searchContainer {
    width: 90vw;
    height: 4vh;
    display: flex;
    align-items: center;
    margin: 1vw 0 0 5vw;
    justify-content: space-between;
}

.PendingStatus{
    color:  #8540ca;

}

.no-data {
    text-align: center;
    padding: 8px;
    font-size: larger;
    color: #D4D4D7;
}
</style>

