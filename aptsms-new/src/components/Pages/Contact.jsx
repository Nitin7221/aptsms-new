import React from 'react';
import { Mail, Phone, MapPin, User, Building } from 'lucide-react';



const ContactCard = ({ name, title, department, institution, location, email, phone, photo, bgColor = "bg-blue-500" }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm mx-auto">
      {/* Header with colored background */}
      <div className={`${bgColor} rounded-t-xl p-6 text-white`}>
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 overflow-hidden">
            {photo ? (
              <img 
                src={photo} 
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={40} className="text-white" />
            )}
          </div>
          <h2 className="text-xl font-bold text-center">{name}</h2>
          <p className="text-blue-100 text-center mt-1">{title}</p>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start space-x-3">
          <Building className="text-gray-500 mt-1 flex-shrink-0" size={18} />
          <div>
            <p className="text-gray-800 font-medium">{department}</p>
            <p className="text-gray-600 text-sm">{institution}</p>
            {location && <p className="text-gray-600 text-sm">{location}</p>}
          </div>
        </div>
        
        {email && (
          <div className="flex items-center space-x-3">
            <Mail className="text-gray-500 flex-shrink-0" size={18} />
            <a 
              href={`mailto:${email}`} 
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm break-all"
            >
              {email}
            </a>
          </div>
        )}
        
        {phone && (
          <div className="flex items-center space-x-3">
            <Phone className="text-gray-500 flex-shrink-0" size={18} />
            <a 
              href={`tel:${phone}`} 
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              {phone}
            </a>
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      <div className="px-6 pb-6 flex space-x-2">
        {email && (
          <button 
            onClick={() => window.open(`mailto:${email}`)}
            className={`flex-1 ${bgColor} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
          >
            Send Email
          </button>
        )}
        {phone && (
          <button 
            onClick={() => window.open(`tel:${phone}`)}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            Call
          </button>
        )}
      </div>
    </div>
  );
};

const ContactCards = () => {
  const contacts = [
    {
      name: "Prof. D Srinivasacharya",
      title: "President",
      department: "Department of Mathematics",
      institution: "NIT, Warangal",
      bgColor: "bg-green-800",
      photo: "/images/Srinivasacharya.jpg"
      // photo: "https://example.com/prof-srinivasacharya.jpg" // Add photo URL here
    },
    
    {
      name: "Capt. Prof. N. Ramakrishna",
      title: "General Secretary",
      department: "Department of Mathematics",
      institution: "Andhra University",
      location: "Visakhapatnam",
      email: "captdmrk@gmail.com",
      phone: "+91 9440442737",
      bgColor: "bg-green-800",
      photo:"/images/NRamakrishna.jpg"
      // photo: "https://example.com/prof-ramakrishna.jpg" // Add photo URL here
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCards;