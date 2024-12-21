"use client"

import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { LeadModal } from "./lead-modal"

export function ProgressCard() {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm" onClick={() => setModalOpen(true)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">
            Hi Mona, 68% of goal achieved and rest can be achieved by focusing on 20
            top leads.
          </h3>
          <p className="text-sm text-muted-foreground">
            Target: $45 million | 68% of target achieved
          </p>
        </div>
      </div>
      <div className="mt-4">
        <Progress value={68}  max ={100} className="h-2" />
        <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  )
}
