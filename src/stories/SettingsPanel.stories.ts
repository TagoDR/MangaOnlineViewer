import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { getLocaleString, setAppStateValue } from '../core/settings';

// Import all the necessary components to ensure they are defined for the story.
// This includes the main panel, all its child sections, and any components they use.
import '../elements/SettingsPanel.ts';
import '../elements/SettingsPanelGeneral.ts';
import '../elements/SettingsPanelTheme.ts';
import '../elements/SettingsPanelLoading.ts';
import '../elements/SettingsPanelZoom.ts';
import '../elements/SettingsPanelOthers.ts';

// The Meta object configures the component's story page
export default {
  title: 'Panels/Settings Panel',
  component: 'mov-settings-panel',
  tags: ['autodocs'],
  parameters: {
    // Disable controls for this story as it's controlled via a button
    controls: { disable: true },
    // Provide a brief explanation of how this story works
    docs: {
      description: {
        story: `
          This story demonstrates the full Settings Panel. The panel's visibility
          is controlled by a global store, just like in the real application.
          <br/><br/>
          Click the <strong>'Open Settings'</strong> button to trigger the store change
          and open the drawer. The panel will close itself when you click the backdrop,
          as it's designed to do.
        `,
      },
    },
  },
  // The render function sets up the environment for the component to work.
  render: () => {
    // Ensure the panel is closed when the story first loads.
    setAppStateValue('panel', 'none');

    return html`
      <group-layout justify="space-between">
        <div style="padding: 2rem;">
          <wa-button
            variant="brand"
            appearance="filled"
            @click=${() => setAppStateValue('panel', 'settings')}
          >
            Open Settings
          </wa-button>
        </div>
        <stack-layout>
          <div class="wa-gap-2xs">
            <wa-callout variant="neutral">
              <wa-icon
                slot="icon"
                name="settings"
                label="Settings"
              ></wa-icon>
              <strong>Neutral</strong>
            </wa-callout>
            <wa-button
              appearance="accent"
              variant="neutral"
              >Accent</wa-button
            >
            <wa-button
              appearance="filled outlined"
              variant="neutral"
              >Filled + Outlined</wa-button
            >
            <wa-button
              appearance="filled"
              variant="neutral"
              >Filled</wa-button
            >
            <wa-button
              appearance="outlined"
              variant="neutral"
              >Outlined</wa-button
            >
            <wa-button
              appearance="plain"
              variant="neutral"
              >Plain</wa-button
            >
          </div>
          <div class="wa-gap-2xs">
            <wa-callout variant="brand">
              <wa-icon
                slot="icon"
                name="info-circle"
                label="Info"
              ></wa-icon>
              <strong>Brand</strong>
            </wa-callout>
            <wa-button
              appearance="accent"
              variant="brand"
              >Accent</wa-button
            >
            <wa-button
              appearance="filled outlined"
              variant="brand"
              >Filled + Outlined</wa-button
            >
            <wa-button
              appearance="filled"
              variant="brand"
              >Filled</wa-button
            >
            <wa-button
              appearance="outlined"
              variant="brand"
              >Outlined</wa-button
            >
            <wa-button
              appearance="plain"
              variant="brand"
              >Plain</wa-button
            >
          </div>
          <div class="wa-gap-2xs">
            <wa-callout variant="success">
              <wa-icon
                slot="icon"
                name="circle-check"
                label="Success"
              ></wa-icon>
              <strong>Success</strong>
            </wa-callout>
            <wa-button
              appearance="accent"
              variant="success"
              >Accent</wa-button
            >
            <wa-button
              appearance="filled outlined"
              variant="success"
              >Filled + Outlined</wa-button
            >
            <wa-button
              appearance="filled"
              variant="success"
              >Filled</wa-button
            >
            <wa-button
              appearance="outlined"
              variant="success"
              >Outlined</wa-button
            >
            <wa-button
              appearance="plain"
              variant="success"
              >Plain</wa-button
            >
          </div>
          <div class="wa-gap-2xs">
            <wa-callout variant="warning">
              <wa-icon
                slot="icon"
                name="alert-triangle"
                label="Warning"
              ></wa-icon>
              <strong>Warning</strong>
            </wa-callout>
            <wa-button
              appearance="accent"
              variant="warning"
              >Accent</wa-button
            >
            <wa-button
              appearance="filled outlined"
              variant="warning"
              >Filled + Outlined</wa-button
            >
            <wa-button
              appearance="filled"
              variant="warning"
              >Filled</wa-button
            >
            <wa-button
              appearance="outlined"
              variant="warning"
              >Outlined</wa-button
            >
            <wa-button
              appearance="plain"
              variant="warning"
              >Plain</wa-button
            >
          </div>
          <div class="wa-gap-2xs">
            <wa-callout variant="danger">
              <wa-icon
                slot="icon"
                name="alert-circle"
                label="Danger"
              ></wa-icon>
              <strong>Danger</strong>
            </wa-callout>
            <wa-button
              appearance="accent"
              variant="danger"
              >Accent</wa-button
            >
            <wa-button
              appearance="filled outlined"
              variant="danger"
              >Filled + Outlined</wa-button
            >
            <wa-button
              appearance="filled"
              variant="danger"
              >Filled</wa-button
            >
            <wa-button
              appearance="outlined"
              variant="danger"
              >Outlined</wa-button
            >
            <wa-button
              appearance="plain"
              variant="danger"
              >Plain</wa-button
            >
          </div>
        </stack-layout>
      </group-layout>

      <!--
        This is the actual component being tested. It will automatically
        react to the store change triggered by the button above.
      -->
      <mov-settings-panel></mov-settings-panel>
    `;
  },
} satisfies Meta;

// The primary story for the settings panel, showing the drawer interaction.
export const Default: StoryObj = {};

// A new story that renders the panel's content directly for easier testing.
export const ContentOnly: StoryObj = {
  name: 'Content Only (Static)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
          This story renders the inner content of the settings panel directly,
          bypassing the \`<wa-drawer>\` component. This is useful for developing
          and testing the individual setting sections without needing to interact
          with the drawer.
        `,
      },
    },
  },
  render: () => {
    return html`
      <div style="padding: 1rem; max-width: 360px;">
        <fieldset>
          <legend>${getLocaleString('GENERAL')}</legend>
          <mov-settings-general></mov-settings-general>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('THEME')}</legend>
          <mov-settings-theme></mov-settings-theme>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('LOADING')}</legend>
          <mov-settings-loading></mov-settings-loading>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('ZOOM')}</legend>
          <mov-settings-zoom></mov-settings-zoom>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('OTHERS')}</legend>
          <mov-settings-others></mov-settings-others>
        </fieldset>
      </div>
    `;
  },
};
