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
                                <UIDatePicker
                                        label="Deadline"
                                        v-model="date"
                                ></UIDatePicker>
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
