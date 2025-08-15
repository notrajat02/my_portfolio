"use client";
import Header from "@/components/Header";
import Image from "next/image";

import { useState } from "react";

const videoProjects = [
  { src: '/1.mp4', title: 'Vector Animation 1', type: 'video' },
  { src: '/2.mkv', title: 'Vector Animation 2', type: 'video' },
];

const vectorImages = [
  { src: '/1.png', title: 'Vector 1', type: 'image' },
  { src: '/2.png', title: 'Vector 2', type: 'image' },
  { src: '/3.png', title: 'Vector 3', type: 'image' },
  { src: '/4.png', title: 'Vector 4', type: 'image' },
//   { src: '/5.png', title: 'Vector 5', type: 'image' },
  { src: '/6.png', title: 'Vector 6', type: 'image' },
  { src: '/7.png', title: 'Vector 7', type: 'image' },
];

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const openModal = (item) => {
    setModalItem(item);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalItem(null);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-950 py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">My Vector Projects</h1>
        <p className="text-center text-lg text-gray-200 mb-12">A selection of my vector graphic designs. Click to view in detail.</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[...videoProjects, ...vectorImages].map((item, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-700 rounded-lg shadow hover:shadow-lg transition p-8 flex flex-col items-center justify-between group" style={{ minHeight: '220px', minWidth: '340px' }}>
              <button onClick={() => openModal(item)} className="focus:outline-none w-full">
                {item.type === 'image' ? (
                  <Image src={item.src} alt={item.title} width={300} height={300} className="object-contain mb-4 transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <video src={item.src} controls className="object-contain mb-4 transition-transform duration-300 group-hover:scale-110 w-full h-[180px] bg-black rounded" />
                )}
              </button>
              <h2 className="text-xl font-semibold text-gray-100 text-center mt-auto">{item.title}</h2>
            </div>
          ))}
        </section>

        {modalOpen && modalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative bg-gray-900 rounded-lg p-6 flex flex-col items-center">
              <button onClick={closeModal} className="absolute top-2 right-2 text-gray-300 bg-gray-700 rounded-full px-3 py-1 text-lg font-bold hover:bg-gray-600 focus:outline-none">&times;</button>
              {modalItem.type === 'image' ? (
                <Image src={modalItem.src} alt={modalItem.title} width={500} height={500} className="object-contain mb-4" />
              ) : (
                <video src={modalItem.src} controls autoPlay className="object-contain mb-4 w-[400px] h-[300px] bg-black rounded" />
              )}
              <h2 className="text-2xl font-semibold text-gray-100 text-center mt-2">{modalItem.title}</h2>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
