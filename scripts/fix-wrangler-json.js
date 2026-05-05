// scripts/fix-wrangler-json.js
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const wranglerJsonPath = join(process.cwd(), 'dist', 'server', 'wrangler.json');

try {
  const wranglerJson = JSON.parse(readFileSync(wranglerJsonPath, 'utf-8'));
  
  // 修复 KV 命名空间配置 - 添加 id 字段
  if (wranglerJson.kv_namespaces && wranglerJson.kv_namespaces.length > 0) {
    wranglerJson.kv_namespaces = wranglerJson.kv_namespaces.map(ns => ({
      ...ns,
      id: ns.id || 'placeholder_id'
    }));
  }
  
  // 修复 Assets 绑定名称 - 避免使用保留的 "ASSETS"
  if (wranglerJson.assets && wranglerJson.assets.binding === 'ASSETS') {
    wranglerJson.assets.binding = 'STATIC_ASSETS';
  }
  
  writeFileSync(wranglerJsonPath, JSON.stringify(wranglerJson, null, 2));
  console.log('✅ wrangler.json 已修复');
} catch (error) {
  console.error('❌ 修复 wrangler.json 失败:', error.message);
  process.exit(1);
}
