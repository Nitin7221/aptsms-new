import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../ui/button';

const About = () => {
  return (
    <div className="px-4 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About APTSMS</h1>
      
      <p className="mb-4">
        The <strong>Andhra Pradesh Society for Mathematical Sciences</strong> (APSMS) was established in 1986 at the Department of Mathematics, Osmania University, Hyderabad.APSMS was formed with the pioneering efforts of Late Prof. N.Ch. Pattabhi Ramacharyulu, the then Professor of Mathematics, Regional Engineering College, Warangal (Now National Institute of Technology Warangal), and Late Prof. P.V. Arunachalam, the then Professor of Mathematics, Sri Venkateshwara University, Tirupati, & Former Vice Chancellor, Dravidian University.
      </p>
      <p className="mb-4">
       Since its inception, it has been consistently and successfully organising its annual congresses, providing a common platform for scientists, researchers (young and old), technologists, and engineers to present and discuss the current research work conducted by them individually or in groups in their specialised areas of mathematical sciences. It has been attracting a large number of researchers not only from our country but also from abroad.
      </p>
      <p className="mb-4">
       The society has made significant progress in encouraging inter-disciplinary research in the mathematical sciences. Young researchers / scientists are encouraged by the Society through awards, which are specifically designed for that purpose.
      </p>
      <p className="mb-8">
        APSMS was renamed as <strong>Andhra Pradesh and Telangana Society for Mathematical Sciences</strong> (APTSMS)  in 2018 in consequence of the separation of the Andhra Pradesh state as Andhra Pradesh and Telangana states.
      </p>

      {/* Timeline */}
      <div className="relative border-l-4 border-gray-300 pl-6 ml-2">
        {/* 1986 */}
        <div className="mb-10 relative">
          <div className="absolute -left-4 top-1 w-8 h-8 bg-orange-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-semibold text-orange-600 ml-4">1986</h3>
          <p className="font-bold">First conceived</p>
          <p className="text-sm">
            First conceived by Prof. N. Ch. Pattabhi Ramacharyulu and <strong>Prof. P.V. Arunachalam</strong>
          </p>
        </div>

        {/* 1987-2007 */}
        <div className="mb-10 relative">
          <div className="absolute -left-4 top-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-semibold text-green-600 ml-4">1987-2007</h3>
          <p className="font-bold">Every Year</p>
          <p className="text-sm">
            Annual Congress and National Conference conducted by APSMS.
          </p>
        </div>

        {/* 2018 */}
        <div className="relative">
          <div className="absolute -left-4 top-1 w-8 h-8 bg-purple-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-semibold text-purple-600 ml-4">2018</h3>
          <p className="font-bold">APSMS to APTSMS</p>
          <p className="text-sm">
            APSMS became APTSMS to reflect Andhra Pradesh and Telangana separation.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        
        <Button  className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow"> 
            
              <Link to="/announcement">
                           <b>Join APTSMS</b>
                         </Link>
           </Button>

               <Button   className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"> 
            
              <Link to="/president-message">
                           <b>Read President Message</b>
                         </Link>
           </Button>
       
     
      </div>
    </div>
  );
};

export default About;
