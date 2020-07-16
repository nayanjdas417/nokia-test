import express from 'express';
import Controller from '../controllers'
import upload from '../middleware/upload'
class Router {
	public routes: express.Router;
	private path = '/file-store';
  private controller: Controller;
  constructor(controller: Controller) {
    this.controller = controller;
		this.routes = express.Router();
		this.initializeRoutes();
	}
	private initializeRoutes() {
    this.routes.route(this.path)
      .post(upload.single('file'), this.controller.uploadTarFile)
      .get(this.controller.getFileList);
    this.routes.route(`${this.path}/:fileName`)
      .get(this.controller.downloadTarFile)
	}
}

export default new Router(new Controller());
