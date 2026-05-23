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
      { label: "How it works", href: `#${SECTION_IDS.how}` },
      { label: "Capabilities", href: `#${SECTION_IDS.features}` },
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
    marqueeLabel: "Logo and product graphics gallery",
    scrollHint: "Scroll horizontally — mouse, touch, or keyboard",
  },
  about: {
    title: "Who we are",
    paragraphs: [
      "We independently conduct quantitative analysis of sports data, combining interest in sport and the wider sports industry with a rigorous methodological approach. We analyse matches quantitatively—studying tempo, chance quality, team form, and contextual factors that surface-level statistics miss.",
      "We do not treat algorithm outputs as final verdicts—they are a starting point for expert review. We run systematic pre-match analysis, including our own risk assessment and betting decisions; that experience helps verify model consistency with sporting context and surface signals formal models may miss.",
    ],
    pillars: [
      {
        title: "Analytical approach",
        body: "We treat statistical and machine-learning models as supporting tools, not the final word. Outputs are cross-checked with years of pre-match practice (including betting decisions based on our own estimates): assumptions, data quality, and fit with sporting context.",
      },
      {
        title: "Transparency about uncertainty",
        body: "We report probabilities with confidence intervals, not point forecasts alone. We do not comment ex post on how a match unfolded; content is published only pre-match.",
      },
      {
        title: "In-house pipeline",
        body: "We build model features from the ground up—from data acquisition and feature engineering to calibration and historical testing.",
      },
      {
        title: "Clear presentation of results",
        body: "Results are shown so methodology can be assessed: which variables the model uses, its limitations, and how the stated probability was derived.",
      },
    ],
    legalLabel: "Legal note:",
    legalNote:
      "Participation in games of chance and sports betting carries the risk of losing money. We do not guarantee match outcomes—we provide probability estimates with model assumptions so analytical grounds can be evaluated.",
  },
  howItWorks: {
    title: "How it works",
    description:
      "We use our own in-house application that collects and processes data — enabling systematic match analysis.",
    aside: "pipeline",
    steps: [
      {
        n: "01",
        title: "Data",
        body: "We source match statistics and context, standardise formats, and control input quality so data errors do not propagate into the model.",
      },
      {
        n: "02",
        title: "ML model",
        body: "We build models against baselines, emphasising cross-validation, stable estimation, and feature selection justified by the data.",
      },
      {
        n: "03",
        title: "Probability",
        body: "We present distributions and probability estimates for selected scenarios, with uncertainty information where possible.",
      },
      {
        n: "04",
        title: "Recommendation",
        body: "Recommendations follow from comparing estimates with model assumptions and market context; when the signal is weak or ambiguous, we say so clearly.",
      },
    ],
  },
  features: {
    title: "Capabilities",
    description:
      "Four areas of work: from descriptive analysis and predictive models to formulating probabilities and validating strategies on historical data.",
    cards: [
      {
        title: "Statistical analysis",
        body: "We compare tempo, chance quality, efficiency, and match context, with caution about conclusions drawn from single fixtures.",
        meta: "baseline and quality control",
      },
      {
        title: "Predictive models",
        body: "We combine classical models with machine learning—validation and benchmarks first, then optional structural extensions.",
        meta: "validation and stability",
      },
      {
        title: "Probability calculus",
        body: "We formulate probability estimates and scenarios instead of single-outcome forecasts without uncertainty breakdown.",
        meta: "distributions and intervals",
      },
      {
        title: "Backtesting",
        body: "We test strategies and decision rules on historical data, focusing on repeatability and limits of inference over time.",
        meta: "historical data",
      },
    ],
  },
  stats: {
    title: "Scope and limitations",
    description:
      "The product evolves continuously. Below we define the scope of work and responsibility—including no published figures without data backing and an agreed methodology.",
    aside: "scope",
    highlights: [
      {
        title: "Model quality assessment",
        body: "We check performance and calibration with validation procedures and historical tests. We do not publish a single percentage metric without sample and methodology context.",
      },
      {
        title: "Systematic analytical work",
        body: "We increase the number of matches reviewed within a steady process so conclusions reflect repeatability, not cherry-picked examples.",
      },
      {
        title: "Expanding competition coverage",
        body: "We gradually broaden leagues and competitions while keeping uniform data standards. We do not promise immediate full coverage of every market.",
      },
      {
        title: "Sample representativeness",
        body: "We avoid conclusions based only on individual matches. Methodological choices rely on samples large and sound enough for meaningful inference.",
      },
    ],
  },
  appComingSoon: {
    title: "App coming soon",
    message:
      "We're preparing the full Matchalyse experience. Thank you for your interest — launch is just around the corner.",
    closeLabel: "Close",
  },
  footer: {
    description:
      "We independently conduct quantitative sports data analysis, combining interest in sport with statistical methodology: predictive models, probability calculus, and explicit model assumptions and limits—instead of ready-made forecasts without context.",
    sectionsTitle: "Sections",
    productTitle: "Product",
    infoTitle: "Info",
    appLink: "App",
    teamProfile: "Team profile: statistics, modeling, and data analytics",
    contactLabel: "Contact:",
    contactEmail: "matchalyse@gmail.com",
    socialTitle: "Social media",
    instagramLabel: "Instagram — Matchalyse",
    tiktokLabel: "TikTok — Matchalyse",
    disclaimer:
      "The “Scope” section is descriptive; KPIs will be published once methodology is set and a sufficiently large sample is collected.",
  },
}
