import React from 'react';

interface Movie {
  id: number;
  image: string;
  title: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div className="px-4 md:px-16 mt-4 space-y-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-[200px] hover:scale-105 transition duration-200">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-md w-full h-[300px] object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}