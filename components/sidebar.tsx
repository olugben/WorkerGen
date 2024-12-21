"use client"

import Link from "next/link"
import { BarChart3, Building2, Contact2, FileText, Home, History, LayoutDashboard, ListTodo, Package, Pin, ShoppingCart, Users, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const navigation = [
  { name: "Home", href: "#", icon: Home },
  { name: "Recent", href: "#", icon: History },
  { name: "Pinned", href: "#", icon: Pin },
]

const workItems = [
  { name: "Sales accelerator", href: "#", icon: BarChart3 },
  { name: "Dashboards", href: "#", icon: LayoutDashboard },
  { name: "Activities", href: "#", icon: ListTodo },
]

const customerItems = [
  { name: "Accounts", href: "#", icon: Building2 },
  { name: "Contacts", href: "#", icon: Contact2 },
]

const salesItems = [
  { name: "Leads", href: "#", icon: Users },
  { name: "Opportunities", href: "#", icon: ShoppingCart },
  { name: "Quotes", href: "#", icon: FileText },
  { name: "Orders", href: "#", icon: Package },
]

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 md:hidden">
          <span className="text-lg font-semibold">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
          <nav className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <div className="px-3 text-sm font-medium text-zinc-500">My work</div>
              {workItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <div className="px-3 text-sm font-medium text-zinc-500">
                Customers
              </div>
              {customerItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <div className="px-3 text-sm font-medium text-zinc-500">Sales</div>
              {salesItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}

