// Arquivo responsável pela renderização do componente UserPicture (onde é mostrado a foto de perfil do usuário).
// Importando o componente Container e ProfilePicture de styles
import {
    Container,
    ProfilePicture
} from './styles';

// Configuração do componente UserPicture.
const UserPicture = props => (
    <Container>
        <ProfilePicture src={props?.url} alt={props?.alternativeText} />
    </Container>
);

// Exportando o componente UserPicture
export default UserPicture;