import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - KJ Khodiyar Events | Event Photography & Portfolio',
  description: 'Browse our stunning event gallery showcasing weddings, birthdays, corporate events, and more. See our premium event management work.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}









