<template>
    <div class="goal__steps">
        <div class="goal__steps-form">
            <v-form
                    ref="form"
                    v-model="valid"
                    @keyup.native.enter="onSubmit"
            >
                <div class="goal__steps-form-filed">
                    <v-text-field
                            solo
                            label="Add step"
                            v-model="stepName"
                            :rules="nameRules"
                    ></v-text-field>
                </div>

                <div class="goal__steps-form-filed">
                    <v-textarea
                            name="description"
                            label="Description"
                            v-model="description"
                            auto-grow
                            solo
                    ></v-textarea>
                </div>

                <div class="goal__steps-form-filed">
                    <UIDatePicker
                            label="Deadline"
                            v-model="date"
                            solo
                    ></UIDatePicker>
                </div>
                <v-btn @click="onSubmit">Add step</v-btn>
            </v-form>
        </div>

        <div class="goal__steps-time-line">
            <v-timeline>
                <v-timeline-item
                        v-for="(step, index) in Steps"
                        :key="index"
                        :color="stepStatus(step.done).color"
                        large
                >

                    <template v-slot:icon>
                        <v-btn fab small>
                            <v-icon>{{stepStatus(step.done).icon}}</v-icon>
                        </v-btn>
                    </template>

                    <template v-if="step.deadline" v-slot:opposite>
                        <span>{{normalDate(step.deadline.seconds)}}</span>
                    </template>

                    <v-card class="elevation-2">
                        <v-card-title class="step-list__step-number">{{index+1}}</v-card-title>
                        <v-card-title class="headline">{{step.name}}</v-card-title>
                        <v-card-text>
                            {{step.description}}
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>
    </div>
</template>

<script src="./StepList.ts" lang="ts"></script>

<style scoped>

</style>
