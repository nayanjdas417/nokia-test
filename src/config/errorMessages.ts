const errorMessage: {
  [key: string]: object
} = {
  'INVALID_FILE': {
    code: 400,
    status: false,
    message: 'Please upload a valid .tar file'
  },
  'NO_FILE_ATTACHED': {
    code: 400,
    status: false,
    message: 'No File present in the request body'
  },
  'FILE_NOT_EXIST': {
    code: 400,
    status: false,
    message: 'Invalid file name'
  },
  'UNKNOWN_ERROR': {
    code: 500,
    status: false,
    message: ''
  }
}

export default errorMessage;