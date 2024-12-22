"use client"

import Link from "next/link"
import { Bell, HelpCircle, Menu, Settings } from 'lucide-react'

import { Button } from "@/components/ui/button"

interface MainNavProps {
  onMenuClick: () => void
}

export function MainNav({ onMenuClick }: MainNavProps) {
  return (
    <div className="flex h-16 items-center justify-between border-b bg-[#0f1834] px-4">
      <div className="flex items-center gap-6 text-white">
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="text-lg font-semibold">
          Dynamics 365
        </Link>
        <span className="text-sm hidden md:inline">Sales hub</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-white">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-zinc-100" />
      </div>
    </div>
  )
}

