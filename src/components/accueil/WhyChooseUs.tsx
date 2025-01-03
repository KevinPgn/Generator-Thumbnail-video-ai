import { Zap, Clock, Sparkles, Trophy } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

export function WhyChooseUs() {
  const features: Feature[] = [
    {
      title: "AI-Powered Excellence",
      description: "Our advanced AI algorithms create stunning thumbnails that capture attention and drive engagement.",
      icon: <Sparkles className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Lightning Fast",
      description: "Generate multiple thumbnail variations in seconds, not hours. Save time for what matters most.",
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Time Saver",
      description: "Stop spending hours on thumbnail design. Get professional results instantly with our AI.",
      icon: <Clock className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Proven Results",
      description: "Join creators who've seen up to 40% increase in click-through rates using our thumbnails.",
      icon: <Trophy className="w-10 h-10 text-purple-500" />,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Our Platform?
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Discover why content creators trust us for their thumbnail generation needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-12 lg:mt-16 max-w-5xl">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-full bg-gray-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 