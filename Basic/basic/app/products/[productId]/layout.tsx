import { Metadata } from 'next';

type Params = {
  params: {
    productId: string
  }
}

 const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const title = await new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(`${params.productId}`);
    }, 2000);
  });

  return {
    title: `Products ${title}`,
    description: `Details of ${title}`,
  };
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <footer className="py-8 px-4 text-lg font-bold text-center border-t-2 border-t-cyan-600" >
                <h1>Feature Products : </h1>
            </footer>
        </>
    );
}
