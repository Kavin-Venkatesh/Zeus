<template>
    <div class="Details_mainContainer">
        <div class="studentdetails_header">
            <h1 class="details_subheading">Student Details</h1>
            <input type="text" class="details_search" v-model="search" placeholder="Search " />
        </div>

        <div class="details_batchContainer">
            <div class="details_batchCard" v-for="batch in batchesWithImages" :key="batch._id"
                @click="handleNaviagte(batch._id)">
                <div class="details_BatchImage">
                    <img :src="batch.image" alt="Group" class="pattern_image" />
                </div>
                <div class="detailsNameCard">
                    <h1 class="details_BatchName">Batch : {{ batch.year }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Group1 from '../../../assets/group1.jpg';
import '../studentdetails/studentDetails.css';

export default {
    name: 'OrgraniserStudentsDetails',
    data(){
        return {
            search: '',
            images: [Group1],
            Batches: [
                {
                    _id: '1',
                    year: '2019-2024'
                },
                {
                    _id: '2',
                    year: '2020-2025'
                },
                {
                    _id: '3',
                    year: '2021-2026'
                },
                {
                    _id: '4',
                    year: '2022-2027'
                },{
                    _id: '5',
                    year: '2023-2028'
                },{
                    _id: '6',
                    year: '2024-2029'
                },{
                    _id: '7',
                    year: '2025-2030'
                },{
                    _id: '8',
                    year: '2026-2031'
                },{
                    _id: '9',
                    year: '2027-2032'
                },{
                    _id: '10',
                    year: '2028-2033'
                }

            ], 
        }
    },
    computed: {
        batchesWithImages() {
            if (!this.Batches || !Array.isArray(this.Batches)) {
                return [];
            }

            return this.Batches.map(batch => ({
                ...batch,
                image: this.images[Math.floor(Math.random() * this.images.length)]
            })).filter(batch => {
                return batch.year && batch.year.includes(this.search);
            });
        }
    },
    methods: {
        // handleNaviagte(batchId) {
        //     this.$router.push(`/admin/batchStudentDetails/${batchId}`);
        // }
        handleNaviagte(batchId) {
            console.log(batchId)
            this.$router.push('/organisers/batchStudentDetails');
        }
    }
}
</script>

<style scoped>
@import '../studentDetails/studentDetails.css'
</style>