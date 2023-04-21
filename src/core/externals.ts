const externalScripts: string[] = [
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js" integrity="sha512-AvCfbOQzCVi2ctVWF4m89jLwTn/zVPJuS7rhiKyY3zqyCdbPqtvNa0I628GJqPytbowfFjkAGOpq85E5kQc40Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.js" integrity="sha512-B+gr+zLWg81qxVwvtYwKrmjvQtZKD/GGFF7jD80OfzbqFw+NsbS5faEqpCO7Q7oRw1bYi0+WLJf54j8Vm7NADw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" integrity="sha512-kfs3Dt9u9YcOiIt4rNcPUzdyNNO9sVGQPiZsub7ywg6lRW5KuK1m145ImrFHe3LMWXHndoKo2YRXWy8rnOcSKg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js" integrity="sha512-amNoSoOK3jIKx6qlDrv36P4M/h7vc6CHwiBU3XG9/1LW0ZSNe8E3iZL1tPG/VnfCrVrZc2Zv47FIJ7fyDX4DMA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js" integrity="sha512-7x7HoEikRZhV0FAORWP+hrUzl75JW/uLHBbg2kHnPdFmScpIeHY0ieUVSacjusrKrlA/RsA2tDOBvisFmKc3xw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/hotkeys-js@3.10.2/dist/hotkeys.min.js" integrity="sha256-21YfWeuS9DAUH1aGu0dc1LOqiggxce3csX38v/4m8Yg=" crossorigin="anonymous"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js" integrity="sha256-KJTc4RYlnMMWuc4r2VjaBulFUWIF5ywlqbekhyENaf8=" crossorigin="anonymous"></script>',
];
const requiredScripts = externalScripts.map((script: string) => {
  const find = script.match(/src="(.+?)"/);
  return find ? find[1] : '';
});
const externalCSS: string[] = [];
const requiredCSS = externalCSS.map((script: string) => {
  const find = script.match(/href="(.+?)"/);
  return find ? find[1] : '';
});
export { externalScripts, requiredScripts, externalCSS, requiredCSS };
