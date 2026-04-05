import { NavLink } from "@/interfaces/navlink";
import { SECTION_IDS } from "./section-ids";

export const links: NavLink[] = [
  { label: "O nas", href: `#${SECTION_IDS.about}` },
  { label: "Jak to działa", href: `#${SECTION_IDS.how}` },
  { label: "Możliwości", href: `#${SECTION_IDS.features}` },
  { label: "Zakres", href: `#${SECTION_IDS.stats}` },
];
