// Importando o styled de styled-components.
import styled from 'styled-components';

// Estilização do container.
export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
// Estilização do numero do usuário.
export const NumberContainer = styled.div`
    width: 100px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 20px;
        text-align: center;
        color: #444;
    } 

    h2 {
        font-size: 12px;
        text-align: center;
        color: #777;
    } 

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.06);
        transition: .4s ease;
        border-radius: 10px;
    }
`
