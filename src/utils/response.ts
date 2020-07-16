import express from 'express';

class ResponseHandler {
  private res: express.Response;
  private code = 200;
  private message = '';
  private status = true;
  private result: any;

  constructor(
    res: express.Response,
    data: {
      code?: number;
      message?: string;
      status?: boolean;
      result?: any;
    }
  ) {
    this.res = res;
    this.code = data.code || 200;
    this.result = data.result;
    this.message = data.message || 'Success';
    this.status = data.status === undefined ? true : false

  }

  public makeResponse() {
    this.res.status(this.code).json({
      message: this.message,
      status: this.status,
      result: this.result
    })
  }
}

export default ResponseHandler;