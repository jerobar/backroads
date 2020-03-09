import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// StaticQuery component

// const getSiteData = graphql`
//   query FirstQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `

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

const RegularHeader = () => {
  return (
    <StaticQuery 
      query={getSiteData} 
      render={data => (
        <h1>hello {data.site.siteMetadata.title}</h1>
      )}
    />
  )
}

export default RegularHeader
