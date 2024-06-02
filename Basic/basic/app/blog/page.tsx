import React from 'react'

//static metadata 
//in this is merge with globle matadata which incluse in layout of it root 
// it replace value of saame key and in this priority is current page key
export const metadata = {
  title:"Blog page"
}

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>Blog page</div>
    </main>
  )
}
