// Arquivo responsável pela renderização do componente Header (onde é mostrado o input de busca e o botão de busca).
// Importando o React, (useState, UseContext) de react.
import React, {useState, useContext} from 'react';

// Importando o componente FiSearch de react-icons/fi.
import { FiSearch } from 'react-icons/fi';

// Importando os componentes Headers de styles
import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

// Importação do componente Header.
import client from '../../services/client';
import { context } from '../../context';

// configurações do componente Header.
const Header = () => {
    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState('');

// Função assíncrona que busca o usuário pelo nome digitado no input.
    async function getUserData() { 

// Verifica se o nome digitado no input esta errado vazio.
        try {
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);

            ctx.setUserData(response.data);
            ctx.setRepos(repos.data);
        } catch (err) {
// Comunica através de um alerta que o nome digitado no input esta errado.
            alert("Infelizmente, não foi possível encontrar o usuário, \nverifique se digitou o username corretamente. \n\n\n🐱‍👤Conte comigo para continuar suas buscas.🔎");
        }
    }

    return( 
// Campo responsável pela renderização do componente Header.
        <HeaderSection>
            <HeaderTitle>Perfil do GitHub</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
                
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}

// Exportação do componente Header.
export default Header;