"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


interface FilterDialogProps {
  open: boolean;
  onClose: () => void;
  onApplyFilter: (filters: FilterState) => void;
}

interface FilterState {
  name: string;
  topic: string;
  status: string;
  createdAfter: string;
}

export function FilterDialog({
  open,
  onClose,
  onApplyFilter,
}: FilterDialogProps) {
  const [filters, setFilters] = useState<FilterState>({
    name: "",
    topic: "",
    status: "",
    createdAfter: "",
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilter = () => {
    onApplyFilter(filters);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Leads</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="name" className="text-right">
    Name
  </Label>
  <Input
    id="name"
    value={filters.name}
    onChange={(e) => handleFilterChange("name", e.target.value)}
  
    type="text"
    placeholder="Filter by name"
    className="col-span-3"
  />
</div>
<div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="topic" className="text-right">
    Topic
  </Label>
  <Input
    id="topic"
    value={filters.topic}
    onChange={(e) => handleFilterChange("topic", e.target.value)}
   
    type="text"
    placeholder="Filter by topic"
    className="col-span-3"
  />
</div>

       
       
        </div>
        <DialogFooter>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <Button type="submit" onClick={handleApplyFilter}>
      Apply Filter
    </Button>
  </div>
</DialogFooter>

      </DialogContent>
    </Dialog>
  );
}
