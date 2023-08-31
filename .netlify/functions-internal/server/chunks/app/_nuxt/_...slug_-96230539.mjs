import _sfc_main$2 from './ContentRenderer-139a1d9c.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-b70c525a.mjs';
import { withAsyncContext, unref, withCtx, createVNode, useSSRContext, mergeProps, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { a as useRoute, u as useHead, _ as _export_sfc } from '../server.mjs';
import { u as useAsyncData } from './utils-d5e23ebc.mjs';
import { q as queryContent } from './query-95d4d7bc.mjs';
import './ContentRendererMarkdown-d83be199.mjs';
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
import 'property-information';
import './preview-bd59a434.mjs';
import 'vue-router';
import '@unhead/shared';
import 'unhead';

const _sfc_main$1 = {
  __name: "PrevNext",
  __ssrInlineRender: true,
  props: ["prev", "next"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "prev-next-cont" }, _attrs))} data-v-4bfbf97f><li class="link-item prev" data-v-4bfbf97f>`);
      if (__props.prev) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.prev._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-4bfbf97f${_scopeId}>${ssrInterpolate(__props.prev.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(__props.prev.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="link-item next" data-v-4bfbf97f>`);
      if (__props.next) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.next._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-4bfbf97f${_scopeId}>${ssrInterpolate(__props.next.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(__props.next.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrevNext.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4bfbf97f"]]);
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`content-${path}`, async () => {
      let article = queryContent().where({ _path: path }).findOne();
      let surround = queryContent("services/beauty").only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
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
      const _component_ContentRenderer = _sfc_main$2;
      const _component_PrevNext = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><article class="article"><h1>${ssrInterpolate(unref(data).article.title)}</h1>`);
      _push(ssrRenderComponent(_component_ContentRenderer, {
        value: unref(data).article
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>No content found.</p>`);
          } else {
            return [
              createVNode("p", null, "No content found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
      _push(ssrRenderComponent(_component_PrevNext, {
        prev: unref(prev),
        next: unref(next)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/beauty/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-96230539.mjs.map
