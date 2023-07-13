import { appWithTranslation } from 'next-i18next'


import '@/styles/globals.css'

import '@/styles/components/Navbar.css'

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(App)