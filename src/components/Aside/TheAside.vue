<template>
    <div class="aside">
        <div class="aside__profile">
            <div class="aside__profile-buttons">
                <v-icon color="blue-grey lighten-1">settings</v-icon>

                <v-btn @click="logOut" icon>
                    <v-icon color="blue-grey lighten-1">exit_to_app</v-icon>
                </v-btn>

            </div>
            <div class="aside__profile-photo">
                <v-avatar color="deep-purple lighten-5">
                    <div v-if="!User.photoURL">{{User.displayName ? User.displayName[0] : User.email[0]}}</div>
                    <img v-if="User.photoURL" :src="User.photoURL" alt="">
                </v-avatar>
            </div>
            <div class="aside__profile-name">
                <div v-if="!User.displayName">{{User.email}}</div>
                <div>{{User.displayName}}</div>
            </div>

        </div>

        <div class="aside__nav">
            <v-btn to="/">Home</v-btn>
            <v-btn to="/goals">Goals</v-btn>
            <v-btn to="/profile">Profile</v-btn>
        </div>


        <v-bottom-nav
                :value="true"
                absolute
                dark
        >
            <v-btn
                    color="teal"
                    flat
                    @click="dialogView(true)"
            >
                Create list
            </v-btn>
        </v-bottom-nav>
    </div>
</template>

<script src="./TheAside.ts" lang="ts"></script>

<style src="./TheAside.stylus" lang="stylus" scoped></style>
