import { Upload, DollarSign, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-teal-500" />,
      title: "Upload License",
      description: "Simply upload your software license details through our secure portal.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-teal-500" />,
      title: "Get Valuation",
      description: "Receive a competitive valuation within 24 hours based on current market rates.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-teal-500" />,
      title: "Get Paid",
      description: "Accept our offer and get paid quickly via your preferred payment method.",
    },
  ]

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-teal-50 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute transform translate-x-[150%]">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
