let navlinkBody = document.querySelectorAll('.navlink-body');
let navlinkItems = document.querySelectorAll('.navlink-items');

function displayLinkBody(order, target) {
    navlinkBody.forEach(e => {
        let dataAttribute = e.getAttribute('data-body');
        if (target == 'all') {
            e.style.display = 'none';
        }
        if (dataAttribute == target) {
            e.style.display = order;
        }
    })
}
displayLinkBody('none', 'all');
displayLinkBody('block', 'kaung');
let displayLinkBodySwitch = false;
navlinkItems.forEach(e => {
    e.addEventListener('click', () => {
        let dataAttribute = e.getAttribute('data-target');
        if (!displayLinkBodySwitch) {
            displayLinkBody('none', 'all');
            displayLinkBody('block', dataAttribute);
        }
    })
})