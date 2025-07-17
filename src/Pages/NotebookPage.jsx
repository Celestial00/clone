import React from 'react';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const categories = [
  {
    name: 'Dev',
    notes: [
      {
        id: 1,
        title: 'Ultimate guide to the App Router in Next.js 13',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        subtitle: 'A complete overview of the new routing system',
      },
    ],
  },
  {
    name: 'Design',
    notes: [
      {
        id: 2,
        title: 'Designing smooth transitions in UI',
        image: 'https://images.unsplash.com/photo-1573164574394-9d4b35b7bdf4?auto=format&fit=crop&w=800&q=80',
        subtitle: 'Learn how to enhance visual flow in interfaces',
      },
    ],
  },
];

export default function NotebookPage() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white">
      <Header />
      <hr className="border-[#222] mt-2 mx-4 md:mx-16" />
      <div className="px-4 md:px-16 py-10 space-y-12">
        {categories.map((category) => (
          <CategorySection key={category.name} category={category} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
