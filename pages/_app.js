import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';
import Router from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  


function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
