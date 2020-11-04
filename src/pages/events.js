import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
// import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Eventos" description="Grupo de estudantes do Instituto Superior Técnico." />
      
      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Eventos
              </h1>

              {/*<!--<h2 className="text-xl leading-tight font-semibold tracking-tight green-color sm:text-2xl">
                Grupo de estudantes ambientalista do Instituto Superior Técnico.
              </h2>*/}
              <div className="mt-4 leading-loose">
                O AmbientalIST foi criado com o objetivo de aumentar a consciencialização entre os estudantes e a comunidade do IST para as alterações climáticas e problemas ambientais delas derivados. Os colaboradores do AmbientalIST acreditam que há muito a fazer no que toca a alcançar uma sociedade que priorize a sustentabilidade ambiental mas propõe-se a fazer os possíveis para ajudar a construí-la promovendo mudanças de paradigma na sua comunidade local.
                <br />
                <br />
                Contacta-nos:
                <br />
                <a
                  href="mailto:ambientalist.sa@aeist.pt"
                  className="border-b border-gray-500 border-green-color-hover text-green-color-hover"
                >
                  ambientalist.sa@aeist.pt
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
              <img alt="Logo" src="logo_small.png" />
            </div>
          </div>
        </div>
      </div>
    
    </Layout>
  )
}

export default IndexPage
