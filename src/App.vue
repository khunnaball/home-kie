<template>
  <div id="app">
    <Clock/>
    <Search/>
    <Bookmarks/>
  </div>
</template>

<script>
import Clock from './components/Clock.vue';
import Search from './components/Search.vue';
import Bookmarks from './components/Bookmarks.vue';

export default {
  name: 'App',
  components: {
    Clock,
    Search,
    Bookmarks
  }
}
</script>

<style>
@font-face {
	font-family: 'WorkSans-SemiBold';
	src: url("./assets/fonts/WorkSans-SemiBold.ttf");
}

@font-face {
	font-family: 'SpaceMono-Bold';
	src: url("./assets/fonts/SpaceMono-Bold.ttf");
}

@font-face {
	font-family: 'SpaceMono-Regular';
	src: url("./assets/fonts/SpaceMono-Regular.ttf");
}

body {
  background-color: #171717;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}
</style>
