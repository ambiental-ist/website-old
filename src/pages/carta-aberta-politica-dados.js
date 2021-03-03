import React from "react"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const PoliticaDadosPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Carta aberta - política dados" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />

      {/* Rich text section. */}
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex justify-center flex-wrap">
            <div className="max-w-2xl pb-8">

              <h1 className="text-center text-2xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-2xl pb-5">Política de dados “Carta Aberta do Ensino Superior pelo Clima (para pessoas singulares)”</h1>

              <p className="mt-5">Ao submeter o formulário “Carta Aberta do Ensino Superior pelo Clima (para pessoas singulares)”, (disponível <a className="font-extrabold" href="https://docs.google.com/forms/d/e/1FAIpQLSdvIhC4uQ5iA24_c65KR0vh-JXlx20-WNZo1dbR3ubtWyD4RA/viewform?usp=sf_link">aqui</a>), estará a subscrever a Carta Aberta do Ensino Superior pelo Clima, (doravante “CAESC”), consentindo integralmente e de forma esclarecida com os termos descritos nesta Política de Privacidade e Proteção de Dados.</p>
              <p className="mt-5">A subscrição da CAESC implica a submissão do formulário “Carta Aberta do Ensino Superior pelo Clima (para pessoas singulares)”, (doravante “formulário”).</p>
              <p className="mt-5">Sempre que um visitante do formulário clique no botão “Submeter”, torna-se “Subscritor” da CAESC.</p>
              <p className="mt-5">A subscrição da CAESC implica, necessariamente, a recolha e tratamento, pela “AmbientalIST”, Secção Autónoma da Associação dos Estudantes do Instituto Superior Técnico, com sede no IST, Avenida Rovisco Pais, N.º1, Lisboa, com o NIPC 501055606, (doravante “AEIST”), ou por qualquer outro sujeito ou entidade com poderes delegados por aquela e limitados ao armazenamento e/ou tratamento da informação nos termos dos poderes atribuídos pelo Subscritor àquela entidade, relativamente à informação disponibilizada pelo Subscritor no âmbito do formulário referente à CAESC, correspondendo tal informação, nos termos da legislação aplicável, ao conceito de dados pessoais por permitir a identificação individual do respetivo Subscritor.</p>
              <p className="mt-5">1. Finalidade da recolha e do tratamento dos dados pessoais do Subscritor da CAESC: <br></br>
                                  1.1. Suscetibilidade de identificar o Subscritor;<br></br>
                                  1.2. Suscetibilidade de responder a questões colocadas pelos Subscritores relativamente a matérias relacionadas com a CAESC;<br></br>
                                  1.3. Suscetibilidade de informar o Subscritor, mediante o envio de comunicações eletrónicas, sob a forma de “newsletter”, dirigidas à divulgação de ações de promoção relacionadas com a CAESC, caso aquele manifeste a sua intenção e desejo em receber tais comunicações;<br></br>
                                  1.4. Suscetibilidade de proceder a análises estatísticas dos dados recolhidos para efeitos de estudos internos, utilizando métodos de pseudonimização dos dados;
              </p>
              <p className="mt-5">2. Os dados pessoais do Subscritor, necessária e obrigatoriamente recolhidos no momento da Subscrição da CAESC, são:<br></br>
                                  2.1. O primeiro e último nome (primeiro nome próprio e último apelido);<br></br>
                                  2.2. Endereço de correio eletrónico pessoal do Subscritor (e-mail);<br></br>
                                  2.3. Número de documento de identificação (número de Cartão de Cidadão, Bilhete de Identidade, Passaporte);<br></br>
                                  2.4. Informação de atividade profissional do Subscritor, devendo indicar se estuda, trabalha ou colabora com uma instituição de ensino superior, indicando, respetivamente, “Sim” ou “Não”, conforme estude, trabalhe ou colabore com uma instituição de ensino superior, ou não estude, não trabalhe nem colabore com uma instituição de ensino superior.</p>
              <p className="mt-5">3. Os dados pessoais recolhidos de forma facultativa correspondem, nomeadamente, aos seguintes campos de preenchimento:<br></br>
                                  3.1. “Cidade onde estudo/trabalho”;<br></br>
                                  3.2. “Profissão”;<br></br>
                                  3.3. “Instituição de Ensino Superior onde estudo/trabalho/colaboro”.
              </p>
              <p className="mt-5">4. O Subscritor poderá ainda subscrever a “newsletter” da “AmbientalIST” onde serão divulgadas notícias e outras informações relevantes direta ou indiretamente relacionadas com a CAESC, sem periodicidade definida, que será enviada diretamente pela “AmbientalIST” para o endereço de correio eletrónico do Subscritor, podendo tal serviço gratuito ser cancelado a qualquer momento, mediante denúncia do mesmo pelo Subscritor, enviada para o endereço de correio eletrónico “ambientalist.sa@aeist.pt” comunicando a sua intenção expressa de deixar de receber a newsletter. De igual modo, poderá o Subscritor requerer, mediante envio de solicitação para o mesmo endereço de correio eletrónico, de qualquer pedido de esclarecimento, consulta, alteração ou eliminação de dados pessoais fornecidos, alteração ou revogação do consentimento, assim como qualquer outro pedido ou solicitação relacionada com os dados pessoais do Subscritor.</p>
              <p className="mt-5">5. A subscrição da newsletter pelo Subscritor é facultativa.</p>
              <p className="mt-5">6. Ao subscrever a newsletter o Subscritor aceita e manifesta a sua intenção inequívoca em receber as comunicações eletrónicas que a constituem no endereço de correio eletrónico indicado no momento da subscrição.</p>
              <p className="mt-5">7. Os dados pessoais do Subscritor objeto de tratamento e armazenamento provêm, em exclusivo, da submissão do formulário.</p>
              <p className="mt-5">8. O preenchimento dos campos de resposta mediante a submissão de informação ininteligível não origina a recolha e tratamento de dados pessoais.</p>
              <p className="mt-5">9. A entidade responsável pelo tratamento de dados é “AmbientalIST”, Secção Autónoma da AEIST.</p>
              <p className="mt-5">10. A entidade responsável pelo tratamento de dados compromete-se a guardar a informação disponibilizada pelo Subscritor segundo as orientações da Comissão Nacional de Proteção de Dados e a não ceder os dados pessoais a terceiros, utilizando-os, em exclusivo, no âmbito das finalidades e tratamento descritos supra. A cedência de dados pessoais do Subscritor obtidos no âmbito da submissão da CAESC, quando realizada fora do âmbito de previsão da presente política, ocorrerá apenas no estrito e específico cumprimento de um comando normativo ou de decisão judicial com poderes para o efeito.</p>
              <p className="mt-5">11. Os dados pessoais do Subscritor serão conservados por um período máximo de três anos.</p>
              <p className="mt-5">12. Os dados pessoais do Subscritor dão origem à definição de perfis baseados na informação relativa à atividade profissional declarada do Subscritor e disponibilizada por este no momento da subscrição.</p>
              <p className="mt-5">13. Os dados pessoais podem ser transferidos para países ou organizações internacionais fora do Espaço Económico Europeu, desde que estes sigam regras e procedimentos adequados de proteção de dados.</p>
              <p className="mt-5">14. A entidade responsável pelo tratamento de dados poderá retificar, a qualquer momento, a presente Política de Privacidade e Proteção de Dados, mediante notificação dos Subscritores com 10 dias de antecedência, mediante comunicado enviado para o endereço de correio eletrónico indicado pelo respetivo Subscritor, informando-os das alterações relevantes e dos direitos a que faz referência a segunda e última parte do número 4. da presente Política de Privacidade e Proteção de Dados.</p>



              <h1 className="text-center mt-20 text-2xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-2xl pb-5">Política de dados “Carta Aberta do Ensino Superior pelo Clima (para organizações)”</h1>

              <p className="mt-5">Ao submeter o formulário “Carta Aberta do Ensino Superior pelo Clima (para organizações)”, (disponível <a className="font-extrabold" href="https://docs.google.com/forms/d/e/1FAIpQLScAafh9IX7WE4Ee7_7gEnxW_TF6rvrr5L3BYH35-DzQeh4pEA/viewform?usp=sf_link">aqui</a>), estará a subscrever a Carta Aberta do Ensino Superior pelo Clima, (doravante “CAESC”), consentindo integralmente e de forma esclarecida com os termos descritos nesta Política de Privacidade e Proteção de Dados.</p>
              <p className="mt-5">A subscrição da CAESC implica a submissão do formulário “Carta Aberta do Ensino Superior pelo Clima (para organizações)”, (doravante “formulário”).</p>
              <p className="mt-5">Sempre que um visitante do formulário clique no botão “Submeter”, torna-se “Subscritor” da CAESC.</p>
              <p className="mt-5">A subscrição da CAESC implica, necessariamente, a recolha e tratamento, pela “AmbientalIST”, Secção Autónoma da Associação dos Estudantes do Instituto Superior Técnico, com sede no IST, Avenida Rovisco Pais, N.º1, Lisboa, com o NIPC 501055606, (doravante “AEIST”), ou por qualquer outro sujeito ou entidade com poderes delegados por aquela e limitados ao armazenamento e/ou tratamento da informação nos termos dos poderes atribuídos pelo Subscritor àquela entidade, relativamente à informação disponibilizada pelo Subscritor no âmbito do formulário referente à CAESC, correspondendo tal informação, nos termos da legislação aplicável, ao conceito de dados pessoais por permitir a identificação individual do respetivo Subscritor.</p>
              <p className="mt-5">1. Finalidade da recolha e do tratamento dos dados pessoais do Subscritor da CAESC:<br></br>
                                  1.1. Suscetibilidade de identificar o Subscritor;<br></br>
                                  1.2. Suscetibilidade de responder a questões colocadas pelos Subscritores relativamente a matérias relacionadas com a CAESC;<br></br>
                                  1.3. Suscetibilidade de informar o Subscritor, mediante o envio de comunicações eletrónicas, sob a forma de “newsletter”, dirigidas à divulgação de ações de promoção relacionadas com a CAESC, caso aquele manifeste a sua intenção e desejo em receber tais comunicações;<br></br>
                                  1.4. Suscetibilidade de proceder a análises estatísticas dos dados recolhidos para efeitos de estudos internos, utilizando métodos de pseudonimização dos dados;
              </p>
              <p className="mt-5">2. Os dados pessoais do Subscritor, necessária e obrigatoriamente recolhidos no momento da Subscrição da CAESC, são:<br></br>
                                  2.1. O primeiro e último nome (primeiro nome próprio e último apelido);<br></br>
                                  2.2. Endereço de correio eletrónico da entidade que o Subscritor alega representar;<br></br>
                                  2.3. Nome da entidade que o Subscritor alega representar;<br></br>
                                  2.4. Hiperligação de uma página da entidade que o Subscritor alega representar;<br></br>
                                  2.5  Informação da natureza da organização que o Subscritor alega representar, devendo indicar, respetivamente, “Estudantil” ou “Não-estudantil”, conforme seja uma organização de natureza estudantil, ou uma organização de natureza não-estudantil.<br></br>
                                  2.6 Imagem do logótipo da entidade que o Subscritor alega representar.
              </p>
              <p className="mt-5">3. Os dados pessoais recolhidos de forma facultativa correspondem, nomeadamente, aos seguintes campos de preenchimento:<br></br>
                                  3.1. Endereço de correio eletrónico pessoal do Subscritor;</p>
              <p className="mt-5">4. O Subscritor poderá ainda subscrever a “newsletter” da “AmbientalIST” onde serão divulgadas notícias e outras informações relevantes direta ou indiretamente relacionadas com a CAESC, sem periodicidade definida, que será enviada diretamente pela “AmbientalIST” para o endereço de correio eletrónico da entidade que o Subscritor alega representar, podendo tal serviço gratuito ser cancelado a qualquer momento, mediante denúncia do mesmo pelo Subscritor, enviada para o endereço de correio eletrónico “ambientalist.sa@aeist.pt” comunicando a sua intenção expressa de deixar de receber a newsletter. De igual modo, poderá o Subscritor requerer, mediante envio de solicitação para o mesmo endereço de correio eletrónico, de qualquer pedido de esclarecimento, consulta, alteração ou eliminação de dados pessoais fornecidos, alteração ou revogação do consentimento, assim como qualquer outro pedido ou solicitação relacionada com os dados pessoais do Subscritor.</p>
              <p className="mt-5">5. A subscrição da newsletter pelo Subscritor é facultativa.</p>
              <p className="mt-5">6. Ao subscrever a newsletter o Subscritor aceita e manifesta a sua intenção inequívoca em receber as comunicações eletrónicas que a constituem no endereço de correio eletrónico da entidade que o Subscritor alega representar, indicado no momento da subscrição.</p>
              <p className="mt-5">7. Os dados pessoais do Subscritor objeto de tratamento e armazenamento provêm, em exclusivo, da submissão do formulário.</p>
              <p className="mt-5">8. O preenchimento dos campos de resposta mediante a submissão de informação ininteligível não origina a recolha e tratamento de dados pessoais.</p>
              <p className="mt-5">9. A entidade responsável pelo tratamento de dados é “AmbientalIST”, Secção Autónoma da AEIST.</p>
              <p className="mt-5">10. A entidade responsável pelo tratamento de dados compromete-se a guardar a informação disponibilizada pelo Subscritor segundo as orientações da Comissão Nacional de Proteção de Dados e a não ceder os dados pessoais a terceiros, utilizando-os, em exclusivo, no âmbito das finalidades e tratamento descritos supra. A cedência de dados pessoais do Subscritor obtidos no âmbito da submissão da CAESC, quando realizada fora do âmbito de previsão da presente política, ocorrerá apenas no estrito e específico cumprimento de um comando normativo ou de decisão judicial com poderes para o efeito.</p>
              <p className="mt-5">11. Os dados pessoais do Subscritor serão conservados por um período máximo de três anos.</p>
              <p className="mt-5">12. Os dados pessoais do Subscritor dão origem à definição de perfis baseados nos dados recolhidos, disponibilizados pelo Subscritor no momento da subscrição.</p>
              <p className="mt-5">13. Os dados pessoais podem ser transferidos para países ou organizações internacionais fora do Espaço Económico Europeu, desde que estes sigam regras e procedimentos adequados de proteção de dados.</p>
              <p className="mt-5">14. A entidade responsável pelo tratamento de dados poderá retificar, a qualquer momento, a presente Política de Privacidade e Proteção de Dados, mediante notificação dos Subscritores com 10 dias de antecedência, mediante comunicado enviado para o endereço de correio eletrónico indicado pelo respetivo Subscritor, informando-os das alterações relevantes e dos direitos a que faz referência a segunda e última parte do número 4. da presente Política de Privacidade e Proteção de Dados.</p>

            </div>
          </div>
        </div>
      </div>

    </Layout>

  )

}

export default PoliticaDadosPage

