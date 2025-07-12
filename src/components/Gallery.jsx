'use client'
import React from 'react'

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHxLkDzqjHhV3jKo2mm0szQqdqVAjQFcYJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYck2AQfDX5RUvMUdPL076lRUVFsNyF-cmNhAKxY-4-lZCuFVwZ4Q1pB8YEymYhrzxry4&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAK1R5WoXkhnoClZMXZGVjPVt2uq1M1sACzQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmS-v_UZ4sGunwOMduv_hj9ri1wLYDaAudAYVtjFsmAGzjsaA6k3vl0LHGSEk-wh0oFU0&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16N6sLmRfzsH9xvq-21vahBAJ8nhHl-zEMZwfTe18mOxHrL8MV6Ppjvw5MfxP4cr3cgc&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDWCsfqEzWJtMCEYga1XALuVQB0MZiy14CFEXBZRulQB3Je5m3ZZXG437BkQDzReOOH8&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHxLkDzqjHhV3jKo2mm0szQqdqVAjQFcYJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYck2AQfDX5RUvMUdPL076lRUVFsNyF-cmNhAKxY-4-lZCuFVwZ4Q1pB8YEymYhrzxry4&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAK1R5WoXkhnoClZMXZGVjPVt2uq1M1sACzQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmS-v_UZ4sGunwOMduv_hj9ri1wLYDaAudAYVtjFsmAGzjsaA6k3vl0LHGSEk-wh0oFU0&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16N6sLmRfzsH9xvq-21vahBAJ8nhHl-zEMZwfTe18mOxHrL8MV6Ppjvw5MfxP4cr3cgc&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDWCsfqEzWJtMCEYga1XALuVQB0MZiy14CFEXBZRulQB3Je5m3ZZXG437BkQDzReOOH8&usqp=CAU',
]

export default function GalleryPage() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">College Memories Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <img src={img} alt={`Gallery Image ${index + 1}`} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
