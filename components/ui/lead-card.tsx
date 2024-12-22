
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

interface LeadCardProps {
  name: string
  company: string
  imageUrl: string
  action: string
  description: string
  tags: string[]
}

export function LeadCard({ name, company, imageUrl, action, description, tags }: LeadCardProps) {
  return (
    <Card className="w-full overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Image
            src={imageUrl}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold text-black-900">{name}</h3>
            <p className="text-sm text-black-600">{company}</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="mt-4 w-full justify-between border-black-200 bg-black-50 text-black-700 hover:bg-black-100 hover:text-black-800"
        >
          {action}
          <ChevronRight className="h-4 w-4" />
        </Button>
        <p className="mt-4 text-sm text-black-800">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-black-100 px-2 py-1 text-xs font-medium text-black-800">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

