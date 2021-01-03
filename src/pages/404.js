import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const ErrorPage = () => (
  <Layout>
    <SiteMetadata title="Error 404" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />

    <div className="bg-gray-100">
      <div className="container py-12 pb-64 lg:pb-128">
        <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            Ooops
          </h1>
          <h2 className="text-xl pt-4 leading-tight font-semibold tracking-tight text-gray-600 sm:text-2xl">
            Página não encontrada.
          </h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default ErrorPage
