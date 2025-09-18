<template>
    <div class="detailsSearchContainer">
        <input type="text" class="detailsSearch" v-model="search" placeholder="Search " />
    </div>
    <div class="card">
        <table class="DataTable">
            <thead class="table_header">
                <th>S.No</th>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Branch</th>
                <th>Company Name</th>
                <th>Salary Package</th>
                <th>Status</th>
            </thead>
            <tr class="table_ContentContainer" v-for="(offer, index) in displayedStudents" :key="offer.studentid" @click="gotoDetailsPage(offer.studentid)">
                <td>{{ index + 1 }}.</td>
                <td>{{ offer.name }}</td>
                <td>{{ offer.rollNumber }}</td>
                <td>{{ offer.branch }}</td>
                <td>{{ offer.companyName }}</td>
                <td>{{ offer.salaryPackage }}</td>
                <td :class="{'Green': offer.status === 'Approved', 'red': offer.status !== 'Approved'}">{{ offer.status }}</td>
            </tr>
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
import axios from 'axios';

export default {
    name: "MyDataTable",
    data() {
        return {
            search: '',
            offers: [],
            currentPage: 1, 
            itemsPerPage: 20
        };
    },
    computed: {
        displayedStudents() {
            let offers = this.offers;

            if (this.search) {
                const searchLower = this.search.toLowerCase();

                offers = offers.filter(offer =>
                    Object.values(offer).some(value =>
                        String(value).toLowerCase().includes(searchLower)
                    )
                );
            }

            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;

            return offers.slice(start, end);
        },
        maxPage() {
            return Math.ceil(this.offers.length / this.itemsPerPage);
        }
    },
    methods: {
        async fetchOffers() {
            try {
                const userId = localStorage.getItem('userId');
                const response = await axios.get('https://napoleon-p829.onrender.com/offer/getoffers', {
                    params: {
                        userId: userId
                    }
                });
                this.offers = response.data;
            } catch (error) {
                console.error('Error fetching offers:', error);
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to fetch offers',
                    life: 3000
                });
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
        gotoDetailsPage(studentid) {
            this.$router.push(`/detailsPage/${studentid}`);
        }
    },
    mounted() {
        this.fetchOffers();
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
    align-items: center;
    justify-content: center;

    @media (max-width: 512px) {
        width: 100%;
        margin: 0 0 0 0;
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

    @media (max-width: 512px) {
        width: 200%;
        height: 100%;
        margin: 10vw 0 0 90vw;

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

    @media (max-width: 512px) {
        width: 250%;
        margin: 0 0 0 0;
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

    @media (max-width: 512px) {
        width: 180%;
        margin: 0 0 0 50vw;
        font-size: small;
        padding: 4px;
        height: 1vh;
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

    @media (max-width: 512px) {
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

    @media (max-width: 512px) {
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
.detailsSearchContainer {
    width: 90%;
    height: 1vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1vw 0 0 0;
}

@media (max-width: 512px) {
    .detailsSearchContainer {
        width: 100vw;
        margin: 3vh 0 0 0;
        justify-content: center;
    }
}

.detailsSearch {
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
}

.detailsSearch:focus {
    outline: none;
}

.detailsSearch::placeholder {
    color: var(--text);
}

@media (max-width: 512px) {
    .detailsSearch {
        width: 90vw;
        height: 4vh;
        font-size: small;
        border-radius: 0.4rem;
        padding: 10px 10px 10px 10px;
    }
}

</style>