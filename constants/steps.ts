import { Step } from "@/interfaces/step";

export const steps: Step[] = [
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
];