import { a as useI18n, u as useHead, d as __nuxt_component_0, c as useSwitchLocalePath, b as useState } from './server.mjs';
import { defineComponent, computed, watchEffect, mergeProps, ref, withCtx, createTextVNode, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-y6bavJQd.mjs';
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

function useTheme() {
  const theme = useState("theme-mode", () => "light");
  const isDark = computed(() => theme.value === "dark");
  const applyTheme = (mode) => {
    theme.value = mode;
  };
  const initTheme = () => {
    return;
  };
  const toggleTheme = () => {
    applyTheme(isDark.value ? "light" : "dark");
  };
  return { theme, isDark, initTheme, toggleTheme };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const navItems = [
      { key: "about", path: "#about" },
      { key: "courses", path: "#courses" },
      { key: "products", path: "#products" },
      { key: "workspace", path: "#workspace" },
      { key: "gallery", path: "#gallery" },
      { key: "reviews", path: "#testimonials" },
      { key: "contact", path: "#contact" }
    ];
    const mobileMenuOpen = ref(false);
    const { locale, t } = useI18n();
    const { isDark } = useTheme();
    useSwitchLocalePath();
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 w-full bg-white/95 dark:bg-[#0f101a]/95 backdrop-blur-md z-50 shadow-sm transition-all duration-300 border-b border-transparent dark:border-white/10" }, _attrs))}><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-2xl font-bold text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` المرسم <span class="text-primary"${_scopeId}>.</span>`);
          } else {
            return [
              createTextVNode(" المرسم "),
              createVNode("span", { class: "text-primary" }, ".")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="hidden md:flex space-x-8 rtl:space-x-reverse"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.key,
          to: item.path,
          class: "text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-300 font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(`nav.${item.key}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(`nav.${item.key}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center space-x-4 rtl:space-x-reverse"><button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Toggle Theme"><i class="${ssrRenderClass([unref(isDark) ? "fa-solid fa-sun" : "fa-solid fa-moon", "text-gray-700 dark:text-gray-200"])}"></i></button><button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><i class="fa-solid fa-globe text-gray-700 dark:text-gray-200"></i><span class="ml-2 text-sm text-gray-700 dark:text-gray-200">${ssrInterpolate(unref(locale) === "ar" ? "EN" : "عر")}</span></button><button class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><i class="fa-solid fa-bars text-gray-700 dark:text-gray-200"></i></button></div></div></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden bg-white dark:bg-[#0f101a] border-t dark:border-white/10 shadow-lg"><nav class="container mx-auto px-4 py-4"><ul class="space-y-4"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.path,
            onClick: closeMobileMenu,
            class: "block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)(`nav.${item.key}`))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)(`nav.${item.key}`)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white py-8" }, _attrs))}><div class="container mx-auto px-4 text-center"><div class="logo text-2xl font-bold text-primary mb-4"> المرسم <span>.</span></div><p class="text-gray-400">${ssrInterpolate(unref(t)("footer.copyright"))}</p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const isArabic = computed(() => locale.value === "ar");
    watchEffect(() => {
      useHead({
        htmlAttrs: {
          lang: locale.value,
          dir: isArabic.value ? "rtl" : "ltr"
        },
        title: t("pageTitle"),
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          {
            name: "description",
            content: t("meta.description")
          },
          {
            name: "keywords",
            content: t("meta.keywords")
          },
          { property: "og:title", content: t("pageTitle") },
          {
            property: "og:description",
            content: t("meta.description")
          },
          { property: "og:image", content: "/img/hero.avif" },
          { property: "og:url", content: "https://al-marsam.com" },
          { name: "twitter:card", content: "summary_large_image" }
        ],
        link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          { rel: "preconnect", href: "https://fonts.googleapis.com" },
          { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
          {
            href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap",
            rel: "stylesheet"
          }
        ]
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        dir: isArabic.value ? "rtl" : "ltr"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CBsKjxjD.mjs.map
