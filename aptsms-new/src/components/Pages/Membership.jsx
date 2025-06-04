import React from 'react'
import {Button} from '../ui/button'
import { Link } from "react-router-dom";

function Membership() {
  return (
    <div
        id="membership"
        className="w-full flex flex-col items-center justify-center py-12 bg-green-50 dark:bg-gray-900 mt-[10vh]"
      >
        <div className="max-w-2xl w-full px-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center border border-green-200 dark:border-green-900">
            <h2 className="text-green-800 text-[7vw] md:text-[4vw] lg:text-[2vw] font-bold mb-4 text-center font-sans">
              <b>Membership</b>
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-[4vw] md:text-[1.5vw] lg:text-[1.1vw] mb-6 text-center">
              Become a member of <b>APTSMS</b> and join a vibrant community of
              mathematical scientists, educators, and students. Enjoy exclusive
              access to events, resources, and networking opportunities.
            </p>
            <div className="w-full flex flex-col md:flex-row flex-wrap gap-6 mb-6">
              {/* Corporate Membership Card */}
              <div className="flex-1 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl p-6 flex flex-col items-center min-w-[200px] shadow-md border-2 border-green-300 dark:border-green-800 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <span className="mb-2 text-4xl">🏢</span>
                <span className="text-green-800 font-bold text-[5vw] md:text-[2vw] lg:text-[1.5vw] mb-2">
                  Corporate
                </span>
                <span className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
                  ₹15,000
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm mb-4 text-center">
                  Institutional/Corporate Membership
                </span>
                <Button variant="outline" className="w-full max-w-xs font-semibold border-green-600 hover:bg-green-100 dark:hover:bg-green-800 transition-all duration-200">
                  

                 <Link to="/announcement">
                              <b>Join Corporate</b>
                            </Link>
                            

                </Button>
              </div>
              {/* Life Membership Card */}
              <div className="flex-1 bg-gradient-to-br from-yellow-100 to-green-100 dark:from-yellow-900 dark:to-green-900 rounded-2xl p-6 flex flex-col items-center min-w-[200px] shadow-md border-2 border-yellow-300 dark:border-yellow-800 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <span className="mb-2 text-4xl">🌟</span>
                <span className="text-green-800 font-bold text-[5vw] md:text-[2vw] lg:text-[1.5vw] mb-2">
                  Life
                </span>
                <span className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
                  ₹1,000
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm mb-4 text-center">
                  One-time payment
                </span>
                <Button variant="outline" className="w-full max-w-xs font-semibold border-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-800 transition-all duration-200">
                  
                       <Link to="/announcement">
                            <b>Join Life</b>
                            </Link>

                     
                </Button>
              </div>
              {/* Annual Membership Card */}
              <div className="flex-1 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-2xl p-6 flex flex-col items-center min-w-[200px] shadow-md border-2 border-blue-300 dark:border-blue-800 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <span className="mb-2 text-4xl">📅</span>
                <span className="text-green-800 font-bold text-[5vw] md:text-[2vw] lg:text-[1.5vw] mb-2">
                  Annual
                </span>
                <span className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
                  ₹300
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm mb-4 text-center">
                  Valid for 1 year
                </span>
                <Button variant="outline" className="w-full max-w-xs font-semibold border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all duration-200">
                
                    
                       <Link to="/announcement">
                             <b>Join Annual</b>
                            </Link>
                    
                </Button>
              </div>
              {/* Student Membership Card */}
              <div className="flex-1 bg-gradient-to-br from-pink-100 to-green-100 dark:from-pink-900 dark:to-green-900 rounded-2xl p-6 flex flex-col items-center min-w-[200px] shadow-md border-2 border-pink-300 dark:border-pink-800 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <span className="mb-2 text-4xl">🎓</span>
                <span className="text-green-800 font-bold text-[5vw] md:text-[2vw] lg:text-[1.5vw] mb-2">
                  Student
                </span>
                <span className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
                  ₹100
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm mb-4 text-center">
                  Valid for 1 year (Student ID required)
                </span>
                <Button variant="outline" className="w-full max-w-xs font-semibold border-pink-600 hover:bg-pink-100 dark:hover:bg-pink-800 transition-all duration-200">
                
                      
                         <Link to="/announcement">
                              <b>Join Student</b>
                            </Link>

                </Button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs text-center">
              For queries, please{" "}
              <a
                href="mailto:aptsms.org@gmail.com"
                className="text-green-700 underline"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>

  )
}

export default Membership