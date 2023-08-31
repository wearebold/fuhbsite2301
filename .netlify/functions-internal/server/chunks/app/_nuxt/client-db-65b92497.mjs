import { K as prefixStorage, L as createStorage, M as memoryDriver, A as withBase } from '../../nitro/netlify.mjs';
import { c as createNav, a as createPipelineFetcher } from './navigation-98cc5949.mjs';
import { c as createQuery } from './utils-d5e23ebc.mjs';
import { u as useContentPreview } from './preview-bd59a434.mjs';
import { b as useRuntimeConfig, e as useNuxtApp } from '../server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'shiki-es';
import 'consola/core';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'vue';
import 'vue-router';
import 'vue/server-renderer';
import '@unhead/shared';
import 'unhead';

function createPipelineFetcherLegacy(getContentsList) {
  const _pipelineFetcher = createPipelineFetcher(getContentsList);
  return async (query) => {
    var _a;
    const params = query.params();
    const result = await _pipelineFetcher(query);
    if (params.surround) {
      return result.surround;
    }
    if (result.dirConfig) {
      result.result = {
        _path: (_a = result.dirConfig) == null ? void 0 : _a._path,
        ...result.result,
        _dir: result.dirConfig
      };
    }
    return result.result;
  };
}
const withContentBase = (url) => withBase(url, useRuntimeConfig().public.content.api.baseURL);
const contentStorage = prefixStorage(createStorage({ driver: memoryDriver() }), "@content");
function createDB(storage) {
  async function getItems() {
    const keys = new Set(await storage.getKeys("cache:"));
    const previewToken = useContentPreview().getPreviewToken();
    if (previewToken) {
      const previewMeta = await storage.getItem(`${previewToken}$`).then((data) => data || {});
      if (Array.isArray(previewMeta.ignoreSources)) {
        const sources = previewMeta.ignoreSources.map((s) => `cache:${s.trim()}:`);
        for (const key of keys) {
          if (sources.some((s) => key.startsWith(s))) {
            keys.delete(key);
          }
        }
      }
      const previewKeys = await storage.getKeys(`${previewToken}:`);
      const previewContents = await Promise.all(previewKeys.map((key) => storage.getItem(key)));
      for (const pItem of previewContents) {
        keys.delete(`cache:${pItem._id}`);
        if (!pItem.__deleted) {
          keys.add(`${previewToken}:${pItem._id}`);
        }
      }
    }
    const items = await Promise.all(Array.from(keys).map((key) => storage.getItem(key)));
    return items;
  }
  return {
    storage,
    fetch: createPipelineFetcherLegacy(getItems),
    query: (query) => createQuery(createPipelineFetcherLegacy(getItems), {
      initialParams: query,
      legacy: true
    })
  };
}
let contentDatabase = null;
let contentDatabaseInitPromise = null;
async function useContentDatabase() {
  if (contentDatabaseInitPromise) {
    await contentDatabaseInitPromise;
  } else if (!contentDatabase) {
    contentDatabaseInitPromise = initContentDatabase();
    contentDatabase = await contentDatabaseInitPromise;
  }
  return contentDatabase;
}
async function initContentDatabase() {
  const nuxtApp = useNuxtApp();
  const { content } = useRuntimeConfig().public;
  const _contentDatabase = createDB(contentStorage);
  const integrity = await _contentDatabase.storage.getItem("integrity");
  if (content.integrity !== +(integrity || 0)) {
    const { contents, navigation } = await $fetch(withContentBase(content.integrity ? `cache.${content.integrity}.json` : "cache.json"));
    await Promise.all(
      contents.map((content2) => _contentDatabase.storage.setItem(`cache:${content2._id}`, content2))
    );
    await _contentDatabase.storage.setItem("navigation", navigation);
    await _contentDatabase.storage.setItem("integrity", content.integrity);
  }
  await nuxtApp.callHook("content:storage", _contentDatabase.storage);
  return _contentDatabase;
}
async function generateNavigation(query) {
  const db = await useContentDatabase();
  if (!useContentPreview().getPreviewToken() && Object.keys(query || {}).length === 0) {
    return db.storage.getItem("navigation");
  }
  const contents = await db.query(query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
    * Exclude any pages which have opted out of navigation via frontmatter.
    */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await db.query().where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    var _a;
    if (((_a = conf.title) == null ? void 0 : _a.toLowerCase()) === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
}

export { contentStorage, createDB, generateNavigation, useContentDatabase };
//# sourceMappingURL=client-db-65b92497.mjs.map
