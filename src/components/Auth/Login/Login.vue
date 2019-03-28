<template>
    <div>
        <div class="login">
            <div class="login__title">Login</div>
            <v-form
                    ref="form"
                    v-model="valid"
                    @keyup.native.enter="login"
            >
                <div class="login__inputs">
                    <div class="login__input">
                        <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                type="email"
                                required
                                color="light-blue darken-1"
                                prepend-inner-icon="email"
                                solo
                                dark
                        ></v-text-field>
                    </div>
                    <div class="login__input">
                        <v-text-field
                                @click:append="showPassword = !showPassword"
                                @input="clearErrorData"
                                :error-messages="AuthError.message"
                                :type="showPassword ? 'text' : 'password'"
                                :rules="[passwordRules.required]"
                                v-model="password"
                                name="password"
                                label="Password"
                                color="light-blue darken-1"
                                solo
                                dark
                                prepend-inner-icon="lock"
                                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                        ></v-text-field>
                    </div>
                </div>

                <v-btn
                        @click="login"
                        color="light-blue darken-1"
                        class="login__button"
                        block
                >
                    Login
                </v-btn>


            </v-form>
            <button
                    class="login__reset-password-button"
                    @click="changeComponent('ResetPassword')"
            >
                Forgot your password?
            </button>

            <v-btn
                    key="signUp"
                    block
                    @click="changeComponent('SignUp')"
                    color="green"
                >Sign up
            </v-btn>
        </div>
    </div>
</template>

<script src="./Login.ts" lang="ts"></script>

<style src="./login.stylus" lang="stylus" scoped></style>
