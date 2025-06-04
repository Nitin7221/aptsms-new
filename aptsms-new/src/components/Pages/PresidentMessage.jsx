import React from 'react';
import { Mail, User } from 'lucide-react';

const PresidentMessage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Photo and Name */}
      <div className="bg-green-50 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Large Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-gray-100">
            <img 
              src="/images/Srinivasacharya.jpg" 
              alt="Prof. D Srinivasacharya"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Prof. D Srinivasacharya
          </h1>
          <p className="text-2xl text-gray-600 font-medium mb-2">PRESIDENT</p>
          <p className="text-lg text-gray-500">Department of Mathematics, NIT Warangal, Telangana</p>
        </div>
      </div>

      {/* Letter Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white">
          
          {/* Letter Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Message from the President
            </h2>
          </div>

          {/* Letter Content */}
          <div className="prose prose-xl max-w-none text-gray-800 leading-relaxed space-y-8">
            
            {/* Greeting */}
            <div className="text-2xl font-medium text-gray-900 mb-8">
              Dear APTSMS members, friends,
            </div>

            {/* Paragraph 1 */}
            <p className="text-lg leading-8 text-justify">
              APTSMS, a well-established forum for researchers in all areas of Mathematics, Statistics, and 
              Operations Research, has gained the admiration of all researchers, including those from various 
              research/academic organisations. This has been accomplished because of the enormous selfless hard 
              work and dedication from a certain number of people from the inception. Several eminent 
              mathematicians in the state have acted as presidents and other office bearers and contributed to the 
              development activities of the society. I hope, in the coming years, it will be able to attract more people 
              under the umbrella of APTSMS.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg leading-8 text-justify">
              I am grateful to all the members of APTSMS for electing me as President. I promise to give my honest 
              and sincere efforts in carrying out my responsibility, to work selflessly and to do my best possible to 
              promote APTSMS to a higher level.
            </p>

            {/* Paragraph 3 */}
            <p className="text-lg leading-8 text-justify">
              APTSMS has utmost responsibility to carry out more tasks for the benefit of researchers in 
              Mathematics. Among them, starting some APTSMS chapters to conduct local activities, giving 
              recognition to established researchers, are some that can be given due consideration in near future.
            </p>

            {/* Paragraph 4 */}
            <p className="text-lg leading-8 text-justify">
              The Society aspires to organize symposia, seminars, endowment lectures, exhibitions, international 
              conference, quizzes in university and engineering colleges and institute of higher education to promote 
              the importance and applications of Mathematics in various fields of Science and Technology. To 
              organize such events, interested organizations, colleges, universities, and other institutions should get 
              in contact with the APTSMS office.
            </p>

            {/* Paragraph 5 */}
            <p className="text-lg leading-8 text-justify">
              The faculty, research scholars and students of various universities, institutions and colleges in the 
              states of Andhra Pradesh and Telangana can register as life members, annual members and student 
              members of this august body.
            </p>

            {/* Paragraph 6 */}
            <p className="text-lg leading-8 text-justify">
              Institutions, Organisations and Educational institutions, can also register as corporate members.
            </p>

          </div>

          {/* Signature Section */}
          <div className="mt-16 pt-8">
            <div className="text-lg text-gray-800 space-y-2">
              <p className="font-semibold text-xl">Prof. D Srinivasacharya,</p>
              <p className="font-medium text-gray-700">PRESIDENT,</p>
              <p className="text-gray-600">Department of Mathematics,</p>
              <p className="text-gray-600">NIT, Warangal</p>
              <div className="mt-4">
                <a 
                  href="mailto:dsc@nitw.ac.in" 
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
                >
                  <Mail size={20} />
                  <span>dsc@nitw.ac.in</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;