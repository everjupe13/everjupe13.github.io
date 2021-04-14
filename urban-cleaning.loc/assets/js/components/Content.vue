<template>
    <article id="content-box" class="content">
        <div class="content-item">
            <h2 class="content-item__title">{{ title }}</h2>
            <div class="content-item__body">
                <!-- {{ items }} -->
            </div>
        </div>

    </article>
</template>

<script>
export default {
    data() {
        return {
            title: null,
        }
    },
    created() {
        this.title = this.$store.getters.getTitle;
    }
}
</script>