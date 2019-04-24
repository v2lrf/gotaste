import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import { Row, Col } from '../components/Grid'
import Spacer from '../components/Spacer'

function AboutPage() {
  return (
    <Layout
      title="Om Govinu"
      description="Vi er to glade vinentusiaster, som brænder for vinens verden og at udbrede viden om vin til flere på en tilgængelig måde."
    >
      <Container narrow>
        <Spacer top="20" bottom="20">
          <h1 className="mb-4 text-red-darker">Om Govinu</h1>

          <Row>
            <Col xs="full" sm="1/3">
              <img
                src="https://avatars2.githubusercontent.com/u/3286533?s=400&u=51f4a6c5216c7408b6b059c0fd4dc3f6fd59e1db&v=4"
                alt="Anders"
                className="img rounded-lg shadow-lg mb-4 "
              />
              Anders, medstifer af Govinu
            </Col>
            <Col xs="full" sm="1/3">
              <img
                src="https://avatars2.githubusercontent.com/u/5732559?s=400&v=4"
                alt="Anders"
                className="img rounded-lg shadow-lg mb-4 "
              />
              Mads, medstifer af Govinu
            </Col>
          </Row>
          <div className="leading-normal mt-8">
            <p className="my-4">
              Velkommen til Govinu - din adgang til de bedste vinbarer og vine i
              København!
            </p>
            <p className="my-4">
              Vi er to glade vinentusiaster, som brænder for vinens verden og at
              udbrede viden om vin til flere på en tilgængelig måde. Ingen af os
              er uddannet indenfor vinbranchen, og derfor ved vi selv, at det
              kan være en udfordring at finde frem til de bedste vinbarer og de
              bedste vine.
            </p>
            <p className="my-4">
              Rejsen startede, da vi var på jagt efter et godt glas vin i
              København, men vi vidste ikke, hvor vi skulle gå hen. Derefter
              kastede vi os ud i at afsøge de sociale medier for anbefalinger.
              Her fandt vi hurtigt frem til, at man er nødt til at kende til de
              gode vinbarer, før man går ud.
            </p>
            <p className="my-4">
              Derfor har vi lavet Govinu. Stedet til dig, der vil kende til de
              bedste vinbarer i København, finde gode vinsmagninger og lære mere
              om vin sammen med andre vinentusiaster. Alt sammen samlet på ét
              sted - på en overskuelig måde.
            </p>
            <p className="my-4">
              Vi er her for at lære sammen med jer, og vi glæder os.
            </p>
            <p className="my-4">
              Vi håber, at du bliver glad for Govinu, og du er altid velkommen
              til at skrive til os for ris og ros eller gode idéer på:
            </p>
            <a
              className="text-red-dark no-underline hover:underline"
              href="mailto:info@govinu.com"
            >
              info@govinu.com
            </a>
          </div>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default AboutPage
