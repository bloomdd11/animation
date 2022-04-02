import { UI } from './dom.js';

let ui = new UI();

class TabBar {
    // methods
    changeLinkColor(target) {
        ui.navlinkItems.forEach(e => {
            let dataAttribute = e.getAttribute('data-target');
            if (target == 'all') {
                e.style.backgroundColor = 'white';
            }
            if (target == dataAttribute) {
                e.style.backgroundColor = 'aqua';
            }
        })
    };

    displayLinkBody(order, target) {
        ui.navlinkBody.forEach(e => {
            let dataAttribute = e.getAttribute('data-body');
            if (target == 'all') {
                e.style.display = 'none';
            }
            if (dataAttribute == target) {
                e.style.display = order;
            }
        })
    }
};

export { TabBar };