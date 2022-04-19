<template>
    <div>
        <button class="button" :id="name"><a :target="newTab ? '_blank' : ''" :key="id" :href="link">{{ name }}</a></button>
        <p> | </p>
    </div>
</template>

<script>
import { config } from "../../config";

export default {
    props: {
        name: String,
        link: String,
        id: String,
    },
    data () {
        return {
            newTab: config.openInNewTab
        };
    }
}
</script>

<style scoped >
div {
    display: flex;
}

div:last-child > p:last-child {
    display: none;
}

p {
    font-family: 'SpaceMono-Regular';
    -webkit-text-fill-color: #757575;
    font-size: 12px;
	z-index:1;
}

button {
    all: unset;
    cursor: pointer;
    width: auto;
    height: 10px;
}

.button {
	border: none;
    background: none;
    color: #757575;
    padding: 10px;
    font-size: 16px;
    align-content: center;
    text-align: center;
    font-family: 'SpaceMono-regular';
}

.button:hover {
	border: none;
    background: none;
    color: #C5B3FD;
    padding: 10px;
    font-size: 16px;
    align-content: center;
    text-align: center;
    font-family: 'SpaceMono-regular';
}

a {
    color: inherit; 
    text-decoration: none;
}
</style>