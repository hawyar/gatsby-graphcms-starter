import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout/Layout"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
const Index = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Content />
        <Newsletter />
        <Footer />
      </Layout>
    </div>
  )
}

export default Index
