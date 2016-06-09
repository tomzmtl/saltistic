
let trigger = null;
let element = null;

let visible = false;
const CLASS = 'visible';

function render() {
  if (visible) {
    element.classList.add(CLASS);
    trigger.classList.add(CLASS);
    return;
  }
  element.classList.remove(CLASS);
  trigger.classList.remove(CLASS);
}

function toggle() {
  visible = !visible;
  render();
}

function init() {
  element = document.getElementById('sidebar-nav');
  trigger = document.getElementById('mobile-menu-trigger');
  trigger.addEventListener('click', toggle);
}

export default { init };
