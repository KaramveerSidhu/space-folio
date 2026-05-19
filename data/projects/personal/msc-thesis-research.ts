export const mscThesisResearchData = {
  id: "msc-thesis-research",
  title: "MSc Thesis Research",
  description:
    "Research on adversarial robustness of federated learning-based intrusion detection systems for modern network security.",
  content: ` - Researched adversarial robustness of federated learning-based intrusion detection systems (FL-IDS) for modern network security. \n - Designed a causal-defense CNN by inserting a learnable sparse 64x64 causal matrix into the penultimate layer and aggregating it across federated clients with FedAvg. \n - Built a reproducible UM-NIDS data pipeline by unifying 4 IDS benchmark datasets and preparing a large-scale experimental dataset for training and evaluation. \n - Implemented and evaluated a 4-client non-IID federated learning setup using Python, PyTorch, and Flower, including FGSM and PGD attack testing. \n - Demonstrated that the proposed defense improved PGD robustness from 41.0% to 89.85% at epsilon = 0.20 with under 1% clean-accuracy loss, without adversarial training.
        `,
  sourceCodeURL: "",
  appURL: "",
  imgURL: "/msc-thesis-research.svg",
  skills: [
    "Python",
    "PyTorch",
    "Flower",
    "Federated Learning",
    "Network Security",
    "CNN",
  ],
};
