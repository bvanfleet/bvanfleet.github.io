var itemNumber = 0;

$(() => {
    startHeroFlipper();
});

function startHeroFlipper() {
    var flipper = $( '#skill-flipper' );
    const period = flipper.attr('data-period');
    const items = JSON.parse(flipper.attr('data-items'));

    flipper.text(items[itemNumber++]);

    setInterval(changeHeroText, period, flipper, items);
}

/** Changes text in a HERO container to specified text
 * @param {HTMLElement} container Element to update text in
 * @param {string[]} text Collection of strings to set in container
 */
function changeHeroText(container, text) {
    if (itemNumber >= text.length) {
        itemNumber = 0;
    }

    jQuery(container).fadeOut('slow', () => {
        container.text(text[itemNumber++]);
        jQuery(container).fadeIn('slow');
    })
}
