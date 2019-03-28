<template>
    <v-dialog
            v-model="modal"
            width="500"
    >
        <v-form
                ref="form"
                v-model="valid"
                @keyup.native.enter="onSubmit"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">Add your goal</span>
                </v-card-title>

                    <v-container grid-list-md>
                        <v-layout wrap>

                            <v-flex xs12>
                                <v-text-field
                                        name="goalName"
                                        label="Goal name"
                                        v-model="name"
                                        :rules="nameRules"
                                        required
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                                <v-textarea
                                        name="description"
                                        label="Description"
                                        v-model="description"
                                        auto-grow
                                        flat
                                        rows="1"
                                        hint="Hint text"
                                ></v-textarea>
                            </v-flex>

                            <v-flex xs12>
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="date"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="date"
                                                label="Deadline"
                                                prepend-icon="event"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-flex>

                        </v-layout>
                    </v-container>


                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialogVisibility(false)">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="onSubmit">Save</v-btn>
                </v-card-actions>
            </v-card>

        </v-form>
    </v-dialog>
</template>

<script src="./GoalForm.ts" lang="ts"></script>

<style scoped></style>
