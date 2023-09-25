import { BodyLong, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import React from "react";
import ImageLinkPanelMedium from "@/src/common/components/ImageLinkPanelMedium";

export default function TipsTilJobbsoknaden() {
    console.info("tips til jobbsoknaden");
    return (
        <Layout>
            <Head>
                <title>Tips til jobbsøknaden - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Tips til jobbsøknaden
                </Heading>

                <Ingress spacing>
                    Det er ikke så vanskelig. Her får du våre tips om hvordan skrive søknaden slik at en arbeidsgiver
                    får lyst til å møte akkurat deg.
                </Ingress>
            </div>

            <div className="container-medium mb-12">
                <img
                    className="article-image"
                    src="/images/students.jpg"
                    alt="3 blide studenter som sitter med mobil og pc og snakker sammen utenfor skolen"
                    width="100%"
                />
            </div>

            <div className="container-small mb-16">
                <Heading size="large" level="2" spacing>
                    Slik skriver du en god jobbsøknad
                </Heading>
                <BodyLong spacing>
                    Målet med søknaden er å bli kalt inn til intervju. Her får du våre tips slik at en arbeidsgiver får
                    lyst til å møte akkurat deg.
                </BodyLong>

                <Heading size="medium" level="3" spacing>
                    Søknaden er et svar på annonsen
                </Heading>
                <ul>
                    <li>
                        <BodyLong>Les annonsen nøye og svar direkte på stillingsannonsen.</BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Du må vise at nettopp du er rett person for jobben. Hvilke egenskaper og erfaring har du som
                            er viktige? Få frem dine sterke sider.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            I en kort avslutning forteller du hvordan du kan kontaktes, når du kan starte i jobben, og
                            at du ser frem til å presentere deg i et intervju.
                        </BodyLong>
                    </li>
                </ul>

                <Heading size="medium" level="3" spacing>
                    Flere tips
                </Heading>
                <ul className="mb-12">
                    <li>
                        <BodyLong>
                            Dersom du ønsker å ta kontakt med arbeidsgiver i forkant, må du planlegge hva du skal spørre
                            om. Husk å ikke spør om ting som jobbannonsen svarer på.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>Søknaden skal være kort og målrettet.</BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Søknaden må se ryddig ut, uten skrivefeil og bør helst ikke være lenger enn en side.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>Fokusér på hva du kan og begrunn med eksempler.</BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Når søknaden og CV-en er sendt, må du være tilgjengelig på telefon og sjekke e-posten din
                            ofte.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong>Skriv en ny søknad til hver jobb du søker.</BodyLong>
                    </li>
                    <li>
                        <BodyLong>
                            Har du ikke hørt noe to-tre uker etter søknadsfristen, bør du kontakte arbeidsgiveren og
                            høre hvor langt de er kommet i prosessen.
                        </BodyLong>
                    </li>
                </ul>

                <Heading size="large" level="2" spacing>
                    Åpen søknad
                </Heading>
                <BodyLong className="mb-12">
                    Er det steder du kunne tenke deg å jobbe? Du kan sende en jobbsøknad selv om arbeidsgiveren ikke har
                    lyst ut noen ledige stillinger. Dette kalles en åpen søknad. En åpen søknad er lik en vanlig søknad,
                    men vær tydelig på hvorfor du ønsker å jobbe akkurat der.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Superrask søknad på arbeidsplassen.no
                </Heading>
                <BodyLong className="mb-12">
                    En enda enklere måte å søke på? Sjekk annonser med superrask søknad. Her søker du uten å legge ved
                    CV, men svarer enkelt ut de kvalifikasjonene arbeidsgiver ser etter og formulerer en kort
                    beskrivelse om hvorfor du mener du er rett person for stillingen. En superkort søknadstekst, med
                    andre ord.
                </BodyLong>

                <BodyLong className="mb-12">Lykke til med jobbsøkingen.</BodyLong>

                <LinkPanel className="arb-link-panel-primary" href="/cv">
                    <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                        Opprett en CV
                    </LinkPanel.Title>
                </LinkPanel>
            </div>

            <div className="container-medium mb-24">
                <Heading size="large" level="1" spacing>
                    Videre lesning
                </Heading>
                <div className="image-link-panel-grid-medium">
                    <ImageLinkPanelMedium
                        image="/images/jobbtreff.webp"
                        alt="En person sitter ved et kjøkkenbord med datamaskin foran seg, hun har på hodetelefoner og er nok i gang med en videosamtale."
                        title="Jobbtreff – møt bedrifter på en ny måte"
                        description="Følg en direkte sending der bedriften forteller om seg selv og hva slags stillinger du kan søke på."
                        href="/mot-bedrifter-pa-en-ny-mate"
                        color="secondary"
                    />
                    <ImageLinkPanelMedium
                        image="/images/paris.jpg"
                        alt="Bilde av Eiffeltårnet"
                        title="Jobbe i utlandet"
                        description="Den Europeiske Jobbmobilitetsportslen (EURES) er et tilbud til deg som ønsker å finne en jobb i EU-/EØS-området og Sveits."
                        href="/jobbe-i-utlandet"
                        color="tertiary"
                    />
                </div>
            </div>
        </Layout>
    );
}
