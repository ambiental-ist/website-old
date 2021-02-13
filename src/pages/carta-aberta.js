import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

import BackgroundSection from "../components/BackgroundSection"

const IndexPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Carta aberta" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />

      <BackgroundSection>
        <div className="container py-12 lg:pb-16 h-56 flex flex-wrap content-center">
          <div className="w-full">
            <h1 className="text-3xl leading-tight text-center font-extrabold tracking-tight text-white sm:text-4xl">
              Carta Aberta Universitária pelo Clima
            </h1>
          </div>
        </div>
      </BackgroundSection>

      <div className="bg-gray-0">
        <div className="container py-12 lg:py-16">
          <div className="flex justify-center flex-wrap">

            <div className="max-w-2xl pb-8">
              <h2 className="pb-10 text-xl text-center leading-tight tracking-tight text-gray-600 sm:text-2xl">
                  Movimento universitário pela declaração de <b>emergência climática</b> e <b>neutralidade carbónica</b> nas instituições de ensino superior portuguesas.
              </h2>
              <div className="pb-10 text-center">
                <Img
                    fluid={data.logo.childImageSharp.fluid}
                    alt="CartaAbertaLogo"
                    className="w-12 inline-block align-middle"
                  />
              </div>
              <div className="mt-4 leading-loose text-gray-800">
                <p className='pb-5'>Caros líderes de instituições portuguesas de ensino superior,</p>
                <p className='pb-5'>Vivemos uma situação de emergência. A sua multidisciplinaridade, interseccionalidade e complexidade fazem dela uma ameaça sem precedentes na História da Humanidade, mas é sobretudo a velocidade a que se aproximam as suas consequências, que já se fazem sentir hoje, que dita a urgência com a qual a devemos enfrentar. Trata-se da crise climática e é a maior ameaça existencial que a nossa espécie alguma vez enfrentou, o que apenas reforça a imperatividade de a encarar com a maior brevidade e rigor possíveis.</p>
                <p className='pb-5'>Os efeitos negativos da ação imponderada do ser humano sobre o planeta Terra são notórios e continuarão a crescer indefinidamente a menos que levemos a cabo alterações sociais drásticas. Constituindo as instituições de ensino pólos de mudança e de pensamento crítico e racional, deverão encontrar-se sempre na linha da frente da resposta aos problemas que a sociedade enfrenta, concretamente no caso da crise climática.</p>
                <p className='pb-5'>Só conseguiremos resolver verdadeiramente esta crise (e não apenas aliviar os seus sintomas) através de um empenho coletivo a nível mundial, de medidas governamentais ambiciosas e de colaboração entre países e organizações supranacionais. No entanto, a chave para a mudança global passa também pelo investimento a nível local: só uma sociedade constituída por comunidades com um forte sentido de dever social e ambiental se poderá aproximar da justiça climática. As faculdades e as suas políticas têm uma importância e impacto que não devem ser subestimados, pois ao criar mudanças nas suas comunidades locais têm o potencial de as impulsionar e espalhar por outros locais, organismos e instituições de poder, servindo assim de exemplo a replicar pelo resto da sociedade e promovendo mudanças de paradigma de larga escala.</p>
                <p className='pb-5'>Os estudantes de várias instituições de ensino portuguesas unem-se sob o apelo desta Carta Aberta, em nome do clima e de quem sofre atualmente e sofrerá cada vez mais no futuro pelos efeitos das alterações climáticas, procurando reavivar a luta estudantil por um planeta saudável e um futuro justo e digno para todos. Vimos por este meio pedir às nossas instituições de ensino que declarem Emergência Climática.</p>
                <p className='pb-5'>Este ato não poderá ser apenas simbólico e deverá, imperativamente, ser acompanhado de um compromisso sério de implementação de medidas concretas e coerentes com esta mesma declaração. Deste modo, vimos exigir ainda que as nossas faculdades alcancem neutralidade carbónica até 2030. Este objetivo está em conformidade com a ciência climática atual, aproximando Portugal do previsto pelo Painel Intergovernamental sobre Mudanças Climáticas das Nações Unidas como necessário para alcançar os objetivos expostos no Acordo de Paris. Para além disto, temos também em conta neste objetivo a responsabilidade acrescida que os países do norte global têm para o alcance destes objetivos e a obrigação das faculdades de impulsionar ambiciosamente esta luta. Estas reivindicações são assim realistas tendo em conta esses objetivos, além de estarem em linha com medidas que já estão a ser aplicadas em instituições de ensino internacionais, no âmbito de movimentos universitários de cariz semelhante.</p>
                <p className='pb-5'>Este movimento é subscrito por múltiplos grupos de estudantes distribuídos por várias escolas superiores portuguesas. Tendo em conta que a realidade climática difere entre instituições de ensino, contamos com  estudantes de todo o país para apresentarem linhas de ação concretas e adaptadas às necessidades das suas faculdades, no sentido de alcançarmos o objetivo comum de neutralidade carbónica até 2030 nas nossas instituições. Sendo nós, os estudantes, não só as pessoas que mais lidarão com as consequências das políticas hoje adotadas como também os futuros líderes que as irão enfrentar, mostramos a nossa vontade de mudança, mas também de colaboração no sentido de trazer as nossas instituições de ensino para a linha da frente da luta contra a crise climática.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    
    </Layout>

  )

}

export default IndexPage


export const query = graphql`

  query CartaAbertaQuery {

    logo: file(relativePath: { eq: "logo_carta_aberta.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

  }
`