'use client';

import Link from 'next/link';
import { useSession } from '../context/SessionContext';

export default function Navbar() {
  const { user, loading , logout } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              SkillSort
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            {!loading && user && (
              <>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <span className="text-gray-600 px-3 py-2 text-sm font-medium">
                      {user.name || user.email}
                    </span>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <Link 
                    href="/upload" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                  >
                    Upload
                  </Link>
                  <button
                    onClick={() => {
                      // TODO: Implement logout functionality
                      logout();
                      console.log('Logout clicked');
                    }}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
            {!loading && !user && (
              <Link 
                href="/login" 
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 