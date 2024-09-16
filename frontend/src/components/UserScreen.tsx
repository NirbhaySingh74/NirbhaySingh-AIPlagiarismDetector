import React, { useState } from "react";

const UserScreen: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type.includes("officedocument"))
    ) {
      setSelectedFile(file);
      setError(null);
    } else {
      setError("Please upload a valid PDF or Word document.");
      setSelectedFile(null);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) {
      setError("Please select a document before submitting.");
      return;
    }

    console.log("Uploading file: ", selectedFile);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Upload Document for Plagiarism Detection
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="document" className="block text-gray-700">
            Select a Document (PDF or Word)
          </label>
          <input
            type="file"
            id="document"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {selectedFile && (
        <div className="mt-4 text-center">
          <p className="text-gray-600">Selected File: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default UserScreen;
