import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vitePlugin as remix, cloudflareDevProxyVitePlugin as remixCloudflareDevProxy } from '@remix-run/dev';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // plugin para polyfills

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    nodePolyfills({
      // Configuração de polyfills
      protocolImports: true, // Habilita polyfills automáticos para módulos de Node.js
    }),
  ],
  resolve: {
    alias: {
      // Fornecer polyfill para 'buffer'
      buffer: 'buffer',
    },
  },
  define: {
    // Definir Buffer globalmente
    global: {},
    'process.env': {}, // Se necessário, pode definir outras variáveis de ambiente
    Buffer: ['buffer', 'Buffer'],
  },
});
