{/* THESIS: Editorial minimalis — grid majalah asimetris, tipografi display berani, ruang kosong luas, produk sebagai hero. */}
{/* OWN-WORLD: Palet coksu hangat sebagai aksen, background netral offwhite, Playfair Display untuk headline, Plus Jakarta Sans untuk body. */}
{/* STORY: Pengunjung memahami "fashion Muslim nyaman+rapi" dalam 5 detik melalui visual yang elegan dan terstruktur seperti majalah fashion. */}
{/* FIRST VIEWPORT: Headline besar asimetris kiri dengan Playfair Display, gambar produk kanan, CTA kontras coksu-800. */}
{/* FORM: Editorial minimalis, mode Persuade. */}

import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { ValueProposition } from '@/components/ValueProposition';
import { ProductCatalog } from '@/components/ProductCatalog';
import { SocialProof } from '@/components/SocialProof';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ValueProposition />
      <ProductCatalog />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
