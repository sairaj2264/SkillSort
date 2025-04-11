'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

export default function UploadPage() {
    const router = useRouter();
    const supabaseUrl = 'https://scvwzcrugqcooagvxdib.supabase.co' 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdnd6Y3J1Z3Fjb29hZ3Z4ZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTM2ODAsImV4cCI6MjA1OTk2OTY4MH0.B0_UXVLYESdBM4f57SBXUURiR_MRO5aKrjZOeSRThmQ'
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [formData, setFormData] = useState({
        github: '',
        leetcode: '',
        codechef: '',
    });
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [resumeUrl, setResumeUrl] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setSelectedFile(file);
        setUploadStatus('Uploading file...');

        try {
            // Generate a unique filename using timestamp
            const timestamp = new Date().getTime();
            const fileName = `${timestamp}_${file.name}`;
            
            // Upload the file
            const { data, error } = await supabase.storage
                .from('skillsort')
                .upload(`resumes/${fileName}`, file);

            if (error) {
                setUploadStatus(`Upload failed: ${error.message}`);
                console.error('Upload failed:', error);
                return;
            }

            // Get the public URL
            const { data: { publicUrl } } = supabase.storage
                .from('skillsort')
                .getPublicUrl(`resumes/${fileName}`);

            setResumeUrl(publicUrl);
            setUploadStatus('File uploaded successfully!');
        } catch (error) {
            setUploadStatus(`Error: ${error.message}`);
            console.error('Error during upload:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validate form data
        if (!formData.github || !formData.leetcode || !formData.codechef) {
            setError('Please fill in all fields');
            return;
        }

        if (!resumeUrl) {
            setError('Please select and upload a resume file');
            return;
        }

        try {
            // Send data to the API
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    resumeUrl,
                    githubUrl: formData.github,
                    leetcodeUrl: formData.leetcode,
                    codechefUrl: formData.codechef,
                }),
                credentials: 'include',
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to save data');
            }

            // Redirect to home page on success
            router.push('/');
        } catch (err) {
            setError(err.message || 'An error occurred');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Details</h2>
                
                {error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}
                
                {uploadStatus && (
                    <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                        {uploadStatus}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Resume
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            accept=".pdf,.doc,.docx"
                        />
                        {resumeUrl && (
                            <div className="mt-2 text-sm text-gray-600">
                                <p>Resume uploaded successfully!</p>
                                <a 
                                    href={resumeUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    View Resume
                                </a>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            GitHub URL
                        </label>
                        <input
                            type="url"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="https://github.com/username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            LeetCode URL
                        </label>
                        <input
                            type="url"
                            name="leetcode"
                            value={formData.leetcode}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="https://leetcode.com/username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            CodeChef URL
                        </label>
                        <input
                            type="url"
                            name="codechef"
                            value={formData.codechef}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="https://www.codechef.com/users/username"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
