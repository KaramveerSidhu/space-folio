export type Publication = {
  id: string;
  title: string;
  venue: string;
  date: string;
  type: "Preprint" | "Journal Article";
  url: string;
  description: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "privacy-aware-llm-healthcare",
    title:
      "SoK: Privacy-aware LLM in Healthcare: Threat Model, Privacy Techniques, Challenges and Recommendations",
    venue: "arXiv",
    date: "January 2026",
    type: "Preprint",
    url: "https://arxiv.org/abs/2601.10004",
    description:
      "Systematizes privacy threats and defenses across healthcare LLM preprocessing, federated fine-tuning, and inference workflows.",
  },
  {
    id: "data-science-analytics-agriculture",
    title: "Data science and analytics in agricultural development",
    venue: "Environment Conservation Journal",
    date: "March 2021",
    type: "Journal Article",
    url: "https://doi.org/10.36953/ECJ.2021.SE.2202",
    description:
      "Reviews how data science and analytics can support agricultural productivity, sustainability, and decision making.",
  },
  {
    id: "ai-farming-review",
    title:
      "Advancements in farming and related activities with the help of artificial intelligence: a review",
    venue: "Environment Conservation Journal",
    date: "March 2021",
    type: "Journal Article",
    url: "https://doi.org/10.36953/ECJ.2021.SE.2206",
    description:
      "Reviews AI applications across farming and related activities including plant disease detection, grading, and quality checks.",
  },
];
