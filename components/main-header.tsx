import { Button } from "@/components/ui/button"
import { BarChart2, Focus, Plus, RefreshCcw, Users, Trash2, MoreHorizontal, Edit, ChevronDown } from 'lucide-react'

export function MainHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">My open leads</h1>
        <Button variant="ghost" size="sm">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <BarChart2 className="h-4 w-4 mr-2" />
          Show chart
        </Button>
        <Button variant="ghost" size="sm">
          <Focus className="h-4 w-4 mr-2" />
          Focused view
        </Button>
        <Button variant="ghost" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
        <Button variant="ghost" size="sm">
          <RefreshCcw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
        <Button variant="ghost" size="sm">
          <Users className="h-4 w-4 mr-2" />
          Collaborate
        </Button>
        <Button variant="ghost" size="sm">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Edit className="h-4 w-4 mr-2" />
          Edit filters
        </Button>
        <Button variant="ghost" size="sm">
          <Edit className="h-4 w-4 mr-2" />
          Edit columns
        </Button>
      </div>
    </div>
  )
}

