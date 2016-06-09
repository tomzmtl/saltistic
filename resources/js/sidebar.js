
let element = null;

let visible = false;
const CLASS = 'visible';

function init() {
  element = document.getElementById('sidebar-nav');
  const trigger = document.getElementById('mobile-menu-trigger');
  trigger.addEventListener('click', toggle);
}

function toggle() {
  visible = !visible;
  render();
}

function render() {
  visible ? element.classList.add(CLASS) : element.classList.remove(CLASS);
}

export default {
  init,
}
