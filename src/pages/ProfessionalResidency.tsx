import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ApplicationModal } from "@/components/site/ApplicationModal"; 
import { IMAGES } from "@/utils/imageConstants";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

// Asset Imports
import professional1Image from "@/assets/images/professional1.JPG";
import professional2Image from "@/assets/images/professional2.jpg.jpeg";

// IMPORT YOUR NEW WHATSAPP IMAGES HERE:
import profGallery1 from "@/assets/professionalimages/galleryprof1.JPG";
import profGallery2 from "@/assets/professionalimages/galleryprof.JPG";
import profGallery3 from "@/assets/professionalimages/prof-gallery-3.jpeg";
import profGallery4 from "@/assets/professionalimages/prof-gallery-4.jpeg";
import profGallery5 from "@/assets/professionalimages/prof-gallery-5.jpeg";
// profGallery6 removed
import profGallery7 from "@/assets/professionalimages/prof-gallery-7.jpeg";
import profGallery8 from "@/assets/professionalimages/prof-gallery-8.jpeg";

export default function ProfessionalResidency() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Residency"
        title="Professional Residency: Uninterrupted Mastery"
        description="A sanctuary for established artists to deepen their practice through focused solitude and meaningful cultural exchange on the Kenyan coast."
        image={professional1Image}
        width={2500}
        height={1667}
        loading="eager"
        imageAlt="Professional artist residency at The Terrace Kilifi"
      />

      <section className="bg-background py-20 md:py-32 overflow-hidden relative">
        <div className="container-editorial">
          
          {/* COMBINED COMPACT LAYOUT: Text on Left, Photo Gallery on Right */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24">
            
            {/* LEFT COLUMN: Condensed Text Block & Features */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 mb-4">
                  <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                  <p className="text-xs uppercase tracking-widest text-primary font-medium">
                    Professional Residency
                  </p>
                </div>
                
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight text-balance mb-6">
                  A place for focus, exchange and renewal
                </h2>
                
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/80 font-light">
                  <p>
                    The Terrace Professional Residency is an artist-run residency space on the Kenyan
                    coast, created to support time for reflection, creation, experimentation and
                    creative exchange. The program welcomes multi-sectoral and interdisciplinary
                    artists, working either individually or collaboratively.
                  </p>
                  <p>
                    The residency sits quietly overlooking the mangrove forests and tidal waters of
                    Kilifi Creek, offering artists a peaceful environment away from urban distractions
                    - a place where ideas can unfold slowly and work can deepen. Founded and operated by African Women Artists, the Terrace is part of a growing independent cultural ecosystem in Kilifi dedicated to nurturing artistic practice while remaining deeply connected to place and community.
                  </p>
                  <p>
                    The program welcomes cross-disciplinary work spanning visual art, writing, film,
                    sound, performance, research, craft, design and socially engaged practices.
                  </p>
                  <p className="italic font-serif py-1 text-foreground/70">
                    Many use the time to slow down, reconnect with their practice and pursue ideas
                    that need depth and duration. Daily life is unhurried - walking, swimming, and
                    time on The Terrace often shape the creative process.
                  </p>
                  <p className="pt-2">
                    <span className="font-bold text-foreground">Location & Sustainability:</span> Located about 35 minutes 
                    from Kilifi town, it offers both seclusion and access to a vibrant local cultural scene. 
                    The residency operates with an eco-conscious approach, in collaboration with a local 
                    mangrove conservation group.
                  </p>
                </div>
              </Reveal>

              {/* Condensed Facilities & Duration Box directly woven into the column */}
              <Reveal delay={150} className="bg-secondary/10 p-5 rounded-sm border border-border/40 space-y-5">
                <div className="space-y-3 border-b border-border/40 pb-4">
                  <p className="text-xs md:text-sm leading-relaxed text-foreground/80">
                    <strong className="font-serif font-bold text-primary">SOLO Residencies</strong> typically range from one week deep dive up to 3 months. (4–8 weeks recommended).
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed text-foreground/80">
                    <strong className="font-serif font-bold text-primary">GROUP Residencies</strong> are tailored for collaborators requiring a quick turnaround - usually intensive one-week sessions.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">Living</p>
                    <ul className="space-y-1 text-xs text-foreground/75">
                      <li>• 5 Private bedrooms</li>
                      <li>• Quiet reading nooks</li>
                      <li>• Rooftop & terraces</li>
                      <li>• Informal meeting areas</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2">Working</p>
                    <ul className="space-y-1 text-xs text-foreground/75">
                      <li>• Traditional hut suite</li>
                      <li>• Music studio access</li>
                      <li>• Shared outdoor kitchen</li>
                      <li>• Creekside sundecks</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN: Modern Masonry/Collage Photo Gallery (7 Images) */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-fit">
              
              {/* Slot 1: Large Featured */}
              <Reveal delay={200} className="col-span-2 row-span-2 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={profGallery1}
                  alt="Residency environment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                  onClick={() => setSelectedImage(profGallery1)}
                />
              </Reveal>

              {/* Slot 2: Tall Vertical */}
              <Reveal delay={250} className="col-span-1 md:row-span-2 aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={profGallery2} 
                  alt="Workspace detail" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
                  onClick={() => setSelectedImage(profGallery2)}
                />
              </Reveal>
              
              {/* Slot 3: Standard Square */}
              <Reveal delay={300} className="col-span-1 aspect-square overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={profGallery3} 
                  alt="Artist in residence" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
                  onClick={() => setSelectedImage(profGallery3)}
                />
              </Reveal>

              {/* Slot 4: Standard Square */}
              <Reveal delay={350} className="col-span-1 aspect-square overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={profGallery4} 
                  alt="Creative process" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
                  onClick={() => setSelectedImage(profGallery4)}
                />
              </Reveal>

              {/* Slot 5: Standard Square */}
              <Reveal delay={400} className="col-span-1 aspect-square overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={profGallery5} 
                  alt="Living spaces" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
                  onClick={() => setSelectedImage(profGallery5)}
                />
              </Reveal>

              {/* Image 6 Removed */}
              
              {/* Slot 7: Re-mapped to Wide Landscape */}
              <Reveal delay={500} className="col-span-2 aspect-video overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={profGallery7} 
                  alt="Creekside views" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
                  onClick={() => setSelectedImage(profGallery7)}
                />
              </Reveal>
              
              {/* Slot 8: Re-mapped to Standard Square */}
              <Reveal delay={550} className="col-span-1 aspect-square md:aspect-auto md:h-full overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={profGallery8} 
                  alt="Collaborative meeting area" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
                  onClick={() => setSelectedImage(profGallery8)}
                />
              </Reveal>

            </div>
          </div>

          {/* Section: Final CTA */}
          <div className="text-center py-20 border-t border-border/20">
            <Reveal className="max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 uppercase">
                Applications are open on a rolling basis
              </h3>
              <p className="text-base md:text-lg text-foreground/80 mb-10 text-balance">
                Are you a professional artist or group - and need a getaway on a subsidised budget? Write to us and we'll get back to you!
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-12 py-5 text-xs font-bold uppercase tracking-[0.25em] hover:scale-105 hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(96,165,250,0.4)]"
              >
                Apply
              </button>
            </Reveal>
          </div>

        </div>
      </section>

      <ApplicationModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        residencyType="Professional"
      />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              src={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-sm shadow-2xl cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}