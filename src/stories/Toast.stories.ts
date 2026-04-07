import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { type ToastPlacement, toast } from '../ui/components/Toast';

export default {
  title: 'Components/Toast',
  component: 'mov-toast',
} satisfies Meta;

export const Default: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <mov-button @click=${() => toast.info({ title: 'Info Toast', description: 'This is an information toast.' })}>
        Show Info (Bottom-End)
      </mov-button>
      <mov-button @click=${() => toast.success({ title: 'Success Toast', description: 'Your action was successful!' })}>
        Show Success (Bottom-End)
      </mov-button>
      <mov-button @click=${() => toast.warning({ title: 'Warning Toast', description: 'Please be careful with this action.' })}>
        Show Warning (Bottom-End)
      </mov-button>
      <mov-button @click=${() => toast.error({ title: 'Error Toast', description: 'An error occurred while processing.' })}>
        Show Error (Bottom-End)
      </mov-button>
    </div>
  `,
};

export const Placements: StoryObj = {
  render: () => {
    const placements: ToastPlacement[] = [
      'top-start',
      'top-center',
      'top-end',
      'bottom-start',
      'bottom-center',
      'bottom-end',
    ];

    return html`
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
        ${placements.map(
          p => html`
          <mov-button @click=${() =>
            toast({
              title: p,
              description: `This toast is placed at ${p}`,
              placement: p,
              variant: 'primary',
            })}>
            ${p}
          </mov-button>
        `,
        )}
      </div>
    `;
  },
};

export const Manual: StoryObj = {
  render: () => html`
    <div class="mov-toast-stack mov-toast-stack-bottom-end" style="position: relative; top: auto; right: auto; width: 350px;">
      <mov-toast
        open
        title="Manual Toast"
        description="This toast is rendered directly in the template."
        variant="primary"
        closable
        placement="bottom-end"
      ></mov-toast>
    </div>
  `,
};
