import React from 'react'

const OpeningHours: React.FC = () => {
  const hours = [
    { day: 'Monday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Saturday', open: '9:00 AM', close: '2:00 PM' },
    { day: 'Sunday', open: 'Closed', close: '' }
  ]

  return (
    <div className="p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
      <table className="w-full text-left">
        <tbody>
          {hours.map((h) => (
            <tr key={h.day}>
              <td className="py-2 font-semibold">{h.day}</td>
              <td className="py-2">{h.close ? `${h.open} - ${h.close}` : h.open}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OpeningHours
