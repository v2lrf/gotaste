import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'

export default () => (
  <Layout>
    <Container narrow>
      <Spacer top="20" bottom="20">
        <h2 className="mb-4">Cookie- og privatlivspolitik</h2>
        <h4 className="mb-1">Introduktion</h4>
        <p className="mb-2">
          Når du besøger vores website indsamles der oplysninger om dig, som
          bruges til at tilpasse og forbedre vores indhold og til at øge værdien
          af de annoncer, der vises på siden. Hvis du ikke ønsker, at der
          indsamles oplysninger, bør du slette dine cookies og undlade videre
          brug af websitet. Nedenfor har vi uddybet, hvilke informationer der
          indsamles, deres formål og hvilke tredjeparter, der har adgang til
          dem.
        </p>

        <h4 className="mb-1">Cookies</h4>
        <p className="mb-2">
          Websitet anvender ”cookies”, der er en tekstfil, som gemmes på din
          computer, mobil el. tilsvarende med det formål at genkende den, huske
          indstillinger, udføre statistik og målrette annoncer. Cookies kan ikke
          indeholde skadelig kode som f.eks. virus.
        </p>
        <p className="mb-2">
          Det er muligt at slette eller blokere for cookies.
        </p>
        <p className="mb-2">
          Hvis du sletter eller blokerer cookies vil annoncer kunne blive mindre
          relevante for dig og optræde hyppigere. Du kan desuden risikere at
          websitet ikke fungerer optimalt samt at der er indhold, du ikke kan få
          adgang til.
        </p>
        <h3 className="mb-4">Personoplysninger</h3>
        <h4 className="mb-1">Generelt</h4>
        <p className="mb-2">
          Personoplysninger er alle slags informationer, der i et eller andet
          omfang kan henføres til dig. Når du benytter vores website indsamler
          og behandler vi en række sådanne informationer. Det sker f.eks. ved
          alm. tilgang af indhold, hvis du tilmelder dig vores nyhedsbrev,
          deltager i konkurrencer eller undersøgelser, registrerer dig som
          bruger eller abonnent, øvrig brug af services eller foretager køb via
          websitet.
        </p>
        <p className="mb-2">
          Vi indsamler og behandler typisk følgende typer af oplysninger: Et
          unikt ID og tekniske oplysninger om din computer, tablet eller
          mobiltelefon, dit IP-nummer, geografisk placering, samt hvilke sider
          du klikker på (interesser). I det omfang du selv giver eksplicit
          samtykke hertil og selv indtaster informationerne behandles desuden:
          Navn, telefonnummer, e-mail, adresse og betalingsoplysninger. Det vil
          typisk være i forbindelse med oprettelse af login eller ved køb.
        </p>
        <h4 className="mb-1">Sikkerhed</h4>
        <p className="mb-2">
          Vi har truffet tekniske og organisatoriske foranstaltninger mod, at
          dine oplysninger hændeligt eller ulovligt bliver slettet,
          offentliggjort, fortabt, forringet eller kommer til uvedkommendes
          kendskab, misbruges eller i øvrigt behandles i strid med lovgivningen.
        </p>
        <h4 className="mb-1">Formål</h4>
        <p className="mb-2">
          Oplysningerne bruges til at identificere dig som bruger og vise dig de
          annoncer, som vil have størst sandsynlighed for at være relevante for
          dig, at registrere dine køb og betalinger, samt at kunne levere de
          services, du har efterspurgt, som f.eks. at fremsende et nyhedsbrev.
          Herudover anvender vi oplysningerne til at optimere vores services og
          indhold.
        </p>
        <h4 className="mb-1">Periode for opbevaring</h4>
        <p className="mb-2">
          Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til
          lovgivningen, og vi sletter dem, når de ikke længere er nødvendige.
          Perioden afhænger af karakteren af oplysningen og baggrunden for
          opbevaring. Det er derfor ikke muligt at angive en generel tidsramme
          for, hvornår informationer slettes.
        </p>
        <h4 className="mb-1">Videregivelse af oplysninger</h4>
        <p className="mb-2">
          Data om din brug af websitet, hvilke annoncer, du modtager og evt.
          klikker på, geografisk placering, køn og alderssegment m.v.
          videregives til tredjeparter i det omfang disse oplysninger er kendt.
          Du kan se hvilke tredjeparter, der er tale om, i afsnittet om
          ”Cookies” ovenfor. Oplysningerne anvendes til målretning af
          annoncering.
        </p>
        <p className="mb-2">
          Vi benytter herudover en række tredjeparter til opbevaring og
          behandling af data. Disse behandler udelukkende oplysninger på vores
          vegne og må ikke anvende dem til egne formål.
        </p>
        <p className="mb-2">
          Videregivelse af personoplysninger som navn og e-mail m.v. vil kun
          ske, hvis du giver samtykke til det. Vi anvender kun databehandlere i
          EU eller i lande, der kan give dine oplysninger en tilstrækkelig
          beskyttelse.
        </p>
        <h4 className="mb-1">Indsigt og klager</h4>
        <p className="mb-2">
          Du har ret til at få oplyst, hvilke personoplysninger, vi behandler om
          dig. Du kan desuden til enhver tid gøre indsigelse mod, at oplysninger
          anvendes. Du kan også tilbagekalde dit samtykke til, at der bliver
          behandlet oplysninger om dig. Hvis de oplysninger, der behandles om
          dig, er forkerte har du ret til at de bliver rettet eller slettet.
          Henvendelse herom kan ske til: kontakt@govinu.com. Hvis du vil klage
          over vores behandling af dine personoplysninger, har du også mulighed
          for at tage kontakt til Datatilsynet.
        </p>
      </Spacer>
    </Container>
  </Layout>
)
