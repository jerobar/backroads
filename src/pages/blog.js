import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const blog = () => (
  <>
    <Layout>
      hello from blog <Link to='/'>link</Link>
    </Layout>
  </>
)

export default blog
