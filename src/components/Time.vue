<template>
    <div>
        <p id="clock">{{ time }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            interval: null,
            time: null
        };
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    created() {
        this.interval = setInterval(() => {
            this.time = Intl.DateTimeFormat(navigator.language, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format()
        }, 1000);
    }
}
</script>

<style scoped>

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    #clock {
        width: 100%;
        font-size: 60px;
        text-align: center;
        font-family: 'WorkSans-SemiBold';
        color: #757575;
        padding: 10px;
        margin: 0;
    }

    p {
        font-family: 'SpaceMono-Regular';
        -webkit-text-fill-color: #C5B3FD;
        font-size: 17px;
        z-index:1;
    }
</style>
