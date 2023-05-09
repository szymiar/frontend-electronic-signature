import { useKeycloak } from "@react-keycloak/web";

function LoginButton() {
    const { keycloak } = useKeycloak();

    const handleLogin = () => {
        keycloak.login();
    };

    return (
        !keycloak.authenticated &&
        <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleLogin}>
            Zaloguj
        </button>
    );
}

export default LoginButton;
