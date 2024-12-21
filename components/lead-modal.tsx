"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Edit, LinkedinIcon, ChevronRight } from 'lucide-react'
import Image from "next/image"

interface LeadModalProps {
  open: boolean
  onClose: () => void
}

export function LeadModal({ open, onClose }: LeadModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-4 md:p-6">
        <DialogHeader className="mb-4">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Jane Reyes"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div className="absolute -right-1 -bottom-1 rounded-full bg-blue-600 p-1">
                  <LinkedinIcon className="h-2.5 w-2.5 text-white" />
                </div>
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold">Jane Reyes</DialogTitle>
                <p className="text-xs text-muted-foreground">COO • Northwind Traders</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border bg-slate-50 p-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-blue-600">
                  Jane may be interested in upgrading espresso machines for her in-store coffee shops.
                </p>
                <div className="flex gap-2">
                  <span className="text-sm text-muted-foreground">Expand business</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">High buying intent</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button size="sm">Approve and send</Button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold">Why I picked this lead</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  1
                </span>
                <p className="text-sm">
                  Jane is a <span className="font-medium">key decision maker</span> and was browsing
                  &apos;espresso machines&apos; on First Coffee&apos;s website.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  2
                </span>
                <p className="text-sm">
                  Multiple people at her company have reported &apos;slowness&apos; during service requests
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  3
                </span>
                <p className="text-sm">
                  Northwind Traders currently see $200M in revenue from their in-store coffee shops.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-sm text-muted-foreground">Decision maker</div>
              <div className="flex items-center gap-2 font-medium">
                <div className="rounded-full bg-green-100 p-2">
                  <ChevronRight className="h-4 w-4 text-green-600" />
                </div>
                Yes
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-sm text-muted-foreground">Potential deal value</div>
              <div className="flex items-center gap-2 font-medium">
                <div className="rounded-full bg-yellow-100 p-2">
                  <span className="text-yellow-600">$</span>
                </div>
                $1M
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 text-sm text-muted-foreground">Intent</div>
              <div className="flex items-center gap-2 font-medium">
                <div className="rounded-full bg-blue-100 p-2">
                  <ChevronRight className="h-4 w-4 text-blue-600" />
                </div>
                High
              </div>
            </div>
          </div>

        
        </div>
      </DialogContent>
    </Dialog>
  )
}
