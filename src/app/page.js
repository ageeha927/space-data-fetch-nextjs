"use client"

import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const [date, setDate] = useState('')
  
  const { data, error, isLoading } = useSWR(
    date ? `/api/apod?date=${date}` : '/api/apod',
    fetcher
  )

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">NASA Astronomy Picture of the Day</h1>
      
      <div className="mb-6">
        <label htmlFor="date" className="block mb-2 font-medium">
          Select a date:
        </label>
        <input 
          type="date" 
          id="date" 
          value={date}
          onChange={handleDateChange}
          className="border rounded p-2 w-full"
        />
      </div>

      {isLoading && (
        <div className="text-center py-10">
          <p className="text-lg">Loading...</p>
        </div>
      )}
      
      {error && (
        <div className="px-4 py-3 rounded">
          <p>Error loading data. Please try again.</p>
        </div>
      )}

      {data && !isLoading && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{data.date}</p>
          
          {data.media_type === 'image' ? (
            <div className="mb-4">
              <img 
                src={data.url} 
                alt={data.title} 
                className="w-full h-auto rounded"
              />
            </div>
          ) : data.media_type === 'video' ? (
            <div className="mb-4 aspect-video">
              <iframe
                src={data.url}
                title={data.title}
                className="w-full h-full rounded"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
          
          <p className="mb-2"><strong>Copyright:</strong> {data.copyright || 'Public Domain'}</p>
          <p className="whitespace-pre-line">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}