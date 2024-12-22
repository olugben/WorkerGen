"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LeadCard } from "./ui/lead-card";
import { LeadModal } from "./lead-modal";
import { LLeadModal } from "./llead-modal";
import { useState } from "react";
export function ProgressCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenn, setModalOpenn] = useState(false);
  return (
    <Card className="w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4 style={{ boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.25)' }}">
          <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
            <h2 className=" font-semibold">
              Hi Mona, 68% of goal achieved and rest can be achieved by focusing
              on 20 top leads.
            </h2>
            <span className="text-sm font-medium ">Target: $45 million</span>
          </div>
          <div className="flex items-center space-x-2">
            <Progress value={68} max={100} className="flex-grow" />
            <span className="text-sm font-medium">68% of target achieved</span>
          </div>
          <p className="text-sm p-6 space-y-2">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div
              className="shadow-2xl rounded-lg p-2 space-y-3"
              onClick={() => setModalOpen(true)}
            >
              <LeadCard
                name="Jane Reyes"
                company="COO • Northwind Traders"
                imageUrl="/Enterwork2.jpg"
                action="Engage with Jane Reyes"
                description="Jane may be interested in upgrading espresso machines for her in-store coffee shops."
                tags={["Expand business", "High buying intent"]}
              />
            </div>
            <div className="shadow-2xl rounded-lg p-2 space-y-3"
             onClick={() => setModalOpenn(true)}
            >
              <LeadCard
                name="Allan Munger"
                company="Head of Real Estate Development • Contoso Coffee"
                imageUrl="/enterworkjane.avif"
                action="Prepare for meeting with Allan"
                description="Prepare for high-buying intent meeting Copilot...."
                tags={["Upcoming meeting", "Due today"]}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <LLeadModal open={modalOpenn} onClose={() => setModalOpenn(false)} />
    </Card>
  );
}
