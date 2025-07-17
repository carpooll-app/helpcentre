# Content Update Guide for Carpooll.com Help Center

## Overview

This help center uses a simple static data approach for content management. All content is stored in TypeScript files and can be updated by editing the source code directly.

## Content Management Method: Direct Code Editing

### File Structure

The help center uses a Next.js-based architecture with TypeScript for type safety. These files work together to provide dynamic content rendering in a static, code-based help center:

- **Main data file**: `lib/data/sample-data.ts` - Contains all categories, articles, and content data
- **Content manager**: `lib/data/content-manager.ts` - Provides helper functions for data access
- **Type definitions**: `lib/data/types.ts` - Defines TypeScript interfaces for content structure

### Adding a New Article

1. **Open the data file**: `lib/data/sample-data.ts`

2. **Find the appropriate category** and add your article:

```typescript
{
  // Unique identifier for the article
  _id: 'unique-article-id',
  
  // Display title shown to users
  _title: 'Your Article Title',
  
  // URL-friendly identifier (used in URLs)
  _slug: 'your-article-slug',
  
  // Full path for routing (format: "category-slug article-slug")
  _slugPath: 'category-slug your-article-slug',
  
  // Brief description (shown in search results and previews)
  excerpt: 'Brief description of the article',
  
  // Open Graph image for social sharing
  ogImage: {
    url: '/images/your-image.jpg'
  },
  
  // Author information
  author: {
    _title: 'Author Name',
    avatar: {
      url: '/images/author-avatar.jpg'
    }
  },
  
  // System metadata
  _sys: {
    lastModifiedAt: new Date().toISOString()
  },
  
  // Main content structure
  body: {
    json: {
      // Article content in Markdown format
      content: `# Your Article Title

Your article content here in Markdown format.

## Section 1

Content for section 1...

## Section 2

Content for section 2...`,
      
      // Table of contents (auto-generated)
      toc: null,
      
      // Content blocks (for advanced formatting)
      blocks: []
    }
  },
  
  // Related articles (optional)
  related: [
    // Array of related articles
  ]
}
```

### Updating Existing Content

1. **Find the article** in the data file
2. **Update the content** in the `body.json.content` field
3. **Update the timestamp** in `_sys.lastModifiedAt`
4. **Save the file** and restart the development server

### Article Structure

Each article has these key fields:

| Field | Description | Required/Optional |
|-------|-------------|-------------------|
| `_id` | Unique identifier for the article | Required |
| `_title` | Display title shown to users | Required |
| `_slug` | URL-friendly identifier (used in URLs) | Required |
| `_slugPath` | Full path for routing (format: "category-slug article-slug") | Required |
| `excerpt` | Brief description (shown in search results) | Required |
| `body.json.content` | Main content in Markdown format | Required |
| `ogImage` | Open Graph image for social sharing | Optional |
| `author` | Author information with name and avatar | Optional |
| `related` | Array of related articles | Optional |

## Content Guidelines

### Writing Style
- Use clear, concise language
- Write for a general audience
- Include step-by-step instructions when applicable
- Use active voice

### Markdown Formatting

#### Headings
- Use `#` for main headings (H1)
- Use `##` for sub-headings (H2)
- Use `###` for section headings (H3)

#### Text Formatting
- Use `**text**` for **bold text**
- Use `*text*` for *italic text*
- Use `[text](url)` for [links](https://example.com)

#### Lists
- Use `-` for bullet points
- Use `1.` for numbered lists
- Use `  -` for nested lists (indent with 2 spaces)

#### Code
- Use `` `code` `` for inline code
- Use ``` ``` for code blocks

💡 **Tip**: Use a markdown linter (like `markdownlint`) or Prettier to maintain consistent formatting.

### Images
- Store images in the `public/images/` directory
- Reference them as `/images/filename.jpg`
- Use descriptive filenames
- Optimize images for web (compress, resize if needed)

### SEO Best Practices
- Use descriptive titles
- Include relevant keywords naturally
- Write compelling excerpts
- Keep content up-to-date

## Troubleshooting

### Common Issues

**Content not updating**
- **Solution**: Restart the development server
- **Command**: `pnpm dev`

**Markdown not rendering**
- **Solution**: Check syntax and ensure proper formatting
- **Check**: Validate markdown syntax with a linter

**Images not showing**
- **Solution**: Verify the image path and file exists
- **Check**: Ensure image is in `public/images/` directory

**Routing errors**
- **Solution**: Check the `_slugPath` format
- **Format**: Should be "category-slug article-slug"

### Development Commands

```bash
# Start development server
pnpm dev

# Clear cache and restart
rm -rf .next && pnpm dev

# Build for production
pnpm build
```

## Advanced Features

### Adding New Categories
1. Add category data to `sampleCategories` array
2. Create corresponding route files if needed
3. Update navigation if required

### Custom Components
The help center supports custom React components in content through MDX or custom markdown renderer:

- Contact forms
- Interactive elements
- Embedded videos
- Custom styling

**Example:**
```mdx
## Need Help?
<ContactForm />
```

### Analytics Integration
Track content performance:
- Page views
- Search queries
- User engagement
- Content effectiveness

## Support

For technical issues or questions about content management:
1. Check this guide first
2. Review the code comments
3. Contact the development team
4. Check the project documentation

---

**Last Updated**: January 2024  
**Version**: 1.1  
**Maintainer**: Development Team 