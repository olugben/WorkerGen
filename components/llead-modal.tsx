"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X} from 'lucide-react';
import Image from "next/image";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

export function LLeadModal({ open, onClose }: LeadModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
  <div className="DialogOverlay fixed inset-0 bg-black bg-opacity-50 z-50"></div>
  <DialogContent className="max-w-3xl p-6 md:p-8 bg-gradient-to-br from-white to-slate-50 shadow-lg rounded-lg fixed inset-x-4 top-16 md:inset-x-auto md:top-auto md:left-1/2 transform md:-translate-x-1/2 overflow-auto z-50">
    <DialogHeader className="mb-6">
      <div className="flex items-start justify-between">
        {/* Profile Info */}
        <div className="flex gap-4">
          <div className="relative h-12 w-12">
            <Image
              src="/Enterwork2.jpg"
              alt="Jane Reyes"
              className="rounded-full border border-gray-200 shadow-sm"
              width={48}
              height={48}
            />
          </div>
          <div>
            <DialogTitle className="text-xl font-bold text-gray-800">Jane Reyes</DialogTitle>
            <p className="text-sm text-gray-500">COO • Northwind Traders</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-gray-400 hover:text-gray-800"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </DialogHeader>

    {/* Main Content */}
    <div className="mt-6 space-y-6">
      {/* Lead Info */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              Jane may be interested in upgrading espresso machines for her in-store coffee shops.
            </p>
            <div className="flex gap-3 text-sm text-gray-500">
              <span>Expand business</span>
              <span>•</span>
              <span>High buying intent</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
              Approve
            </Button>
          </div>
        </div>
      </div>

      {/* Why I Picked This Lead */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Why I picked this lead</h3>
        <div className="space-y-4">
          {[
            "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website.",
            "Multiple people at her company have reported 'slowness' during service requests.",
            "Northwind Traders currently see $200M in revenue from their in-store coffee shops.",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                {idx + 1}
              </span>
              <p className="text-sm text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DialogContent>
</Dialog>

  );
}
