import { ProjectEntry } from '../types';

export const projectsData: ProjectEntry[] = [
  {
    id: 'classifier',
    titleKey: 'items.classifier.title',
    categoryKey: 'items.classifier.category',
    descriptionKey: 'items.classifier.description',
    highlightsKey: [
      'items.classifier.highlights.0',
      'items.classifier.highlights.1',
      'items.classifier.highlights.2',
    ],
    techStack: ['PyTorch', 'Torchvision', 'CNN', 'Transfer Learning', 'Scikit-Learn', 'Matplotlib'],
    accuracy: '97.86%',
    stars: 1,
    githubUrl: 'https://github.com/ByElham/binary-image-classifier',
    featured: true,
  },
  {
    id: 'rag',
    titleKey: 'items.rag.title',
    categoryKey: 'items.rag.category',
    descriptionKey: 'items.rag.description',
    highlightsKey: [
      'items.rag.highlights.0',
      'items.rag.highlights.1',
      'items.rag.highlights.2',
    ],
    techStack: ['Django', 'LangChain', 'ChromaDB', 'OpenRouter API', 'Python', 'REST API'],
    featured: true,
  },
  {
    id: 'cs50ai',
    titleKey: 'items.cs50ai.title',
    categoryKey: 'items.cs50ai.category',
    descriptionKey: 'items.cs50ai.description',
    highlightsKey: [
      'items.cs50ai.highlights.0',
      'items.cs50ai.highlights.1',
      'items.cs50ai.highlights.2',
    ],
    techStack: ['Python', 'PyTorch', 'NLTK', 'A* Search', 'Minimax', 'Bayesian Networks', 'NLP'],
    featured: true,
  },
  {
    id: 'lostSequence',
    titleKey: 'items.lostSequence.title',
    categoryKey: 'items.lostSequence.category',
    descriptionKey: 'items.lostSequence.description',
    highlightsKey: [
      'items.lostSequence.highlights.0',
      'items.lostSequence.highlights.1',
    ],
    techStack: ['Generative AI', 'Prompt Engineering', 'Python', 'Game Systems', 'Voice Synthesis'],
  },
  {
    id: 'indexer',
    titleKey: 'items.indexer.title',
    categoryKey: 'items.indexer.category',
    descriptionKey: 'items.indexer.description',
    highlightsKey: [
      'items.indexer.highlights.0',
      'items.indexer.highlights.1',
    ],
    techStack: ['Python', 'Information Retrieval', 'Inverted Index', 'Algorithms', 'Data Structures'],
  },
  {
    id: 'dataCleaning',
    titleKey: 'items.dataCleaning.title',
    categoryKey: 'items.dataCleaning.category',
    descriptionKey: 'items.dataCleaning.description',
    highlightsKey: [
      'items.dataCleaning.highlights.0',
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Outlier Detection'],
    stars: 1,
    githubUrl: 'https://github.com/ByElham',
  },
  {
    id: 'customerAnalysis',
    titleKey: 'items.customerAnalysis.title',
    categoryKey: 'items.customerAnalysis.category',
    descriptionKey: 'items.customerAnalysis.description',
    highlightsKey: [
      'items.customerAnalysis.highlights.0',
    ],
    techStack: ['Python', 'Scikit-Learn', 'K-Means Clustering', 'PCA', 'Seaborn'],
    githubUrl: 'https://github.com/ByElham',
  },
];
