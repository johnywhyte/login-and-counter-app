import Head from 'next/head'
import React from 'react';

const Layout = ({title, children}) => {
  return (
    <>
    <Head>
        <title>{title ? `${title} - gradientfi` : 'welcome'}</title>
        <meta name="description" content="login and counter application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
       
            <main>{children}</main>
          
        </div>
    </>
    
  )
}

export default Layout