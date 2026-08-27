import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'switzerland-dream',
    slug: 'my-switzerland-dream',
    titleKey: 'switzerlandPost',
    excerptKey: 'switzerlandExcerpt',
    categoryKey: 'dreamCategory',
    date: 'Vision 2025–2026',
    readTimeKey: 'readTime7min',
    coverType: 'image',
    coverGradient: 'from-rose-600/30 via-red-600/20 to-amber-500/30',
    coverMediaUrl: '/media/blog/03-rhine-falls-waterfall.jpg',
    accentColor: '#DA291C',
    tags: ['ETH Zurich', 'EPFL', 'Research Vision', 'Rhine Falls', 'Bern Altstadt', 'Aspiration'],
    featured: true,
    isDreamPost: true,
    dreamBadgeKey: 'dreamBadge',
    dreamTrackerKey: 'dreamTracker',
    pullQuoteKey: 'switzerlandPullQuote',
    gallery: [
      {
        id: 'eth-zurich',
        number: '01',
        fileName: '01-eth-zurich-main-building.jpg',
        titleKey: 'galleryEthTitle',
        locationKey: 'galleryEthLoc',
        descriptionKey: 'galleryEthDesc',
        imagePath: '/media/blog/01-eth-zurich-main-building.jpg',
        fallbackSvg: '/media/blog/01-eth-zurich-main-building.svg',
        type: 'eth',
        category: 'academic',
      },
      {
        id: 'epfl-lausanne',
        number: '02',
        fileName: '02-epfl-lausanne-rolex-center.jpg',
        titleKey: 'galleryEpflTitle',
        locationKey: 'galleryEpflLoc',
        descriptionKey: 'galleryEpflDesc',
        imagePath: '/media/blog/02-epfl-lausanne-rolex-center.jpg',
        fallbackSvg: '/media/blog/02-epfl-lausanne-rolex-center.svg',
        type: 'epfl',
        category: 'academic',
      },
      {
        id: 'rhine-falls',
        number: '03',
        fileName: '03-rhine-falls-waterfall.jpg',
        titleKey: 'galleryRhineTitle',
        locationKey: 'galleryRhineLoc',
        descriptionKey: 'galleryRhineDesc',
        imagePath: '/media/blog/03-rhine-falls-waterfall.jpg',
        fallbackSvg: '/media/blog/03-rhine-falls-waterfall.svg',
        type: 'rhine',
        category: 'nature',
      },
      {
        id: 'bern-oldtown',
        number: '04',
        fileName: '04-bern-altstadt-zytglogge.jpg',
        titleKey: 'galleryBernTitle',
        locationKey: 'galleryBernLoc',
        descriptionKey: 'galleryBernDesc',
        imagePath: '/media/blog/04-bern-altstadt-zytglogge.jpg',
        fallbackSvg: '/media/blog/04-bern-altstadt-zytglogge.svg',
        type: 'bern',
        category: 'heritage',
      },
      {
        id: 'swiss-alps',
        number: '05',
        fileName: '05-swiss-alps-panoramic.jpg',
        titleKey: 'galleryAlpsTitle',
        locationKey: 'galleryAlpsLoc',
        descriptionKey: 'galleryAlpsDesc',
        imagePath: '/media/blog/05-swiss-alps-panoramic.jpg',
        fallbackSvg: '/media/blog/05-swiss-alps-panoramic.svg',
        type: 'alps',
        category: 'nature',
      },
      {
        id: 'zurich-limmat',
        number: '06',
        fileName: '06-zurich-limmat-cityscape.jpg',
        titleKey: 'galleryZurichTitle',
        locationKey: 'galleryZurichLoc',
        descriptionKey: 'galleryZurichDesc',
        imagePath: '/media/blog/06-zurich-limmat-cityscape.jpg',
        fallbackSvg: '/media/blog/06-zurich-limmat-cityscape.svg',
        type: 'zurich',
        category: 'heritage',
      },
      {
        id: 'lake-geneva',
        number: '07',
        fileName: '07-lake-geneva-lausanne-shore.jpg',
        titleKey: 'galleryLakeTitle',
        locationKey: 'galleryLakeLoc',
        descriptionKey: 'galleryLakeDesc',
        imagePath: '/media/blog/07-lake-geneva-lausanne-shore.jpg',
        fallbackSvg: '/media/blog/07-lake-geneva-lausanne-shore.svg',
        type: 'lake',
        category: 'nature',
      },
      {
        id: 'lucerne-bridge',
        number: '08',
        fileName: '08-lucerne-chapel-bridge.jpg',
        titleKey: 'galleryLucerneTitle',
        locationKey: 'galleryLucerneLoc',
        descriptionKey: 'galleryLucerneDesc',
        imagePath: '/media/blog/08-lucerne-chapel-bridge.jpg',
        fallbackSvg: '/media/blog/08-lucerne-chapel-bridge.svg',
        type: 'lucerne',
        category: 'heritage',
      },
      {
        id: 'interlaken-jungfrau',
        number: '09',
        fileName: '09-interlaken-jungfraujoch.jpg',
        titleKey: 'galleryInterlakenTitle',
        locationKey: 'galleryInterlakenLoc',
        descriptionKey: 'galleryInterlakenDesc',
        imagePath: '/media/blog/09-interlaken-jungfraujoch.jpg',
        fallbackSvg: '/media/blog/09-interlaken-jungfraujoch.svg',
        type: 'interlaken',
        category: 'nature',
      },
      {
        id: 'swiss-ai-lab',
        number: '10',
        fileName: '10-swiss-ai-research-lab.jpg',
        titleKey: 'galleryLabTitle',
        locationKey: 'galleryLabLoc',
        descriptionKey: 'galleryLabDesc',
        imagePath: '/media/blog/10-swiss-ai-research-lab.jpg',
        fallbackSvg: '/media/blog/10-swiss-ai-research-lab.svg',
        type: 'lab',
        category: 'academic',
      },
      {
        id: 'academic-pathway',
        number: '11',
        fileName: '11-shiraz-to-switzerland-pathway.jpg',
        titleKey: 'galleryPathwayTitle',
        locationKey: 'galleryPathwayLoc',
        descriptionKey: 'galleryPathwayDesc',
        imagePath: '/media/blog/11-shiraz-to-switzerland-pathway.jpg',
        fallbackSvg: '/media/blog/11-shiraz-to-switzerland-pathway.svg',
        type: 'pathway',
        category: 'vision',
      },
      {
        id: 'elham-vision-board',
        number: '12',
        fileName: '12-elham-academic-vision-board.jpg',
        titleKey: 'galleryVisionTitle',
        locationKey: 'galleryVisionLoc',
        descriptionKey: 'galleryVisionDesc',
        imagePath: '/media/blog/12-elham-academic-vision-board.jpg',
        fallbackSvg: '/media/blog/12-elham-academic-vision-board.svg',
        type: 'vision',
        category: 'vision',
      },
    ],
    sectionsKey: [
      {
        headingKey: 'swissSec1Title',
        contentKey: 'swissSec1Body',
      },
      {
        headingKey: 'swissSec2Title',
        contentKey: 'swissSec2Body',
      },
      {
        headingKey: 'swissSec3Title',
        contentKey: 'swissSec3Body',
      },
      {
        headingKey: 'swissSec4Title',
        contentKey: 'swissSec4Body',
      },
    ],
  },
  {
    id: '1',
    slug: 'cnn-accuracy-breakthrough',
    titleKey: 'classifierPost',
    excerptKey: 'classifierExcerpt',
    categoryKey: 'cvCategory',
    date: 'Jan 2025',
    readTimeKey: 'readTime6min',
    coverType: 'image',
    coverGradient: 'from-indigo-600/30 via-violet-600/20 to-cyan-500/30',
    coverMediaUrl: '/media/blog/tech/cnn-accuracy-breakthrough.svg',
    accentColor: '#6366F1',
    tags: ['PyTorch', 'CNN', 'Transfer Learning', 'Computer Vision'],
    featured: false,
    pullQuoteKey: 'classifierPullQuote',
    codeSnippet: {
      language: 'python',
      filename: 'train_classifier.py',
      code: `import torch
import torch.nn as nn
from torchvision import models

class OptimizedVisionClassifier(nn.Module):
    def __init__(self, num_classes=2, dropout_p=0.4):
        super().__init__()
        # Load backbone with pre-trained weights
        self.backbone = models.resnet50(weights=models.ResNet50_Weights.DEFAULT)
        for param in list(self.backbone.parameters())[:-15]:
            param.requires_grad = False  # Freeze early layers

        in_features = self.backbone.fc.in_features
        self.backbone.fc = nn.Sequential(
            nn.Linear(in_features, 512),
            nn.BatchNorm1d(512),
            nn.Mish(),
            nn.Dropout(dropout_p),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        return self.backbone(x)

# Cosine Annealing with Warm Restarts
# Resulted in jump from 58.57% -> 97.86% validation accuracy`,
    },
    sectionsKey: [
      {
        headingKey: 'sec1Title',
        contentKey: 'sec1Body',
      },
      {
        headingKey: 'sec2Title',
        contentKey: 'sec2Body',
      },
      {
        headingKey: 'sec3Title',
        contentKey: 'sec3Body',
      },
    ],
  },
  {
    id: '2',
    slug: 'multilingual-rag-architecture',
    titleKey: 'ragPost',
    excerptKey: 'ragExcerpt',
    categoryKey: 'ragCategory',
    date: 'Dec 2024',
    readTimeKey: 'readTime5min',
    coverType: 'image',
    coverGradient: 'from-cyan-600/30 via-indigo-600/20 to-emerald-500/30',
    coverMediaUrl: '/media/blog/tech/multilingual-rag-architecture.svg',
    accentColor: '#06B6D4',
    tags: ['LangChain', 'ChromaDB', 'Django', 'RAG', 'Embeddings'],
    featured: false,
    pullQuoteKey: 'ragPullQuote',
    codeSnippet: {
      language: 'python',
      filename: 'retriever_pipeline.py',
      code: `from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceBgeEmbeddings
from langchain.chains import RetrievalQA

def build_multilingual_rag(docs, persist_directory="./chroma_db"):
    embedding_model = HuggingFaceBgeEmbeddings(
        model_name="BAAI/bge-m3",
        model_kwargs={"device": "cuda" if torch.cuda.is_available() else "cpu"}
    )
    
    vectorstore = Chroma.from_documents(
        documents=docs,
        embedding=embedding_model,
        persist_directory=persist_directory
    )
    
    retriever = vectorstore.as_retriever(
        search_type="mmr",  # Maximal Marginal Relevance for diversity
        search_kwargs={"k": 5, "fetch_k": 20, "lambda_mult": 0.7}
    )
    return retriever`,
    },
    sectionsKey: [
      {
        headingKey: 'ragSec1Title',
        contentKey: 'ragSec1Body',
      },
      {
        headingKey: 'ragSec2Title',
        contentKey: 'ragSec2Body',
      },
    ],
  },
  {
    id: '3',
    slug: 'cs50ai-puzzle-day-notes',
    titleKey: 'cs50Post',
    excerptKey: 'cs50Excerpt',
    categoryKey: 'algoCategory',
    date: 'May 2024',
    readTimeKey: 'readTime4min',
    coverType: 'image',
    coverGradient: 'from-purple-600/30 via-pink-600/20 to-indigo-500/30',
    coverMediaUrl: '/media/blog/tech/cs50-puzzle-day-search.svg',
    accentColor: '#A855F7',
    tags: ['Algorithms', 'CSP', 'Alpha-Beta', 'Harvard CS50'],
    featured: false,
    pullQuoteKey: 'cs50PullQuote',
    codeSnippet: {
      language: 'python',
      filename: 'minimax_ab.py',
      code: `def alphabeta_search(state, game, alpha=-float('inf'), beta=float('inf'), depth=6):
    """Minimax with Alpha-Beta Pruning ensuring optimal game strategy."""
    if game.is_terminal(state) or depth == 0:
        return game.utility(state), None

    best_action = None
    if game.to_move(state) == 'MAX':
        value = -float('inf')
        for action in game.actions(state):
            v, _ = alphabeta_search(game.result(state, action), game, alpha, beta, depth - 1)
            if v > value:
                value, best_action = v, action
            alpha = max(alpha, value)
            if alpha >= beta:
                break  # Beta cut-off
        return value, best_action
    else:
        value = float('inf')
        for action in game.actions(state):
            v, _ = alphabeta_search(game.result(state, action), game, alpha, beta, depth - 1)
            if v < value:
                value, best_action = v, action
            beta = min(beta, value)
            if beta <= alpha:
                break  # Alpha cut-off
        return value, best_action`,
    },
    sectionsKey: [
      {
        headingKey: 'cs50Sec1Title',
        contentKey: 'cs50Sec1Body',
      },
      {
        headingKey: 'cs50Sec2Title',
        contentKey: 'cs50Sec2Body',
      },
    ],
  },
  {
    id: 'graduation-milestone',
    slug: 'graduation-rank-1-computer-engineering',
    titleKey: 'graduationPost',
    excerptKey: 'graduationExcerpt',
    categoryKey: 'dreamCategory',
    date: 'June 2025',
    readTimeKey: 'readTime4minGrad',
    coverType: 'image',
    coverGradient: 'from-amber-600/30 via-indigo-600/20 to-rose-500/30',
    coverMediaUrl: '/media/linkedin/graduation/slide-1.jpeg',
    accentColor: '#0A66C2',
    tags: ['Graduation', 'Ranked First #1', 'Computer Engineering', 'LinkedIn Milestone', 'Honors', 'Shiraz University'],
    featured: true,
    isLinkedInPost: true,
    linkedinUrl: 'https://lnkd.in/p/du8nF6yC',
    pullQuoteKey: 'graduationPullQuote',
    gallery: [
      {
        id: 'slide-1',
        number: '01',
        fileName: 'slide-1.jpeg',
        titleKey: 'linkedinSlide1Title',
        locationKey: 'linkedinSlide1Sub',
        descriptionKey: 'linkedinSlide1Caption',
        imagePath: '/media/linkedin/graduation/slide-1.jpeg',
        fallbackSvg: '/media/linkedin/graduation/slide-1.svg',
        type: 'vision',
        category: 'academic',
      },
      {
        id: 'slide-2',
        number: '02',
        fileName: 'slide-2.jpeg',
        titleKey: 'linkedinSlide2Title',
        locationKey: 'linkedinSlide2Sub',
        descriptionKey: 'linkedinSlide2Caption',
        imagePath: '/media/linkedin/graduation/slide-2.jpeg',
        fallbackSvg: '/media/linkedin/graduation/slide-2.svg',
        type: 'vision',
        category: 'academic',
      },
      {
        id: 'slide-3',
        number: '03',
        fileName: 'slide-3.jpeg',
        titleKey: 'linkedinSlide3Title',
        locationKey: 'linkedinSlide3Sub',
        descriptionKey: 'linkedinSlide3Caption',
        imagePath: '/media/linkedin/graduation/slide-3.jpeg',
        fallbackSvg: '/media/linkedin/graduation/slide-3.svg',
        type: 'vision',
        category: 'vision',
      },
    ],
    sectionsKey: [
      {
        headingKey: 'gradSec1Title',
        contentKey: 'gradSec1Body',
      },
      {
        headingKey: 'gradSec2Title',
        contentKey: 'gradSec2Body',
      },
      {
        headingKey: 'gradSec3Title',
        contentKey: 'gradSec3Body',
      },
    ],
  },
];
