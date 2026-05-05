import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 标签解析函数：将逗号分隔的字符串转换为标签数组
function parseTags(tagsString: string | undefined): string[] {
  if (!tagsString) return [];
  return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
}

const studyMaterials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/study-materials' }),
  schema: z.object({
    title: z.string(),
    tags: z.string().optional().transform(parseTags),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    date: z.date().optional(),
  }),
});

const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/models' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
    category: z.string().optional(),
    date: z.date().optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
    category: z.string().optional(),
    date: z.date().optional(),
  }),
});

const assetLibrary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/asset-library' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
    category: z.string().optional(),
    date: z.date().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
    date: z.date().optional(),
  }),
});

const siteConfig = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/site-config' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    keywords: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    siteName: z.string(),
    navigation: z.array(z.object({
      name: z.string(),
      url: z.string(),
      children: z.array(z.object({
        name: z.string(),
        url: z.string(),
      })).optional(),
    })),
    friendLinks: z.array(z.object({
      name: z.string(),
      url: z.string(),
      description: z.string(),
    })),
    copyright: z.string(),
  }),
});

export const collections = {
  'study-materials': studyMaterials,
  models: models,
  tools: tools,
  'asset-library': assetLibrary,
  about: about,
  'site-config': siteConfig,
};