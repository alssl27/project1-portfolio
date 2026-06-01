import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import StatsGrid from './components/StatsGrid'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen text-white d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Hero />
          <section className="mt-12">
            <FeatureGrid />
          </section>
          <section className="mt-8">
            <StatsGrid />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
