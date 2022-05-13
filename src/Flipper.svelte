<script>
    export let elements;
    export let period;

    let itemNumber = 0;

    function changeHeroText(container, elements) {
        if (itemNumber >= elements.length) {
            itemNumber = 0;
        }
        
        jQuery(container).fadeOut('slow', () => {
            container.text(elements[itemNumber++]);
            jQuery(container).fadeIn('slow');
        })
    }

    jQuery(() => {
        let flipper = jQuery( '#flipper' );
        flipper.text(elements[itemNumber++]);
        setInterval(changeHeroText, period, flipper, elements);
    });
</script>

<h2 class="text-center text-light flipper-text display-3">
    <slot></slot>
    <span class="bb-2" id="flipper" data-period={period} data-items={elements}></span>
</h2>

<style lang="scss">
    .flipper-text {
       margin: auto 0px;
    }

    .bb-2 {
       border-bottom: solid 2px #FFFFFF;
    }
</style>
