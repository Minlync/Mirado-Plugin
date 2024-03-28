import Mirador from 'mirador'
import MyPlugin from './MyPlugin'
import MyBranding from './MyBranding'

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
const miradorCfg = {
    id: 'mirador',
    windows: [{
        manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
        canvasId: 'https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174892',
        thumbnailNavigationPosition: 'far-bottom',
        allowClose: false,
    }],
    window: {
        allowWindowSideBar: false,
        sideBarPanel: '',
        sideBarOpen: true,
    },
    workspace: {
        type: 'not-mosaic-or-elastic',
    },
};

Mirador.viewer(miradorCfg, [brandingPlugin, myPlugin]);