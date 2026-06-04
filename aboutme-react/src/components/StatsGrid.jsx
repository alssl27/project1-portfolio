import React from 'react'

const stats = [
  {label: 'Static pages', value: '4'},
  {label: 'Case studies', value: '3'},
  {label: 'Skill areas', value: '9'},
  {label: 'Manual tests', value: '14+'}
]

export default function StatsGrid(){
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s,i)=>(
        <div key={i} className="glass p-6 rounded-2xl border-border text-center hover:scale-105 transition-transform">
          <div className="text-3xl font-extrabold text-white">{s.value}</div>
          <div className="text-sm text-gray-400 mt-2">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
