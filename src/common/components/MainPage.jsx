import { Button, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import IllustrationPerson from "@/src/common/components/images/IllustrationPerson";
import InformationUkraine from "@/src/common/components/banners/InformationUkraine";

function MainPage() {
    return (
        <>
            <div className="container-large page-margin-top-and-bottom mb-5">
                <section className="arb-home-section-flex">
                    <div className="arb-home-div-width">
                        <Heading size="xlarge" level="1" spacing>
                            Alt av arbeid, <br />
                            samlet på én plass.
                        </Heading>
                        <Ingress spacing>
                            Finn din neste jobb i en av Norges største samlinger av stillinger. Her finner du jobber fra
                            alle bransjer i markedet.
                        </Ingress>

                        <div className="mb-4">
                            <Button variant="primary" as="a" href="/stillinger">
                                Søk etter din neste jobb
                            </Button>
                        </div>
                    </div>

                    <div className="arb-home-illustration arb-home-illustration-person">
                        <IllustrationPerson />
                    </div>
                </section>

                <div className="arb-link-panel-grid mb-3">
                    <LinkPanel className="arb-primary-bg-text arb-link-panel" href="/jobbtreff">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Se kommende jobbtreff
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Følg en direkte sending fra en bedrift og hør om deres stillinger.
                        </LinkPanel.Description>
                    </LinkPanel>
                    <LinkPanel className="arb-secondary-bg-text arb-link-panel" href="/cv">
                        <LinkPanel.Title className="navds-link-panel__title navds-heading--small">
                            Skriv din CV
                        </LinkPanel.Title>
                        <LinkPanel.Description className="navds-link-panel__description navds-body-long">
                            Fyll ut din CV og bruk den ved jobbsøking.
                        </LinkPanel.Description>
                    </LinkPanel>
                </div>
            </div>
            <div className="mb-6 arb-tertiary-bg-text">
                <InformationUkraine />
            </div>
        </>
    );
}

export default MainPage;
