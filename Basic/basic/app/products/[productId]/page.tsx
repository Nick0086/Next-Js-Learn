import React from 'react'
import NotFound from './not-found'

export default function Profile({params}:{params:{productId:string}}) {

  if(parseInt(params?.productId) > 40){
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24" >
        {NotFound()}
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      <div>details of {params.productId}</div>
    </main>
  )
}
