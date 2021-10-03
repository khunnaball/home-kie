<template>
    <div class="button-container">
        <div class="button-row">
            <button class="button" id="youtube"><a target="_self" style="text-decoration: none" href="https://youtube.com">youtube</a></button>
            <p> | </p>
            <button class="button" id="twitter"><a target="_self" style="text-decoration: none" href="https://twitter.com">twitter</a></button>
            <p> | </p>
            <button class="button" id="twitch"><a target="_self" style="text-decoration: none" href="https://www.twitch.tv/">twitch</a></button>
            <p> | </p>
            <button class="button" id="gmail"><a target="_self" style="text-decoration: none" href="https://mail.google.com/">gmail</a></button>
        </div>
        <div class="button-row">
            <button class="button" id="github"><a target="_self" style="text-decoration: none" href="https://github.com">github</a></button>
            <p> | </p>
            <button class="button" id="reddit"><a target="_self" style="text-decoration: none" href="https://www.reddit.com/">reddit</a></button>
            <p> | </p>
            <button class="button" id="twitter"><a target="_self" style="text-decoration: none" href="https://dev.to">dev.to</a></button>
            <p> | </p>
            <button class="button" id="spotify"><a target="_self" style="text-decoration: none" href="https://spotify.com/">spotify</a></button>
            <p> | </p>
            <button class="button" id="discord"><a target="_self" style="text-decoration: none" href="https://discord.com/">discord</a></button>
        </div>
    </div>
</template>

<style scoped>

.button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.button-row {
    display: flex;
    flex-direction: row;
    height: 50%;
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

/* .buttontext {
    color: #757575;
    font-family: 'SpaceMono-regular';
} */

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
}
</style>