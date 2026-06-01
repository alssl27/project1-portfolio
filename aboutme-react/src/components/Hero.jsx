import React from 'react'
import { MotionConfig, motion } from 'framer-motion'
import { Mail, MapPin, Calendar, Download, Briefcase } from 'lucide-react'

export default function Hero(){
  const name = 'Your Name'
  return (
    <MotionConfig>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT */}
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-accent rounded-full" style={{background:'#8b5cf6'}} />
            <small className="text-sm text-gray-400">ABOUT ME</small>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">{name}</span> <span className="inline">👋</span></h1>

          <p className="mt-4 text-gray-300 max-w-xl">I’m a frontend developer specializing in building exceptional digital experiences. Currently focused on crafting accessible, high-performance interfaces with React and modern CSS.</p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="#projects" className="neon-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:scale-105 transition-transform">View My Work</a>
            <a href="/assets/resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border glass text-white hover:shadow-lg transition">Download Resume <Download size={16} /></a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2"><MapPin size={16} className="text-indigo-300"/> <span>Location<br/><strong className="text-white">City, Country</strong></span></div>
            <div className="flex items-center gap-2"><Mail size={16} className="text-indigo-300"/> <span>Email<br/><strong className="text-white">you@domain.com</strong></span></div>
            <div className="flex items-center gap-2"><Briefcase size={16} className="text-indigo-300"/> <span>Experience<br/><strong className="text-white">4 yrs</strong></span></div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="relative flex justify-center">
          <div className="w-80 h-96 md:w-96 md:h-[520px] rounded-2xl overflow-hidden glass border-border flex items-center justify-center">
            <img src="/assets/images/profile.png" alt="profile" className="w-full h-full object-cover" />
          </div>

          <motion.div className="absolute right-6 top-14 w-64 glass glass-sm p-4 rounded-xl code-card border-border" initial={{y:0}} animate={{y:[0,-8,0]}} transition={{duration:6, repeat:Infinity}}>
            <pre className="text-sm text-green-300 font-mono leading-snug">{
`// Example
function greet(name){
  return \`Hello, ${'${name}'}\`;
}

console.log(greet('developer'));
`}
            </pre>
          </motion.div>

          {/* subtle background dots */}
          <div className="pointer-events-none absolute -bottom-8 -left-10 w-48 h-48 bg-gradient-to-br from-purple-700/20 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </section>
    </MotionConfig>
  )
}
