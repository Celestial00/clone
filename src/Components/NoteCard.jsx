import React from 'react';

export default function NoteCard({ note }) {
  return (
    <div className="bg-[#18181b] rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={note.image} alt={note.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white leading-tight mb-1">{note.title}</h3>
        <p className="text-sm text-gray-400">{note.subtitle}</p>
      </div>
    </div>
  );
}
