import { APP_URL_PLACEHOLDER } from "@/constants/app-url-placeholder"
import { SECTION_IDS } from "@/constants/section-ids"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-lg tracking-tight text-white">
              Ticket<span className="text-primary">Dashboard</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white">
              Autorzy niezależnie prowadzą analizę ilościową danych sportowych;
              łączą zainteresowanie sportem i branżą sportową z metodyką
              statystyczną: modele predykcyjne, rachunek prawdopodobieństwa oraz
              jawny opis założeń i ograniczeń modeli — zamiast gotowych prognoz
              bez kontekstu merytorycznego.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white">
              Produkt rozwijany jest iteracyjnie; priorytetem pozostaje spójność
              metodyczna i transparentność wobec użytkownika.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                Sekcje
              </div>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href={`#${SECTION_IDS.about}`}
                >
                  O nas
                </a>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href={`#${SECTION_IDS.how}`}
                >
                  Jak to działa
                </a>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href={`#${SECTION_IDS.features}`}
                >
                  Możliwości
                </a>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href={`#${SECTION_IDS.stats}`}
                >
                  Zakres
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                Produkt
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href={APP_URL_PLACEHOLDER}
                >
                  Aplikacja
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                Info
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-white">
                <div>
                  Profil zespołu: statystyka, modelowanie i analityka danych
                </div>
                <div className="text-xs leading-relaxed">
                  Kontakt: debugged_solutions@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-white sm:flex-row sm:items-start sm:justify-between">
          <div>© {new Date().getFullYear()} TicketDashboard</div>
          <div className="max-w-xl sm:text-right">
            Sekcja „Zakres” ma charakter opisowy; wskaźniki KPI zostaną
            opublikowane po ustaleniu metodyki i zebraniu próby o wystarczającej
            wielkości.
          </div>
        </div>
      </div>
    </footer>
  )
}
