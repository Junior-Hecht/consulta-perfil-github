// Arquivo responsável pela renderização do componente UserNunbers (onde é mostrado o número de repositórios, seguidores e seguindo do usuário).
// Importando o React.
import React from 'react';

// Importando o useHistory de react-routr-dom.
import { useHistory } from 'react-router-dom';

// Importando o Container e NumberContainer de styles.
import {
    Container,
    NumberContainer
} from './styles';
// configurações de variáveis do componente UserNunbers.
const UserNunbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

   return (
// Renderização do componente UserNunbers.
    <Container>
        <NumberContainer onClick={() => handleOnClick('/repos')}>
            <h1>{props.repos}</h1>
            <h2>Repositórios</h2>
        </NumberContainer>

        <NumberContainer>
            <h1>{props.followers}</h1>
            <h2>Seguidores</h2>
        </NumberContainer>

        <NumberContainer>
            <h1>{props.following}</h1>
            <h2>Seguindo</h2>
        </NumberContainer>
    </Container>
);
}

// Exportando o componente UserNunbers.
export default UserNunbers;


