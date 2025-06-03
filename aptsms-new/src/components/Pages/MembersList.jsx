import React from 'react'
import { corporateMembers } from '../../../constants/constants'

const MembersList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Corporate Members</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border"></th>
              <th className="px-4 py-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {corporateMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50 text-sm">
                <td className="px-4 py-2 border">{member.id}</td>
                <td className="px-4 py-2 border">{member.designation}</td>
                <td className="px-4 py-2 border">{member.institution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MembersList
