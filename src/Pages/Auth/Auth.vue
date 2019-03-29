<template>
    <div class="auth">
        <transition name="fade" mode="out-in">
            <component
                    :class="['auth__form', getAuthComponent === 'SignUp'? 'auth__form--sign-up' :'']"
                    :changeComponent="changeComponent"
                    :is="getAuthComponent"
            ></component>
        </transition>
    </div>

</template>

<script src="./Auth.ts" lang="ts"></script>

<style src="./auth.stylus" lang="stylus" scoped></style>
