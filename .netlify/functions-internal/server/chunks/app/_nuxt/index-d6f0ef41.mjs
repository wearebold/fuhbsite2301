import _sfc_main$1 from './ContentList-dea6d4bf.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-b70c525a.mjs';
import { withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useHead } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './ContentQuery-f11e3d2c.mjs';
import './utils-d5e23ebc.mjs';
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
import './preview-bd59a434.mjs';
import './query-95d4d7bc.mjs';
import 'vue-router';
import '@unhead/shared';
import 'unhead';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "All Beauty Services",
      meta: [{ name: "description", content: "{{ description }}" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentList = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Beauty</h1>`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: "/services/beauty",
        query: {
          only: ["title", "description", "img", "_path"],
          $sensitivity: "base"
        }
      }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class=""${_scopeId}><!--[-->`);
            ssrRenderList(list, (article) => {
              _push2(`<li class=""${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: article._path
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="wrapper"${_scopeId2}><div class="img-cont w-32 shrink-0"${_scopeId2}><img${ssrRenderAttr("src", `${article.img}`)}${ssrRenderAttr("alt", article.title)} class="rounded-lg max-h-[8rem]"${_scopeId2}></div><header${_scopeId2}><h1 class="text-2xl font-semibold"${_scopeId2}>${ssrInterpolate(article.title)}</h1><p${_scopeId2}>${ssrInterpolate(article.description)}</p></header></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "wrapper" }, [
                        createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                          createVNode("img", {
                            src: `${article.img}`,
                            alt: article.title,
                            class: "rounded-lg max-h-[8rem]"
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("header", null, [
                          createVNode("h1", { class: "text-2xl font-semibold" }, toDisplayString(article.title), 1),
                          createVNode("p", null, toDisplayString(article.description), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                  return openBlock(), createBlock("li", {
                    key: article._path,
                    class: ""
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: article._path
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "wrapper" }, [
                          createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                            createVNode("img", {
                              src: `${article.img}`,
                              alt: article.title,
                              class: "rounded-lg max-h-[8rem]"
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode("header", null, [
                            createVNode("h1", { class: "text-2xl font-semibold" }, toDisplayString(article.title), 1),
                            createVNode("p", null, toDisplayString(article.description), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>No articles found.</p>`);
          } else {
            return [
              createVNode("p", null, "No articles found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/beauty/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-d6f0ef41.mjs.map
