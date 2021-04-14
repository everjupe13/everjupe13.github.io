<template>
    <section>
        <div class="container">
            <img src="/assets/img/logo.png" :alt="message" />
            <p>{{ message }}</p>

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            message: 'Cool vue title!'
        }
    }
}
</script>

<style lang="scss" scoped>
.container {

    text-align: center;

}

img {

    max-width: 200px;

}
p {

    margin-top: 25px;

    font-size: 32px;
    font-weight: 700;

}
</style>
