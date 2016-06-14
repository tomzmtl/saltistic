import { render } from 'preact';
import Form from './components/Form';
import sidebar from './sidebar';
import React from 'preact-compat';

document.addEventListener('DOMContentLoaded', () => {
  sidebar.init();

  render(<Form />, document.getElementById('formRender'));
});
