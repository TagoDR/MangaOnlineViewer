import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../ui/components/Button';
import { themesCSS } from '../ui/themes';
import { createLateStartButton, initialPrompt, lateStart } from '../utils/dialog';

// Mock data for the story
const MOCK_PAGES = 50;
const MOCK_BEGIN = 10;

type Status = 'idle' | 'initial-prompt' | 'initial-canceled' | 'late-start-prompt' | 'success';

@customElement('late-start-story-wrapper')
// @ts-expect-error
class LateStartStoryWrapper extends LitElement {
  @state()
  private status: Status = 'idle';

  @state()
  private message = 'Click "Start" to begin the process.';

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
    // Remove the floating button if it exists
    document.getElementById('StartMOV')?.remove();

    // Find and remove the associated style tag
    const styles = Array.from(document.head.querySelectorAll('style'));
    const lateStartStyle = styles.find(s => s.textContent?.includes('#StartMOV'));
    lateStartStyle?.remove();
  }

  private reset = () => {
    this.cleanup();
    this.status = 'idle';
    this.message = 'Click "Start" to begin the process.';
    this.result = null;
  };

  private startLateStart = async () => {
    this.status = 'late-start-prompt';
    this.message = 'Late start dialog is open. Choose a page range.';
    try {
      const res = await lateStart(MOCK_PAGES, MOCK_BEGIN);
      this.status = 'success';
      this.message = 'Success! Script "ran" with the selected page range.';
      this.result = res;
      this.cleanup();
    } catch (error) {
      this.status = 'initial-canceled'; // Go back to the state with the button
      this.message = 'Late start canceled. Click the floating button to try again.';
    }
  };

  private startInitialPrompt = async () => {
    this.status = 'initial-prompt';
    this.message = 'Initial prompt is open. It will auto-run after 3 seconds or you can cancel.';
    try {
      await initialPrompt(3000);
      this.status = 'success';
      this.message = 'Success! Script "ran" immediately.';
      this.result = null;
    } catch (error) {
      this.status = 'initial-canceled';
      this.message = 'Initial prompt canceled. Click the floating button to start manually.';
      createLateStartButton(this.startLateStart);
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
          this.status === 'idle'
            ? html`<mov-button @click=${this.startInitialPrompt}>Start</mov-button>`
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
  render: () => html`<late-start-story-wrapper></late-start-story-wrapper>`,
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Full Process Simulation',
};
