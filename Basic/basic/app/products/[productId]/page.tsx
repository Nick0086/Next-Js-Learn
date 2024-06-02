import React from 'react'
import NotFound from './not-found'
import { Metadata } from 'next'

type params = {
  params: {
    productId: string
  }
}


export const generateMetadata = async ({ params }: params): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`${params.productId}`);
    }, 2000);
  });

  return {
    title:{
      absolute:`Products ${title}`,
    } ,
    description: `Details of ${title}`,
  };
};



//dynamic function for metadata set
// export const generateMetadata = ({ params }: params): Metadata => {
//   return {
//     title: `Products ${params.productId}`,
//     description: `Details of ${params.productId}`,
//   }
// };

export default function Profile({ params }: params) {

  if (parseInt(params?.productId) > 40) {
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
