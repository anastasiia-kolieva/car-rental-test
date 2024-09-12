import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileType = selectedFile?.type;

    if (fileType === 'application/pdf' || fileType === 'image/jpeg') {
      setFile(selectedFile);
      setErrorMessage('');
    } else {
      setFile(null);
      setErrorMessage('Only PDF or JPEG files are allowed.');
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage('Please select a file to upload.');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('File uploaded successfully!');
        setFile(null);
      } else {
        setErrorMessage(`Error: ${data.message}` || 'File upload failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during file upload.');
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-2.5">Upload Driver's License</h2>
      <form onSubmit={handleUpload} className="flex flex-col space-y-4">
        <input type="file" onChange={handleFileChange} className="border p-2 w-max" />
        <button type="submit" className="bg-sky-700 text-white font-bold w-max p-2 rounded">
          Upload
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
    </div>
  );
}

export default FileUpload;
