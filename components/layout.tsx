"use client"

import { useState } from 'react'
import { MainNav } from "./main-nav"
import { Sidebar } from "./sidebar"

export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col fixed">
      <MainNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1" >
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 p-4 md:p-8 h-screen overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

