import { SECTION_IDS } from "@/constants/section-ids"

export default function About() {
  return (
    <section id={SECTION_IDS.about} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Kim jesteśmy
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white">
              Autorzy niezależnie prowadzą analizę ilościową danych sportowych;
              łączą zainteresowanie sportem i szeroko rozumianą branżą sportową
              z rygorystycznym podejściem metodycznym. Zajmujemy się ilościową
              analizą meczów — badamy tempo gry, jakość sytuacji bramkowych,
              formę drużyn oraz czynniki kontekstowe, które statystyki
              powierzchniowe pomijają.
            </p>
            <p className="mt-5 leading-relaxed text-white">
              Pipeline obejmuje pełny cykl: pozyskiwanie i czyszczenie danych,
              budowę modeli statystycznych i uczenia maszynowego, kalibrację
              prawdopodobieństw oraz walidację na danych historycznych. Wyniki
              każdego modelu poddawane są testom wstecznym przed wykorzystaniem
              operacyjnym.
            </p>
            <p className="mt-5 leading-relaxed text-white">
              Wyniki algorytmów nie traktujemy jako rozstrzygnięcia
              ostatecznego: stanowią one punkt wyjścia do oceny merytorycznej.
              Prowadzimy systematyczną analizę przedmeczową, w tym w kontekście
              własnej oceny ryzyka i decyzji zakładowych; doświadczenie to
              wykorzystujemy do weryfikacji spójności wyników modelu z
              kontekstem sportowym oraz do identyfikacji sygnałów, których
              formalny model może nie uchwycić.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7 backdrop-blur sm:p-9">
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                {[
                  {
                    title: "Podejście analityczne",
                    body: "Modele statystyczne i uczenie maszynowe traktujemy jako narzędzia pomocnicze, a nie werdykt ostateczny. Wyniki zestawiamy z wieloletnim doświadczeniem własnej analizy przedmeczowej (w tym w ocenie decyzji zakładowych w oparciu o własne oszacowania): weryfikujemy założenia, jakość danych oraz zgodność z kontekstem sportowym.",
                  },
                  {
                    title: "Transparentność co do niepewności",
                    body: "Podajemy prawdopodobieństwa wraz z przedziałami ufności, a nie wyłącznie punktowe prognozy. Nie udzielamy komentarzy ex post do przebiegu spotkań; treści publikowane są wyłącznie przedmeczowo.",
                  },
                  {
                    title: "Autorski pipeline",
                    body: "Cechy do modeli budujemy od podstaw — od pozyskania danych, przez inżynierię zmiennych, po kalibrację i testy na danych historycznych.",
                  },
                  {
                    title: "Przejrzysta prezentacja wyników",
                    body: "Wyniki przedstawiamy w sposób umożliwiający ocenę metodologii: jakie zmienne uwzględnia model, jakie są jego ograniczenia oraz na jakiej podstawie wyznaczono wskazaną wartość prawdopodobieństwa.",
                  },
                ].map((x) => (
                  <article key={x.title} className="relative">
                    <div className="text-xs font-medium tracking-[0.22em] text-white uppercase">
                      {x.title}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">
                      {x.body}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-9 border-t border-white/10 pt-7 text-sm leading-relaxed text-white">
                <span className="font-medium">Nota prawna:</span> udział w grach
                losowych i zakładach bukmacherskich wiąże się z ryzykiem utraty
                środków. Nie udzielamy gwarancji co do wyniku spotkania —
                przekazujemy oszacowania prawdopodobieństwa wraz z opisem
                założeń modelu w celu umożliwienia oceny podstaw analitycznych.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
