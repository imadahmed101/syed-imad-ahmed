import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import { layout } from './layout.module.css'

function Layout({ children }) {
  return (
      <div className={ layout }>
      <Header />
      {children}
      <Footer />
      </div>
  )
}

export default Layout