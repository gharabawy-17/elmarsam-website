import { defineComponent, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "website",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      htmlAttrs: {
        lang: "ar",
        dir: "rtl"
      },
      title: "المرسم | مساحة للفن والإبداع",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "المرسم إبداع يجمع بين تعلم الفن والموسيقى، وتوفير بيئة هادئة للعمل المستقل والتركيز." },
        { name: "keywords", content: "فن, رسم, موسيقى, دورات, مساحة عمل, إبداع" },
        { property: "og:title", content: "المرسم | مساحة للفن والإبداع" },
        { property: "og:description", content: "المرسم إبداع يجمع بين تعلم الفن والموسيقى، وتوفير بيئة هادئة للعمل المستقل والتركيز." },
        { property: "og:image", content: "/img/hero.avif" },
        { property: "og:url", content: "https://al-marsam.com" },
        { name: "twitter:card", content: "summary_large_image" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap", rel: "stylesheet" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = resolveComponent("AppHeader");
      const _component_AppFooter = resolveComponent("AppFooter");
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/website.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=website-BH4Llcra.mjs.map
