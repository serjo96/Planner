<template>
    <div class="layout">
        <TheAside></TheAside>
        <GoalForm></GoalForm>
        <v-content>
            <router-view></router-view>
        </v-content>

        <SnackBar></SnackBar>
    </div>
</template>

<script src="./MainPage.ts" lang="ts"></script>

<style lang="stylus" scoped>

</style>
