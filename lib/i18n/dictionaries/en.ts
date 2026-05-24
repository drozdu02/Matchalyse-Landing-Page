import { SECTION_IDS } from "@/constants/section-ids"
import type { Dictionary } from "@/lib/i18n/types"

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Matchalyse — match analysis based on data and models",
    description:
      "Quantitative analysis of sports outcomes: statistical models, machine learning, and explicit probability estimates.",
  },
  nav: {
    homeAria: "Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cta: "Go to the app",
    links: [
      { label: "About", href: `#${SECTION_IDS.about}` },
      { label: "Method", href: `#${SECTION_IDS.how}` },
      { label: "Scope", href: `#${SECTION_IDS.stats}` },
    ],
  },
  localeSwitcher: {
    ariaLabel: "Change language",
    en: "EN",
    pl: "PL",
  },
  hero: {
    title: "Match analysis",
    titleLine2: "grounded in data and models",
    description:
      "We run quantitative analysis of sports outcomes: data preparation, statistical and machine-learning models, probability calibration, and validation on historical data. We compare model outputs with years of our own pre-match analysis, including the assessment of betting decisions, so results can be interpreted critically. Estimates are delivered with methodology notes—without claims about a certain match outcome.",
    ctaApp: "Go to the app",
    ctaLearn: "Learn more",
  },
  brandShowcase: {
    heading: "Matchalyse — visuals and materials",
    slidesTitle: "Example winning analyses",
    slidesDescription:
      "Selected slips from recent months—different sports and bet types, based on our pre-match analysis. Shown as a record of work, not a guarantee of future results.",
    marqueeLabel: "Gallery of winning slips",
    scrollHint: "Scroll horizontally — mouse, touch, or keyboard",
  },
  about: {
    title: "Who we are",
    paragraphs: [
      "Sport has fascinated us for years—not only as spectacle, but as something that can be measured, studied, and understood more deeply. For years we have analysed matches and events across disciplines on our own, developing our own methods and a view of what really happens in competition. We study the tempo and dynamics of contests, the quality of chances created, player and team form, and contextual factors that simply disappear in standard statistics.",
      "Our model outputs are a starting point—not a final verdict. We run every pre-match analysis systematically, including the context of risk assessment and betting decisions. That experience lets us check whether algorithmic signals align with sporting reality—and catch what no formal model can see on its own.",
    ],
  },
  howItWorks: {
    title: "Method",
    description:
      "We use our own application to collect and process data. Four stages—from model input to recommendations grounded in sporting context.",
    aside: "stages",
    steps: [
      {
        n: "01",
        title: "Data",
        body: "Aggregation of data from multiple sources, standardisation, quality control, and model input.",
      },
      {
        n: "02",
        title: "Prediction",
        body: "Feeding processed data into our own machine-learning models, training, and generating predictions.",
      },
      {
        n: "03",
        title: "Probability",
        body: "Generating distributions and probability estimates for key scenarios, with uncertainty intervals where applicable.",
      },
      {
        n: "04",
        title: "Recommendation",
        body: "Interpreting prediction outputs and formulating recommendations with sporting context and our own expertise.",
      },
    ],
  },
  stats: {
    title: "Scope",
    aside: "status",
    description:
      "We develop the product iteratively. We assess model quality with validation and historical tests—we do not publish standalone percentages without sample and methodology context. Conclusions come from a repeatable process, not single fixtures; we broaden league coverage gradually, without promising instant full-market coverage.",
  },
  appComingSoon: {
    title: "App coming soon",
    message:
      "We're preparing the full Matchalyse experience. Thank you for your interest — launch is just around the corner.",
    closeLabel: "Close",
  },
  footer: {
    appLink: "App",
    contactEmail: "matchalyse@gmail.com",
    instagramLabel: "Instagram — Matchalyse",
    tiktokLabel: "TikTok — Matchalyse",
    disclaimer:
      "Content is for informational purposes only and does not constitute betting advice, legal advice, or a guarantee of results. You are solely responsible for your decisions. 18+ only. Gambling involves risk of losing money.",
  },
}
