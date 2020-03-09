import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import Images from '../examples/Images'

const blog = () => (
  <>
    <Layout>
      <Images />
      hello from blog <Link to='/'>link</Link>
    </Layout>
  </>
)

export default blog
