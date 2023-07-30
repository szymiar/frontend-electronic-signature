import LogoutButton from "../keycloak/KeycloakLogout";
import React from "react";
import LoginButton from "../keycloak/KeyCloakLogin";
import UsernameDisplay from "../keycloak/UsernameDisplay";

function HomePage() {
    return (
        <>
            <h1 className={"header"}>Uproszczona aplikacja do podpisu elektronicznego</h1>
            <LoginButton />
            <LogoutButton  />
            <UsernameDisplay  />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '20px' }}>
                    <h2>O aplikacji</h2>
                    <ul>
                        <li>Jest to aplikacja do interakcji z systemem podpisu elektronicznego</li>
                        <li>System udostepnia możliwość stworzenia podpisów elektronicznych PAdES i XAdES, oraz ich weryfikacji</li>
                        <li>Aplikacja i cały system zostały utworzone w ramach pracy inżynierskiej na kierunku cyberbezpieczeństwo</li>
                    </ul>
                    <h2>Jak używać</h2>
                    <ul>
                        <li>Z funkcji podpisywania dokumentów skorzystać mogą jedynie zalogowani użytkownicy</li>
                        <li>W tym celu należy przejść na stronę "Podpisz dokument" i zalogować się</li>
                    </ul>
                    <ul>
                        <li>Z funkcji weryfikacji dokumentów skorzystać może każdy</li>
                        <li>W tym celu należy przejść na stronę "Zweryfikuj podpis"</li>
                    </ul>
                   Dodatkowe informacje znajdują się na kolejnych stronach w sekcjach "FAQ"
                    <h2>Certyfikat do lokalnej weryfikacji offline</h2>
                    <ul>
                        <li>Do weryfikacji podpisanych dokumentów offline można skorzystać z naszego certyfikatu: <a href={'https://filetransferforelka.blob.core.windows.net/publiccert/PublicCertificate.cer'} target="_blank" rel="noopener noreferrer">>{'pobierz certyfikat'}</a></li>
                        <li>Certyfikat należy pobrać i dodać do zaufanych certyfikatów na swoim urządzeniu</li>
                        <li>Dzięki temu możliwa będzie lokalna weryfikacja podpisanych dokumentów przy użyciu zewnętrznego oprogramowania</li>
                    </ul>
                    <h2>Autorzy</h2>
                    <ul>
                        <li>Marcin Dydo, Szymon Miareczka</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HomePage;
