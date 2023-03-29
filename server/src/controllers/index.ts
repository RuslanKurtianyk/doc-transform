import { Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { BASE_PATH } from '../constants';

export const hello = async (req: Request, res: Response): Promise<void> => {
  res.send({data: 'Hello from server'})
};

export const upload = async (req: Request, res: Response): Promise<unknown> => {
  let uploadedFile: UploadedFile;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  uploadedFile = Array.isArray(req.files.pdfFile) ? req.files.pdfFile[0] : req.files.pdfFile;
  const uploadPath = path.join(BASE_PATH, 'files', uploadedFile.name);

  uploadedFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.status(200).send('File uploaded successfully!');
  });
};