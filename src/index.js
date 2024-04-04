import Mirador from 'mirador'
import Top from './plugin/Top'
import MyBranding from './plugin/MyBranding'
import CustomSidePanel from './components/sidebar';


const myPlugin = {
    component: Top,
    target: 'WindowTopBarPluginArea',
    mode: 'add'
};
const brandingPlugin = {
    component: MyBranding,
    target: 'Branding',
    mode: 'wrap'
};

const customSidePanelPlugin = {
    component: CustomSidePanel,
    companionWindowKey: 'CustomKey1',
    target: 'WindowSideBarButtons', 
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