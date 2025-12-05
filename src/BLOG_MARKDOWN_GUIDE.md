# Blog Markdown System Guide

## Overview

This blogging system uses **markdown** for content creation, making it easy for LLMs and humans to create properly formatted blog posts. The markdown is automatically parsed and rendered with the 55.is design system styling.

---

## Quick Start

### Creating a New Blog Post

1. Add an entry to `/lib/blog-markdown-data.ts` in the `blogMarkdownContent` object:

```typescript
'your-post-id': {
  id: 'your-post-id',
  metaDescription: 'SEO-friendly description (150-160 characters)',
  tags: ['tag1', 'tag2', 'tag3'],
  relatedPosts: ['other-post-id'],
  content: `
## Your First Section

Your content here...
  `
}
```

2. The markdown content will be automatically parsed and rendered!

---

## Markdown Syntax Reference

### Headings

```markdown
## Main Section (H2) - Auto-added to table of contents
### Sub-section (H3) - Auto-added to table of contents  
#### Minor heading (H4)
```

**Rules:**
- Use `##` for major sections
- Use `###` for sub-sections
- Both H2 and H3 are automatically added to the table of contents
- IDs are auto-generated for anchor links

---

### Text Formatting

```markdown
Regular text here.

**bold text** - Makes text bold and highlighted
__also bold__ - Alternative bold syntax
*italic text* - Makes text italic
_also italic_ - Alternative italic syntax
~~strikethrough~~ - Strikethrough text
```

**Note:** Bold is the most commonly used. Use italic sparingly. Strikethrough can be useful for showing what NOT to do.

---

### Lists

```markdown
- First item
- Second item with **bold part**
- Third item
```

**Rules:**
- Start lines with `-` or `*`
- Can include **bold** formatting within items
- Automatically styled with proper spacing

---

### Callout Boxes

These are the most important feature! Use specific emojis to create styled callout boxes:

```markdown
💡 **Pro tip:** Your helpful tip goes here

⚠️ **Viðvörun:** Warning content here

✅ **Næstu skref:** Action items for the reader

ℹ️ **Athugið:** Important information or notes
```

**Rules:**
- MUST start with the emoji
- MUST have `**Label:**` immediately after
- The rest of the line is the content
- Each type has its own color scheme:
  - 💡 **Pro tip** = Purple background
  - ⚠️ **Warning** = Yellow/orange background
  - ✅ **Action** = Green background
  - ℹ️ **Info** = Blue background

---

### Code Blocks

```markdown
\`\`\`
const example = "Your code here";
console.log(example);
\`\`\`
```

**Renders as:**
- Dark background
- Cyan text color
- Monospace font
- Scrollable if too wide

---

### Quotes

```markdown
> This is an inspirational or important quote
```

**Renders as:**
- Cyan left border
- Larger text
- Italic styling

---

### Images

```markdown
![Alt text description](https://example.com/image.jpg)
![Alt text](https://example.com/image.jpg "Optional caption")
```

**Rules:**
- Use descriptive alt text for SEO
- Optional caption in quotes after URL
- Automatically rounded corners and proper sizing

---

## Complete Example

Here's a full blog post example:

```markdown
## Inngangur

Þetta er inngangur með **feitletruðum** texta og venjulegum texta.

💡 **Pro tip:** Byrjaðu alltaf með góðum inngangstexta!

## Aðal efnishluti

Hér er texti með lista:

- **Punktur einn** - með skýringu
- **Punktur tvö** - með frekari upplýsingum
- **Punktur þrír** - lokaskýring

### Undirkafli

Hér er kóðadæmi:

\`\`\`
function example() {
  return "Hello World";
}
\`\`\`

⚠️ **Viðvörun:** Passaðu þig á þessu!

![Dæmi mynd](https://example.com/image.jpg "Myndatexti")

## Niðurstaða

Lokatexti með **áherslum**.

✅ **Næstu skref:** Prófaðu þetta sjálfur í dag!
```

---

## LLM Instructions

When creating blog content:

1. **Always use H2 (##) for main sections** - these become the table of contents
2. **Use callout boxes strategically** - 1-3 per article for key points
3. **Bold important keywords** - helps readability and SEO
4. **Write in natural Icelandic** - use proper grammar and local terminology
5. **Include code blocks** for technical content
6. **Add actionable next steps** using the ✅ callout at the end

### Content Structure Template:

```markdown
## Inngangur
[Problem/hook + overview]

💡 **Pro tip:** [Quick valuable insight]

## Main Topic
[Core content with examples]

### Sub-topic
[Detailed explanation]

- List of key points
- With **bold** highlights
- Easy to scan

## Practical Section
[How-to or implementation]

⚠️ **Viðvörun:** [Common mistake to avoid]

\`\`\`
[Code example if relevant]
\`\`\`

## Conclusion
[Summary + call to action]

✅ **Næstu skref:** [Concrete action for reader]
```

---

## Technical Details

### File Structure

- `/lib/markdown-parser.tsx` - Parsing logic and rendering functions
- `/lib/blog-markdown-data.ts` - Markdown content storage
- `/components/BlogDetailCopy.tsx` - Main blog display component

### Automatic Features

✅ **Table of contents generation** - From H2 and H3 headings
✅ **Anchor links** - Auto-generated IDs for smooth scrolling
✅ **Intersection observer** - Highlights active section in TOC
✅ **Responsive styling** - Mobile-friendly by default
✅ **SEO optimization** - Proper semantic HTML structure

### Backward Compatibility

The system supports both:
- **New markdown format** (`blogMarkdownContent`)
- **Old manual format** (`blogFullContent`)

If markdown content exists, it takes precedence. Otherwise, it falls back to manual content.

---

## Tips for Great Blog Posts

1. **Start strong** - Hook readers in the first paragraph
2. **Use callouts wisely** - Don't overuse them (1-3 per post)
3. **Break up text** - Use lists, headings, and callouts for scannability
4. **Be specific** - Use concrete examples and numbers
5. **End with action** - Always include ✅ **Næstu skref** callout
6. **SEO matters** - Use keywords naturally, especially in headings

---

## Need Help?

Check these files:
- `/lib/markdown-parser.tsx` - Full syntax documentation in comments
- `/lib/blog-markdown-data.ts` - Examples of complete blog posts
- `/components/BlogDetailCopy.tsx` - How content is rendered

**The system is designed to be simple:** Write natural markdown with emojis for special boxes, and everything else is handled automatically! ✨