<template>
    <div class="details_searchContainer">
        <input type="text" class="details_search" v-model="search" placeholder="Search " />
    </div>
    <div class="card">
        <table class="DataTable">
            <thead class="table_header">
                <th>Name</th>
                <th>Roll Number</th>
                <th>Branch</th>
                <th>Company Name</th>
                <th>Salary Package</th>
                <th>Status</th>
            </thead>
            <tbody>
                <tr v-if="displayedStudents.length === 0">
                    <td colspan="10" class="no-data">No data </td>
                </tr>
                <tr class="table_ContentContainer" v-for="student in displayedStudents" :key="student.id" @click="gotoDetailsPage(student.id)">
                    <td>{{ student.name }}</td>
                    <td>{{ student.rollNo }}</td>
                    <td>{{ student.branch }}</td>
                    <td>{{ student.companyName }}</td>
                    <td>{{ student.salaryPackage }}</td>
                    <td :class="{'Green': student.status === 'Approved', 'red': student.status !== 'Approved'}">{{ student.status }}</td>
                </tr>
            </tbody>
        </table>
        <div class="ButtonContainer">
            <button class="PreviousButton" @click="previousPage" :disabled="currentPage === 1">
                <i class="pi pi-arrow-left" style="color: #D4D4D7;"></i>
                Previous
            </button>
            <button class="NextButton" @click="nextPage" :disabled="currentPage === maxPage">
                Next
                <i class="pi pi-arrow-right" style="color: #D4D4D7;"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataTable",
    props: {
        students: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            search: '',
            currentPage: 1,
            itemsPerPage: 8
        };
    },
    computed: {
        displayedStudents() {
            let students = this.students;

            if (this.search) {
                const searchLower = this.search.toLowerCase();
                students = students.filter(student =>
                    Object.values(student).some(value =>
                        String(value).toLowerCase().includes(searchLower)
                    )
                );
            }
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;

            return students.slice(start, end);
        },
        maxPage() {
            return Math.ceil(this.students.length / this.itemsPerPage);
        }
    },
    methods: {
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
        gotoDetailsPage(id) {
            this.$router.push(`/detailsPage/${id}`);
        }
    }
};
</script>
<style scoped>
.card {
    width: 90%;
    height: 100vh;
    margin-top: 2rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: transparent;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin : 7vw 5vw 0 14vw; 

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        overflow-x: auto;
        overflow-y: hidden;
        align-items: center;
        justify-content: flex-start;
    }
}

.DataTable {
    width: 80%;
    height: 70%;
    border: none;
    border-radius: .5rem;
    margin: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 10rem;

    @media (max-width: 768px) {
        width: 250%;
        height: 100%;
        margin: 5vw 0 0 130vw;
    }
}

.table_header {
    background-color: #18191A;
    color: white;
    text-align: center;
    width: 100%;
    border: none;
    padding: 8px;
    height: 6vh;
    font-size: large;

    @media (max-width: 768px) {
        width:400%;
        margin: 0;
        font-size: small;
        padding: 6px;
    }
}

.table_ContentContainer {
    background-color: #08080B;
    border-bottom: 1px solid rgb(67, 137, 208);
    padding: 8px;
    height: 6vh;
    font-size: larger;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    @media (max-width: 768px) {
        width:400%;
        margin: 0 0 0 50vw;
        font-size: medium;
        padding: 10px;
        height: 5vh;
    }
}

.table_ContentContainer:hover {
    background-color: #18191A;
}

.ButtonContainer {
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    background-color: transparent;

    @media (max-width: 768px) {
        width: 200%;
        margin: 0 0 0 100vw;
        margin-top: 1rem;
    }
}

.NextButton, .PreviousButton {
    width: 8rem;
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

    @media (max-width: 768px) {
        width: 6rem;
        height: 2.5rem;
        font-size: small;
    }
}

.NextButton:hover, .PreviousButton:hover {
    background-color: #D4D4D7;
    color: #8540ca;
}

.Green {
    color: #1DB954;
}

.red {
    color: red;
}

.details_searchContainer {
    width: 90%;
    height: 1vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1vw 0 0 0;

    @media (max-width: 768px) {
        width: 100vw;
        margin: 3vh 0 0 0;
        justify-content: center;
    }
}

.details_search {
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

    @media (max-width: 768px) {
        width: 90vw;
        height: 4vh;
        font-size: small;
        border-radius: 0.4rem;
        padding: 10px;
    }
}

.details_search:focus {
    outline: none;
}

.details_search::placeholder {
    color: var(--text);
}

.no-data {
    text-align: center;
    padding: 8px;
    font-size: larger;
    color: #D4D4D7;
}
</style>