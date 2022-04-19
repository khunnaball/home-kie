<template>
    <div class="button-container">
        <div class="button-row">
            <Bookmark v-for="bookmark in bookmarksOne" :key="bookmark.id" :id="bookmark.id" :link="bookmark.link" :name="bookmark.name"/>
        </div>
        <div class="button-row">
            <Bookmark v-for="bookmark in bookmarksTwo" :key="bookmark.id" :id="bookmark.id" :link="bookmark.link" :name="bookmark.name"/>
        </div>
    </div>
</template>

<script>
import { config } from "../../config";
import Bookmark from "./Bookmark.vue";

export default {
    components: {
        Bookmark
    },
    data() {
        return {
            bookmarksOne: config.firstBookmarksList,
            bookmarksTwo: config.secondBookmarksList
        };
    }
}
</script>

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
</style>