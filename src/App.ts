import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { OK } from 'http-status-codes';
import routes from './api/v1/domains/user';
import errorHandler from './middlewares/errorHandler';
import  swaggerConfig  from './middlewares/swagger';

class App {
  constructor(PORT: Number) {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(compression());
    app.use(helmet());
    app.use(routes);
    app.use(errorHandler);
    app.use(...swaggerConfig);

    app.get('/', (req: express.Request, res: express.Response) => {
      res.status(OK).json({
        name: 'it s alive',
        last_update: new Date()
      });
    });
    app.listen(PORT, () => console.log('App running on port', PORT));
  }
};
export default App;