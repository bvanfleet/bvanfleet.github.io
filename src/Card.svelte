<script>
    export let size;

    $: col_size = `col-${size}`;
</script>

<div class="pt-1 {col_size} m-1 border rounded shadow">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
</div>
