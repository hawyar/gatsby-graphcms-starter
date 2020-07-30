import React from "react"
import Hero from "../components/sections/Hero"
import Layout from "../components/Layout/Layout"
import Content from "../components/sections/Content"
import Footer from "../components/sections/Footer"
import Newsletter from "../components/sections/Newsletter"
import SEO from "../components/seo/SEO"
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
