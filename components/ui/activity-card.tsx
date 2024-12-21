import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from 'lucide-react'

interface ActivityCardProps {
  avatar: string
  name: string
  title: string
  action: string
  description: string
  tags: string[]
}

export function ActivityCard({
  avatar,
  name,
  title,
  action,
  description,
  tags,
}: ActivityCardProps) {
  return (
    <Card>
      <CardContent >
        <div className="flex items-start gap-4">
          <Avatar src={avatar}  alt= "avatar" className="">
           
          </Avatar>
           <AvatarImage src="avatar" alt="avatar" />
    
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{title}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="link" className="h-auto p-0 text-blue-600">
              {action}
            </Button>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
            <div className="flex gap-2 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

