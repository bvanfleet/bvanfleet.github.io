<footer class="footer-dark bg-dark">
    <slot></slot>
</footer>

<style lang="scss">
    @import "_variables";
    
    .footer-dark {
        color: $color-white;
        padding: 8px;
        left: 0;
        right: 0;
    }
</style>