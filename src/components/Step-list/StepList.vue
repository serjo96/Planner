<template>
    <div class="steps">
        <div class="steps__form">
            <v-form
                    ref="form"
                    v-model="valid"
                    @keyup.native.enter="onSubmit"
            >
                <v-container
                        grid-list-md
                        fluid
                        class="px-0"
                >
                    <v-layout wrap>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <div class="steps__form-filed">
                                    <v-text-field
                                            solo
                                            label="Add step"
                                            v-model="stepName"
                                            :rules="nameRules"
                                    ></v-text-field>
                                </div>
                            </v-flex>

                            <v-flex xs6>
                                <div class="steps__form-filed">
                                    <UIDatePicker
                                            label="Deadline"
                                            v-model="date"
                                            solo
                                    ></UIDatePicker>
                                </div>
                            </v-flex>

                            <v-flex xs12>
                                <div class="steps__form-filed">
                                    <v-textarea
                                            name="description"
                                            label="Description"
                                            v-model="description"
                                            auto-grow
                                            solo
                                    ></v-textarea>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-layout>

                </v-container>
                <v-btn class="ml-0" @click="onSubmit">Add step</v-btn>
            </v-form>
        </div>

        <div v-if="Steps" class="steps__list">
            <v-timeline>
                <draggable v-model="myList"
                           v-bind="dragOptions">
                    <transition-group name="steps__list-item">
                        <v-timeline-item
                                v-for="(step, index) in Steps"
                                :key="step.name"
                                :color="stepStatus(step.done).color"
                                large
                                class="steps__list-item"
                        >

                            <template v-slot:icon>
                                <v-btn
                                        @click="onChangeStepStatus(Steps, index)"
                                        fab
                                        small
                                >
                                    <v-icon>{{stepStatus(step.done).icon}}</v-icon>
                                </v-btn>
                            </template>

                            <template v-if="step.deadline" v-slot:opposite>
                                <span>Deadline date: {{normalizeDate(step.deadline.seconds)}}</span>
                            </template>

                            <v-card class="elevation-2">
                                <v-card-title class="step-list__step-number">Step {{index+1}}</v-card-title>
                                <v-card-title class="headline">{{step.name}}</v-card-title>
                                <v-card-text>
                                    {{step.description}}
                                </v-card-text>

                                <v-btn @click="deleteStep(Steps, index)">Delete step</v-btn>
                            </v-card>
                        </v-timeline-item>


                    </transition-group>
                </draggable>
            </v-timeline>

            <!--<v-stepper light vertical>-->
                <!--<draggable-->
                        <!--v-model="myList"-->
                        <!--v-bind="dragOptions"-->
                        <!--@end="onEnd"-->
                <!--&gt;-->
                    <!--<transition-group name="steps__list-item">-->
                <!--<div-->
                        <!--v-for="(step, index) in Steps"-->
                        <!--:key="step.name"-->
                <!--&gt;-->
                    <!--<v-stepper-step :step="index+1" :complete="step.done">-->
                        <!--{{step.name}}-->
                    <!--</v-stepper-step>-->

                    <!--<v-stepper-content :step="index+1">-->
                        <!--<v-card class="elevation-2">-->
                            <!--<v-card-title class="step-list__step-number">Step {{index+1}}</v-card-title>-->
                            <!--<v-card-title class="headline">{{step.name}}</v-card-title>-->
                            <!--<v-card-text>-->
                                <!--{{step.description}}-->
                            <!--</v-card-text>-->

                            <!--<v-btn @click="deleteStep(Steps, index)">Delete step</v-btn>-->
                        <!--</v-card>-->
                    <!--</v-stepper-content>-->

                <!--</div>-->
                    <!--</transition-group>-->
                <!--</draggable>-->
            <!--</v-stepper>-->
        </div>
    </div>
</template>

<script src="./StepList.ts" lang="ts"></script>
<style src="./StepList.stylus" lang="stylus" scoped></style>
