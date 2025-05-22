import React, { useState } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  Settings,
  MoreHorizontal,
} from 'lucide-react';

const filesMock = [
  { name: 'First file.jpeg', size: '45MB', type: 'JPEG', status: 'completed', progress: 100 },
  { name: 'First file.jpeg', size: '45MB', type: 'JPEG', status: 'uploading', progress: 60 },
  { name: 'First file.jpeg', size: '45MB', type: 'JPEG', status: 'pending', progress: 30 },
  { name: 'First file.jpeg', size: '-', type: 'JPEG', status: 'error', progress: 0 },
];

const FileUploadPage = () => {
  const [files, setFiles] = useState(filesMock);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">File Upload</h1>

      {/* Drop Zone */}
      <div className="bg-white rounded-xl p-10 shadow-md border border-gray-200 flex flex-col items-center space-y-4">
        <UploadCloud className="w-12 h-12 text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-700">Drop it like it's hot</h2>
        <p className="text-sm text-gray-500">
          Drag and drop your files or select directly from your system
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm">
          Select Files
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mt-8 mb-4">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="selectMany" />
          <label htmlFor="selectMany" className="text-sm text-gray-600">Select many</label>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Upload to:</span>
          <select className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>My Cloud</option>
            <option>Local</option>
            <option>Dropbox</option>
          </select>
          <Settings className="w-5 h-5 text-gray-600" />
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* File List */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-4 font-semibold text-gray-600 text-sm border-b">
          <span>Name</span>
          <span>Status</span>
          <span>Progress</span>
          <span>File Size</span>
          <span>Doc Type</span>
        </div>

        {files.map((file, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 p-4 border-t items-center text-sm text-gray-700"
          >
            {/* File Name */}
            <span className="truncate">{file.name}</span>

            {/* Status */}
            <span className="flex items-center space-x-2">
              {file.status === 'completed' && (
                <>
                  <CheckCircle2 className="text-green-500 w-4 h-4" />
                  <span className="text-green-600">Completed</span>
                </>
              )}
              {file.status === 'uploading' && (
                <span className="text-yellow-500">Uploading</span>
              )}
              {file.status === 'pending' && (
                <span className="text-blue-500">Pending</span>
              )}
              {file.status === 'error' && (
                <>
                  <AlertTriangle className="text-red-500 w-4 h-4" />
                  <span className="text-red-600">Connection Error</span>
                </>
              )}
            </span>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  file.status === 'completed'
                    ? 'bg-green-500'
                    : file.status === 'uploading'
                    ? 'bg-yellow-500'
                    : file.status === 'pending'
                    ? 'bg-blue-500'
                    : 'bg-red-400'
                }`}
                style={{ width: `${file.progress}%` }}
              ></div>
            </div>

            {/* File Size */}
            <span>{file.size}</span>

            {/* File Type */}
            <span>{file.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadPage;
