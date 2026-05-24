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
      { label: "Metoda", href: `#${SECTION_IDS.how}` },
      { label: "Zakres", href: `#${SECTION_IDS.stats}` },
    ],
  },
  localeSwitcher: {
    ariaLabel: "Zmień język",
    en: "EN",
    pl: "PL",
  },
  hero: {
    title: "Analiza meczów",
    titleLine2: "w oparciu o dane i modele",
    description:
      "Prowadzimy analizę ilościową wyników sportowych: przygotowanie danych, modele statystyczne i uczenie maszynowe, kalibracja prawdopodobieństw oraz weryfikacja na materiale historycznym. Wyniki modeli zestawiamy z wieloletnią praktyką własnej analizy przedmeczowej, w tym w kontekście oceny decyzji zakładowych; umożliwia to krytyczną interpretację wyników. Oszacowania przekazujemy wraz z opisem metodyki, bez roszczeń co do pewnego wyniku spotkania.",
    ctaApp: "Przejdź do aplikacji",
    ctaLearn: "Dowiedz się więcej",
  },
  brandShowcase: {
    heading: "Matchalyse — wizualizacje i materiały",
    slidesTitle: "Przykładowe trafione analizy",
    slidesDescription:
      "Wybrane kupony z ostatnich miesięcy — różne dyscypliny i typy zakładów, oparte na naszej przedmeczowej analizie. Prezentujemy je jako dokumentację pracy, nie jako gwarancję przyszłych wyników.",
    marqueeLabel: "Galeria trafionych kuponów",
    scrollHint: "Przewiń w poziomie — myszką, dotykiem lub klawiaturą",
  },
  about: {
    title: "Kim jesteśmy",
    paragraphs: [
      "Sport fascynuje nas od lat — nie tylko jako widowisko, ale jako zjawisko, które można zmierzyć, zbadać i zrozumieć głębiej. Przez lata samodzielnie analizowaliśmy mecze i wydarzenia z różnych dyscyplin, rozwijając własne metody i spojrzenie na to, co naprawdę dzieje się podczas rywalizacji. Badamy tempo i dynamikę starć, jakość wypracowywanych sytuacji, formę zawodników i drużyn oraz czynniki kontekstowe, które w standardowych statystykach po prostu znikają.",
      "Wyniki naszych modeli to punkt wyjścia — nie ostateczny werdykt. Każdą analizę przedmeczową prowadzimy systematycznie, uwzględniając również kontekst oceny ryzyka i decyzji zakładowych. To właśnie to doświadczenie pozwala nam weryfikować, czy sygnały algorytmiczne są spójne z rzeczywistością sportową — i wychwytywać to, czego żaden formalny model samodzielnie nie dostrzeże.",
    ],
  },
  howItWorks: {
    title: "Metoda",
    description:
      "Korzystamy z własnej aplikacji, która zbiera i przetwarza dane. Poniżej cztery etapy — od wejścia do modelu po rekomendację z kontekstem sportowym.",
    aside: "etapy",
    steps: [
      {
        n: "01",
        title: "Dane",
        body: "Agregacja danych z wielu źródeł, standaryzacja, kontrola jakości i wprowadzenie do modelu.",
      },
      {
        n: "02",
        title: "Predykcja",
        body: "Wprowadzenie przetworzonych danych do własnych modeli uczenia maszynowego, trenowanie i generowanie predykcji.",
      },
      {
        n: "03",
        title: "Prawdopodobieństwo",
        body: "Generowanie rozkładów i oszacowań prawdopodobieństwa dla kluczowych scenariuszy, z uwzględnieniem przedziałów niepewności.",
      },
      {
        n: "04",
        title: "Rekomendacja",
        body: "Interpretacja wyników predykcji i formułowanie rekomendacji z uwzględnieniem kontekstu sportowego i wiedzy własnej.",
      },
    ],
  },
  stats: {
    title: "Zakres",
    aside: "status",
    description:
      "Produkt rozwijamy iteracyjnie. Kalibrację i jakość modeli sprawdzamy walidacją i testami na danych historycznych; nie publikujemy pojedynczych procentów bez kontekstu próby i metodyki. Wnioski budujemy na powtarzalnym procesie, a nie na pojedynczych meczach; pokrycie lig poszerzamy stopniowo, bez obietnicy natychmiastowego pełnego rynku.",
  },
  appComingSoon: {
    title: "Aplikacja wkrótce dostępna",
    message:
      "Pracujemy nad uruchomieniem pełnej wersji Matchalyse. Dziękujemy za zainteresowanie — udostępnimy ją już wkrótce.",
    closeLabel: "Zamknij",
  },
  footer: {
    appLink: "Aplikacja",
    contactEmail: "matchalyse@gmail.com",
    instagramLabel: "Instagram — Matchalyse",
    tiktokLabel: "TikTok — Matchalyse",
    disclaimer:
      "Treści mają charakter wyłącznie informacyjny i nie stanowią rekomendacji zakładu, porady prawnej ani gwarancji wyników. Decyzje podejmujesz na własną odpowiedzialność. Usługa dla osób pełnoletnich (18+). Udział w grach hazardowych wiąże się z ryzykiem utraty środków.",
  },
}
