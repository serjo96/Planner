<template>
    <div class="layout">
        <TheAside></TheAside>
        <GoalForm></GoalForm>
        <v-content>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-content>

        <SnackBar></SnackBar>
    </div>
</template>

<script src="./MainPage.ts" lang="ts"></script>

<style lang="stylus" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
