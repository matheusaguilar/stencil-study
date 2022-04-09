import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    react({
      componentCorePackage: '../../../../stencil-components',
      proxiesFile: '../react-components/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
  plugins: [sass()],
};
