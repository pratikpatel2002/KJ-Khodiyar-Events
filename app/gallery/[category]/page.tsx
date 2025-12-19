import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

type CategoryKey =
  | 'weddings'
  | 'birthdays'
  | 'baby-showers'
  | 'corporate-events'
  | 'festival-decorations'
  | 'haldi-mehendi'
  | 'fire-sfx-cold-pyro'

const categoryConfig: Record<
  CategoryKey,
  {
    title: string
    subtitle: string
    description: string
    breadcrumb: string
    images: { src: string; alt: string }[]
    videoEmbedUrl?: string
  }
> = {
  weddings: {
    title: 'Weddings',
    subtitle: 'Royal Wedding Moments',
    description:
      'A curated collection of our most elegant wedding setups, mandaps, couple entries, and reception stages designed with royal sophistication.',
    breadcrumb: 'Weddings',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80',
        alt: 'Luxury Indian wedding mandap decoration with flowers and lighting',
      },
      {
        src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Wedding couple on decorated stage with elegant backdrop',
      },
      {
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        alt: 'Grand wedding banquet hall with premium decor and lighting',
      },
      {
        src: 'https://images.unsplash.com/photo-1529635462183-515bbc72b98d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Traditional Indian wedding ceremony with floral decorations',
      },
      {
        src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
        alt: 'Beautiful outdoor wedding setup with chairs and aisle decor',
      },
      {
        src: 'https://images.unsplash.com/photo-1537633394464-aa3ab1c7c9e1?auto=format&fit=crop&w=1200&q=80',
        alt: 'Wedding reception stage with royal backdrop and lighting',
      },
    ],
  },
  birthdays: {
    title: 'Birthdays',
    subtitle: 'Joyful Birthday Celebrations',
    description:
      'From kids’ themes to milestone birthdays, here are some of our most colorful and creative birthday party setups.',
    breadcrumb: 'Birthdays',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1578926502276-01c9249d107f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Birthday decoration with balloons and cake table',
      },
      {
        src: 'https://images.unsplash.com/photo-1542267842-3a3123a41a28?auto=format&fit=crop&w=1200&q=80',
        alt: 'Colorful birthday party setup with balloons and lights',
      },
      {
        src: 'https://images.unsplash.com/photo-1612198527510-1d76e8704612?auto=format&fit=crop&w=1200&q=80',
        alt: 'Birthday cake with candles and festive decor',
      },
      {
        src: 'https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&w=1200&q=80',
        alt: 'Kids birthday party with themed decorations',
      },
      {
        src: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1200&q=80',
        alt: 'Elegant adult birthday dinner setup with candles',
      },
      {
        src: 'https://images.unsplash.com/photo-1545249351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Birthday party table with sweets and decorations',
      },
    ],
  },
  'baby-showers': {
    title: 'Baby Showers',
    subtitle: 'Baby Shower Celebrations',
    description:
      'Soft, elegant and full of joy – a gallery of our baby shower themes, backdrops, and welcoming setups for the little one.',
    breadcrumb: 'Baby Showers',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
        alt: 'Baby shower table with gifts and decorations',
      },
      {
        src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
        alt: 'Baby shower dessert table with pastel decorations',
      },
      {
        src: 'https://images.unsplash.com/photo-15263965595-3c687fd543c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Soft pastel baby shower decor with balloons',
      },
      {
        src: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80',
        alt: 'Baby-themed decoration with toys and flowers',
      },
      {
        src: 'https://images.unsplash.com/photo-1520848315518-b991dd16a6cf?auto=format&fit=crop&w=1200&q=80',
        alt: 'Baby shower seating area with elegant decor',
      },
      {
        src: 'https://images.unsplash.com/photo-1541732389867-82ab02aae3c4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Baby shower celebration with friends and family',
      },
    ],
  },
  'corporate-events': {
    title: 'Corporate Events',
    subtitle: 'Professional Corporate Experiences',
    description:
      'Conferences, product launches, annual meets and award nights – explore how we design professional yet engaging corporate events.',
    breadcrumb: 'Corporate Events',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Corporate conference with audience and stage',
      },
      {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        alt: 'Business networking event with professionals',
      },
      {
        src: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80',
        alt: 'Corporate meeting room setup with screens',
      },
      {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        alt: 'Stage setup for corporate presentation',
      },
      {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Corporate dinner event with elegant table setup',
      },
      {
        src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Office event with team working together',
      },
    ],
  },
  'festival-decorations': {
    title: 'Festival Decorations',
    subtitle: 'Festive Decor & Installations',
    description:
      'Vibrant and traditional festival decorations for Diwali, Navratri, Ganesh Chaturthi, and other celebrations.',
    breadcrumb: 'Festival Decorations',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&w=1200&q=80',
        alt: 'Diwali festival diyas and lights decoration',
      },
      {
        src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80',
        alt: 'Festive lights and lanterns hanging outdoors',
      },
      {
        src: 'https://images.unsplash.com/photo-1578926502276-01c9249d107f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Colorful festival decoration with lights and flowers',
      },
      {
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
        alt: 'Hanging festival lanterns with warm lighting',
      },
      {
        src: 'https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?auto=format&fit=crop&w=1200&q=80',
        alt: 'Traditional Indian festival decor with marigold flowers',
      },
      {
        src: 'https://images.unsplash.com/photo-1534448425277-42098b0c4c2a?auto=format&fit=crop&w=1200&q=80',
        alt: 'Decorated stage for festive cultural event',
      },
    ],
  },
  'fire-sfx-cold-pyro': {
    title: 'Fire SFX & Cold Pyro',
    subtitle: 'Fire SFX & Cold Pyro Effects',
    description:
      'High-impact fire SFX and cold pyro effects for grand entries, stage moments, and show-stopping highlights with complete safety.',
    breadcrumb: 'Fire SFX & Cold Pyro',
    videoEmbedUrl: 'https://www.youtube.com/embed/ydYV3c7kS88',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
        alt: 'Stage with dramatic lighting and smoke effects',
      },
      {
        src: 'https://images.unsplash.com/photo-1558478551-1a378f63328e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Fireworks and pyro effects at night event',
      },
      {
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
        alt: 'Concert-style lighting with special effects',
      },
      {
        src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Crowd enjoying event with smoke and light effects',
      },
      {
        src: 'https://images.unsplash.com/photo-1534448425277-42098b0c4c2a?auto=format&fit=crop&w=1200&q=80',
        alt: 'Stage prepared for performance with lighting rig',
      },
      {
        src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
        alt: 'DJ and lighting setup for high-energy event',
      },
    ],
  },
  'haldi-mehendi': {
    title: 'Haldi / Mehendi',
    subtitle: 'Haldi & Mehendi Ceremonies',
    description:
      'Bright, colorful and cultural – Haldi and Mehendi ceremony setups with floral backdrops, seating and traditional props.',
    breadcrumb: 'Haldi / Mehendi',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        alt: 'Haldi ceremony with turmeric and floral decor',
      },
      {
        src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
        alt: 'Mehendi artist applying henna to bride hands',
      },
      {
        src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Colorful mehendi ceremony seating with cushions',
      },
      {
        src: 'https://images.unsplash.com/photo-1582719478250-ccded1a70f2f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Haldi ceremony decor with marigold flowers',
      },
      {
        src: 'https://images.unsplash.com/photo-1541844053589-346841d0b34a?auto=format&fit=crop&w=1200&q=80',
        alt: 'Mehendi designs on bride hands closeup',
      },
      {
        src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
        alt: 'Traditional Indian ceremony with colorful decor',
      },
    ],
  },
}

type PageProps = {
  params: { category: CategoryKey }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const config = categoryConfig[params.category]

  return {
    title: `${config.title} Gallery - KJ Khodiyar Events`,
    description: config.description,
  }
}

export default function CategoryGalleryPage({ params }: PageProps) {
  const config = categoryConfig[params.category]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-royal-900 via-maroon-900 to-black text-white">
        <div className="container-custom">
          <div className="mb-6 text-sm text-gray-300">
            <Link href="/gallery" className="hover:text-gold-300 transition-colors">
              Gallery
            </Link>{' '}
            <span className="mx-2">/</span>
            <span className="text-gold-300">{config.breadcrumb}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {config.subtitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {config.description}
            </p>
          </div>
        </div>
      </section>

      {/* Optional video section for categories that have it */}
      {config.videoEmbedUrl && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
                Highlight Video
              </h2>
              <p className="text-gray-600 mb-6">
                A quick glimpse of our special effects in action. Replace this video with your own
                SFX & cold pyro showcase.
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={config.videoEmbedUrl}
                  title={`${config.title} video showcase`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Images grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


