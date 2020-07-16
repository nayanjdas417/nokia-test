import express from 'express';
import helmet from 'helmet';
import * as swaggerUi from 'swagger-ui-express';
import router from '../router/index';
import ResponseHandler from '../utils/response';
import errorManager from '../config/errorMessages';
import swaggerDoc from '../swagger/swagger.json'

const app = express();

app.use(helmet());
app.use('/', router.routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.route('/').get((req, res) => {
	res.send('<h2>App is up and running</h2>');
});

// handle error
app.use(
	(
		err: Error,
		_req: express.Request,
		res: express.Response,
		_next: express.NextFunction
	) => {
		const message = err.message;
		let data;
		if (errorManager[message]) {
			data = errorManager[message];
		} else {
			data = { ...errorManager['UNKNOWN_ERROR'], message };
		}
		const response = new ResponseHandler(res, data);
		return response.makeResponse();
	}
);

export default app;
