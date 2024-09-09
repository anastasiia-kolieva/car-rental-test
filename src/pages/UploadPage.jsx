import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('file', file);

    // fetch('http://localhost:3000/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
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
    </div>
  );
}

export default FileUpload;