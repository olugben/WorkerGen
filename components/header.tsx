import { Button } from "@/components/ui/button"
import { BarChart2, Plus, RefreshCcw, Users, Filter, Columns, Share2, MoreHorizontal } from 'lucide-react'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-4 overflow-x-auto">
        <h2 className="text-lg font-semibold whitespace-nowrap">My open leads</h2>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <BarChart2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="whitespace-nowrap">
            <Plus className="h-4 w-4 mr-2" />
            New
          </Button>
          <Button variant="ghost" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Columns className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

