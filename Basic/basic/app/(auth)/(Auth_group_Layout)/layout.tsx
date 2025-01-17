import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1 className="text-center" >group layout for login/register : </h1>
            {children}
        </>
    );
}
