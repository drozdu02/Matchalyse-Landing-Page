import { SECTION_IDS } from "@/constants/section-ids"
import type { Dictionary } from "@/lib/i18n/types"

export const pl: Dictionary = {
  locale: "pl",
  meta: {
    title: "Matchalyse — analiza meczów w oparciu o dane i modele",
    description:
      "Ilościowa analiza wyników sportowych: modele statystyczne, uczenie maszynowe i jawne oszacowania prawdopodobieństwa.",
  },
  nav: {
    homeAria: "Strona główna",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    cta: "Przejdź do aplikacji",
    links: [
      { label: "O nas", href: `#${SECTION_IDS.about}` },
      { label: "Jak to działa", href: `#${SECTION_IDS.how}` },
      { label: "Możliwości", href: `#${SECTION_IDS.features}` },
      { label: "Zakres", href: `#${SECTION_IDS.stats}` },
    ],
  },
  localeSwitcher: {
    ariaLabel: "Zmień język",
    en: "EN",
    pl: "PL",
  },
  hero: {
    badge: "Statystyka · uczenie maszynowe · własne decyzje",
    title: "Analiza meczów",
    titleLine2: "w oparciu o dane i modele",
    description:
      "Prowadzimy analizę ilościową wyników sportowych: przygotowanie danych, modele statystyczne i uczenie maszynowe, kalibracja prawdopodobieństw oraz weryfikacja na materiale historycznym. Wyniki modeli zestawiamy z wieloletnią praktyką własnej analizy przedmeczowej, w tym w kontekście oceny decyzji zakładowych; umożliwia to krytyczną interpretację wyników. Oszacowania przekazujemy wraz z opisem metodyki, bez roszczeń co do pewnego wyniku spotkania.",
    ctaApp: "Przejdź do aplikacji",
    ctaLearn: "Dowiedz się więcej",
    stats: [
      { k: "Modelowanie", v: "ML i modele statystyczne" },
      { k: "Output", v: "prawdopodobieństwa i przedziały" },
      { k: "Weryfikacja", v: "backtest i walidacja" },
      { k: "Komunikacja", v: "metodologia i ograniczenia" },
    ],
  },
  brandShowcase: {
    heading: "Matchalyse — wizualizacje i materiały",
    marqueeLabel: "Galeria logo i grafik produktu",
    scrollHint: "Przewiń w poziomie — myszką, dotykiem lub klawiaturą",
  },
  about: {
    title: "Kim jesteśmy",
    paragraphs: [
      "Autorzy niezależnie prowadzą analizę ilościową danych sportowych; łączą zainteresowanie sportem i szeroko rozumianą branżą sportową z rygorystycznym podejściem metodycznym. Zajmujemy się ilościową analizą meczów — badamy tempo gry, jakość sytuacji bramkowych, formę drużyn oraz czynniki kontekstowe, które statystyki powierzchniowe pomijają.",
      "Pipeline obejmuje pełny cykl: pozyskiwanie i czyszczenie danych, budowę modeli statystycznych i uczenia maszynowego, kalibrację prawdopodobieństw oraz walidację na danych historycznych. Wyniki każdego modelu poddawane są testom wstecznym przed wykorzystaniem operacyjnym.",
      "Wyniki algorytmów nie traktujemy jako rozstrzygnięcia ostatecznego: stanowią one punkt wyjścia do oceny merytorycznej. Prowadzimy systematyczną analizę przedmeczową, w tym w kontekście własnej oceny ryzyka i decyzji zakładowych; doświadczenie to wykorzystujemy do weryfikacji spójności wyników modelu z kontekstem sportowym oraz do identyfikacji sygnałów, których formalny model może nie uchwycić.",
    ],
    pillars: [
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
    ],
    legalLabel: "Nota prawna:",
    legalNote:
      "udział w grach losowych i zakładach bukmacherskich wiąże się z ryzykiem utraty środków. Nie udzielamy gwarancji co do wyniku spotkania — przekazujemy oszacowania prawdopodobieństwa wraz z opisem założeń modelu w celu umożliwienia oceny podstaw analitycznych.",
  },
  howItWorks: {
    title: "Jak to działa",
    description:
      "Kolejne etapy pipeline'u: przygotowanie danych, modelowanie, komunikacja prawdopodobieństw oraz rekomendacja końcowa z uzasadnieniem merytorycznym.",
    aside: "pipeline",
    steps: [
      {
        n: "01",
        title: "Dane",
        body: "Pozyskujemy statystyki meczowe i kontekst, standaryzujemy format i kontrolujemy jakość wejścia, żeby błędy danych nie przenosiły się do modelu.",
      },
      {
        n: "02",
        title: "Model ML",
        body: "Budujemy modele w odniesieniu do baseline'ów; nacisk kładziemy na walidację krzyżową, stabilność estymacji i dobór cech uzasadniony danymi.",
      },
      {
        n: "03",
        title: "Prawdopodobieństwo",
        body: "Prezentujemy rozkłady i oszacowania prawdopodobieństwa dla wybranych scenariuszy, wraz z informacją o niepewności tam, gdzie jest to możliwe.",
      },
      {
        n: "04",
        title: "Rekomendacja",
        body: "Rekomendacja wynika z porównania oszacowań z założeniami modelu i z kontekstem rynkowym; gdy sygnał jest słaby lub niejednoznaczny, komunikujemy to wprost.",
      },
    ],
  },
  features: {
    title: "Możliwości",
    description:
      "Cztery obszary pracy: od analizy opisowej i modeli predykcyjnych po sformułowanie prawdopodobieństwa oraz weryfikację strategii na danych historycznych.",
    cards: [
      {
        title: "Analiza statystyczna",
        body: "Porównujemy tempo, jakość sytuacji bramkowych, skuteczność i kontekst meczu, z ostrożnością wobec wniosków z pojedynczych spotkań.",
        meta: "baseline i kontrola jakości",
      },
      {
        title: "Modele predykcyjne",
        body: "Łączymy modele klasyczne z uczeniem maszynowym; najpierw walidacja i porównanie z punktami odniesienia, potem ewentualna rozbudowa struktury.",
        meta: "walidacja i stabilność",
      },
      {
        title: "Rachunek prawdopodobieństwa",
        body: "Formułujemy oszacowania prawdopodobieństwa i scenariusze zamiast jednoznacznych prognoz wyniku bez rozłożenia niepewności.",
        meta: "rozkłady i przedziały",
      },
      {
        title: "Backtesting",
        body: "Sprawdzamy strategie i reguły decyzyjne na materiale historycznym, z naciskiem na powtarzalność i ograniczenia wnioskowania w czasie.",
        meta: "dane historyczne",
      },
    ],
  },
  stats: {
    title: "Zakres i ograniczenia",
    description:
      "Produkt rozwijany jest w sposób ciągły. Poniżej określamy obszar działania oraz zakres odpowiedzialności — w tym brak publikacji liczb bez pokrycia w danych i ustalonej metodyce.",
    aside: "zakres",
    highlights: [
      {
        title: "Ocena jakości modeli",
        body: "Skuteczność i kalibrację sprawdzamy procedurami walidacji oraz testami na danych historycznych. Nie publikujemy pojedynczego wskaźnika procentowego bez kontekstu próby i metodyki.",
      },
      {
        title: "Systematyczna praca analityczna",
        body: "Zwiększamy liczbę przejrzanych spotkań w ramach stałego procesu — tak, by wnioski wynikały z powtarzalności, a nie z wyboru przykładów.",
      },
      {
        title: "Rozszerzanie pokrycia rozgrywek",
        body: "Stopniowo poszerzamy zestaw lig i rozgrywek, zachowując jednolite standardy danych. Nie obiecujemy od razu pełnego pokrycia wszystkich ryneków.",
      },
      {
        title: "Reprezentatywność próby",
        body: "Unikamy wniosków opartych wyłącznie na pojedynczych meczach. Decyzje metodologiczne opieramy na próbach o rozmiarze i jakości pozwalającej na sensowną inferencję.",
      },
    ],
  },
  footer: {
    description:
      "Autorzy niezależnie prowadzą analizę ilościową danych sportowych; łączą zainteresowanie sportem i branżą sportową z metodyką statystyczną: modele predykcyjne, rachunek prawdopodobieństwa oraz jawny opis założeń i ograniczeń modeli — zamiast gotowych prognoz bez kontekstu merytorycznego.",
    subdescription:
      "Produkt rozwijany jest iteracyjnie; priorytetem pozostaje spójność metodyczna i transparentność wobec użytkownika.",
    sectionsTitle: "Sekcje",
    productTitle: "Produkt",
    infoTitle: "Info",
    appLink: "Aplikacja",
    teamProfile: "Profil zespołu: statystyka, modelowanie i analityka danych",
    contactLabel: "Kontakt:",
    contactEmail: "matchalyse@gmail.com",
    disclaimer:
      "Sekcja „Zakres” ma charakter opisowy; wskaźniki KPI zostaną opublikowane po ustaleniu metodyki i zebraniu próby o wystarczającej wielkości.",
  },
}
