<template>
    <div class="details_searchContainer">
        <h2>Available Users</h2>
        <input type="text" class="details_search" v-model="search" placeholder="Search " />
    </div>
    <div class="card">
        <table class="DataTable">
            <thead class="table_header">
                <th><input class= "selectionCheckBox"  type="checkbox" @change="selectAll($event)" /></th>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Email Id</th>
                <th>Role</th>
                <th>Edit</th>
            </thead>
            <tr v-if="displayStudents.length === 0">
                <td colspan="10" class="no-data">No data found.</td>
            </tr>
          
            <tr class="table-ContentConatiner" v-for="student in displayStudents" :key="student.id">
                <td><input class="selectionCheckBox" type="checkbox" v-model="student.selected" @change="updateSelectedStudents" /></td>
                <td v-if="!student.isEditing">{{ student.name }}</td>
                <td v-else><input v-model="student.name" class="editInput" /></td>
                <td v-if="!student.isEditing">{{ student.rollNo }}</td>
                <td v-else><input v-model="student.rollNo" class="editInput" /></td>
                <td v-if="!student.isEditing">{{ student.email }}</td>
                <td v-else><input v-model="student.email" class="editInput" /></td>
                <td v-if="!student.isEditing">{{ student.role }}</td>
                <td v-else><input v-model="student.role" class="editInput" /></td>
                <td>
                    <button class="editButton" @click="editStudent(student)">
                        <i :class="student.isEditing ? 'pi pi-save' : 'pi pi-pen-to-square'" style="font-size: 1.1rem; cursor: pointer; margin-left: 0.5rem;"></i>
                    </button>
                </td>
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
            <button v-if="selectedStudents.length > 0" class="DeleteButton" @click="deleteSelectedStudents">
                Delete Selected
            </button>
        </div>
        <Toast ref="toast" position="top-right" :life="3000"></Toast>
    </div>
</template>
<script>
import axios from 'axios';
import Toast from 'primevue/toast';
export default {
    name: "MyDataTable",
    components: {
        Toast
    },
    data() {
        return {
            search: '',
            students: [],
            currentPage: 1,
            itemsPerPage: 8,
            selectedStudents: []
        };
    },
    computed: {
        displayStudents() {
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
        async fetchStudents() {
            try {
                const response = await axios.get('http://localhost:5000/auth/users'); // Replace with your actual endpoint

                this.students = response.data.map(student => ({
                    ...student,
                    isEditing: false,
                    selected: false
                }));
            } catch (error) {
                console.error('Error fetching students:', error);
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error fetching students',
                    detail: 'An error occurred while fetching students. Please try again later.',
                    life: 3000
                })
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
        async editStudent(student) {
            if (student.isEditing) {
                try{
                    await axios.put('http://localhost:5000/auth/updateusers', 
                        {
                            id: student.id,
                            name: student.name,
                            rollNo: student.rollNo,
                            email: student.email,
                            role: student.role
                        });
                    this.$toast.add({
                        severity: 'success',
                        summary: 'Student details updated',
                        detail: 'Student details updated successfully',
                        life: 3000
                    });
                }
                catch (error) {
                    console.error('Error updating student:', error);
                    this.$toast.add({
                        severity: 'error',
                        summary: 'Error updating student',
                        detail: 'An error occurred while updating student. Please try again later.',
                        life: 3000
                    });
                }
    
                student.isEditing = false;
            } else {
                // Enable editing
                student.isEditing = true;
            }
        },
        selectAll(event) {
            const isChecked = event.target.checked;
            this.displayStudents.forEach(student => {
                student.selected = isChecked;
            });
            this.updateSelectedStudents();
        },
        updateSelectedStudents() {
            this.selectedStudents = this.students.filter(student => student.selected);
        },
        async deleteSelectedStudents() {
            const selectedIds = this.selectedStudents.map(student => student.id);
            console.log(selectedIds); 
            try {
                await axios.delete('http://localhost:5000/auth/deleteusers', 
                { 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: {
                        ids: selectedIds
                    }
                });

                this.$toast.add({
                    severity: 'success',
                    summary: 'Students deleted',
                    detail: 'Selected students deleted successfully',
                    life: 3000
                });
                this.fetchStudents();
            } catch (error) {
                console.error('Error deleting students:', error);
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error deleting students',
                    detail: 'An error occurred while deleting students. Please try again later.',
                    life: 3000
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
.card {
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
}
.DataTable {
    width: 90%;
    height: 90%;
    border: none;
    border-collapse: collapse;
    border-radius: .5rem;
}
.table_header {
    background-color: #18191A;
    color: white;
    text-align: center;
    width: 100%;
    border: none;
    padding: 8px;
    height: 7vh;
    font-size: large;
}
.table-ContentConatiner {
    background-color: #08080B;
    border-bottom: 1px solid rgb(67, 137, 208);
    padding: 8px;
    height: 7vh;
    font-size: larger;
    text-align: center;
    cursor: pointer;
}
.table-ContentConatiner:hover {
    background-color: #18191A;
}
.ButtonContainer {
    width: 85%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    background-color: transparent;
}
.NextButton {
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
}
.NextButton:hover {
    background-color: #D4D4D7;
    color: #8540ca;
}
.PreviousButton {
    width: 8.2rem;
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
}
.PreviousButton:hover {
    background-color: #D4D4D7;
    color: #8540ca;
}
.DeleteButton {
    width: 10rem;
    height: 2.8rem;
    background-color: red;
    border: none;
    color: white;
    font-size: larger;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.DeleteButton:hover {
    background-color: darkred;
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
.selectionCheckBox {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    border-radius: 2rem;
    appearance: none;
    background-color: #fff;
    border: 2px solid #18191A;
    transition: background-color 0.3s, border-color 0.3s;
}
.selectionCheckBox:checked {
    background-color: #18191A;
    border-color: #8540ca;
}
.selectionCheckBox:checked::before {
    content: '✔';
    display: block;
    text-align: center;
    color: #fff;
    font-size: 1rem;
}

.editInput {
    width: 13rem;
    padding: 0.5rem;
    border: 1px solid #18191A;
    background-color: #fff;
    border-radius: 0.5rem;
    transition: border-color 0.3s;
    color: #08080B;
}
.editInput:focus {
    border-color: #8540ca;
    outline: none;
}

.editButton {
    background: linear-gradient(135deg, #18191A, #2C2C2E);
    color: #D4D4D7;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.3s, color 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
}
.editButton:hover {
    background: linear-gradient(135deg, #D4D4D7, #8540ca);
    color: #18191A;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}
.editButton:active {
    background: linear-gradient(135deg, #8540ca, #D4D4D7);
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.no-data {
    text-align: center;
    padding: 8px;
    font-size: larger;
    color: #D4D4D7;
}

</style>
