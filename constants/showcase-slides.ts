export type ShowcaseSlide = {
  id: string
  src: string
  alt: string
}

/** Dodaj własne pliki do public/showcase/ i zaktualizuj listę. */
export const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "kupon-1",
    src: "/showcase/kupon_1.png",
    alt: "Trafiony kupon: Lech Poznań – Crvena Zvezda, OGC Nice – Benfica",
  },
  {
    id: "kupon-2",
    src: "/showcase/kupon_2.png",
    alt: "Trafiony kupon UFC 303: Ortega – Lopes, Smith – Dolidze, Pereira – Prochazka",
  },
  {
    id: "kupon-3",
    src: "/showcase/kupon_3.png",
    alt: "Trafiony kupon łączony: Djokovic Australian Open, Baron KO, Tybura – Ivanov",
  },
]
