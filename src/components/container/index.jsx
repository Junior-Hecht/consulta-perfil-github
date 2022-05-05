// Arquivo responsável pela renderização do componente MainContainer.
// Importando o componente Container de styles
import { Container } from './styles';

// Configurações do componente MainContainer
const MainContainer = props => (
    <Container>
        {props.children}
    </Container>
);

// Exportando o componente MainContainer
export default MainContainer;





