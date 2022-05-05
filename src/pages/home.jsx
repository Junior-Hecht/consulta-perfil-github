// Arquivo responsável pela renderização do componente Home.
// Importando o React (useContext) de react.
import React, {useContext} from 'react';

// Importando os componentes Container, Header, Users e (contex).
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNunbers from '../components/userNunbers';

import { context } from '../context';

// Exportando a função Home.
export default function Home() {
    const ctx = useContext(context);

    return (
// Campo responsável pela renderização da página inicial.
        <Container>
            <Header />
            <UserContainer>
                {ctx.userData?.name ?
                <React.Fragment>
                    <UserPicture url={ctx.userData?.avatar_url} alternativeText={ctx.usaerData?.login}/> 
                    <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio} />
                    <UserNunbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                </React.Fragment>
                : undefined}
            </UserContainer>
        </Container>
    );
}