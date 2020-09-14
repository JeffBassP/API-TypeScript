import App from './App';

const PORT = process.env.port || 3000;

const server = new App(+PORT);

export default server;


