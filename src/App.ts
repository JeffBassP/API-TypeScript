import express, { Express } from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { OK } from 'http-status-codes';
import routes from './api/v1/domains/user';
import errorHandler from './middlewares/errorHandler';
import  swaggerConfig  from './middlewares/swagger';

class App {

  public app: Express;

  constructor(PORT: Number) {
    this.app = express();
    
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(routes);
    this.app.use(errorHandler);
    this.app.use(...swaggerConfig);

    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.status(OK).json({
        name: 'it s alive',
        last_update: new Date()
      });
    });
    this.app.listen(PORT, () => console.log('App running on port', PORT));
  }
};

export default App;