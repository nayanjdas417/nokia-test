import path from 'path';
import * as fs from 'fs';
import { promises } from 'fs'

export default class FileOperation {
  static async readFile(directory: string, fileName: string) {
    await promises.access(path.join(directory, fileName)).catch(e => {
      throw new Error("FILE_NOT_EXIST");
    });
    return fs.createReadStream(path.join(directory, fileName));
  }

  static fileList(directory: string) {
    return new Promise((resolve, reject) => {
      fs.readdir(directory, (err, files) => {
        if (err) {
          return reject(err);
        }
        resolve(files);
      })
    });
  }
}