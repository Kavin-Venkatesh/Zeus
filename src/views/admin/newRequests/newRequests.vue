<template>
    <div class= "homeMainContainer">
        <DataTable />
    </div>

</template>
<script>
import DataTable from '../newRequests/components/dataTable.vue'
export default {
    name: 'NewRequests',
    components:{
        DataTable,
    },
    data() {
        return {
            activeButton: 'New Requests'
        }
    },
    methods: {
        setActiveButton(buttonName) {
            this.activeButton = buttonName;
        }
    }
}
</script>
<style scoped>
@import './newRequests.css';
</style>
