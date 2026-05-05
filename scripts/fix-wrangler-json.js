// scripts/fix-wrangler-json.js
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const wranglerJsonPath = join(process.cwd(), 'dist', 'server', 'wrangler.json');

try {
  const wranglerJson = JSON.parse(readFileSync(wranglerJsonPath, 'utf-8'));
  
  // 修复 KV 命名空间配置 - 去重并添加 id 字段
  if (wranglerJson.kv_namespaces && wranglerJson.kv_namespaces.length > 0) {
    const seen = new Set();
    wranglerJson.kv_namespaces = wranglerJson.kv_namespaces
      .map(ns => ({
        binding: ns.binding,
        id: ns.id || 'placeholder_id'
      }))
      .filter(ns => {
        if (seen.has(ns.binding)) return false;
        seen.add(ns.binding);
        return true;
      });
  }
  
  // 修复 Assets 绑定名称 - 避免使用保留的 "ASSETS"
  if (wranglerJson.assets && wranglerJson.assets.binding === 'ASSETS') {
    wranglerJson.assets.binding = 'STATIC_ASSETS';
  }
  
  // 删除不必要的顶层字段
  const fieldsToRemove = [
    'definedEnvironments', 'ai_search_namespaces', 'ai_search', 'artifacts',
    'flagship', 'worker_loaders', 'ratelimits', 'vpc_services', 'vpc_networks',
    'python_modules', 'previews', 'cloudchamber', 'send_email', 'vectorize',
    'hyperdrive', 'services', 'analytics_engine_datasets', 'dispatch_namespaces',
    'mtls_certificates', 'pipelines', 'secrets_store_secrets', 'unsafe_hello_world',
    'logfwdr'
  ];
  fieldsToRemove.forEach(field => delete wranglerJson[field]);
  
  // 删除 dev 字段中的 generate_types
  if (wranglerJson.dev) {
    delete wranglerJson.dev.generate_types;
  }
  
  writeFileSync(wranglerJsonPath, JSON.stringify(wranglerJson, null, 2));
  console.log('✅ wrangler.json 已修复');
} catch (error) {
  console.error('❌ 修复 wrangler.json 失败:', error.message);
  process.exit(1);
}
