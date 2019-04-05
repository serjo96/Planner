<template>
    <div class="goals">
        <h1 class="page-title">Goals</h1>

        <div class="goals__list">
            <transition-group name="goals__list-animation">

            <div
                    v-for="(item, index) in goalsData"
                    :key="index"
                    class="goals__list-item">

                    <v-layout row wrap>

                        <v-flex xs6>
                            <router-link
                                    class="goals__list-item-link"
                                    :to="`/goal-${item.id}`"
                            >
                                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                             </router-link>
                        </v-flex>

                        <v-flex xs4>
                            <router-link
                                    class="goals__list-item-link"
                                    :to="`/goal-${item.id}`"
                            >
                                <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
                            </router-link>
                        </v-flex>

                        <v-flex text-xs-right xs2>
                            <v-btn @click="deleteGoalFromList(item.id)"
                                   icon
                                   ripple
                                   fab
                                   dark
                                   small
                                   color="red"
                            >
                                <v-icon>delete</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </div>
            </transition-group>
        </div>

        <PreLoader v-if="!requestStatus"></PreLoader>
    </div>
</template>

<script src="./Goals.ts" lang="ts"></script>

<style src="./Goals.stylus" lang="stylus" scoped></style>
