<template>
    <div class = "homeMainContainer">
        <div class="homeHeader">
            <h1 class="homeSubHeading">Available Users</h1>
            <input type="text" class="AvailableUsersSearch" v-model="search" placeholder="Search " />
        </div>
    </div>
</template>

<script>

export default {
        name : "AvailableUsers"
    }
</script>

<style scoped>   
@import '../home/AvailableUsers.css';
</style>
