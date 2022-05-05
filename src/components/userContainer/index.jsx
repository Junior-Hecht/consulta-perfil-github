// Arquivo responsável peal renderização do componente UserContainer onde é mostrado o username.
// Importando o componente Section de styles
import {
    Section
} from './styles';

//Configurações do componente UserContainer
const UserContainer = props => (
    <Section>
        {props.children}
    </Section>
);

// Exportando o componente UserContainer
export default UserContainer;