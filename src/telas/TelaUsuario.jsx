import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormularioUsuario from "./FormularioUsuario";
import TabelaUsuario from "./TabelaUsuario";
import { useState } from "react";

export default function TelaUsuario(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [usuarioParaEdicao, setUsuarioParaEdicao] = useState({
        nickname: '',
        urlAvatar: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <Container>
            <Pagina>
                <FormularioUsuario />
                <TabelaUsuario />
            </Pagina>
        </Container>
    );
}