import Mirador from 'mirador';
import CustomSidePanel from './components/sidebar';
import miradorDownloadPlugin from './plugins/mirador-dl-plugin';
import { defaultConfig } from './viewerConfig';


const uuid = 'mirador-app';

const elem = document.getElementById(uuid);

const {
  endpoint,
  identifier,
  type,
  language,
  sequence,
} = elem.dataset;

const manifestId = `${endpoint}/api/presentation/${type}/${identifier}/manifest.json`;

const config = { 
  ...defaultConfig, 
  ...{
    id: uuid,
    language,
    windows: [
      {
        manifestId: manifestId,
        imageToolsEnabled: true,
        imageToolsOpen: false,
        canvasIndex: Number(sequence) - 1,
        view: 'single',
        hideWindowTitle: (type === 'photos') ? true: false , // We don't want to show the window title for photos (not metadata to display).
      },
    ],
  },
}

Mirador.viewer(config, [ CustomSidePanel, miradorDownloadPlugin ]);