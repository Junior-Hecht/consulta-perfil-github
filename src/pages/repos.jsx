// Importando o React (useContext) de react.
import React, { useContext } from 'react';

// Importando os componentes Container, ReposContainer e (contex).
import Container  from '../components/container';
import ReposContainer from '../components/reposContainer';

import { context } from '../context';

// Utilizando o contexto.
const Repos = props => {
    const ctx = useContext(context);

    return (
// Campo responsável pela renderização do nome e repositórios do usuário.
        <Container>
            <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
       </Container>
    );
}

// Exportando Repos.
export default Repos;