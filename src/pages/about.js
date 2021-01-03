import React from "react"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const AboutPage = ({ data }) => (

  <Layout>
    <SiteMetadata title="Sobre nós" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">

            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              Sobre nós
            </h1>

            <div className="mt-4 leading-loose text-gray-800">
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

    <div className="bg-gray-0">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">

          <div className="w-full pb-12">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              Redes sociais
            </h1>
          </div>

          <div className="w-full md:w-1/3 pb-8 pt-2 md:pb-0 md:px-5">
            <div className="flex justify-center pb-5">
              <a
                href="https://www.instagram.com/ambiental.ist/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 text-green-color-hover transition duration-150 ease-in-out"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className=" w-10 h-10 fill-current" />
              </a>
            </div>

            <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
              Instagram
            </h2>
            <div className=" text-gray-800 text-center leading-loose">
              @ambiental.ist
            </div>
          </div>

          <div className="w-full md:w-1/3 pb-8 md:pb-0 md:px-5">
            <div className="flex justify-center pb-5">
              <a
                href="https://www.facebook.com/ambientalist.tecnico"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 text-green-color-hover transition duration-150 ease-in-out"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className=" w-10 h-10 fill-current" />
              </a>
            </div>
            <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
              Facebook
            </h2>
            <div className="text-gray-800 text-center leading-loose">
              @ambientalist.tecnico 
            </div>
          </div>

          <div className="w-full md:w-1/3 pb-8 md:pb-0 md:px-5">
            <div className="flex justify-center pb-5">
              <a
                href="https://linkedin.com/company/ambientalist"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 text-green-color-hover transition duration-150 ease-in-out"
              >
                <span className="sr-only">Linkedin</span>
                <FaLinkedin className=" w-10 h-10 fill-current" />
              </a>
            </div>
            <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
              LinkedIn
            </h2>
            <div className="text-gray-800 text-center leading-loose">
              ambientalist
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
          </div>
        </div>
      </div>
    </div>

    {/*<Newsletter />*/}

  </Layout>

)

export default AboutPage
