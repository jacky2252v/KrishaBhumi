import Link from "next/link";
import React from 'react'
import { Button } from "../ui/button";


interface NavButtonProps {
    navLink: string
    navName: string
}

export default function NavButton({ navLink, navName }: NavButtonProps) {
    return (
        <div>
            <Link href={navLink}>
                <Button variant="ghost" className="border border-transparent hover:border-primary hover:bg-primary/10 hover:text-primary">
                    {navName}
                </Button>
            </Link>
        </div>
    )
}
