import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home" />
            <h1>Contact Us</h1>
            <p>Please send all inqueries to: </p>
            <div>{company}</div>
            <div>{'C/O ${name}'}</div>
            <div>{address}</div>
            <div style={{ maxWidth: }}
        </Layout>
    )
}