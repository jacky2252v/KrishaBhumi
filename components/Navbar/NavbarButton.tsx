"use client"

import Link from "next/link"
import { memo } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavButtonProps {
    navLink: string
    navName: string
    isActive?: boolean
    isMobile?: boolean
    onClick?: () => void
}

function NavButton({ navLink, navName, isActive, isMobile, onClick }: NavButtonProps) {
    if (isMobile) {
        return (
            <Link href={navLink} onClick={onClick} className="block w-full">
                <Button
                    variant="ghost"
                    className={cn(
                        "w-full justify-start border border-transparent",
                        isActive
                            ? "bg-primary/10 text-primary border-primary"
                            : "hover:border-primary hover:bg-primary/10 hover:text-primary",
                    )}
                >
                    {navName}
                </Button>
            </Link>
        )
    }

    return (
        <Link href={navLink} onClick={onClick}>
            <Button
                variant="ghost"
                className={cn(
                    "border border-transparent",
                    isActive
                        ? "bg-primary/10 text-primary border-primary"
                        : "hover:border-primary hover:bg-primary/10 hover:text-primary",
                )}
            >
                {navName}
            </Button>
        </Link>
    )
}

export default memo(NavButton)

