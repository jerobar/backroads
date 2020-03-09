import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// useStaticQuery hook

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const Header = () => {
  const { site } = useStaticQuery(getSiteData)

  const { title, author } = site.siteMetadata

  return (
    <div>
      <h1>title: {title}</h1>
      <h2>author: {author}</h2>
    </div>
  )
}

export default Header
