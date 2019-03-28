<template>
    <div>
        <div class="sign-up">
            <div class="sign-up__header">
                <div class="sign-up__header-title">Hello there!</div>
                <div class="sign-up__header-subtitle">We're almost done. Before using our services you need to create an account.</div>
            </div>


            <v-form
                    ref="form"
                    v-model="valid"
            >

                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        type="email"
                        required
                        solo
                        prepend-inner-icon="email"
                        color="green"
                        dark
                ></v-text-field>

                <div class="sign-up__password">
                    <v-text-field
                            name="password"
                            label="Password"
                            solo
                            prepend-inner-icon="lock"
                            v-model="password"
                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                            :rules="[passwordRules.required, passwordRules.min]"
                            :type="showPassword ? 'text' : 'password'"
                            color="green"
                            dark
                            @click:append="showPassword = !showPassword"
                    ></v-text-field>

                    <div class="sign-up__password-status">
                        <v-progress-linear
                                :value="progress()"
                                :color="color()"
                                height="5"
                        ></v-progress-linear>
                        <div v-if="password.length >= 6"
                             class="sign-up__password-status-text"
                             v-bind:class="color() + '--text'"
                        >
                            {{passwordStatus}}
                        </div>
                    </div>

                </div>


                <v-btn
                        v-bind:block="true"
                        @click="onSubmit"
                        color="success">
                    SignUp
                </v-btn>
            </v-form>
            <v-btn
                    block
                    @click="changeComponent('Login')"
                    color="light-blue darken-1">
                Login
            </v-btn>
        </div>
    </div>
</template>

<script src="./SignUp.ts" lang="ts"></script>

<style src="./sign-up.stylus" lang="stylus" scoped></style>
