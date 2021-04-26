import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

import BackgroundSection from "../components/BackgroundSection"
import Button from "../components/Button"

const OpenLetterPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Open Letter on Climate for Higher Education Institutions" description="Students Union for the Climate at Instituto Superior Técnico." />

      <BackgroundSection>
        <div className="container py-12 lg:pb-16 h-56 flex flex-wrap content-center">
          <div className="w-full">
            <h1 className="text-3xl leading-tight text-center font-extrabold tracking-tight text-white sm:text-4xl">
                Open Letter on Climate for <br></br>Higher Education Institutions
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
                  Movement for the declaration of <b>climate emergency</b> and <b>carbon neutrality</b> among portuguese higher education institutions.
              </h2>
              <div className='max-w-2xl mx-auto pb-12'>
                <div className="flex justify-center flex-wrap text-center">
                  <div className="w-full pb-8 md:pb-0">
                    <Button href='https://docs.google.com/forms/d/e/1FAIpQLSfa8clSWtideB7eGOyqO51QBg6uJ_68Gv0Zq7yPcU5HYtp1dQ/viewform'>Subscribe</Button>
                  </div>
                </div>
              </div>
              <div className="leading-loose text-gray-800 pb-12">
                <p className='pb-5'>Dear leaders of portuguese higher education institutions,</p>
                <p className='pb-5'>We are living an emergency. Its multidisciplinarity, intersectionality and complexity make it an unprecedented threat in the History of Humanity, but it’s mainly the speed at which its consequences approach us, that are already being experienced today, that dictates the urgency with which we must face it. We’re talking about the <b>climate crisis</b> and it is the largest existential threat that our species has ever faced, which just reinforces the need to face it with as much brevity and rigour as possible.</p>
                <p className='pb-5'>The negative effects of reckless human activity over the planet are notorious and will continue to grow indefinitely unless we take drastic social action. Since educational institutions are the centers for change and critical and rational thinking, they should always be in the frontline against the problems society faces, concretely in the case of the climate crisis.</p>
                <p className='pb-5'>We can only truly solve this crisis (and not just relieve its symptoms) through collective effort on a global scale, with ambitious governmental measures and international and supranational collaboration. However, the key to global change includes investment on a local level too: only a society composed of communities with a strong social and environmental sense of duty can approach climate justice. Academic institutions and their policies have an importance and an impact that shouldn’t be underestimated, since by creating change in their local communities they have the potential to propel and scatter those changes elsewhere, as well as to other organisms and institutions of power, thus serving as an example to be replicated throughout the rest of society, and promoting paradigm shifts on a large scale.</p>
                <p className='pb-5'>The Portuguese student community is united under the plea of this Open Letter, in the name of the environment and of those who are currently suffering and will increasingly suffer in the future from the effects of climate change, seeking to revitalize the students’ activism for a healthy planet and a just and worthy future for everyone. <b>We are hereby asking our educational institutions to declare Climate Emergency.</b></p>  
                <p className='pb-5'>This act should not be merely symbolic and must, imperatively, be followed by a serious commitment to the implementation of concrete measures in coherence with the cause of this declaration. Thus, <b>we are hereby demanding that our higher education schools reach carbon neutrality until 2030</b>. This goal is aligned with the current climate science, getting Portugal closer to what was predicted by the Intergovernmental Panel on Climate Change of the United Nations as necessary to fulfill the objectives exposed in the Paris Agreement. Furthermore, in this goal we also take into account the greater responsibility that countries in the global North have to reach these targets and the obligation of Higher Education Schools to ambitiously promote this fight. These assertions are, therefore, realistic, taking these targets into account, besides being in line with actions that are already being taken in international learning institutions, within the scope of university movements of a similar kind.</p>
                <p>This movement is subscribed by multiple student groups, distributed throughout various Portuguese Higher Education Schools. Bearing in mind that climate reality differs between learning institutions, we count on students all over the country to present concrete lines of action adapted to the needs of their schools, with the goal of reaching the common objective of carbon neutrality until 2030 in our institutions. Since we, the student community, are the ones who will soon assume the leadership to face climate change, we show not only our will for change, but also for collaboration, to bring our Institutions to the frontline of the fight against the climate crisis.</p>
              </div>
            </div>
          </div>

          {/* Counters. */}
          <div className='max-w-2xl mx-auto pb-12'>
            <div className="flex justify-center flex-wrap text-center text-gray-600">
              <div className="w-full md:w-1/2 pb-8 md:pb-0">
                <p className="text-xl">Individual subscriptions</p>
                <p className="text-xs">(Updated 26/04/2021)</p>
                <h1 className="text-5xl leading-tight text-center tracking-tight pt-1">
                    1701
                </h1>
              </div>
              <div className='w-full md:w-1/2'>
                <p className="text-xl">Colective subscriptions</p>
                <p className="text-xs">(Updated 26/04/2021)</p>
                <h1 className="text-5xl leading-tight text-center tracking-tight pt-1">
                  89
                </h1>
              </div>
            </div>
          </div>

          {/* Buttons. */}
          <div className='max-w-2xl mx-auto pb-12'>
            <div className="flex justify-center flex-wrap text-center">
              <div className="w-fullpb-8 md:pb-0">
                <Button href='https://docs.google.com/forms/d/e/1FAIpQLSfa8clSWtideB7eGOyqO51QBg6uJ_68Gv0Zq7yPcU5HYtp1dQ/viewform'>Subscribe</Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container py-12 lg:py-16">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl pb-12">
            Subscribers
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

    </Layout>

  )

}

export default OpenLetterPage


export const query = graphql`

  query OpenLetterQuery {

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