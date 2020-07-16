import FileHandler from '../utils/file'
import vars from '../config/vars'
const { uploadDirectory } = vars;

class Service {
  public uploadTarFile(file: any) {
    if (!file) {
      throw new Error('NO_FILE_ATTACHED');
    }
    return {
      fileName: file.filename
    }
  }
  public getTarFileList() {
    return FileHandler.fileList(uploadDirectory);
  }

  public getTarFile(fileName: string) {
    return FileHandler.readFile(uploadDirectory, fileName);
  }
}

export default new Service();

