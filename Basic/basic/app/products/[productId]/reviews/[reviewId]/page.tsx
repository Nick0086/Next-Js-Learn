import { Metadata } from 'next';
import React from 'react'

type params = {
    params: {
        productId: string,
        reviewId: string
    }
}

//dynamic function for metadata set
export const generateMetadata = ({ params }: params): Metadata => {
    return {
        title: `Rewiew ${params.reviewId} for Products ${params.productId}`,
        description: `Details Rewiew ${params.reviewId} for Products ${params.productId}`
    }
};

export default function Profile({ params }: params) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div>review  {params.productId} for product {params.reviewId}</div>
        </main>
    )
}
