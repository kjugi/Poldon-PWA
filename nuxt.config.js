module.exports = {
  head: {
    title: 'Poldon WPA',
    meta: [
      { 
        charset: 'utf-8' 
      },
      { 
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1' 
      },
    ]
  },
  build: {
    vendor: [
      'axios'
    ]
  },
  css: [
    {
      src: '~assets/main.scss',
      lang: 'scss'
    }
  ]
}
