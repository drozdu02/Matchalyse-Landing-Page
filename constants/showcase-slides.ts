export type ShowcaseSlide = {
  id: string
  src: string
  alt: string
}

/** Dodaj własne pliki do public/showcase/ i zaktualizuj listę. */
export const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "analysis",
    src: "/showcase/analysis.svg",
    alt: "Wizualizacja analizy meczowej",
  },
  {
    id: "models",
    src: "/showcase/models.svg",
    alt: "Modele predykcyjne i walidacja",
  },
  {
    id: "probability",
    src: "/showcase/probability.svg",
    alt: "Rozkłady prawdopodobieństwa",
  },
  {
    id: "pipeline",
    src: "/showcase/pipeline.svg",
    alt: "Pipeline danych",
  },
  {
    id: "dashboard",
    src: "/showcase/dashboard.svg",
    alt: "Panel analityczny",
  },
]
