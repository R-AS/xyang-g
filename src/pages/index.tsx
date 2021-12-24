import React, { useEffect } from 'react'
import { useSiteStore } from '@/store'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '@/components/layout'
import Seo from '@/components/seo'
import Home from './home'

const IndexPage = () => {
  const setSiteData = useSiteStore(state => state.setSiteData)
  const { site: { siteMetadata = {} } = {} } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)
  
  useEffect(() => {
    setSiteData(siteMetadata)
  }, [])

  return (
    <Layout>
      {/* <Seo title='Home' /> */}
      <Home />
    </Layout>
  )
}

export default IndexPage
