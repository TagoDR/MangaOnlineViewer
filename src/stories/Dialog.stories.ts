import type { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../ui/components/Dialog.ts';
import { openDialog } from '../ui/components/Dialog.ts';

export default {
  title: 'Components/Dialog',
  component: 'mov-dialog',
  argTypes: {
    open: { control: 'boolean' },
  },
} as Meta;

const DefaultTemplate = () => html`
  <p>Here's the default dialog. Click on the button below to see it. The only thing added here is some text.</p>
  <button @click=${() => openDialog({ $content: document.createTextNode('Hello World') })}>Open Dialog</button>
`;

export const Default = DefaultTemplate.bind({});

const ContentTemplate = () => {
  const open = () => {
    const $content = document.createElement('div');
    $content.innerHTML = `
      <style>
        .custom-dialog-content h2 {
          margin: 0 0 12px;
        }
        .custom-dialog-content p {
          margin: 0;
        }
      </style>
      <div class="custom-dialog-content">
        <h2>Some content</h2>
        <p>Here is some more content. You can put whatever you want in here.</p>
      </div>
    `;
    openDialog({ $content });
  };

  return html`
    <p>Let's try to add some content and see what happens. Click on the button below to see a dialog with some content. It has been customized slightly to look the way it looks. You can of course customize everything as much as you want. More about that later.</p>
    <button @click=${open}>Open Dialog with Content</button>
  `;
};

export const WithContent = ContentTemplate.bind({});

const StickyFooterHeaderTemplate = () => {
  const open = () => {
    const $content = document.createElement('div');
    $content.innerHTML = `
      <header><h2>Sticky Header</h2></header>
      <article>
        <p>This is a long content to demonstrate scrolling.</p>
        <p>${Array(50).fill('Scroll down...').join('<br/>')}</p>
      </article>
      <footer><p>Sticky Footer</p></footer>
    `;
    openDialog({ $content });
  };

  return html`
    <p>That's great and all, but what about a sticky header and footer? No problem at all! Just make sure to use header, article and footer HTML tags for your content. This will style the content in such as way that the footer and header is sticky. Try it yourself below.</p>
    <button @click=${open}>Open Dialog with Sticky Header/Footer</button>
  `;
};

export const StickyHeaderFooter = StickyFooterHeaderTemplate.bind({});

const CustomizedTemplate = () => {
  const open = () => {
    const $content = document.createTextNode('This dialog is customized!');
    const { $dialog } = openDialog({
      $content,
    });
    $dialog.style.setProperty('--dialog-bg', '#333');
    $dialog.style.setProperty('--dialog-color', 'white');
    $dialog.style.setProperty('--dialog-animation-duration', '0s');
    $dialog.style.setProperty('--dialog-max-width', '100vw');
    $dialog.style.setProperty('--dialog-max-height', '100vh');
    $dialog.style.setProperty('--dialog-border-radius', '0');
  };

  return html`
    <p>The dialog can be customized by setting a few CSS variables. Try the dialog below! This one has been modified to fill the entire screen and have no entry animation.</p>
    <button @click=${open}>Open Customized Dialog</button>
  `;
};

export const Customized = CustomizedTemplate.bind({});

const NestedTemplate = () => {
  const openNested = () => {
    openDialog({ $content: document.createTextNode('Nested Dialog') });
  };

  const openFirst = () => {
    const $content = document.createElement('button');
    $content.textContent = 'Open Nested Dialog';
    $content.addEventListener('click', openNested);
    openDialog({ $content });
  };

  return html`
    <p>It is possible to open dialogs within one another! Click on the button below to try it out.</p>
    <button @click=${openFirst}>Open Nested Dialogs</button>
  `;
};

export const Nested = NestedTemplate.bind({});

const CloseButtonTemplate = () => {
  const open = () => {
    const $content = document.createElement('div');
    const { $dialog } = openDialog({ $content });
    $content.innerHTML = `
      <img src="http://placekitten.com/200/300" alt="cute cat"/>
      <button id="close-btn">Close</button>
    `;
    $content.querySelector('#close-btn')!.addEventListener('click', () => $dialog.close());
  };

  return html`
    <p>If you really want, you can add your own close button. Click on the button below to open a dialog with some cute cats and a close button.</p>
    <button @click=${open}>Open Dialog with Close Button</button>
  `;
};

export const WithCloseButton = CloseButtonTemplate.bind({});

const EventsTemplate = () => {
  const open = () => {
    const { $dialog } = openDialog({
      $content: document.createTextNode('Check the console for events'),
    });
    $dialog.addEventListener('open', () => console.log('Dialog opened'));
    $dialog.addEventListener('closing', e => {
      console.log('Dialog closing');
      if (window.confirm('Prevent closing?')) {
        e.preventDefault();
      }
    });
    $dialog.addEventListener('close', () => console.log('Dialog closed'));
  };

  return html`
    <p>The dialog can dispatch 3 different events. The first event is the open event which is dispatched when the dialog opens. The second event is the closing event which is dispatched when the dialog is about to close due to the user clicking on the backdrop or pressing escape. If .preventDefault() is called on this event the dialog won't close. The third event is the close event which is dispatched when the dialog closes. If .result is set on the dialog, the .detail property of the close event will have the value of the result.</p>
    <button @click=${open}>Open Dialog and Check Events</button>
  `;
};

export const Events = EventsTemplate.bind({});
