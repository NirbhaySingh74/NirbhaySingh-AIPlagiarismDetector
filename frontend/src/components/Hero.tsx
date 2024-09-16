import React, { useState } from "react";

const Hero: React.FC = () => {
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

  const handleSubmit = () => {
    if (!selectedFile) {
      setError("Please select a document before submitting.");
      return;
    }

    console.log("Uploading file: ", selectedFile);
    alert(`File uploaded: ${selectedFile.name}`);
  };

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">
          Real-time AI-Powered Plagiarism Detection
        </h1>
        <p className="mt-4 text-lg">
          Upload your document and get an instant detailed plagiarism report.
        </p>

        <input
          type="file"
          id="file-upload"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <button
          className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          Upload Your Document
        </button>

        {selectedFile && (
          <div className="mt-4">
            <p className="text-sm">Selected File: {selectedFile.name}</p>
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {selectedFile && (
          <button
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
            onClick={handleSubmit}
          >
            Submit Document
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
