<script>
    export let src;
    export let height = 1;
    $: c_height = `h-${height}`;
</script>

<div class="bg-parallax {c_height}" style="--parallax-img: url({src})"></div>

<style lang="scss">
    @import '_variables';

    .bg-parallax {
        background-attachment: fixed;
        background-blend-mode: color-burn;
        background-color: #00000080;
        background-image: var(--parallax-img);
        background-size: cover;
        background-position: center;
    }
</style>