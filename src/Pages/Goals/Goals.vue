<template>
    <v-list two-line>
        <template v-for="(item, index) in goalsData">
            <v-list-tile
                    :key="index"
            >

                <v-list-tile-content>
                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action >
                    <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
                </v-list-tile-action>
            </v-list-tile>

        </template>

    </v-list>
</template>

<script src="./Goals.ts" lang="ts"></script>

<style scoped>

</style>
