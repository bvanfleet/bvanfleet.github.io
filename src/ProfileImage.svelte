<script>
    export let src;
    export let alt;
</script>

<img src={src} class="img-fluid mx-auto d-block profile-img" alt={alt} />

<style lang="scss">
    .profile-img {
        height: 180px;
        border-radius: 100px;
    }
</style>
