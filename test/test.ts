import chai from 'chai';
import * as fs from 'fs';
import 'mocha';
import service from '../src/services'
import vars from '../src/config/vars';

const { uploadDirectory } = vars;
const { expect } = chai;

describe('File Store Service unit test', () => {
  before(async () => {
    console.log('before test case');
    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory);
    }
  });
  it ('Upload File', async () => {
    const file = { filename: 'invalidName.tar' };
		const data = await service.uploadTarFile(file);
		expect(data.fileName).to.equal(file.filename);
  });
  it ('Get file list', async () => {
		const data = await service.getTarFileList();
		expect(data).to.be.an('array');
  });
  
  it('Get file', async () => {
    const fileName = 'invalidName.tar';
		const data = await service.getTarFile(fileName).catch(e => e.message);
		expect(data).to.equal("FILE_NOT_EXIST");
	});
})