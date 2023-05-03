import { BodyLong, Heading, Ingress, Link as DsLink } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import ImageLinkPanelArticle from "@/src/common/components/ImageLinkPanelArticle";

export default function SuperraskSoknadPerson() {
    return (
        <Layout>
            <Head>
                <title>Nyhet! Superrask søknad - arbeidsplassen.no</title>
            </Head>
            <div className="container-small page-margin-top-and-bottom">
                <Heading size="xlarge" level="1" spacing>
                    Nyhet! Superrask søknad
                </Heading>

                <Ingress spacing>En enklere måte å komme i kontakt med bedrifter</Ingress>
            </div>

            <div className="container-medium mb-3">
                <img
                    className="article-image"
                    src="/images/jobbsoker.jpg"
                    alt="En person som skriver på telefonen sin."
                    width="100%"
                />
            </div>

            <div className="container-small mb-4">
                <BodyLong spacing>
                    Vi har gjort det lettere for deg å søke på jobber og komme i kontakt med interessante bedrifter. Med
                    noen få tastetrykk på mobil, nettbrett eller laptop kan du raskt vise frem din erfaring og at du er
                    rett person til jobben. Det er enkelt å se hvilke stillinger som har superrask søknad da disse er
                    merket med «superrask søknad» i stillingssøket på arbeidsplassen.no.
                </BodyLong>
                <BodyLong className="mb-3">
                    Når du velger å søke med en superrask søknad, er det lagt opp til at du får beskjed fra bedriften om
                    du er aktuell eller ikke. Du får denne beskjeden på e-post, så det er viktig at du er nøye når du
                    legger inn kontaktinformasjonen din.
                </BodyLong>

                <Heading size="large" level="2" spacing>
                    Ingen CV eller langt søknadsbrev
                </Heading>
                <ul>
                    <li>
                        <BodyLong className="mb-3">
                            Du svarer kun ut på de kvalifikasjoner bedriften legger vekt på i stillingen. Du har
                            mulighet til å skrive en kort begrunnelse om hvorfor akkurat du passer til jobben.
                        </BodyLong>
                    </li>
                </ul>

                <Heading size="large" level="2" spacing>
                    Du får beskjed
                </Heading>
                <ul>
                    <li>
                        <BodyLong className="mb-3">
                            Vi har gjort det enkelt for bedriften å vurdere din søknad, slik at du raskt skal få
                            tilbakemelding. Uansett om bedriften vurderer deg som aktuell eller ikke, skal du få en
                            beskjed på e-post sånn at du ikke går og lurer.
                        </BodyLong>
                    </li>
                </ul>

                <Heading size="large" level="2" spacing>
                    Du har kontroll på dine data
                </Heading>
                <ul>
                    <li>
                        <BodyLong>
                            Du kan når som helst trekke tilbake din søknad og informasjonen du har oppgitt.
                        </BodyLong>
                    </li>
                    <li>
                        <BodyLong spacing>
                            Vi sletter all innsendt informasjon 3 måneder etter utgått frist på stillingsannonsen.
                        </BodyLong>
                    </li>
                </ul>

                <BodyLong spacing>
                    Les også{" "}
                    <NextLink href="/personvern-superrask-soknad" passHref legacyBehavior>
                        <DsLink>personvernerklæringen for superrask søknad</DsLink>
                    </NextLink>
                    .
                </BodyLong>
                <BodyLong spacing>
                    Superrask søknad er en helt ny løsning på arbeidsplassen.no. Prøv det og gi oss gjerne en
                    tilbakemelding på hvordan du synes det fungerte.
                </BodyLong>
                <BodyLong>Lykke til med jobbsøkingen!</BodyLong>
            </div>

            <div className="container-medium mb-6">
                <Heading size="large" level="1" spacing>
                    Videre lesning
                </Heading>
                <div className="article-link-panel-grid">
                    <ImageLinkPanelArticle
                        className="arb-primary-bg-text arb-link-panel article-panel-link ml-4"
                        image="/images/students.jpg"
                        alt="3 blide studenter som sitter med mobil og pc og snakker sammen utenfor skolen"
                        title="Tips til jobbsøknaden"
                        description="Les våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til å møte akkurat deg."
                        href="/tips-til-jobbsoknaden"
                    />
                    <ImageLinkPanelArticle
                        className="arb-secondary-bg-text arb-link-panel article-panel-link ml-4"
                        image="/images/paris.jpg"
                        title="Jobbe i utlandet"
                        alt="Bilde av Eiffeltårnet"
                        description="Den Europeiske Jobbmobilitetsportslen (EURES) er et tilbud til deg som ønsker å finne en jobb i EU-/EØS-området og Sveits."
                        href="/jobbe-i-utlandet"
                    />
                </div>
            </div>
        </Layout>
    );
}