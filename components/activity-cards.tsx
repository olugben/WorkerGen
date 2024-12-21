import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export function ActivityCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-gray-100" />
            <div>
              <CardTitle className="text-base">Jane Reyes</CardTitle>
              <p className="text-sm text-muted-foreground">COO • Northwind Traders</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            
          </Button>
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold">Engage with Jane Reyes</h4>
          <p className="text-sm text-muted-foreground">
            Jane may be interested in upgrading espresso machines for her in-store coffee shops.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" size="sm">Expand business</Button>
            <Button variant="outline" size="sm">High buying intent</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-gray-100" />
            <div>
              <CardTitle className="text-base">Allan Munger</CardTitle>
              <p className="text-sm text-muted-foreground">Head of Real Estate Development • Contoso Coffee</p>
            </div>
          </div>
         
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold">Prepare for meeting with Allan</h4>
          <p className="text-sm text-muted-foreground">
            Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span>Upcoming meeting</span>
            <span>•</span>
            <span>Due today</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

