<template>
    <div>
        <div class="reset-password">
            <div class="reset-password__title">Reset password</div>

            <v-form
                    ref="form"
                    v-model="valid"
            >
                <v-text-field
                        :value="restPasswordMessage ? email : ''"
                        :rules="emailRules"
                        :success-messages="restPasswordMessage"
                        @input="onInput"
                        :error-messages="AuthError.message"
                        label="E-mail"
                        type="email"
                        required
                        color="blue-grey lighten-4"
                        prepend-inner-icon="email"
                        solo
                        dark
                ></v-text-field>


                <v-btn
                        block
                        @click="onSubmit"
                        color="blue-grey lighten-4"
                        class="login__button">
                    Reset password
                </v-btn>
            </v-form>

            <v-btn
                    class="reset-password__buck-navigate"
                    color="light-blue darken-1"
                    @click="changeComponent('Login')">
                <v-icon left dark>arrow_back_ios</v-icon>
                Buck to login
            </v-btn>
        </div>
    </div>
</template>

<script src="./ResetPassword.ts" lang="ts"></script>

<style lang="stylus" scoped>
    .reset-password {
        &__buck-navigate{
            margin-left: 0
        }

        &__title{
            font-weight: 200
            font-size: 2.5rem;
            letter-spacing: 0.05rem;
            margin-bottom: 10px
        }
    }

</style>
