import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - KJ Khodiyar Events | Event Management Services',
  description: 'Comprehensive event management services including weddings, birthdays, corporate events, baby showers, and more. Premium event planning solutions.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}









