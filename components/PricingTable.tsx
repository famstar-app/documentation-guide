import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Community',
    id: 'community',
    href: '#',
    price: { monthly: 'Kostenlos', annually: '$0', free: true },
    sub: "",
    description: 'Die kostenlose Community Version für eine einfache Kommunikation. Frei für alle die gleich Starten wollen.',
    features: [
      'Verwaltung', 
      'Neuigkeiten', 
      'Personen', 
      'Gruppen', 
      'Einladungen', 
      'Schließtage'
    ],
    featured: false,
    cta: 'Jetzt starten',
  },
  {
    name: 'Professional',
    id: 'professional',
    href: '#',
    price: { monthly: 'EUR 10', annually: 'EUR 10' },
    description: 'Die Professional Version verfügt über alle Funktionen um einen erfolgreichen Alltag zu meistern und eine reibungslose Kommunikation zu gewährleisten.',
    features: [
      'Verwaltung', 
      'Neuigkeiten', 
      'Personen', 
      'Gruppen', 
      'Einladungen', 
      'Schließtage',
      <span className="font-bold">Angebote</span>,
      <span className="font-bold">Labels</span>,
      <span className="font-bold">Essen und Berichte</span>,
      <span className="font-bold">Abwesenheiten</span>,
      <span className="font-bold">Abholberechtigungen</span>,
      <span className="font-bold">45 Serviceanfragen</span>,
      <span className="font-bold">OnBoarding Digital</span>,
      <span className="font-bold">Service: Mo-Fr (10:00 - 17:00 CET)</span>,
      <span className="font-bold">E-Mail und Telefon-Support</span>,
      <span className="font-bold">4 Stunden maximale Antwortzeit</span>,
    ],
    featured: true,
    cta: 'Jetzt starten',
  },
  {
    name: 'VIP',
    id: 'vip',
    href: '#',
    price: 'EUR 10,00',
    description: 'Dein OnBoarding, sowie ein schneller Support stehen hier an oberster Stelle. Zusammen mit uns priorisiert ihr neue Funktionen und erhaltet diese als erste.',
    features: [
      'Verwaltung', 
      'Neuigkeiten', 
      'Personen', 
      'Gruppen', 
      'Einladungen', 
      'Schließtage',
      'Angebote',
      'Labels',
      'Essen und Berichte',
      'Abwesenheiten',
      'Abholberechtigungen',
      '95 Serviceanfragen',
      'OnBoarding Digital und vor Ort',
      'Service: Mo-Fr (08:00 - 17:00 CET)',
      'E-Mail und Telefon-Support',
      '2 Stunden maximale Antwortzeit',
    ],
    featured: false,
    cta: 'Kontaktiere uns',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingTable() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Preisliste</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Behalte den Überblick mit fairen Preisen
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Deine Einrichtung zu verwalten ist für uns ein "must have". Daher beginnen unsere Pakete bei EUR 0,00 im Monat!
        </p>
        
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'bg-slate-900 ring-gray-900' : 'ring-gray-200',
                'rounded-3xl p-8 ring-1 xl:p-10'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm leading-6')}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-4xl font-bold tracking-tight'
                  )}
                >
                  {typeof tier.price === 'string' ? tier.price : tier.price[frequency.value]}
                </span>
                {typeof tier.price !== 'string' ? (
                  <span
                    className={classNames(
                      tier.featured ? 'text-gray-300' : 'text-gray-600',
                      'text-sm font-semibold leading-6'
                    )}
                  >
                    {frequency.priceSuffix}
                  </span>
                ) : null}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                    : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                {tier.cta}
              </a>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm leading-6 xl:mt-10'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(tier.featured ? 'text-white' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}