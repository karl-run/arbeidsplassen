import { BodyLong, Heading, Link } from "@navikt/ds-react";
import Layout from "@/src/common/components/layout/Layout";

export default function workInNorway() {
    return (
        <Layout>
            <div className="page-margin-top-and-bottom">
                <article className="article">
                    <section className="mb-3">
                        <Heading size="xlarge" level="1" spacing lang="en">
                            Information about working in Norway for Ukrainian refugees
                        </Heading>

                        <ul>
                            <li>
                                <BodyLong lang="en">
                                    <Link href="/en/work-in-norway">Information about working in Norway</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong lang="ua">
                                    <Link href="/ua/work-in-norway">Інформація українською мовою</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong lang="ru">
                                    <Link href="/ru/work-in-norway">Информация на русском языке</Link>
                                </BodyLong>
                            </li>
                            <li>
                                <BodyLong>Informasjon for arbeidsgivere</BodyLong>
                            </li>
                        </ul>
                    </section>

                    <Heading size="large" level="2" spacing>
                        Ønsker du å rekruttere flyktninger?
                    </Heading>
                    <BodyLong spacing>
                        Alle flyktninger med skriftlig vedtak om opphold- og arbeidstillatelse fra UDI kan starte i
                        arbeid.
                    </BodyLong>
                    <BodyLong spacing>
                        Vi anbefaler å{" "}
                        <Link href="https://arbeidsplassen.nav.no/stillingsregistrering/stillingsannonser">
                            lyse ut stillinger
                        </Link>{" "}
                        på arbeidsplassen.no eller{" "}
                        <Link href="https://arbeidsplassen.nav.no/jobbtreff/bedrift">invitere til jobbtreff</Link> og
                        presentere dine rekrutteringsbehov i en direkte sending for jobbsøkere. Begge tjenestene er
                        gratis.
                    </BodyLong>
                    <BodyLong spacing>
                        Husk å informere om språkkrav for stillingen og skrive annonsen eller jobbtreffet på engelsk
                        hvis det er arbeidsspråket.
                    </BodyLong>
                    <BodyLong spacing>
                        <Link href="https://www.nav.no/arbeidsgiver/rekruttere-flyktninger">
                            NAVs råd for deg som ønsker å komme i kontakt med kvalifiserte kandidater
                        </Link>
                    </BodyLong>
                    <BodyLong>
                        <Link href="https://www.imdi.no/mangfold-i-arbeidslivet/">
                            Les om hvordan mangfold i arbeidslivet kan bidra til innovasjon, vekst og verdiskaping på
                            imdi.no
                        </Link>
                    </BodyLong>
                </article>
            </div>
        </Layout>
    );
}
