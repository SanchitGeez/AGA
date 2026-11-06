import type { CategoryId } from "@/lib/services";

export const serviceImagery: Record<CategoryId, { src: string; alt: string; position: string }> = {
  formation: {
    src: "/services/colour/formation.webp",
    alt: "Blue incorporation folio with constitutional documents and a digital-signature token",
    position: "65% 50%",
  },
  compliance: {
    src: "/services/colour/compliance.webp",
    alt: "Green statutory register beside annual-return working papers and a filing planner",
    position: "65% 50%",
  },
  "capital-markets": {
    src: "/services/colour/capital-markets.webp",
    alt: "Illustrative view of the Bombay Stock Exchange building in afternoon light",
    position: "62% 50%",
  },
  transactions: {
    src: "/services/colour/transactions.webp",
    alt: "Transaction agreements and review papers with navy and burgundy portfolios",
    position: "65% 50%",
  },
  "cross-border": {
    src: "/services/colour/cross-border.webp",
    alt: "Container port with cargo cranes beside blue harbour water",
    position: "68% 50%",
  },
  advisory: {
    src: "/services/colour/advisory.webp",
    alt: "Illustrative boardroom with green chairs, a walnut table and city views",
    position: "65% 50%",
  },
};
