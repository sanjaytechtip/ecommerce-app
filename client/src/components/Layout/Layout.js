import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';
const Layout = ({children, title, description,keywords,author }) => {
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </Helmet>
        <Header/>
        <main style={{minHeight:"70vh"}}>
        <Toaster />
        {children}
        </main>
        <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title:"Ecommerce App",
  description:"Find online product, mobile, laptop, PC",
  keywords:"mobile, pc, laptop",
  author:"Mohd Shoyeb"

}
export default Layout
