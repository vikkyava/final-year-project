import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DownloadButton = ({ fileUrl, fileName }) => {
  return (
    <div className=" mx-3 mt-7">
      <a
        href={fileUrl}
        download={fileName}
        className="border-2 border-[#bb9457] text-dark-gray font-bold py-2 px-4 rounded hover:underline"
      >
        Download Handbook
        <FileDownloadIcon />
      </a>
    </div>
  );
};

export default DownloadButton;
