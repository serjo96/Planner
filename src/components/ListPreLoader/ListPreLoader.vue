<template>
    <div class="loader-section" v-if="loading">
        <div class="user-list">
            <div class="columns">
                <div class="column is-8">
                    <p class="user-list__header animated-background__header"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                </div>
                <div class="column is-4 right">
                    <router-link class="button is-primary" to="/user">View Person</router-link>
                </div>
            </div>
        </div>

        <div class="user-list">
            <div class="columns">
                <div class="column is-8">
                    <p class="user-list__header animated-background__header"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                </div>
                <div class="column is-4 right">
                    <router-link class="button is-primary" to="/user">View Person</router-link>
                </div>
            </div>
        </div>

        <div class="user-list">
            <div class="columns">
                <div class="column is-8">
                    <p class="user-list__header animated-background__header"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                </div>
                <div class="column is-4 right">
                    <router-link class="button is-primary" to="/user">View Person</router-link>
                </div>
            </div>
        </div>

        <div class="user-list">
            <div class="columns">
                <div class="column is-8">
                    <p class="user-list__header animated-background__header"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                    <p class="user-list__sub animated-background__sub"></p>
                </div>
                <div class="column is-4 right">
                    <router-link class="button is-primary" to="/user">View Person</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./ListPreLoader.ts" lang="ts"></script>

<style lang="stylus" scoped>
    .user-list {
        margin-top: 30px;
        background-color: white;
        padding: 20px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.05);
    .column {
        height: 95px;
    }
    .inner {
        .left {
            width: 50%;
            float: left;
            text-align: left;
        }
    .right {
        width: 50%;
        float: left;
        text-align: left;
        p {
            width: 100%;
            text-align: left;
        }
        }
    }
    .right {
        display: flex;
        align-items: center;
        justify-content: center;
    button {
        background: #4B75FF;
    }
    }
    .user-list__header {
        font-size: 20px;
        font-weight: 700;
    }
    .user-list__sub {
        font-size: 15px;
        margin-top: 10px;
    }
    }
    @keyframes placeHolderShimmer{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }
    .animated-background__header {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: placeHolderShimmer;
        animation-name: placeHolderShimmer;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: #eeeeee;
        background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
        background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        -webkit-background-size: 800px 104px;
        background-size: 800px 104px;
        height: 20px;
        width: 400px;
        position: relative;
    }
    .animated-background__sub {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: placeHolderShimmer;
        animation-name: placeHolderShimmer;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: #eeeeee;
        background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
        background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        -webkit-background-size: 800px 104px;
        background-size: 800px 104px;
        height: 20px;
        width: 200px;
        position: relative;
    }
</style>
