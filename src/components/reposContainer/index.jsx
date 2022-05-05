// Arquivo responsável pela renderização do componente Repo onde é mostrado o nome do repositório e a descrição.
// importando o styled-components
import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

// configurações do componente ReposContainer.
const ReposContainer = props => {
    return (
//Arquivo responsável pela renderização do componente ReposContainer (onde é mostrado a lista de repositórios do usuário).
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

// exportando o componente ReposContainer.
export default ReposContainer;