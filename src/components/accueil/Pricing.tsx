import { Check } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out our service",
      features: [
        "2 thumbnails generation",
        "Basic AI generation",
        "720p export quality",
        "Community support",
        "Basic templates",
      ],
      buttonText: "Start Free",
    },
    {
      name: "Pro",
      price: "$29",
      description: "For creators who need more",
      features: [
        "Unlimited thumbnails",
        "Advanced AI generation",
        "4K export quality",
        "Priority support",
        "Custom branding",
        "Premium templates",
        "Analytics dashboard",
      ],
      buttonText: "Upgrade to Pro",
      popular: true,
    }
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple Pricing for Everyone
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Start for free, upgrade when you need more. No hidden fees.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-8 md:mt-12 lg:mt-16 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 bg-white rounded-xl shadow-lg border ${
                tier.popular
                  ? "border-blue-600 shadow-blue-100"
                  : "border-zinc-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-blue-600 px-3 py-2 text-sm font-medium text-white text-center">
                  Most Popular
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-zinc-500">{tier.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="ml-2 text-zinc-500">/month</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-lg px-4 py-3 font-medium text-base ${
                  tier.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                } transition-colors`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 