import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function TestimonialCard({
  author,
  text,
  href,
  className
}) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border border-blue-100",
        "bg-gradient-to-b from-blue-50/50 to-white",
        "p-4 text-start sm:p-6",
        "hover:from-blue-100/60 hover:to-blue-50/20",
        "max-w-[320px] sm:max-w-[320px] min-w-[300px]",
        "transition-all duration-300 shadow-lg hover:shadow-xl",
        "backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-12 w-12 border-2 border-blue-200">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-base font-semibold leading-none text-gray-900">
            {author.name}
          </h3>
          <p className="text-sm text-blue-600 font-medium">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        "{text}"
      </p>
    </Card>
  )
}
