<script>
    export let src;
</script>

<div id="skills" class="bg-img h-3 p-3" style="--bg-img: url({src})">
    <slot></slot>
</div>

<style lang="scss">
    .bg-img {
        background-blend-mode: color-burn;
        background-color: #00000090;
        background-image: var(--bg-img);
        background-size: cover;
    }
</style>
