import { html } from '../utils/code-tag';

const externalScripts: string[] = [
  html` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js"
    integrity="sha512-AvCfbOQzCVi2ctVWF4m89jLwTn/zVPJuS7rhiKyY3zqyCdbPqtvNa0I628GJqPytbowfFjkAGOpq85E5kQc40Q=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>`,
  html` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js"
    integrity="sha512-kfs3Dt9u9YcOiIt4rNcPUzdyNNO9sVGQPiZsub7ywg6lRW5KuK1m145ImrFHe3LMWXHndoKo2YRXWy8rnOcSKg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>`,
  html` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js"
    integrity="sha512-amNoSoOK3jIKx6qlDrv36P4M/h7vc6CHwiBU3XG9/1LW0ZSNe8E3iZL1tPG/VnfCrVrZc2Zv47FIJ7fyDX4DMA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>`,
  html` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"
    integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8="
    crossorigin="anonymous"
  ></script>`,
  html` <script src="https://cdn.jsdelivr.net/npm/sweetalert2-neutral@11.22.2-neutral/dist/sweetalert2.all.min.js"></script>`,
  html` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
    integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>`,
  html` <script
      src="https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js"
      integrity="sha256-CfwzajGV2JBS5lpGVlsM20eqGWnDCT6dY5uMfCXQnUA="
      crossorigin="anonymous"
  ></script>`,
  html` <script
    src="https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js"
    integrity="sha256-KJTc4RYlnMMWuc4r2VjaBulFUWIF5ywlqbekhyENaf8="
    crossorigin="anonymous"
  ></script>`,
  html` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/bowser/2.11.0/bundled.js"
    integrity="sha512-FS3rpwhhjq9Tjt/U+qIrgOIa60xmW+Kr71CSGS5ifKJl/E9DdODyUrtentDS6eRmrfXPRzqq0DhywHd06qpdGw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>`,
  html` <script
    src="https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js"
    integrity="sha512-QX8zbIM1bENBmyyvWXAO/MnnZ+lMLuIxESquZAGbVR+2MOrvpsnosfgYa9h6EiPq9upqsiBa3ft/r1SP5tLhbA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>`,
];
const requiredScripts = externalScripts.map((script: string) => {
  const find = /src="(.+?)"/.exec(script);
  return find ? find[1] : '';
});
export { externalScripts, requiredScripts };
