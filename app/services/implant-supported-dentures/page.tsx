import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Implant-Supported Dentures | St. John's NL | Dr. Muller Dentistry",
  description: "Stable implant-supported dentures for improved comfort, chewing and confidence.",
  alternates: { canonical: "/services/implant-supported-dentures" },
  openGraph: {
    title: "Implant-Supported Dentures | Dr. Muller Dentistry",
    description: "Implant-retained dentures for improved stability and function.",
    url: "https://drmullerdentistry.com/services/implant-supported-dentures",
    siteName: "Dr. Muller Dentistry",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/blog-rct-vs-extraction.png", width: 1200, height: 630, alt: "Implant-supported dentures" }],
  },
};

export default function ImplantSupportedDenturesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-primary/5 bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Implant-Supported Dentures</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">Implant-Supported Dentures</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Stable, comfortable implant-retained dentures that restore chewing and confidence.</p>
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full shadow-lg px-8 h-12"><Link href="/contact">Book a Consultation</Link></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl bg-card">
            <Image src="/implant-supported-dentures-hero.svg" alt="Implant supported dentures" fill unoptimized className="object-cover" />
          </div>
          <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground mb-6">Comfort and Stability</h2>
            <p>Implant-supported dentures dramatically improve retention and chewing compared to traditional removable dentures.</p>
            <p className="mt-4">We design solutions from two-implant overdentures to full-arch fixed options depending on your needs and budget.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
