<template>
    <div class="page-content">
        <div class="goals">
            <h1 class="page-title">Goals</h1>

            <div class="goals__list">
                <transition-group name="goals__list-animation">

                <div
                        v-for="item in goalsData"
                        :key="item.name"
                        class="goals__list-item">

                        <v-layout row wrap>

                            <v-flex xs6>
                                <router-link
                                        class="goals__list-item-link"
                                        :to="`/goal-${item.id}`"
                                >
                                    <v-list-tile-title class="goals__list-item-title" v-html="item.name"></v-list-tile-title>
                                    <v-list-tile-sub-title class="goals__list-item-description" v-html="item.description"></v-list-tile-sub-title>
                                 </router-link>
                            </v-flex>

                            <v-flex xs5>
                                <router-link
                                        class="goals__list-item-link"
                                        :to="`/goal-${item.id}`"
                                >
                                    <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
                                </router-link>
                            </v-flex>

                            <v-flex text-xs-right xs1>
                                <v-menu class="drop-down-menu" bottom light left>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                dark
                                                icon
                                                v-on="on">
                                            <v-icon>more_vert</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-list>
                                        <v-list-tile>

                                                <v-icon size="19" >edit</v-icon>
                                                <v-list-tile-title class="drop-down-menu__text">Edit</v-list-tile-title>

                                        </v-list-tile>

                                        <v-list-tile color="red" @click="deleteGoalFromList(item.id)">

                                                <v-icon size="19" color="red">delete</v-icon>
                                                <v-list-tile-title class="drop-down-menu__text">Delete</v-list-tile-title>

                                        </v-list-tile>
                                    </v-list>
                                </v-menu>


                                <!--<v-btn @click="deleteGoalFromList(item.id)"-->
                                       <!--icon-->
                                       <!--ripple-->
                                       <!--fab-->
                                       <!--dark-->
                                       <!--small-->
                                       <!--color="red"-->
                                <!--&gt;-->
                                    <!--<v-icon>delete</v-icon>-->
                                <!--</v-btn>-->
                            </v-flex>
                        </v-layout>
                    </div>
                </transition-group>
            </div>

            <PreLoader v-if="!requestStatus"></PreLoader>
        </div>
    </div>
</template>

<script src="./Goals.ts" lang="ts"></script>

<style src="./Goals.stylus" lang="stylus" scoped></style>
