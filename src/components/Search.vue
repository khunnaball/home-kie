<template>
    <div>
        <form id="form" role="search" @submit.prevent="search()">
            <input type="search" id="query" v-model="query" :placeholder="placeholder()" autocomplete="off" ref="searchBox">
        </form>
    </div>
</template>

<script>
import { config } from "../../config.js";

export default {
    data() {
        return {
            query: "",
            engines: {
                google: {
                    url: "https://www.google.com/search?q=",
                    display: "Google",
                },
                ddg: {
                    url: "https://duckduckgo.com/?q=",
                    display: "DuckDuckGo",
                },
            }
        }
    },
    mounted() {
        if (config.autoFocusBar) {
            this.$refs.searchBox.focus();
        }
    },
    methods: {
        search() {
            const searchEngine = config.searchEngine;
            const url = this.engines[searchEngine].url + this.query + '&ia=web';
            window.open(url, '_self');
        },
        placeholder() {
            if (config.barPlaceholder === "") {
                return this.engines[config.searchEngine].display;
            } else {
                return config.barPlaceholder;
            }
        }
    }
}
</script>

<style scoped>

div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    margin: 15px;
}

form {
    background-color: #121314;
    width: 25%;
    height: 35px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
}

input:focus {
    outline: red;
}

::placeholder {
    color: #524e5f;
    opacity: 0.7; 
}

input {
    background-color: unset;
    font: 16px 'SpaceMono-regular';
    color: #2bff00;
    height: 100%;
    width: 100%;
    padding: 6px 10px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    /* caret-color: transparent; */
}

input:focus::placeholder {
    color: transparent;
}
</style>