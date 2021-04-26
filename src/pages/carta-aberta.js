import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

import BackgroundSection from "../components/BackgroundSection"
import Button from "../components/Button"
import ShareButtons from "../components/ShareButtons"

const CartaAbertaPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Carta Aberta do Ensino Superior pelo Clima" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />

      <BackgroundSection>
        <div className="container py-12 lg:pb-16 h-56 flex flex-wrap content-center">
          <div className="w-full">
            <h1 className="text-3xl leading-tight text-center font-extrabold tracking-tight text-white sm:text-4xl">
              Carta Aberta do Ensino Superior pelo Clima
            </h1>
          </div>
        </div>
      </BackgroundSection>

      <div className="bg-gray-0">
        <div className="container py-12 lg:py-16">

          {/* Letter. */}
          <div className="flex justify-center flex-wrap">
            <div className="max-w-2xl">
              <h2 className="pb-12 text-xl text-center leading-tight tracking-tight text-gray-600 sm:text-2xl">
                  Movimento universitário pela declaração de <b>emergência climática</b> e <b>neutralidade carbónica</b> nas instituições de ensino superior portuguesas.
              </h2>
              <div className='max-w-2xl mx-auto pb-12'>
                <div className="flex justify-center flex-wrap text-center">
                  <div className="w-full md:w-1/2 pb-8 md:pb-0">
                    <Button href='https://forms.gle/L9MfmgwqGq4G79i69'>Assinar individualmente</Button>
                  </div>
                  <div className='w-full md:w-1/2'>
                    <Button href='https://forms.gle/vxsbbEU6PGwzAmCv6'>Assinar coletivamente</Button>
                  </div>
                </div>
              </div>
              <div className="leading-loose text-gray-800 pb-12">
                <p className='pb-5'>Caros líderes de instituições portuguesas de ensino superior,</p>
                <p className='pb-5'>Vivemos uma situação de emergência. A sua multidisciplinaridade, interseccionalidade e complexidade fazem dela uma ameaça sem precedentes na História da Humanidade, mas é sobretudo a velocidade a que se aproximam as suas consequências, que já se fazem sentir hoje, que dita a urgência com a qual a devemos enfrentar. Trata-se da <b>crise climática</b> e é a maior ameaça existencial que a nossa espécie alguma vez enfrentou, o que apenas reforça a imperatividade de a encarar com a maior brevidade e rigor possíveis.</p>
                <p className='pb-5'>Os efeitos negativos da ação imponderada do ser humano sobre o planeta Terra são notórios e continuarão a crescer indefinidamente a menos que levemos a cabo alterações sociais drásticas. Constituindo as instituições de ensino pólos de mudança e de pensamento crítico e racional, deverão encontrar-se sempre na linha da frente da resposta aos problemas que a sociedade enfrenta, concretamente no caso da crise climática.</p>
                <p className='pb-5'>Só conseguiremos resolver verdadeiramente esta crise (e não apenas aliviar os seus sintomas) através de um empenho coletivo a nível mundial, de medidas governamentais ambiciosas e de colaboração entre países e organizações supranacionais. No entanto, a chave para a mudança global passa também pelo investimento a nível local: só uma sociedade constituída por comunidades com um forte sentido de dever social e ambiental se poderá aproximar da justiça climática. As faculdades e as suas políticas têm uma importância e impacto que não devem ser subestimados, pois ao criar mudanças nas suas comunidades locais têm o potencial de as impulsionar e espalhar por outros locais, organismos e instituições de poder, servindo assim de exemplo a replicar pelo resto da sociedade e promovendo mudanças de paradigma de larga escala.</p>
                <p className='pb-5'>A comunidade estudantil portuguesa une-se sob o apelo desta Carta Aberta, em nome do clima e de quem sofre atualmente e sofrerá cada vez mais no futuro pelos efeitos das alterações climáticas, procurando reavivar a luta estudantil por um planeta saudável e um futuro justo e digno para todas as pessoas. <b>Vimos por este meio pedir às nossas instituições de ensino que declarem Emergência Climática.</b></p>  
                <p className='pb-5'>Este ato não poderá ser apenas simbólico e deverá, imperativamente, ser acompanhado de um compromisso sério de implementação de medidas concretas e coerentes com esta mesma declaração. Deste modo, <b>vimos exigir ainda que as nossas faculdades alcancem neutralidade carbónica até 2030</b>. Este objetivo está em conformidade com a ciência climática atual, aproximando Portugal do previsto pelo Painel Intergovernamental sobre Mudanças Climáticas das Nações Unidas como necessário para alcançar os objetivos expostos no Acordo de Paris. Para além disto, temos também em conta neste objetivo a responsabilidade acrescida que os países do norte global têm para o alcance destes objetivos e a obrigação das faculdades de impulsionar ambiciosamente esta luta. Estas reivindicações são assim realistas tendo em conta esses objetivos, além de estarem em linha com medidas que já estão a ser aplicadas em instituições de ensino internacionais, no âmbito de movimentos universitários de cariz semelhante.</p>
                <p>Este movimento é subscrito por múltiplos grupos de estudantes distribuídos por várias escolas superiores portuguesas. Tendo em conta que a realidade climática difere entre instituições de ensino, contamos com estudantes de todo o país para apresentarem linhas de ação concretas e adaptadas às necessidades das suas faculdades, no sentido de alcançarmos o objetivo comum de neutralidade carbónica até 2030 nas nossas instituições. Sendo nós, a comunidade estudantil, as pessoas que futuramente assumirão a liderança para enfrentar as alterações climáticas, mostramos a nossa vontade de mudança, mas também de colaboração no sentido de trazer as nossas instituições de ensino para a linha da frente da luta contra a crise climática.</p>
              </div>
            </div>
          </div>

          {/* Counters. */}
          <div className='max-w-2xl mx-auto pb-12'>
            <div className="flex justify-center flex-wrap text-center text-gray-600">
              <div className="w-full md:w-1/2 pb-8 md:pb-0">
                <p className="text-xl">Assinaturas individuais</p>
                <p className="text-xs">(atualizado a 26/04/2021)</p>
                <h1 className="text-5xl leading-tight text-center tracking-tight pt-1">
                  1701
                </h1>
              </div>
              <div className='w-full md:w-1/2'>
                <p className="text-xl">Assinaturas coletivas</p>
                <p className="text-xs">(atualizado a 26/04/2021)</p>
                <h1 className="text-5xl leading-tight text-center tracking-tight pt-1">
                  89
                </h1>
              </div>
            </div>
          </div>

          {/* Buttons. */}
          <div className='max-w-2xl mx-auto pb-12'>
            <div className="flex justify-center flex-wrap text-center">
              <div className="w-full md:w-1/2 pb-8 md:pb-0">
                <Button href='https://forms.gle/L9MfmgwqGq4G79i69'>Assinar individualmente</Button>
              </div>
              <div className='w-full md:w-1/2'>
                <Button href='https://forms.gle/vxsbbEU6PGwzAmCv6'>Assinar coletivamente</Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container py-12 lg:py-16">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl pb-12">
            Assinantes
          </h1>

          <div className="grid grid-cols-3 gap-6 md:grid-cols-8 md:gap-10 text-center">

            {
            data.signants.nodes.sort(function(x,y){ return x.name === "AmbientalIST" ? -1 : y === "AmbientalIST" ? 1 : 0; }).map((element, idx ) => (
              <a target="_blank" rel="noopener noreferrer" href={element.url}>
                <Img
                  fluid={element.image.localFile.childImageSharp.fluid}
                  alt={'carta-aberta-logo-' + idx}
                />

              </a>
            ))}

          </div>
        </div>
      </div>
    
      <div className="bg-gray-0">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 xl:w-3/5 pb-8 lg:pb-0">

              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
                Sobre
              </h1>

              <div className="mt-4 leading-loose text-gray-800">
              A Carta Aberta do Ensino Superior pelo Clima é um movimento nacional que reúne vários grupos associativos de estudantes. Acreditando que a comunidade estudantil pode ser motora para uma mudança a larga escala, pretendemos revitalizar a histórica luta estudantil portuguesa, desta vez com foco no clima.
              </div>

              <h2 className="text-3xl pt-8 leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
                O nosso propósito
              </h2>

              <div className="mt-4 leading-loose text-gray-800">
              Queremos pressionar os nossos líderes a agirem, mas também queremos ser parte da solução! Apresentaremos esta Carta aos líderes das nossas instituições, expressando a nossa vontade de mudança. De seguida, para vermos os objetivos do movimento tornarem-se realidade, através do diálogo entre todas as associações envolvidas, e contando também com o apoio de organizações experientes, iremos apresentar medidas concretas adaptadas à realidade de cada instituição.
              </div>
            </div>

            <div className="w-full mx-auto max-w-sm lg:w-1/2 xl:w-2/5 lg:pl-12">
              <Img
                    fluid={data.logo_2.childImageSharp.fluid}
                    alt="CartaAbertaLogo2"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container py-12 lg:py-16">
          <div className="flex flex-wrap">

            <div className="w-full pb-12 lg:pb-0 lg:w-1/2 pb-8 lg:pb-0">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl pb-1 text-center">
                1º Objetivo
              </h1>
              <h2 className="pb-2 text-xl text-center leading-tight tracking-tight text-gray-800 sm:text-2xl">
                <b>Declaração de emergência climática</b>
              </h2>
              <div className="mt-4 leading-loose text-gray-800">
                <p className='pb-5'>Num tempo em que a crise pandémica justificou a declaração de estado de emergência a nível nacional, não podemos aceitar que a crise climática, cujas consequências serão ainda mais devastadoras a longo prazo, seja vista com menos gravidade.</p>
                <p className='pb-5'>O reconhecimento de um problema é o primeiro passo para a sua resolução. Cidadãos de todo o mundo já sofrem consequências diretas da ação humana imponderada, maioritariamente em países do sul global.</p>
                <p>A declaração de emergência climática será o primeiro passo para a atenuação das consequências gravosas das alterações climáticas. Exigimos com esta declaração um compromisso sério de combate às alterações climáticas, medidas concretas, metas ambiciosas e um trabalho extenso e alinhado com a realidade da ciência climática atual.</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl pb-1 text-center">
                2º Objetivo
              </h1>
              <h2 className="pb-2 text-xl text-center leading-tight tracking-tight text-gray-800 sm:text-2xl">
                <b>Neutralidade carbónica até 2030</b>
              </h2>
              <div className="mt-4 leading-loose text-gray-800">
                  <p className='pb-5'>O Painel Intergovernamental sobre Mudanças Climáticas da ONU informa-nos de que a neutralidade carbónica deve ser alcançada a nível global até 2050 para evitar o colapso climático.</p>
                  <p className='pb-5'>Tendo em conta a maior quantidade de emissões de gases de efeito de estufa que os países mais industrializados provocaram, e dado o elevado índice de desenvolvimento económico de Portugal, temos a obrigação de contribuir mais ambiciosamente para este objetivo.</p>
                  <p className='pb-5'>Para além disso, as universidades constituem importantes pólos de desenvolvimento, investigação e pensamento crítico, devendo sempre estar na linha da frente de importantes e necessárias mudanças.</p>
                  <p>Com tudo isto em mente, a nossa responsabilidade é clara: o alcance da neutralidade carbónica até 2030 nas instituições de ensino superior portuguesas!</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-gray-0">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 xl:w-3/5 pb-8 lg:pb-0">

              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
                Como apoiar
              </h1>

              <div className="mt-4 leading-loose text-gray-800">
                <ul>
                  <li className="mt-1"><h2 className="inline text-xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-xl">1. Assina!</h2> Convida também os teus conhecidos, familiares, professores, investigadores, funcionários não-docentes a conhecerem e assinarem o movimento. Esta é uma luta começada pelos estudantes, mas é uma luta que diz respeito a tod@s nós, e teremos de lutar por tod@s!</li>
                  <li className="mt-1"><h2 className="inline text-xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-xl">2. Partilha</h2> nas tuas redes sociais com o link <b>bit.ly/carta-clima</b>.</li>
                  <li className="mt-1"><h2 className="inline text-xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-xl">3. Descarrega e publica</h2> o instagram story de apoio à iniciativa <a href="https://mega.nz/file/C9xS3C4J#3y2sINdIw0kuvZQNndyJimGg4zGrA9OjgEdb-VaCg4g" target="_blank" rel="noreferrer" className="border-b border-gray-500 border-green-color-hover text-green-color-hover">aqui</a>.</li>
                  <li className="mt-1"><h2 className="inline text-xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-xl">4. Convida</h2> núcleos, associações e organizações a conhecerem a Carta Aberta do Ensino Superior pelo Clima! Incentiva-os a entrarem em contacto connosco. A união entre todo o tipo de entidades e associações é crucial, porque só assim conseguiremos ter o impacto necessário para a mudança que ambicionamos. Ambicionamos construir um movimento que una tod@s sem exceção, lutando pelo futuro de tod@s sem exceção.</li>
                  <li className="mt-1"><h2 className="inline text-xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-xl">5. Contacta-nos</h2> se tiveres alguma questão ou comentário!</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-2/5 lg:pl-12 text-center">
              <ShareButtons
                titleTwitter="Já conheces a Carta Aberta do Ensino Superior pelo Clima? Assina e junta-te ao movimento!"
                titleWhatsApp="Queria dar a conhecer a Carta Aberta do Ensino Superior pelo Clima. A comunidade estudantil de norte a sul do país apela à declaração de emergência climática e à neutralidade carbónica nas suas Instituições de Ensino Superior. Assina o movimento!"
                url="bit.ly/carta-clima"/>
            </div>

            <div className='max-w-2xl mx-auto pt-12 pb-2'>
              <div className="flex justify-center flex-wrap text-center">
                <div className="w-full pb-2 md:pb-0">
                  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <Link to="/open-letter">English version</Link>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Layout>

  )

}

export default CartaAbertaPage


export const query = graphql`

  query CartaAbertaQuery {

    logo: file(relativePath: { eq: "logo_carta_aberta.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },

    logo_2: file(relativePath: { eq: "logo_carta_aberta_2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },

    signants: allContentfulCartaAbertaLogo {
      nodes {
        name
        url
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

  }
`