const CLASS = 'visible';

class Sidebar
{
  constructor() {
    this.visible = false;
    this.element = document.getElementById('sidebar-nav');
    this.trigger = document.getElementById('mobile-menu-trigger');

    this.render = () => {
      if (this.visible) {
        this.element.classList.add(CLASS);
        this.trigger.classList.add(CLASS);
        return;
      }
      this.element.classList.remove(CLASS);
      this.trigger.classList.remove(CLASS);
    };

    this.toggle = () => {
      this.visible = !this.visible;
      this.render();
    };

    this.trigger.addEventListener('click', this.toggle);
  }
}


function init() {
  return new Sidebar();
}

export default { init };
