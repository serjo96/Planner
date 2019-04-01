<template>
    <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
    >
        <template v-slot:activator="{ on }">
            <v-text-field
                    :value="formattedDate"
                    :label="label"
                    prepend-inner-icon="event"
                    readonly
                    v-on="on"
                    clearable
                    solo
            ></v-text-field>
        </template>
        <v-date-picker v-model="selectedDate" scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="chooseDate">OK</v-btn>
        </v-date-picker>
    </v-menu>
</template>

<script src="./UIDatePicker.ts" lang="ts"></script>

<style scoped>

</style>
