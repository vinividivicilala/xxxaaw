const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Mencintai diri sendiri adalah blogging platform untuk mengungkapkan rasa suka, sedih, kecewa, bahagia dan seterusnya. aktivitas diri sendiri ketika melakukan sesuatu dengan sendirian.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Saya berdedikasi untuk diri sendiri, keluarga maupun orang lain, tidak ada orang yang peduli sama saya untuk
            cerita, kehidupan, ataupun lain nya. Tujuan saya adalah menciptakan sendirian tanpa bantuan orang lain
           membuat bersemangat.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <div className="relative -mt-20 mb-4">
                  <img
                    className="w-32 h-32 rounded-full border-4 border-white mx-auto object-cover"
                    src=""
                    alt="John Doe"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Farid Ardiansyah</h3>
                <p className="text-blue-600 text-center mb-4"> Menciptakan kehidupan untuk diri sendiri</p>
                <p className="text-gray-600 text-center">
                  Mencintai diri sendiri bukan suatu hal aneh, buruk ataupun gila.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Jika kamu ingin ajak saya bermain / nongkrong bareng ataupun lain nya, silahkan kirim email ke saya ya, terima kasih
          </p>
          <a 
            href="mailto:faridardiansyah061@gmail.com" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </a>
        </section>
      </div>
    </div>
  )
}

export default About;
 