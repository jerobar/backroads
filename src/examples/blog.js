import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const blog = props => (
  <>
    <Layout>
      hello from blog <Link to='/'>link</Link>
      <h1>title: {props.data.site.siteMetadata.title}</h1>
    </Layout>
  </>
)

// Will be in props.data
export const query = graphql`
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

export default blog
