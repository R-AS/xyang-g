import React from 'react'
import { useSiteStore } from '@/store'

import Header from './Header'
import './layout.css'

interface IProps {
  children: React.ReactDOM
}
const Layout = (props: IProps) => {
  const { children } = props
  const data = useSiteStore(state => state)

  return (
    <>
      <Header siteTitle={data?.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
