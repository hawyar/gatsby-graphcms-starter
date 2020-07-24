import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout/Layout"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import SEO from "../components/SEO/SEO"
const Index = () => {
  return (
    <div>
      <Layout>
        <SEO title="Home page" />
        <Hero />
        <Content />
        <Newsletter />
        <Footer />
      </Layout>
    </div>
  )
}

export default Index
