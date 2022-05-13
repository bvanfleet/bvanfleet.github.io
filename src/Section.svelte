<script>
    export let id;
</script>

<section id={id}>
    <slot></slot>
</section>

<style lang="scss">
    @import '_variables';

    section {
        padding-bottom: 20px;
        padding-top: 3rem;
        margin-top: -($navbar-buffer);
    }
</style>
