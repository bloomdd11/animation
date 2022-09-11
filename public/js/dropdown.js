import { UI } from './dom.js';

let ui = new UI();

class DropDown {
  dropDownSwitchArray = {};
  initiate() {
    let i = 0;
    ui.dropdownControl.forEach(e => {
      let dataAttribute = e.getAttribute('data-target');
      this.dropDownSwitchArray[dataAttribute] = false;
    })
    console.log(this.dropDownSwitchArray);
  }


  changeText(target) {
    ui.dropdownControl.forEach(e => {
      let dataAttribute = e.getAttribute('data-target');
      if (dataAttribute == target) {
        if (this.dropDownSwitchArray[target]) {
          e.textContent = 'Open';
        } else {
          e.textContent = 'Close';
        }
      }
    })
  }

  displayDropDownBody(order, target) {
    ui.dropdownBody.forEach(e => {
      let dataAttribute = e.getAttribute('data-target-body');
      if (target == 'all') {
        e.style.display = 'none';
      }
      if (dataAttribute == target) {
        e.style.display = order;
        e.style.opacity = 0.5;
        this.dropDownTransform(target);
      }
    })
  };

  dropDownSwitchArrayUpdate(target) {
    ui.dropdownControl.forEach(e => {
      let dataAttribute = e.getAttribute('data-target');
      if (target == dataAttribute) {
        if (!this.dropDownSwitchArray[dataAttribute]) {
          this.dropDownSwitchArray[dataAttribute] = true;
        } else {
          this.dropDownSwitchArray[dataAttribute] = false;
        }
      }
    })
  }

  dropDownTransform(target) {
    ui.dropdownBody.forEach(e => {
      let dataAttribute = e.getAttribute('data-target-body');
      if (target == 'all') {
        e.style.display = 'none';
      }
      if (dataAttribute == target) {
        e.style.transform = 'translateX(10px)';
      }
    })
  }
};

export { DropDown };