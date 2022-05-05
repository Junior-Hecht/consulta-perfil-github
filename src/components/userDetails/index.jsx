// Arquivo responsável pela renderização do componente UserDetails onde é mostrado o nome, login e bio do usuário.
// Importando o componente Container, Name, Username e Description de styles
import { 
    Container,
    Name,
    Username,
    Description
} from './styles';
// configurações do componente UserDetails.
const UserDetails = props => (
    <Container>
        <Name>{props?.name}</Name>
        <Username>{props?.login}</Username>
        <Description>{props?.bio}</Description>
    </Container>
);

// Exportando o componente UserDetails
export default UserDetails;