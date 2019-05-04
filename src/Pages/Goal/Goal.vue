<template>

    <v-jumbotron
            height="100%"
            :gradient="gradient"
            dark
    >
        <v-container fill-height>
            <v-layout>
                <v-flex>
                    <div v-if="loadingStatus" class="goal">
                        <h1 class="goal__name">{{getGoalData.name}}</h1>
                        <div class="goal__date">
                            <div v-if="getGoalData.createdDate" class="goal__date-created">{{getGoalData.createdDate}}</div>
                            <div v-if="getGoalData.date" class="goal__date-deadline">Goal deadline: {{normalizeDate(getGoalData.date)}}</div>
                        </div>
                        <p class="goal__description" v-if="getGoalData.description">{{getGoalData.description}}</p>
                        <v-btn class="ml-0" @click="onDeleteGoal">Delete goal</v-btn>
                        <InviteDialog></InviteDialog>

                        <StepList
                                :Steps="getGoalData.steps"
                                :GoalId="getGoadId"
                        ></StepList>

                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>

</template>


<script src="./Goal.ts" lang="ts"></script>

<style src="./Goal.stylus" lang="stylus" scoped></style>
