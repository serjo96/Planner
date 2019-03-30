<template>
    <div class="goals">
        <v-list two-line>

            <template v-for="(item, index) in goalsData">
                <router-link :key="index" :to="`/goal-${item.id}`">
                    <v-list-tile>
                        <v-layout row wrap>
                            <v-flex xs7>
                                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                            </v-flex>

                            <v-flex xs3>
                                <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
                            </v-flex>
                        </v-layout>
                    </v-list-tile>
                </router-link>
            </template>
        </v-list>
        <PreLoader v-if="!requestStatus"></PreLoader>
    </div>
</template>

<script src="./Goals.ts" lang="ts"></script>

<style lang="stylus" scoped>
    .goals{
        min-height: 100%;
    }
</style>
