import { Check } from "lucide-react"

export function Product() {
  const features = [
    "Automatic thumbnail generation",
    "Social media optimization",
    "Advanced artificial intelligence",
    "High-quality export",
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Generate Engaging Thumbnails
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Our tool uses artificial intelligence to create attention-grabbing thumbnails that increase your views.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="mx-auto aspect-video overflow-hidden rounded-xl border bg-zinc-50 p-2 dark:bg-zinc-900">
            <img
              alt="Product preview"
              className="aspect-video object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
              width={500}
              height={300}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 