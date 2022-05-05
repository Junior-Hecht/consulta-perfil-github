// Importando o Routes de src/routes.js. e o ContextProvider de src/context/index.js.
import Routes from './Routes';
import { ContextProvider } from './context';

// Renderizando o Routes.
const App = () => (
    <ContextProvider>
        <Routes />
    </ContextProvider>
);

// Exportando o App.
export default App;
