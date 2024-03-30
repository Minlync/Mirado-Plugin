import Mirador from 'mirador'
import MyPlugin from './MyPlugin'
import MyBranding from './MyBranding'
//import CustomSidePanel from './components/side-panel-a/panel/component';

//import CustomSidePanel from 'mirador-custom-panel/es/components/index';
import CustomSidePanel from './components/sidebar'; // check the path and made it import from local file than repository!


const myPlugin = {
    component: MyPlugin,
    target: 'WindowTopBarPluginArea',
    mode: 'add'
};
const brandingPlugin = {
    component: MyBranding,
    target: 'Branding',
    mode: 'wrap'
};

//new add//
const customSidePanelPlugin = {
    component: CustomSidePanel,
    companionWindowKey: 'CustomKey1',
    target: 'WindowSideBarButtons', // assuming this is where you want to add it
    mode: 'add',
  };



const miradorCfg = {
    id: 'mirador',
    windows: [{
        manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
        canvasId: 'https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174892',
        thumbnailNavigationPosition: 'far-bottom',
        allowClose: false,
    }],
    window: {
        allowWindowSideBar: true,
        //allowWindowSideBar: false,
        sideBarPanel: '',
        sideBarOpen: true,
    },
    workspace: {
        type: 'not-mosaic-or-elastic',
    },
};

//Mirador.viewer(miradorCfg, [brandingPlugin, myPlugin]);
Mirador.viewer(miradorCfg, [CustomSidePanel, brandingPlugin, myPlugin]);