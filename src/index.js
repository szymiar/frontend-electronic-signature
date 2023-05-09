import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SignaturePage from "./pages/SignaturePage";
import VerificationPage from "./pages/VerificationPage";
import NoPage from "./pages/NoPage";
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import keycloak from "./keycloak/KeyCloak";

export default function App() {

    const { keycloak, initialized } = useKeycloak();

    // if (!initialized) {
    //     return <div>Loading...</div>;
    // }

    if (keycloak.authenticated) {
        window.accessToken = keycloak.token;
    }

    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="podpis" element={<SignaturePage previousPage={window.location.href} />} />
                    <Route path="weryfikacja" element={<VerificationPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReactKeycloakProvider authClient={keycloak}>
        <App />
    </ReactKeycloakProvider>
);
