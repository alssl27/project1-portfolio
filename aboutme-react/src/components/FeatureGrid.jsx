import React from 'react'
import { Code, Smartphone, Zap, BookOpen } from 'lucide-react'

const features = [
  {icon: Code, title: 'Clean Code', desc: 'Readable, maintainable code with tests.'},
  {icon: Smartphone, title: 'Responsive Design', desc: 'Pixel-perfect across devices.'},
  {icon: Zap, title: 'Performance', desc: 'Fast, optimized interactions.'},
  {icon: BookOpen, title: 'Always Learning', desc: 'Continuous improvement and curiosity.'}
]

export default function FeatureGrid(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((f, i)=>{
        const Icon = f.icon
        return (
          <article key={i} className="glass p-5 rounded-2xl border-border hover:scale-105 transition-transform shadow-neon">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600/30 to-indigo-600/20">
                <Icon className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
