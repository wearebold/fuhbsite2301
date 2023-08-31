import { withAsyncContext, unref, useSSRContext } from 'vue';
import { a as useRoute, u as useHead } from '../server.mjs';
import { u as useAsyncData } from './utils-d5e23ebc.mjs';
import { q as queryContent } from './query-95d4d7bc.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/netlify.mjs';
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
import 'vue-router';
import '@unhead/shared';
import 'unhead';
import './preview-bd59a434.mjs';

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`content-${path}`, async () => {
      let article = queryContent().where({ _path: path }).findOne();
      let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
      return {
        article: await article,
        surround: await surround
      };
    })), __temp = await __temp, __restore(), __temp);
    const [prev, next] = data.value.surround;
    console.log({ data, prev, next });
    useHead({
      title: data.value.article.title,
      meta: [
        { name: "description", content: data.value.article.description },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://site.com/${data.value.article.img}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(unref(data).article.title)}</h1></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/hair/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-4d280478.mjs.map
