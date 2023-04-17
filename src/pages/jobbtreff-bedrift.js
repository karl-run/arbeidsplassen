import { BodyLong, Heading, Ingress, Link, LinkPanel } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import Head from "next/head";
import Image from "next/image";

export default function JobbtreffBedrift() {
    return (
        <Layout>
            <Head>
                <title>Jobbtreff – møt jobbsøkere på en ny måte - arbeidsplassen.no</title>
            </Head>
            <div className="page-margin-top-and-bottom">
                <div className="article">
                    <Link href="/bedrift" className="mb-2">
                        <ChevronLeftIcon aria-hidden="true" />
                        Til bedrift
                    </Link>

                    <Heading size="xlarge" level="1" spacing>
                        Jobbtreff – møt jobbsøkere på en ny måte
                    </Heading>

                    <Ingress spacing>
                        Trenger dere nye medarbeidere? Nå kan du presentere bedriften din for interesserte jobbsøkere i
                        en direkte sending.
                    </Ingress>

                    <div className="mb-3">
                        <Image src="/images/skriver.webp"
                               alt="Person som skriver på en datamaskin"
                               width={578} height={379} />
                    </div>

                    <BodyLong className="mb-3">
                        Jobbtreff er en ny tjeneste på arbeidsplassen.no. Nå kan du presentere bedriften din og fortelle
                        om jobbmuligheter og hvilken kompetanse dere er ute etter.
                    </BodyLong>

                    <Heading size="large" level="2" spacing>
                        Jobbtreffet er enkelt å gjennomføre. Slik gjør du det:
                    </Heading>
                    <ul>
                        <li>
                            <BodyLong>Du oppretter selv et jobbtreff på arbeidsplassen.no.</BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Du kan koble jobbtreffet med stillingsannonsene dine. Annonsene er da tilgjengelige i
                                jobbtreffet.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Du velger om jobbtreffet skal annonseres for alle jobbsøkere på arbeidsplassen.no, eller
                                om du vil invitere deltakere selv.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Jobbsøkere kan i forkant av jobbtreffet sende inn forhåndsdefinerte temaer om hva de
                                ønsker å høre om. Underveis i jobbtreffet så kan de stille spørsmål som dere kan besvare
                                muntlig.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong>
                                Dere velger selv om en eller flere hos dere skal fortelle om bedriften. Dere kan dele
                                lyd, kamera og en presentasjon hvis dere har det, for eksempel en PowerPoint.
                            </BodyLong>
                        </li>
                        <li>
                            <BodyLong spacing>
                                Dere sørger for å beskrive hvordan interesserte jobbsøkere kan komme i kontakt med dere.
                            </BodyLong>
                        </li>
                    </ul>

                    <Heading size="medium" level="3" spacing>
                        Deltakerne er anonyme
                    </Heading>
                    <BodyLong spacing>
                        Under sendingen er deltakerne anonyme. Deltakerne kan se og høre deg når du har skrudd på lyd og
                        kamera, men du kan ikke se dem, og deltakerne kan ikke se hverandre.
                    </BodyLong>
                    <BodyLong spacing>
                        Superrask søknad er en ny løsning for bedrifter som registrerer stillinger på arbeidsplassen.no.
                        Tjenesten er under utvikling og vi vil gjerne ha tilbakemelding på hvordan den fungerer.
                    </BodyLong>
                    <BodyLong className="mb-3">
                        Se flere tips om{" "}
                        <Link href="/jobbtreff/hvordan-arrangere">hvordan du gjennomfører et jobbtreff.</Link>
                    </BodyLong>

                    <LinkPanel className="arb-primary-bg-text arb-link-panel" href="">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Lag nytt jobbtreff
                        </LinkPanel.Title>
                    </LinkPanel>
                </div>
            </div>
        </Layout>
    );
}