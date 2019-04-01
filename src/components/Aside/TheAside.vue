<template>
    <div class="aside">
        <v-list>
            <v-list-tile class="aside__profile">
                <div class="aside__profile-photo">
                    <v-avatar

                            color="deep-purple lighten-5"
                    >
                        <span>{{userEmail[0]}}</span>
                    </v-avatar>
                </div>

                <v-list-tile-content>
                    <!--<div class="aside__profile-email">{{userEmail}}</div>-->
                    <v-list-tile-sub-title v-html="userEmail"></v-list-tile-sub-title>
                </v-list-tile-content>

            </v-list-tile>
        </v-list>
        <v-btn @click="logOut">logout</v-btn>


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
