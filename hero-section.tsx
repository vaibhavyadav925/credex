import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-teal-500 to-cyan-600 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Unlock the Value of Your Unused Software</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Turn your idle software licenses into cash. Fast, secure, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90">
              Sell My Licenses
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
