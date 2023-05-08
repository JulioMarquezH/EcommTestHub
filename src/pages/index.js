import * as React from "react"
import { Provider } from 'react-redux'
import App from "../components/App"
import "../scss/Index.scss"
import store from "../../store"

const IndexPage = () => (

  <Provider store={store}>
    <App/>
  </Provider>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
