import * as React from "react"
import { Link } from "gatsby"

import Head from "../components/Head"
import Seo from "../components/seo"

const SecondPage = () => (
  <Head>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Head>
)

// export const Head = () => <Seo title="Page two" />

export default SecondPage
