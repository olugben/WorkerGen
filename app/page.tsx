"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { ProgressCard } from "@/components/progress-card"
import { DataTable } from "@/components/data-table"

import { FilterDialog } from "@/components/filter-dialog"
import { Button } from "@/components/ui/button"
import { ChevronDown, Filter, Plus, RefreshCcw } from 'lucide-react'

interface Lead {
  name: string
  topic: string
  status: string
  createdOn: string
}

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "topic",
    header: "Topic",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdOn",
    header: "Created on",
  },
]

const initialData: Lead[] = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdOn: "2024-04-02",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "2024-03-30",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "In Progress",
    createdOn: "2024-03-28",
  },
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdOn: "2024-04-02",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "2024-03-30",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "In Progress",
    createdOn: "2024-03-28",
  },
 

]

export default function Page() {

  const [filterDialogOpen, setFilterDialogOpen] = useState(false)
  const [data, setData] = useState<Lead[]>(initialData)

  const applyFilter = (filters: {
    name: string
    topic: string
    status: string
    createdAfter: string
  }) => {
    const filteredData = initialData.filter((lead) => {
      return (
        (filters.name ? lead.name.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
        (filters.topic ? lead.topic.toLowerCase().includes(filters.topic.toLowerCase()) : true) &&
        (filters.status ? lead.status.toLowerCase() === filters.status.toLowerCase() : true) &&
        (filters.createdAfter ? new Date(lead.createdOn) >= new Date(filters.createdAfter) : true)
      )
    })
    setData(filteredData)
  }

  return (
    <Layout>
      <div className="mb-8 flex  flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">My open leads</h1>
          <ChevronDown className="h-5 w-5" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setFilterDialogOpen(true)}>
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" onClick={() => setData(initialData)}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              Collaborate
            </Button>
            <Button variant="outline" size="sm">
              Delete
            </Button>
          <Button variant="outline" size="sm" onClick={() => setData(initialData)}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New
          </Button>

        </div>
      </div>
      <div className="  shadow-2xl rounded-lg p-6 space-y-4">
  <ProgressCard />
  
</div>

  
<div className="mt-8">
  
  <DataTable columns={columns} data={data} />
</div>

    
      <FilterDialog 
        open={filterDialogOpen}
        onClose={() => setFilterDialogOpen(false)}
        onApplyFilter={applyFilter}
      />
      
    </Layout>
  )
}