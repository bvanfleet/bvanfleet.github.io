<script>
    export let size;
    $: c_size = `col-${size}`;
</script>

<div class="{c_size}">
    <slot></slot>
</div>
