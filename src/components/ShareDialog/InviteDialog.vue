<template>
    <v-menu
            min-width="334"
            :close-on-content-click="false"
            offset-y>
        <template v-slot:activator="{ on }">
            <v-btn
                    color="primary"
                    dark
                    v-on="on"
            >
                Share
            </v-btn>
        </template>

        <v-card>

            <v-container grid-list-md>
                <h2 class="headline mb-3">Invite peoples</h2>

                <div class="invite-link-form">
                    <v-text-field
                            solo-inverted
                            label="email"
                            v-model="iviteEmail"
                    ></v-text-field>

                    <v-btn
                            @click="sendInvite"
                            block>Send invite</v-btn>
                </div>

                <div class="invite-link-actions">
                    <div class="invite-link-actions__title font-weight-medium grey--text darken-2--text">Invite by link</div>
                    <div class="invite-link-actions__text font-weight-light">Anyone with a link can join as member.</div>

                    <v-btn class="mx-0 blue-grey lighten-1"
                           small
                           @click="onClickCreateLink"
                    >{{inviteLink ? 'Disable' : 'Create'}} link</v-btn>

                    <div class="invite-link-actions__invite-link"
                        v-if="inviteLink"
                    >
                        <v-text-field
                                autofocus
                                ref="inviteInput"
                                readonly
                                :value="inviteURL"
                                @focus="selectInviteInput"
                        >
                        </v-text-field>
                        <v-btn
                                @click="onClickCopyLink"
                                small
                                class="my-0">
                            Copy</v-btn>
                    </div>
                </div>

            </v-container>


        </v-card>
    </v-menu>
</template>

<script src="./InviteDialog.ts" lang="ts"></script>
<style src="./inviteMenu.stylus" lang="stylus" scoped></style>
