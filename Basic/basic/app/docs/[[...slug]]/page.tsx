import React from 'react'

export default function Docs({
    params
}: {
    params: {
        slug: string[],
    }
}) {
    return (

        // catch-all-sagments
        // if we use single [] like [..slug] then we see error page on localhost.docs 
        // if you see docs amin page then use [[..slug]]

        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <p>catch-all-segments in routing</p>
        
            {
                params?.slug?.length === 0 && 'Docs Home Page'
            }
            {
               params?.slug?.length  > 0 && `view docs for feature ${params?.slug[0]} ${params?.slug[1] && `and concept ${params?.slug[1]}`} `
            }
            {
                params?.slug?.map((slug, index) => {
                    return <h1 key={index}>{slug}</h1>
                })
            }
            {
                JSON.stringify(params?.slug, null, 2)
            }
        </main>
    )
}
