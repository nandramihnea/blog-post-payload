import React from 'react'

export default function Skeleton() {
  return (
    <>
      <div className="animate-pulse h-12 w-[400px] bg-zinc-300 text-center mb-7 mx-auto"></div>
      <div className="animate-pulse h-40 w-prose bg-zinc-300"></div>
    </>
  )
}
