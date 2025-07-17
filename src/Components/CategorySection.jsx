import React from 'react';
import NoteCard from './NoteCard';

export default function CategorySection({ category }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">{category.name}</h2>
        <span className="text-gray-500 text-sm">
          {`${category.notes.length} note${category.notes.length > 1 ? 's' : ''}`}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {category.notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}
