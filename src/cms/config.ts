// 自定义CMS配置定义
export const cmsConfig = {
  // 站点配置
  site: {
    name: 'GauTown Studio',
    description: '现代化内容管理系统',
    logo: '/images/logo.svg',
    favicon: '/images/favicon.svg'
  },
  
  // 认证配置
  auth: {
    enabled: true,
    providers: ['github', 'google'],
    adminUsers: ['gautown']
  },
  
  // 内容集合配置
  collections: {
    // 模型内容
    models: {
      label: '模型',
      path: 'src/content/models',
      fields: [
        {
          name: 'title',
          label: '标题',
          type: 'string',
          required: true
        },
        {
          name: 'description',
          label: '描述',
          type: 'text',
          required: true
        },
        {
          name: 'thumbnail',
          label: '缩略图',
          type: 'image',
          required: false
        },
        {
          name: 'tags',
          label: '标签',
          type: 'tags',
          required: false
        },
        {
          name: 'date',
          label: '发布日期',
          type: 'datetime',
          required: true
        },
        {
          name: 'body',
          label: '正文',
          type: 'markdown',
          required: true
        }
      ]
    },
    
    // 工具内容
    tools: {
      label: '工具',
      path: 'src/content/tools',
      fields: [
        {
          name: 'title',
          label: '标题',
          type: 'string',
          required: true
        },
        {
          name: 'description',
          label: '描述',
          type: 'text',
          required: true
        },
        {
          name: 'category',
          label: '分类',
          type: 'select',
          options: ['软件', '插件'],
          required: true
        },
        {
          name: 'thumbnail',
          label: '缩略图',
          type: 'image',
          required: false
        },
        {
          name: 'body',
          label: '正文',
          type: 'markdown',
          required: true
        }
      ]
    },
    
    // 学习资料
    'study-materials': {
      label: '学习资料',
      path: 'src/content/study-materials',
      fields: [
        {
          name: 'title',
          label: '标题',
          type: 'string',
          required: true
        },
        {
          name: 'description',
          label: '描述',
          type: 'text',
          required: true
        },
        {
          name: 'body',
          label: '正文',
          type: 'markdown',
          required: true
        }
      ]
    }
  },
  
  // 媒体库配置
  media: {
    uploadDir: 'public/images/uploads',
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'],
    maxFileSize: 10 * 1024 * 1024 // 10MB
  },
  
  // SEO配置
  seo: {
    enabled: true,
    fields: [
      {
        name: 'metaTitle',
        label: 'SEO标题',
        type: 'string'
      },
      {
        name: 'metaDescription',
        label: 'SEO描述',
        type: 'text'
      },
      {
        name: 'metaKeywords',
        label: 'SEO关键词',
        type: 'tags'
      },
      {
        name: 'ogImage',
        label: 'OpenGraph图片',
        type: 'image'
      }
    ]
  }
};