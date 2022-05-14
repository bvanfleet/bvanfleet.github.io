<script>
    export let link;
    export let title;
</script>

<li class="nav-item">
    <a href="#{link}" class="nav-link">{title}</a>
</li>

<style lang="scss">
    @import "_variables";
    .navbar-nav {
        li {
            a:hover, a.active {
                color: $text-color-light !important;
                background-color: $navbar-link-bg-color !important;
            }
        }
    }
</style>
