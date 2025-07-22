import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}) {
  return (
    <section className={cn(
      "bg-white text-gray-900",
      "py-12 sm:py-24 md:py-32 px-4",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight text-gray-900 sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-lg max-w-[600px] font-medium text-gray-600 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex overflow-hidden p-2 w-full group">
            <div
              className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]"
              style={{
                '--gap': '1rem'
              }}
            >
              {[...Array(3)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}
