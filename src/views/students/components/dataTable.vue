<template>
    <div class="details_searchContainer">
            <input type="text" class="details_search" v-model="search" placeholder="Search " />
    </div>
    <div class="card">
        <table class = "DataTable">
            <thead class ="table_header">
                <th>S.No</th>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Branch</th>
                <th>Company Name</th>
                <th>Salary Package</th>
                <th>Status</th>
            </thead>

            <tr  class= " table-ContentConatiner" v-for="customer in displayedCustomers" :key="customer.id" @click = gotoDetailsPage(customer.id)>
                <td>{{ customer.id }}.</td>
                <td>{{ customer.name }}</td>
                <td>{{ customer.rollNumber }}</td>
                <td>{{ customer.Branch }}</td>
                <td>{{ customer.CompanyName }}</td>
                <td>{{ customer.SalaryPackage }}</td>
                <td :class="{'Green': customer.Status === 'Approved', 'red': customer.Status !== 'Approved'}">{{ customer.Status }}</td>
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
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';

export default {
    name : "MyDataTable",
    // components: {
    //     DataTable,
    //     Column
    // },
    data() {
        return {
            search : '',
            customers: [
                {
                    id : 101,
                    name : "Monkey D Luffy",
                    rollNumber : "18BCE1234",
                    Branch : "CSE",
                    CompanyName : "Google",
                    SalaryPackage : "10 LPA",
                    Status : "Approved"
                },
                {
                    id : 102,
                    name : "Monkey D luffy",
                    rollNumber : "18BCE1234",
                    Branch : "CSE",
                    CompanyName : "Microsoft",
                    SalaryPackage : "9 LPA",
                    Status : "Rejected"
                },
                {
                    id : 103,
                    name : "Monkey D Luffy",
                    rollNumber : "18BCE1234",
                    Branch : "CSE",
                    CompanyName : "Amazon",
                    SalaryPackage : "8 LPA",
                    Status : "Approved"
                },
            ],
            currentPage : 1,
            itemsPerPage : 8
        };
    },
    computed :{
       displayedCustomers(){
    let customers = this.customers;

    if (this.search) {
        const searchLower = this.search.toLowerCase();

        customers = customers.filter(customer =>
            Object.values(customer).some(value =>
                String(value).toLowerCase().includes(searchLower)
            )
        );
    }

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return customers.slice(start, end);
},
        maxPage (){
            return Math.ceil(this.customers.length / this.itemsPerPage);      
        }
    },
    methods :{
        nextPage(){
            if(this.currentPage < this.maxPage){
                this.currentPage++;
            }
        },
        previousPage(){
            if(this.currentPage > 1){
                this.currentPage--;
            }
        },
        // gotoDetailsPage(id){
        //     this.$router.push(`/admin/detailsPage/${id}`);
        // }
        gotoDetailsPage(){
            this.$router.push('/admin/detailsPage');
        }
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
    margin: 0vw 0 0 0;

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

.details_searchContainer{
    width : 95%;
    height: 4vh;
    display : flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1vw 0 0 0;
}
</style>

