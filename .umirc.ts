import { IConfig } from 'umi-types'

export default {
  hash: true,
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: false,
        antd: true,
        routes: {
          exclude: [/model\.(j|t)sx?$/, /service\.(j|t)sx?$/, /models\//, /components\//]
        },
        locale: false,
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
          level: 2
        },
        title: {
          defaultTitle: 'test-umi',
          useLocale: true
        },
        pwa: false,
        hd: false,
        fastClick: false
      }
    ]
  ]
} as IConfig
