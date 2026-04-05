import { FeatureCard } from "@/interfaces/feature-card";

export const CARDS: FeatureCard[] = [
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
];