<template>
    <div class="profile">
        <v-container grid-list-md fluid>
            <h1 class="page-title">Profile</h1>

            <v-layout row wrap>
                <v-flex xs5 lg5 xl4>
                    <div class="profile__card">
                        <div class="profile-user">
                            <div class="profile-user__photo">
                                <v-avatar
                                        @click="uploadPhotoDialog = true"
                                        size="180"
                                        class="profile-user__photo-avatar"
                                        color="deep-purple lighten-5">
                                    <img v-if="User.photoURL" :src="User.photoURL" alt="profile">
                                    <div v-if="!User.photoURL">{{User.displayName ? User.displayName[0] : User.email[0]}}</div>
                                </v-avatar>
                            </div>


                            <div class="profile-user__info">
                                <div class="profile-user__info-item">
                                    <div class="profile-user__info-item-title">Name:</div>
                                    <div class="profile-user__info-item-content">
                                        <span>{{User.displayName}}</span>
                                        <v-btn class="profile-user__info-item-content-edit-button" @click="editName = !editName" icon>
                                            <v-icon size="18">edit</v-icon>
                                        </v-btn>
                                    </div>
                                    <div v-if="editName" class="profile-user__info-item-edit">
                                        <v-text-field
                                                ref="name"
                                                name="userName"
                                                label="Name"
                                                v-model="name"
                                                :rules="nameRules"
                                                solo-inverted
                                                single-line
                                                prepend-inner-icon="person"
                                        ></v-text-field>
                                        <div class="profile-user__item-edit-buttons">
                                            <v-btn @click="editName = false">Cancel</v-btn>
                                            <v-btn @click="onChangeName">Save</v-btn>
                                        </div>
                                    </div>
                                </div>


                                <div class="profile-user__info-item">
                                    <div class="profile-user__info-item-title">Email address:</div>
                                    <div class="profile-user__info-item-content">
                                        <span>{{User.email}}</span>
                                        <v-btn class="profile-user__info-item-content-edit-button" @click="editEmail = !editEmail" icon>
                                            <v-icon size="18">edit</v-icon>
                                        </v-btn>

                                    </div>

                                    <div v-if="editEmail" class="profile-user__info-item-edit">
                                        <v-text-field
                                                ref="emailRef"
                                                v-model="email"
                                                :rules="emailRules"
                                                label="E-mail"
                                                type="email"
                                                required
                                                color="light-blue darken-1"
                                                prepend-inner-icon="email"
                                                solo-inverted
                                                single-line
                                        ></v-text-field>

                                        <v-text-field
                                                @click:append="showPassword = !showPassword"
                                                :type="showPassword ? 'text' : 'password'"
                                                :rules="passwordRule"
                                                ref="passwordRef"
                                                v-model="password"
                                                name="password"
                                                label="Password"
                                                color="light-blue darken-1"
                                                solo-inverted
                                                single-line
                                                prepend-inner-icon="lock"
                                                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                                        ></v-text-field>
                                        <div class="profile-user__item-edit-buttons">
                                            <v-btn @click="editEmail = false">Cancel</v-btn>
                                            <v-btn @click="onChangeEmail">Save</v-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </v-flex>

                <v-flex xs7 lg7 xl8>
                    <div class="profile__card">
                        <div class="profile-statistic">
                            some statistic
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

        <ImageSelector v-if="uploadPhotoDialog" v-model="uploadPhotoDialog"></ImageSelector>
    </div>
</template>

<script src="./Profile.ts" lang="ts"></script>

<style src="./Profile.stylus" lang="stylus" scoped></style>
