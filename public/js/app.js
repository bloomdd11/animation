// module
import { TabBar } from './tabbar.js';
import { UI } from './dom.js';

let tabBar = new TabBar();
let ui = new UI();


// pre value
tabBar.displayLinkBody('none', 'all');
tabBar.displayLinkBody('block', 'kaung');
tabBar.changeLinkColor('kaung');
let displayLinkBodySwitch = false;


// event
ui.navlinkItems.forEach(e => {
    e.addEventListener('click', () => {
        let dataAttribute = e.getAttribute('data-target');
        if (!displayLinkBodySwitch) {
            tabBar.displayLinkBody('none', 'all');
            tabBar.displayLinkBody('block', dataAttribute);

            tabBar.changeLinkColor('all');
            tabBar.changeLinkColor(dataAttribute);
        }
    })
})