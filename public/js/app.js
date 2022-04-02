// module
import { TabBar } from './tabbar.js';
import { DropDown } from './dropdown.js';
import { UI } from './dom.js';

// initiate
let tabBar = new TabBar();
let ui = new UI();
let dropdown = new DropDown();

// pre value
tabBar.displayLinkBody('none', 'all');
tabBar.displayLinkBody('block', 'kaung');
tabBar.changeLinkColor('kaung');

dropdown.displayDropDownBody('none', 'all');
dropdown.initiate();

let displayLinkBodySwitch = false;

// for tabbar
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


// for dropdown
ui.dropdownControl.forEach(e => {
    e.addEventListener('click', () => {
        let dataAttribute = e.getAttribute('data-target');
        if (!dropdown.dropDownSwitchArray[dataAttribute]) {
            dropdown.displayDropDownBody('block', dataAttribute);
            dropdown.dropDownSwitchArrayUpdate(dataAttribute);
            dropdown.changeText(dataAttribute);
        } else {
            dropdown.displayDropDownBody('none', dataAttribute);
            dropdown.dropDownSwitchArrayUpdate(dataAttribute);
            dropdown.changeText(dataAttribute);
        }
    })
})