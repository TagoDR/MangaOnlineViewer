import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../ui/components/Button';
import '../ui/components/Icon.ts';
import { themesCSS } from '../ui/themes';
import { displayStartup } from '../ui/Startup.ts';
import '../ui/Startup.ts';

// Mock data for the story
const MOCK_BEGIN = 10;

type Status = 'idle' | 'running' | 'success' | 'canceled';

@customElement('late-start-story-wrapper')
// @ts-expect-error
// biome-ignore lint/correctness/noUnusedVariables: Display
class LateStartStoryWrapper extends LitElement {
  @property({ type: Number })
  maxPages = 50;

  @state()
  private status: Status = 'idle';

  @state()
  private message = 'Click a button to begin the process.';

  @state()
  private result: { begin: number; end: number } | null = null;

  private themeStyleElement: HTMLStyleElement | null = null;

  private injectThemeStyles() {
    if (this.themeStyleElement) return;
    this.themeStyleElement = document.createElement('style');
    this.themeStyleElement.id = 'mov-theme-styles-story';
    this.themeStyleElement.textContent = themesCSS();
    document.head.append(this.themeStyleElement);
  }

  private removeThemeStyles() {
    this.themeStyleElement?.remove();
    this.themeStyleElement = null;
  }

  private cleanup() {
    document.querySelector('script-startup')?.remove();
  }

  private reset = () => {
    this.cleanup();
    this.status = 'idle';
    this.message = 'Click a button to begin the process.';
    this.result = null;
  };

  private startProcess = async (lateStart = false) => {
    this.reset();
    this.status = 'running';
    this.message = lateStart
      ? 'Late start dialog is open. Choose a page range.'
      : 'Initial prompt is open. It will auto-run or you can cancel.';

    try {
      const res = await displayStartup(
        this.maxPages,
        MOCK_BEGIN,
        3000,
        lateStart ? 'late-start-prompt' : 'initial-prompt',
      );
      this.status = 'success';
      this.message = res
        ? 'Success! Script "ran" with the selected page range.'
        : 'Success! Script "ran" immediately.';
      this.result = res;
    } catch (error) {
      this.status = 'canceled';
      this.message = `Process canceled. You can try again. Message: ${error}`;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    this.injectThemeStyles();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
    this.removeThemeStyles();
  }

  protected render() {
    return html`
      <div style="font-family: sans-serif; padding: 1rem; color: var(--theme-text-color)">
        <h2>Manga Online Viewer - Start Process Simulation</h2>
        <p><b>Status:</b> ${this.message}</p>

        ${
          this.status === 'idle' || this.status === 'canceled'
            ? html`<mov-button @click=${() => this.startProcess(false)}
                >Start Full Process</mov-button
              >
              <mov-button @click=${() => this.startProcess(true)}>Start Late Dialog</mov-button>`
            : nothing
        }

        <mov-button @click=${this.reset}>Reset</mov-button>

        ${
          this.result
            ? html`
              <div style="margin-top: 20px;">
                <strong>Result:</strong>
                <pre>${JSON.stringify(this.result, null, 2)}</pre>
              </div>
            `
            : nothing
        }
      </div>
    `;
  }
}

export default {
  title: 'Features/LateStart',
  render: args =>
    html`<late-start-story-wrapper .maxPages=${args.maxPages}></late-start-story-wrapper>`,
  argTypes: {
    maxPages: {
      control: { type: 'number' },
    },
  },
  args: {
    maxPages: 50,
  },
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Full Process Simulation',
};
