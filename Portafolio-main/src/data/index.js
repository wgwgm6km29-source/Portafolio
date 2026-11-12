import indexPage from './pages/index.js';

// Devuelve los datos que Handlebars inyecta en cada página
export const getData = (pagePath) => {
    switch (pagePath) {
        case '/index.html':
            return indexPage;
        default:
            return {};
    }
};

export default getData;