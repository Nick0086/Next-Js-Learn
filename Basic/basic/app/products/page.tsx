import React from 'react'


//static metadata 
//in this is merge with globle matadata which incluse in layout of it root 
// it replace value of saame key and in this priority is current page key
export const metadata = {
  title:"Products page"
}

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>Product List</div>
      <p>Product one</p>
      <p>Product 2</p>
      <p>Product 3</p>
      <p>Product 4</p>
      <p>Product 5</p>
    </main>
  )
}
