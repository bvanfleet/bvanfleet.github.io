<nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <ul class="navbar-nav">
        <slot></slot>
    </ul>
</nav>

<style lang="scss">
    @import '_variables';

    .navbar {
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }

    .navbar-brand {
        padding: 0px !important;
    }

    .navbar-nav {
        li {
            a:hover, a.active {
                color: $text-color-light !important;
                background-color: $navbar-link-bg-color !important;
            }
        }
    }
</style>
