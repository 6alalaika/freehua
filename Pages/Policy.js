import {ScrollView, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import HTML from 'react-native-render-html';
import styles from '../Styles/stylesLogin';

export default function Policy({navigation}) {
  const terms = `
<div>
    <h1>Termos e Condições Gerais de Uso do Sistema FreeHua</h1>

    <p>
      Os serviços do FreeHua são fornecidos pela pessoa jurídica com a seguinte
      Razão Social/nome: FreeHua, com nome fantasia FreeHua, inscrito no
      CNPJ/CPF sob o nº 000.000.000-00, titular da propriedade intelectual sobre
      software, website, aplicativos, conteúdos e demais ativos relacionados à
      plataforma FreeHua.
    </p>

    <h2>1. Do objeto</h2>

    <p>
      A plataforma visa licenciar o uso de seu software, website, aplicativos e
      demais ativos de propriedade intelectual, fornecendo ferramentas para
      auxiliar e dinamizar o dia a dia dos seus usuários.
    </p>

    <p>
      A plataforma caracteriza-se pela prestação do seguinte serviço: leitura de
      HQs sino-coreanas em um ambiente mobile.
    </p>

    <h2>2. Da aceitação</h2>

    <p>
      O presente Termo estabelece obrigações contratadas de livre e espontânea
      vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas
      ou jurídicas, usuárias do aplicativo.
    </p>

    <p>
      Ao utilizar a plataforma o usuário aceita integralmente as presentes
      normas e compromete-se a observá-las, sob o risco de aplicação das
      penalidades cabíveis.
    </p>

    <p>
      A aceitação do presente instrumento é imprescindível para o acesso e para
      a utilização de quaisquer serviços fornecidos pela empresa. Caso não
      concorde com as disposições deste instrumento, o usuário não deve
      utilizá-los.
    </p>

    <h2>3. Do acesso dos usuários</h2>

    <p>
      Serão utilizadas todas as soluções técnicas à disposição do responsável
      pela plataforma para permitir o acesso ao serviço 24 horas por dia, 7 dias
      por semana. No entanto, a navegação na plataforma ou em alguma de suas
      páginas poderá ser interrompida, limitada ou suspensa para atualizações,
      modificações ou qualquer ação necessária ao seu bom funcionamento.
    </p>

    <h2>4. Do cadastro</h2>

    <p>
      O acesso às funcionalidades da plataforma exigirá a realização de um
      cadastro prévio e, a depender dos serviços ou produtos escolhidos, o
      pagamento de determinado valor.
    </p>

    <p>
      Ao se cadastrar, o usuário deverá informar dados completos e válidos,
      sendo de sua exclusiva responsabilidade manter referidos dados
      atualizados. O usuário compromete-se a não informar seus dados cadastrais
      e/ou de acesso à plataforma a terceiros, responsabilizando-se
      integralmente pelo uso que deles seja feito.
    </p>

    <p>
      Menores de 18 anos e aqueles que não possuírem plena capacidade civil
      deverão obter previamente o consentimento expresso de seus responsáveis
      legais para a utilização da plataforma e dos serviços ou produtos, sendo
      de responsabilidade exclusiva dos mesmos o eventual acesso por menores de
      idade e por aqueles que não possuem plena capacidade civil sem a prévia
      autorização.
    </p>

    <p>
      Mediante a realização do cadastro, o usuário declara e garante
      expressamente ser plenamente capaz, podendo exercer e usufruir livremente
      dos serviços e produtos.
    </p>

    <p>
      O usuário deverá fornecer um endereço de e-mail válido, através do qual o
      site realizará todas as comunicações necessárias.
    </p>

    <p>
      Após a confirmação do cadastro, o usuário possuirá um login e uma senha
      pessoal, a qual assegura ao usuário o acesso individual à mesma. Desta
      forma, compete ao usuário exclusivamente a manutenção de referida senha de
      maneira confidencial e segura, evitando o acesso indevido às informações
      pessoais.
    </p>

    <p>
      Toda e qualquer atividade realizada com o uso da senha será de
      responsabilidade do usuário, que deverá informar prontamente a plataforma
      em caso de uso indevido da respectiva senha.
    </p>

    <p>
      Não será permitido ceder, vender, alugar ou transferir, de qualquer forma,
      a conta, que é pessoal e intransferível.
    </p>

    <p>
      Caberá ao usuário assegurar que o seu equipamento seja compatível com as
      características técnicas que viabilizem a utilização da plataforma e dos
      serviços ou produtos.
    </p>

    <p>
      O usuário poderá, a qualquer tempo, requerer o cancelamento de seu
      cadastro junto ao aplicativo FreeHua. O seu descadastramento será
      realizado o mais rapidamente possível, desde que não sejam verificados
      débitos em aberto.
    </p>

    <p>
      O usuário, ao aceitar os Termos e Política de Privacidade, autoriza
      expressamente a plataforma a coletar, usar, armazenar, tratar, ceder ou
      utilizar as informações derivadas do uso dos serviços, do site e quaisquer
      plataformas, incluindo todas as informações preenchidas pelo usuário
      quando realizar ou atualizar seu cadastro, além de outras expressamente
      descritas na Política de Privacidade que deverá ser autorizada pelo
      usuário.
    </p>

    <h2>5. Do suporte</h2>

    <p>
      Em caso de qualquer dúvida, sugestão ou problema com a utilização da
      plataforma, o usuário poderá entrar em contato com o suporte, através dos
      telefones:
    </p>

    <ul>
      <li>+55 11 96428-3560;</li>
      <li>+55 11 97795-4008;</li>
      <li>+55 11 94320-7244;</li>
      <li>+55 11 96413-0525;</li>
      <li>+55 11 98413-2790;</li>
    </ul>

    <p>
      Estes serviços de atendimento ao usuário estarão disponíveis nos seguintes
      dias e horários:
    </p>

    <p>Segunda a sexta: 7:00 até 19:00</p>
    <p>Fim de Semana e Feriados: 8:00 até 19:00</p>

    <h2>6. Das responsabilidades</h2>

    <p>É de responsabilidade do usuário:</p>

    <ul>
      <li>
        defeitos ou vícios técnicos originados no próprio sistema do usuário;
      </li>
      <li>
        a correta utilização da plataforma, dos serviços ou produtos oferecidos,
        prezando pela boa convivência, pelo respeito e cordialidade entre os
        usuários;
      </li>
      <li>
        cumprimento e respeito ao conjunto de regras disposto nesse Termo de
        Condições Geral de Uso, na respectiva Política de Privacidade e na
        legislação nacional e internacional;
      </li>
      <li>
        A proteção aos dados de acesso à sua conta/perfil (login e senha).
      </li>
    </ul>

    <p>É de responsabilidade da plataforma FreeHua:</p>

    <ul>
      <li>indicar as características do serviço ou livro;</li>
      <li>
        os defeitos e vícios encontrados no serviço ou livro oferecido desde que
        lhe tenha dado causa;
      </li>
      <li>
        as informações que foram por ele divulgadas, sendo que os comentários ou
        informações divulgadas por usuários são de inteira responsabilidade dos
        próprios usuários;
      </li>
      <li>
        os conteúdos ou atividades ilícitas praticadas através da sua
        plataforma.
      </li>
    </ul>

    <p>
      A plataforma não se responsabiliza por links externos contidos em seu
      sistema que possam redirecionar o usuário à ambiente externo a sua rede.
    </p>

    <p>
      Não poderão ser incluídos links externos ou páginas que sirvam para fins
      comerciais ou publicitários ou quaisquer informações ilícitas, violentas,
      polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas.
    </p>

    <h2>7. Dos direitos autorais</h2>

    <p>
      O presente Termo de Uso concede aos usuários uma licença não exclusiva,
      não transferível e não sublicenciável, para acessar e fazer uso da
      plataforma e dos serviços e produtos por ela disponibilizados.
    </p>

    <p>
      A estrutura do site ou aplicativo, as marcas, logotipos, nomes comerciais,
      layouts, gráficos e design de interface, imagens, ilustrações,
      fotografias, apresentações, vídeos, conteúdos escritos e de som e áudio,
      programas de computador, banco de dados, arquivos de transmissão e
      quaisquer outras informações e direitos de propriedade intelectual da
      razão social FreeHua, observados os termos da Lei da Propriedade
      Industrial (Lei nº 9.279/96), Lei de Direitos Autorais (Lei nº 9.610/98) e
      Lei do Software (Lei nº 9.609/98), estão devidamente reservados.
    </p>

    <p>
      Este Termos de Uso não cede ou transfere ao usuário qualquer direito, de
      modo que o acesso não gera qualquer direito de propriedade intelectual ao
      usuário, exceto pela licença limitada ora concedida.
    </p>

    <p>
      O uso da plataforma pelo usuário é pessoal, individual e intransferível,
      sendo vedado qualquer uso não autorizado, comercial ou não-comercial. Tais
      usos consistirão em violação dos direitos de propriedade intelectual da
      razão social FreeHua, puníveis nos termos da legislação aplicável.
    </p>

    <h2>8. Das sanções</h2>

    <p>
      Sem prejuízo das demais medidas legais cabíveis, a razão social FreeHua
      poderá, a qualquer momento, advertir, suspender ou cancelar a conta do
      usuário:
    </p>

    <ul>
      <li>que violar qualquer dispositivo do presente Termo;</li>
      <li>que descumprir os seus deveres de usuário;</li>
      <li>
        que tiver qualquer comportamento fraudulento, doloso ou que ofenda a
        terceiros.
      </li>
    </ul>

    <h2>9. Da rescisão</h2>

    <p>
      A não observância das obrigações pactuadas neste Termo de Uso ou da
      legislação aplicável poderá, sem prévio aviso, ensejar a imediata rescisão
      unilateral por parte da razão social FreeHua e o bloqueio de todos os
      serviços prestados ao usuário.
    </p>

    <h2>10. Das alterações</h2>

    <p>
      Os itens descritos no presente instrumento poderão sofrer alterações,
      unilateralmente e a qualquer tempo, por parte do suporte, para adequar ou
      modificar os serviços, bem como para atender novas exigências legais.
    </p>

    <h2>11. Da política de privacidade</h2>

    <p>
      Além do presente Termo, o usuário deverá consentir com as disposições
      contidas na respectiva Política de Privacidade a ser apresentada a todos
      os interessados dentro da interface da plataforma.
    </p>

    <h2>12. Do foro</h2>

    <p>
      Para a solução de controvérsias decorrentes do presente instrumento será
      aplicado integralmente o Direito brasileiro.
    </p>

    <p>
      Os eventuais litígios deverão ser apresentados no foro da comarca em que
      se encontra a sede da empresa.
    </p>
</div>
    `;

  return (
  <ImageBackground
    style={styles.area}
    source={require('../Assets/landscape.jpg')}>
    <View style={{ ...styles.box, height: 500 }}>
      <ScrollView style={{marginVertical: 12}}>
        <HTML
          tagsStyles={{ body: { color: 'white' } }}
          source={{ html: terms }}
          contentWidth={400}
        />
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Register')}>
                <Text style={styles.label}>Voltar</Text>
            </TouchableOpacity>
      </ScrollView>
    </View>
  </ImageBackground>
);

}
