import express from 'express';
import service from '../services'
import ResponseHandler from '../utils/response';
class Controller {
  public uploadTarFile(
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) {
		try {
			const { file } = req;
			const result = service.uploadTarFile(file);
			const response = new ResponseHandler(res, {
				result,
				code: 201,
				message: 'created'
			});
			return response.makeResponse();
		} catch (e) {
			return next(e);
		}
	}

	public async getFileList(
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) {
		try {
			const result = await service.getTarFileList();
			const response = new ResponseHandler(res, {
				result
			});
			return response.makeResponse();
		} catch (e) {
			return next(e);
		}
	}

	public async downloadTarFile(
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
  ) {
		try {
			const { fileName } = req.params;
			const stream = await service.getTarFile(fileName);
			res.setHeader('Content-Type', 'application/x-tar');
			res.setHeader('Content-Disposition', `${'attachment; filename="'}${fileName}"`);
			stream.pipe(res);
		} catch (e) {
			return next(e);
		}
	}
}

export default Controller;