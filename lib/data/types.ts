// Core content types for the help center

export interface Author {
  _title: string
  avatar?: {
    url: string
  }
}

export interface OGImage {
  url: string
}

export interface SysInfo {
  lastModifiedAt: string
}

export interface ArticleBody {
  json: {
    content: string
    toc: any
    blocks: any[]
  }
}

export interface Article {
  _id: string
  _title: string
  _slug: string
  _slugPath: string
  excerpt: string
  ogImage?: OGImage
  author?: Author
  _sys: SysInfo
  body: ArticleBody
  related?: Article[]
}

export interface ArticleCollection {
  items: Article[]
}

export interface Subcategory {
  _id: string
  _title: string
  _slug: string
  _slugPath: string
  excerpt: string
  ogImage?: OGImage
  author?: Author
  _sys: SysInfo
  articles?: ArticleCollection
}

export interface SubcategoryCollection {
  items: Subcategory[]
}

export interface Category {
  _id: string
  _title: string
  _slug: string
  _slugPath: string
  excerpt: string
  ogImage?: OGImage
  author?: Author
  _sys: SysInfo
  articles?: ArticleCollection
  subcategories?: SubcategoryCollection
}

export interface CategoryCollection {
  items: Category[]
}

export interface Metadata {
  title: string
  description: string
  icon: {
    url: string
  }
  ogImage: {
    url: string
  }
}

export interface Settings {
  logo: {
    url: string
    alt: string
    width: number
    height: number
  }
  logoLightMode?: {
    url: string
    alt: string
    width: number
    height: number
  }
  navLinks: {
    items: NavLink[]
  }
  showUseTemplate?: boolean
}

export interface NavLink {
  _id: string
  _title: string
  href: string
}

export interface IndexPage {
  greeting: string
  subtitle?: {
    json: {
      content: string
    }
  }
  popularArticlesSection: {
    title: string
    articles: Article[]
  }
  categoriesSection: {
    title: string
    categories: {
      items: Category[]
    }
  }
  rights: string
  socialMediaLinks: {
    items: SocialMediaLink[]
  }
}

export interface SocialMediaLink {
  _id: string
  platform: string
  url: string
}

export interface FeedbackData {
  ingestKey: string
  schema: any
}

export interface ViewsData {
  ingestKey: string
} 