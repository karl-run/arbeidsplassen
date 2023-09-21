/* eslint-disable react/prop-types */
import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
import "@navikt/arbeidsplassen-theme";
import "../common/styles/index.css";
import AuthenticationProvider, {
    AuthenticationContext,
    AuthenticationStatus,
} from "@/src/common/contexts/AuthenticationProvider";
import { setUpAmplitude, setAuthenticatedStatus } from "@/src/common/analysis/metrics";
import { useContext, useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import setupFaro from "@/src/common/analysis/faro";

function TrackedApp({ children }) {
    useEffect(() => {
        setupFaro();
    }, []);

    useEffect(() => {
        setUpAmplitude();
    }, []);

    const isAuthenticated =
        useContext(AuthenticationContext).authenticationStatus === AuthenticationStatus.IS_AUTHENTICATED;
    useEffect(() => {
        setAuthenticatedStatus(isAuthenticated);
    }, [isAuthenticated]);

    return children;
}

function App({ Component, pageProps }) {
    return (
        <AuthenticationProvider>
            <TrackedApp>
                <Component {...pageProps} />
            </TrackedApp>
        </AuthenticationProvider>
    );
}

export default appWithTranslation(App);
