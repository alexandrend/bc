
import React from 'react';
import BusinessCard from './components/BusinessCard';

function App() {
  const summary = "For the past decade at Google, I've worked as a Software Engineer on diverse and impactful projects, spanning everything from large-scale data center optimization to the safety and reliability of our AI models. I'm currently focused on the challenges within ML Data and infrastructure. Prior to my time at Google, I spent over 10 years shaping the next generation of computer scientists as a professor, teaching foundational topics like Data Structures, Algorithms, and Distributed Systems.";

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-sans p-4">
      <BusinessCard 
        summary={summary}
      />
    </div>
  );
}

export default App;