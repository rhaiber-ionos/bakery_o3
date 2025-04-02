import React from 'react'

type Employee = {
  id: number
  name: string
  position: string
}

const employees: Employee[] = [
  { id: 1, name: 'Alice', position: 'Baker' },
  { id: 2, name: 'Bob', position: 'Pastry Chef' },
  { id: 3, name: 'Charlie', position: 'Barista' }
]

const EmployeeList: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Our Team</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id} className="py-2 border-b last:border-none">
            <span className="font-semibold">{emp.name}</span> - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmployeeList
