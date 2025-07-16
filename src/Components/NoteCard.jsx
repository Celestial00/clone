import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteCard({ note }) {
  return (
    <Link to={`/notebook/${note.id}`} className="bg-[#18181b] rounded-xl overflow-hidden shadow hover:shadow-lg transition block">
      <img src={note.image} alt={note.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white leading-tight mb-1">{note.title}</h3>
        <p className="text-sm text-gray-400">{note.subtitle}</p>
      </div>
    </Link>
  );
}
