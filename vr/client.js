// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

/* add fonts*/
import * as OVRUI from 'ovrui';
//import * as THREE from 'three';

const fallbackFonts ={
    "../static_assets/fonts/fonts/cjk_0.fnt":"../static_assets/fonts/fonts/cjk_0_sdf.png",
    "../static_assets/fonts/fonts/cjk_1.fnt":"../static_assets/fonts/fonts/cjk_1_sdf.png",
    "../static_assets/fonts/fonts/cjk_2.fnt":"../static_assets/fonts/fonts/cjk_2_sdf.png",
}
var font = OVRUI.loadFont();
var count = 0;

function init(bundle, parent, options) {
  //const scene = new THREE.Scene();
  function addFallback(fallbackFont){
    OVRUI.addFontFallback(font,fallbackFont);
    count--;
    if(count === 0){
      const vr = new VRInstance(bundle, 'ReactVR', parent, {
          // Add custom options here
          font,
          /*scene,*/
          ...options,
      });
      vr.render = function() {
        // Any custom behavior you want to perform on each frame goes here
      };
      // Begin the animation loop
      vr.start();
      return vr;
    }
  }

  //guiSysOptions.font = OVRUI.loadFont();
  for(let key in fallbackFonts){
    count++;
    OVRUI.loadFont(key,fallbackFonts[key]).then((fallbackFont)=>{
      addFallback(fallbackFont)
    })
  }

}

window.ReactVR = {init};
