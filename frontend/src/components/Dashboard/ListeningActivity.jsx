import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import React, { useState, useEffect } from 'react';

export default function ListeningActivity() {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetch('/api/listening-activity')
      .then(res => res.json())
      .then(data => setActivity(data))
  }, [])

  return (
    <div className="glass-container bg-gray-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Listening History</h2>
      <BarChart width={600} height={300} data={activity}>
        <XAxis dataKey="date" stroke="#4a5568" />
        <YAxis stroke="#4a5568" />
        <Tooltip 
          contentStyle={{
            background: '#2d3748',
            border: 'none',
            borderRadius: '8px'
          }}
        />
        <Bar 
          dataKey="minutes" 
          fill="#1DB954" 
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </div>
  )
}