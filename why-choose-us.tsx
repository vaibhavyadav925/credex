import { ShieldCheck, Clock, BadgeDollarSign, Users } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing for your peace of mind.",
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-500" />,
      title: "Fast Processing",
      description: "Get valuations within 24 hours and payment within 3 business days.",
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-teal-500" />,
      title: "Best Market Rates",
      description: "Our extensive network ensures you get the highest value for your licenses.",
    },
    {
      icon: <Users className="h-10 w-10 text-teal-500" />,
      title: "Expert Support",
      description: "Our team of software licensing experts is available to assist you at every step.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
