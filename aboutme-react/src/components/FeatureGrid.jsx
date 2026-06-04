import React from 'react'
import { Code, Smartphone, Zap, BookOpen } from 'lucide-react'

const features = [
  {icon: Code, title: 'Semantic Code', desc: 'Structured HTML, external CSS, and focused JavaScript.'},
  {icon: Smartphone, title: 'Responsive Design', desc: 'Layouts adapt across mobile, tablet, and desktop widths.'},
  {icon: Zap, title: 'User Control', desc: 'Motion, dialogs, and validation feedback are user controlled.'},
  {icon: BookOpen, title: 'Documented Testing', desc: 'Manual test evidence supports assessment review.'}
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
