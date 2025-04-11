'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function UploadPage() {
    

    const supabaseUrl = 'https://scvwzcrugqcooagvxdib.supabase.co' 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdnd6Y3J1Z3Fjb29hZ3Z4ZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTM2ODAsImV4cCI6MjA1OTk2OTY4MH0.B0_UXVLYESdBM4f57SBXUURiR_MRO5aKrjZOeSRThmQ'
    const supabase = createClient(supabaseUrl, supabaseKey);

  const [formData, setFormData] = useState({
    codechef: '',
    github: '',
    leetcode: '',
  });
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first');
      return;
    }

    try {
      const { data, error } = await supabase.storage
        .from('skillsort')
        .upload(`resumes/${selectedFile.name}`, selectedFile);

      if (error) {
        setUploadStatus(`Upload failed: ${error.message}`);
        console.error('Upload failed:', error);
      } else {
        setUploadStatus('File uploaded successfully!');
        console.log('Upload succeeded:', data);
      }
    } catch (error) {
      setUploadStatus(`Error: ${error.message}`);
      console.error('Error during upload:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Add Profile Links
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Add your coding profile links to showcase your skills
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Upload Resume
                </label>
                <div className="mt-1">
                  <input
                    id="resume"
                    type="file"
                    onChange={handleFileChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button
                  onClick={handleFileUpload}
                  className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Upload Resume
                </button>
                {uploadStatus && (
                  <p className="mt-2 text-sm text-gray-600">{uploadStatus}</p>
                )}
              </div>

              <div>
                <label htmlFor="codechef" className="block text-sm font-medium text-gray-700">
                  CodeChef Profile
                </label>
                <div className="mt-1">
                  <input
                    id="codechef"
                    name="codechef"
                    type="url"
                    value={formData.codechef}
                    onChange={handleChange}
                    placeholder="https://www.codechef.com/users/yourusername"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                  GitHub Profile
                </label>
                <div className="mt-1">
                  <input
                    id="github"
                    name="github"
                    type="url"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourusername"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="leetcode" className="block text-sm font-medium text-gray-700">
                  LeetCode Profile
                </label>
                <div className="mt-1">
                  <input
                    id="leetcode"
                    name="leetcode"
                    type="url"
                    value={formData.leetcode}
                    onChange={handleChange}
                    placeholder="https://leetcode.com/yourusername"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
