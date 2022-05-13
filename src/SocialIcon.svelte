
<script>
    export let location;
    export let ariaLabel;
    export let icon;

    $: faIcon = `fa-${icon}`;
</script>

<a href="{location}" target="_blank" rel="noopener noreferrer" aria-label="{ariaLabel}" >
    <i class="fab {faIcon}"></i>
</a>

<style lang="scss">
    @import "_variables";
    
    a, a:visited {
        color: $color-white;
    }

    a:hover {
        color: $text-color-light;
        text-decoration: none;
    }
</style>
