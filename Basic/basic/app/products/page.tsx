import Link from 'next/link'
import React from 'react'

//static metadata 
//in this is merge with globle matadata which incluse in layout of it root 
// it replace value of saame key and in this priority is current page key
const metadata = {
  title:"Products page"
}

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>Product List</div>
      <p><Link href={'products/1'} >Product 1</Link></p>
      <p><Link href={'products/2'} >Product 2</Link></p>
      <p><Link href={'products/3'} >Product 3</Link></p>
      <p><Link href={'products/4'} >Product 4</Link></p>
    </main>
  )
}
