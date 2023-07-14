import { appWithTranslation } from 'next-i18next'


import '@/styles/globals.css'

import '@/styles/components/Navbar.css'
import '@/styles/components/Banner.css'
import '@/styles/components/About.css'

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(App)