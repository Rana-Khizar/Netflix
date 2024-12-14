import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieRow } from './components/MovieRow';
import { trendingNow, popularOnNetflix } from './data/movies';

function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-20 -mt-32">
        <MovieRow title="Trending Now" movies={trendingNow} />
        <MovieRow title="Popular on Netflix" movies={popularOnNetflix} />
      </div>
    </div>
  );
}

export default App;