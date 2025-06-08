import React from 'react'

function Id(props) {
    const {name,designation,assigned,mail,college,number,src,role} = props;
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center border border-green-200 dark:border-green-900 max-w-xs w-full">
        <img
          src={`${import.meta.env.BASE_URL}${src}`}
          alt={name}
          className="w-32 h-32 rounded-full object-cover shadow-md border-2 border-green-100 mb-4"
        />
        <h2 className="text-green-800 text-2xl font-bold mb-1 font-sans text-center">{`${designation} ${name}`}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-1 text-center">{role}</p>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-1 text-center">{assigned}</p>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-1 text-center">{college}</p>
        <div className="flex flex-col items-center gap-1 mt-2">
          <a href={`mailto:${mail}`} className="text-green-700 underline text-sm">{mail}</a>
          <span className="text-gray-600 dark:text-gray-400 text-sm">{number}</span>
        </div>
      </div>
    </div>
  )
}

export default Id