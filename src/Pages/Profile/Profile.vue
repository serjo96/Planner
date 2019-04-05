<template>


        <div class="profile">
            <v-container grid-list-md fluid>
            <h1>Profile</h1>
            <v-btn @click="updateProfile">Test</v-btn>

                <v-layout row wrap>
                    <v-flex xs5 lg5 xl4>
                        <div class="profile__card">
                            <div class="profile-user">
                                <div class="profile-user__photo">
                                    <v-avatar size="180" color="deep-purple lighten-5">
                                        <img v-if="User.photoURL" :src="User.photoURL" alt="">
                                        <span v-if="!User.photoURL">{{userEmail[0]}}</span>
                                    </v-avatar>
                                </div>

                                <div class="profile-user__name">
                                    <div>{{User.displayName}}</div>
                                </div>

                                <div class="profile-user__info">
                                    <div class="profile-user__info-item">
                                        <div class="profile-user__info-item-title">Email address:</div>
                                        <div class="profile-user__info-item-content">{{User.email}}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </v-flex>

                    <v-flex xs5 lg5 xl4>
                        <div class="profile__card">
                            <div class="profile-statistic">
                                some statistic
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
         </div>

</template>

<script src="./Profile.ts" lang="ts"></script>

<style src="./Profile.stylus" lang="stylus" scoped></style>
