import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Modern Recruitment
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Transforming the hiring landscape with intelligent automation and data-driven insights to connect companies with exceptional talent.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to streamline hiring
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform combines cutting-edge AI technology with user-friendly features to transform your hiring process.
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-50 rounded-lg transform -rotate-1 group-hover:rotate-0 transition duration-300" />
                <div className="relative p-6 bg-white rounded-lg shadow-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">AI-Powered Analysis</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our advanced algorithms analyze resumes for key skills, experience, and qualifications with high accuracy. The system learns from your preferences to improve matching over time.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-50 rounded-lg transform rotate-1 group-hover:rotate-0 transition duration-300" />
                <div className="relative p-6 bg-white rounded-lg shadow-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Fast Screening</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Reduce screening time significantly with our automated candidate matching system. Process hundreds of resumes in minutes, not hours, while maintaining quality standards.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-50 rounded-lg transform -rotate-1 group-hover:rotate-0 transition duration-300" />
                <div className="relative p-6 bg-white rounded-lg shadow-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Customizable Criteria</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Set your own parameters and requirements for the perfect candidate match. Create custom scoring systems, required skills, and experience levels to match your specific needs.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-50 rounded-lg transform rotate-1 group-hover:rotate-0 transition duration-300" />
                <div className="relative p-6 bg-white rounded-lg shadow-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Analytics Dashboard</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Track and analyze your hiring process with detailed insights and reports. Monitor key metrics, identify bottlenecks, and optimize your recruitment strategy with data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Our Platform?</h2>
            <p className="mt-4 text-lg text-gray-500">
              We're committed to helping companies find the best talent efficiently and effectively.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Secure & Compliant</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Your data is protected with enterprise-grade security and complies with global data protection regulations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">24/7 Support</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Our dedicated support team is available around the clock to help you with any questions or issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Continuous Updates</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We regularly update our platform with new features and improvements based on user feedback and industry trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
