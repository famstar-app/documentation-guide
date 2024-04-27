import Image from "next/image"
import PricingTable from "./PricingTable"

export function IndexPage() {
  return (<>

    <div className="flex flex-row mt-10">
      <div className="basis-2/3">
        <h1 className="max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mt-10">
          Deine Familie. <br/>
          Eine App.
        </h1>
        <p className="mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Versende Nachrichten, erstelle Umfragen, lade Personen in deine Einrichtung ein, verwalte Gruppen, organisiere Events und Angebote, überblicke Abwesenheiten, publiziere Schließtage und kommuniziere Essensbestellungen für eine genaue Abrechnung.
        </p>
      </div>
      <div className="basis-1/3">
        <Image src="./screenshots/famstar-hero-section-iphone-neu.png" width={270} height={200} alt="Mobile Screenshot"></Image>
      </div>
    </div>

    <PricingTable />
  </>)
}