import { defineComponent, mergeProps, unref, computed, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, ref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, a as useI18n } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-y6bavJQd.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
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

const _imports_0 = "" + __buildAssetsURL("IMG_1525.Dljympj8.mp4");
const _imports_1 = "" + __buildAssetsURL("IMG_1525.Dljympj8.mp4");
const _sfc_main$a = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      }, _attrs))} data-v-b2e62419><video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline preload="auto" data-v-b2e62419><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-b2e62419><source${ssrRenderAttr("src", _imports_1)} type="video/webm" data-v-b2e62419></video><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(19,20,31,0.9), rgba(212,163,115,0.3))" })}" data-v-b2e62419></div><div class="container mx-auto px-5 relative z-10" data-v-b2e62419><div class="max-w-3xl mx-auto text-white" data-v-b2e62419><h1 class="font-extrabold leading-tight mb-6" style="${ssrRenderStyle({ "font-size": "clamp(2.5rem, 8vw, 4.5rem)", "text-shadow": "0 4px 20px rgba(0,0,0,0.3)" })}" data-v-b2e62419><span class="text-[#d4a373]" data-v-b2e62419>${ssrInterpolate(unref(t)("hero.titlePrefix"))}</span><span data-v-b2e62419>${ssrInterpolate(unref(t)("hero.brand"))}</span></h1><p class="mb-12 opacity-95 font-light max-w-2xl mx-auto" style="${ssrRenderStyle({ "font-size": "clamp(1.1rem, 4vw, 1.4rem)" })}" data-v-b2e62419>${ssrInterpolate(unref(t)("hero.tagline"))}</p><div class="flex flex-col sm:flex-row gap-6 justify-center" data-v-b2e62419><a href="#courses" class="px-8 py-4 rounded-lg font-bold text-white bg-[#d4a373] hover:bg-[#b5835a] transition-all hover:-translate-y-1 shadow-lg" style="${ssrRenderStyle({ "box-shadow": "0 4px 15px rgba(212,163,115,0.3)" })}" data-v-b2e62419>${ssrInterpolate(unref(t)("hero.btnBookCourse"))}</a><a href="#workspace" class="px-8 py-4 rounded-lg font-bold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all hover:-translate-y-1" data-v-b2e62419>${ssrInterpolate(unref(t)("hero.btnBookWorkspace"))}</a></div></div></div><div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white text-3xl opacity-80 hover:opacity-100 hover:text-[#d4a373] transition-all" style="${ssrRenderStyle({ "animation": "bounce 2.5s infinite" })}" data-v-b2e62419><a href="#about" data-v-b2e62419><i class="fa-solid fa-chevron-down" data-v-b2e62419></i></a></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Hero/HeroSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b2e62419"]]);
const _sfc_main$9 = {
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "py-24"
      }, _attrs))}><div class="container mx-auto px-5"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="relative"><img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" alt="About Al-Marsam" class="w-full h-[450px] object-cover rounded-2xl shadow-xl"><div class="absolute bottom-6 right-6 bg-[#d4a373] text-white rounded-xl px-6 py-4 text-center shadow-lg"><h3 class="text-2xl font-extrabold">بيئة</h3><p class="text-sm font-semibold">ملهمة</p></div></div><div><h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("about.subtitle"))}</h4><h2 class="text-4xl font-extrabold mb-6 leading-snug">${ssrInterpolate(unref(t)("about.title"))}</h2><p class="text-gray-500 mb-4 leading-relaxed">${ssrInterpolate(unref(t)("about.p1"))}</p><p class="text-gray-500 mb-8 leading-relaxed">${ssrInterpolate(unref(t)("about.p2"))}</p><div class="flex flex-wrap gap-6"><div class="flex items-center gap-2 font-semibold"><i class="fa-solid fa-palette text-[#d4a373] text-xl"></i><span>${ssrInterpolate(unref(t)("about.features.art"))}</span></div><div class="flex items-center gap-2 font-semibold"><i class="fa-solid fa-music text-[#d4a373] text-xl"></i><span>${ssrInterpolate(unref(t)("about.features.music"))}</span></div><div class="flex items-center gap-2 font-semibold"><i class="fa-solid fa-laptop text-[#d4a373] text-xl"></i><span>${ssrInterpolate(unref(t)("about.features.workspace"))}</span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/About/AboutSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CourseCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    desc: String,
    image: String,
    category: String,
    level: String,
    duration: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-lg overflow-hidden" }, _attrs))}><img${ssrRenderAttr("src", __props.image)} class="w-full h-48 object-cover"><div class="p-6"><span class="bg-primary text-white px-3 py-1 rounded text-sm">${ssrInterpolate(__props.category)}</span><h3 class="text-xl font-bold mt-4">${ssrInterpolate(__props.title)}</h3><p class="text-gray-600 my-3">${ssrInterpolate(__props.desc)}</p><div class="flex justify-between text-sm text-gray-500 mb-4"><span>${ssrInterpolate(__props.level)}</span><span>${ssrInterpolate(__props.duration)}</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#contact",
        class: "btn btn-primary w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` سجل الآن `);
          } else {
            return [
              createTextVNode(" سجل الآن ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Courses/CourseCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "CoursesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const courses = [
      {
        image: "https://i.pinimg.com/1200x/b1/ce/a8/b1cea80291897e2898ec130ce60d7738.jpg",
        tag: "فنون بصرية",
        title: "دورات ومبادئ الرسم",
        description: "تعلم أساسيات الرسم والتلوين (رصاص، فحم، زيتي، وألوان مائية) في دورات متخصصة تؤسسك كفنان محترف.",
        level: "مبتدئ إلى متقدم",
        duration: "شهر واحد (8 حصص)"
      },
      {
        image: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop",
        tag: "موسيقى",
        title: "دروس العزف على البيانو",
        description: "اكتشف شغفك الموسيقي من خلال جلسات فردية أو جماعية تركز على قراءة النوتة والمقاطع الكلاسيكية والمعاصرة.",
        level: "جميع المستويات",
        duration: "حسب الباقة المرادة"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "courses",
        class: "py-24 bg-gray-50 dark:bg-[#161722]"
      }, _attrs))}><div class="container mx-auto px-5"><div class="text-center mb-14"><h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("courses.subtitle"))}</h4><h2 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("courses.title"))}</h2><p class="text-gray-500 dark:text-gray-300 max-w-xl mx-auto">${ssrInterpolate(unref(t)("courses.desc"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"><!--[-->`);
      ssrRenderList(courses, (course) => {
        _push(ssrRenderComponent(_sfc_main$8, mergeProps({
          key: course.title
        }, { ref_for: true }, course), null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Courses/CoursesSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    const props = __props;
    const { locale, t } = useI18n();
    const localizedTitle = computed(() => props.product.title[locale.value] || props.product.title.ar);
    const localizedDescription = computed(() => props.product.description[locale.value] || props.product.description.ar);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group h-full rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-[#1c1d29] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" }, _attrs))}><div class="overflow-hidden"><img${ssrRenderAttr("src", __props.product.image)}${ssrRenderAttr("alt", localizedTitle.value)} class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"></div><div class="p-6 flex flex-col h-[calc(100%-13rem)]"><h3 class="text-xl font-extrabold mb-2 text-gray-900 dark:text-white">${ssrInterpolate(localizedTitle.value)}</h3><p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">${ssrInterpolate(localizedDescription.value)}</p><div class="flex items-center justify-between gap-3"><span class="text-lg font-bold text-primary">${ssrInterpolate(__props.product.price)} ${ssrInterpolate(unref(t)("common.currency"))}</span><button class="btn btn-primary px-5 py-2.5 text-sm">${ssrInterpolate(unref(t)("common.buyNow"))}</button></div></div></article>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Products/ProductCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1974&auto=format&fit=crop",
    title: {
      ar: "طقم ألوان أكريليك احترافي",
      en: "Professional Acrylic Paint Set"
    },
    description: {
      ar: "ألوان غنية وثابتة مناسبة للوحات الكانفاس والمشاريع الإبداعية.",
      en: "Rich, long-lasting colors for canvas paintings and creative projects."
    },
    price: 750
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1974&auto=format&fit=crop",
    title: {
      ar: "دفتر سكتش فاخر",
      en: "Premium Sketchbook"
    },
    description: {
      ar: "ورق عالي الجودة بقوام مناسب للرسم بالرصاص والفحم والأحبار.",
      en: "High-quality textured paper for pencil, charcoal, and ink drawing."
    },
    price: 320
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1974&auto=format&fit=crop",
    title: {
      ar: "مجموعة فرش متنوعة",
      en: "Multi-Brush Collection"
    },
    description: {
      ar: "فرش بأحجام مختلفة تمنحك تحكمًا أفضل في التفاصيل والدمج.",
      en: "Different brush sizes for precise details and smooth blending."
    },
    price: 240
  }
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ProductsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "products",
        class: "py-24 bg-white dark:bg-[#111320] section-fade-in"
      }, _attrs))}><div class="container mx-auto px-5"><div class="text-center mb-14"><h4 class="text-primary font-bold uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("products.subtitle"))}</h4><h2 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("products.title"))}</h2><p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">${ssrInterpolate(unref(t)("products.desc"))}</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(ssrRenderComponent(_sfc_main$6, {
          key: product.id,
          product
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Products/ProductsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "WorkspaceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "workspace",
        class: "py-24"
      }, _attrs))}><div class="container mx-auto px-5"><div class="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" alt="Workspace" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-black/65"></div><div class="relative z-10 p-12 md:p-20 max-w-2xl"><h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-4">${ssrInterpolate(unref(t)("workspace.subtitle"))}</h4><h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">${ssrInterpolate(unref(t)("workspace.title"))}</h2><p class="text-white/80 mb-8 leading-relaxed">${ssrInterpolate(unref(t)("workspace.desc"))}</p><div class="grid grid-cols-2 gap-4 mb-8"><div class="flex items-center gap-3 text-white font-semibold"><i class="fa-solid fa-wifi text-[#d4a373] text-xl w-6"></i><span>${ssrInterpolate(unref(t)("workspace.features.wifi"))}</span></div><div class="flex items-center gap-3 text-white font-semibold"><i class="fa-solid fa-mug-hot text-[#d4a373] text-xl w-6"></i><span>${ssrInterpolate(unref(t)("workspace.features.coffee"))}</span></div><div class="flex items-center gap-3 text-white font-semibold"><i class="fa-solid fa-couch text-[#d4a373] text-xl w-6"></i><span>${ssrInterpolate(unref(t)("workspace.features.comfort"))}</span></div><div class="flex items-center gap-3 text-white font-semibold"><i class="fa-regular fa-calendar-check text-[#d4a373] text-xl w-6"></i><span>${ssrInterpolate(unref(t)("workspace.features.flexible"))}</span></div></div><a href="#contact" class="inline-block px-8 py-4 bg-[#d4a373] hover:bg-[#b5835a] text-white font-bold rounded-lg transition-all hover:-translate-y-1">${ssrInterpolate(unref(t)("workspace.cta"))}</a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Workspace/WorkspaceSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "GallerySection",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [EffectCoverflow, Autoplay, Pagination, Navigation];
    const { t } = useI18n();
    const modalSrc = ref(null);
    const openModal = (src) => {
      modalSrc.value = src;
      (void 0).body.style.overflow = "hidden";
    };
    const images = [
      { src: "https://i.pinimg.com/1200x/39/87/13/3987139406a39295c222d13a7d373ee3.jpg", alt: "Art 1" },
      { src: "https://i.pinimg.com/736x/41/0d/d0/410dd0b0670e1a360cd4a23b6daf3719.jpg", alt: "Art 2" },
      { src: "https://i.pinimg.com/1200x/70/43/89/704389eafa135477153b84694a71da77.jpg", alt: "Art 3" },
      { src: "https://i.pinimg.com/736x/b6/52/01/b6520151c239a6d732bc02a3ea99c262.jpg", alt: "Art 4" },
      { src: "https://i.pinimg.com/736x/84/0c/10/840c102bb78646dc9bb02e2bb17a5830.jpg", alt: "Art 5" },
      { src: "https://i.pinimg.com/736x/69/0f/b0/690fb0ad94dfe6ffd4230a19920176f1.jpg", alt: "Art 6" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "gallery",
        class: "py-24 bg-gray-50 dark:bg-[#161722]"
      }, _attrs))} data-v-b871590c><div class="container mx-auto px-5" data-v-b871590c><div class="text-center mb-14" data-v-b871590c><h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3" data-v-b871590c>${ssrInterpolate(unref(t)("gallery.subtitle"))}</h4><h2 class="text-4xl font-extrabold text-gray-900 dark:text-white" data-v-b871590c>${ssrInterpolate(unref(t)("gallery.title"))}</h2></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        effect: "coverflow",
        "grab-cursor": true,
        "centered-slides": true,
        "slides-per-view": "auto",
        loop: true,
        "coverflow-effect": {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        pagination: { clickable: true },
        navigation: true,
        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        },
        modules,
        class: "gallery-slider pb-20 max-w-[900px] mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(images, (img, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: "!w-auto"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative rounded-[20px] overflow-hidden h-[400px] w-[300px] cursor-pointer gallery-item" data-v-b871590c${_scopeId2}><img${ssrRenderAttr("src", img.src)}${ssrRenderAttr("alt", img.alt)} class="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-110" data-v-b871590c${_scopeId2}><div class="gallery-overlay absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 transition-all duration-300" style="${ssrRenderStyle({ "background": "rgba(212,163,115,0.6)" })}" data-v-b871590c${_scopeId2}><i class="fa-solid fa-plus" data-v-b871590c${_scopeId2}></i></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "relative rounded-[20px] overflow-hidden h-[400px] w-[300px] cursor-pointer gallery-item",
                        onClick: ($event) => openModal(img.src)
                      }, [
                        createVNode("img", {
                          src: img.src,
                          alt: img.alt,
                          class: "w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-110"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", {
                          class: "gallery-overlay absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 transition-all duration-300",
                          style: { "background": "rgba(212,163,115,0.6)" }
                        }, [
                          createVNode("i", { class: "fa-solid fa-plus" })
                        ])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(images, (img, i) => {
                return createVNode(unref(SwiperSlide), {
                  key: i,
                  class: "!w-auto"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "relative rounded-[20px] overflow-hidden h-[400px] w-[300px] cursor-pointer gallery-item",
                      onClick: ($event) => openModal(img.src)
                    }, [
                      createVNode("img", {
                        src: img.src,
                        alt: img.alt,
                        class: "w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-110"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", {
                        class: "gallery-overlay absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 transition-all duration-300",
                        style: { "background": "rgba(212,163,115,0.6)" }
                      }, [
                        createVNode("i", { class: "fa-solid fa-plus" })
                      ])
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (modalSrc.value) {
        _push(`<div class="fixed inset-0 z-[3000] flex items-center justify-center pt-24" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.9)", "backdrop-filter": "blur(5px)" })}" data-v-b871590c><span class="absolute top-8 right-10 text-white text-5xl cursor-pointer hover:text-[#d4a373] transition-colors leading-none" data-v-b871590c><i class="fa-solid fa-xmark" data-v-b871590c></i></span><img${ssrRenderAttr("src", modalSrc.value)} class="max-w-[90%] max-h-[80vh] object-contain rounded-xl animate-zoom" data-v-b871590c></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Gallery/GallerySection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const GallerySection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b871590c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { tm, t } = useI18n();
    const testimonials = computed(() => {
      const raw = tm("testimonials.reviews");
      let reviews = [];
      if (Array.isArray(raw)) {
        reviews = raw;
      } else if (raw && typeof raw === "object") {
        reviews = Object.values(raw);
      }
      return reviews.map((review) => ({
        ...review,
        avatar: review.name?.charAt(0) ?? ""
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "py-24 bg-gray-50 dark:bg-[#161722]"
      }, _attrs))}><div class="container mx-auto px-5"><div class="text-center mb-14"><h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("testimonials.subtitle"))}</h4><h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("testimonials.title"))}</h2></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Pagination)],
        "slides-per-view": 1,
        "space-between": 30,
        breakpoints: { 768: { slidesPerView: 2 } },
        pagination: { clickable: true },
        class: "pb-14"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(testimonials.value, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.name
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative bg-white dark:bg-[#1c1d29] rounded-2xl p-10 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 transition-all mt-8"${_scopeId2}><div class="absolute -top-5 right-10 w-14 h-14 rounded-full bg-[#d4a373] flex items-center justify-center text-white text-xl shadow"${_scopeId2}><i class="fa-solid fa-quote-right"${_scopeId2}></i></div><p class="text-gray-500 dark:text-gray-300 italic leading-relaxed mb-8 mt-4"${_scopeId2}>${ssrInterpolate(item.text)}</p><div class="flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6"${_scopeId2}><div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-2xl font-extrabold text-[#d4a373]"${_scopeId2}>${ssrInterpolate(item.avatar)}</div><div${_scopeId2}><h5 class="font-extrabold text-base text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="text-sm text-gray-400"${_scopeId2}>${ssrInterpolate(item.role)}</span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative bg-white dark:bg-[#1c1d29] rounded-2xl p-10 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 transition-all mt-8" }, [
                        createVNode("div", { class: "absolute -top-5 right-10 w-14 h-14 rounded-full bg-[#d4a373] flex items-center justify-center text-white text-xl shadow" }, [
                          createVNode("i", { class: "fa-solid fa-quote-right" })
                        ]),
                        createVNode("p", { class: "text-gray-500 dark:text-gray-300 italic leading-relaxed mb-8 mt-4" }, toDisplayString(item.text), 1),
                        createVNode("div", { class: "flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6" }, [
                          createVNode("div", { class: "w-14 h-14 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-2xl font-extrabold text-[#d4a373]" }, toDisplayString(item.avatar), 1),
                          createVNode("div", null, [
                            createVNode("h5", { class: "font-extrabold text-base text-gray-900 dark:text-white" }, toDisplayString(item.name), 1),
                            createVNode("span", { class: "text-sm text-gray-400" }, toDisplayString(item.role), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(testimonials.value, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.name
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative bg-white dark:bg-[#1c1d29] rounded-2xl p-10 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 transition-all mt-8" }, [
                      createVNode("div", { class: "absolute -top-5 right-10 w-14 h-14 rounded-full bg-[#d4a373] flex items-center justify-center text-white text-xl shadow" }, [
                        createVNode("i", { class: "fa-solid fa-quote-right" })
                      ]),
                      createVNode("p", { class: "text-gray-500 dark:text-gray-300 italic leading-relaxed mb-8 mt-4" }, toDisplayString(item.text), 1),
                      createVNode("div", { class: "flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6" }, [
                        createVNode("div", { class: "w-14 h-14 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-2xl font-extrabold text-[#d4a373]" }, toDisplayString(item.avatar), 1),
                        createVNode("div", null, [
                          createVNode("h5", { class: "font-extrabold text-base text-gray-900 dark:text-white" }, toDisplayString(item.name), 1),
                          createVNode("span", { class: "text-sm text-gray-400" }, toDisplayString(item.role), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Testimonials/TestimonialsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-24"
      }, _attrs))}><div class="container mx-auto px-5"><div class="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"><div class="bg-gray-50 dark:bg-[#161722] p-14 md:p-20"><h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("contact.subtitle"))}</h4><h2 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("contact.title"))}</h2><p class="text-gray-500 dark:text-gray-300 mb-12 leading-relaxed">${ssrInterpolate(unref(t)("contact.desc"))}</p><div class="flex flex-col gap-8"><div class="flex items-start gap-5"><div class="w-12 h-12 rounded-xl bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0"><i class="fa-solid fa-location-dot"></i></div><div><h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">${ssrInterpolate(unref(t)("contact.locationLabel"))}</h5><p class="font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("contact.location"))}</p></div></div><div class="flex items-start gap-5"><div class="w-12 h-12 rounded-xl bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0"><i class="fa-solid fa-phone"></i></div><div><h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">${ssrInterpolate(unref(t)("contact.phoneLabel"))}</h5><p class="font-semibold text-gray-900 dark:text-white" dir="ltr">${ssrInterpolate(unref(t)("contact.phone"))}</p></div></div><div class="flex items-start gap-5"><div class="w-12 h-12 rounded-xl bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0"><i class="fa-solid fa-envelope"></i></div><div><h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">${ssrInterpolate(unref(t)("contact.emailLabel"))}</h5><p class="font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("contact.email"))}</p></div></div></div><div class="flex gap-3 mt-12"><!--[-->`);
      ssrRenderList(["instagram", "facebook-f", "x-twitter"], (icon) => {
        _push(`<a href="#" class="w-11 h-11 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition-all"><i class="${ssrRenderClass(`fa-brands fa-${icon}`)}"></i></a>`);
      });
      _push(`<!--]--></div></div><div class="bg-white dark:bg-[#1c1d29] p-14 md:p-20"><h3 class="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("contact.form.title"))}</h3><div class="flex flex-col gap-6"><div><label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(unref(t)("contact.form.name"))}</label><input type="text" placeholder="أدخل اسمك" class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all"></div><div><label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(unref(t)("contact.form.email"))}</label><input type="email" placeholder="أدخل بريدك الإلكتروني" class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all"></div><div><label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(unref(t)("contact.form.service"))}</label><select class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all"><option value="course">${ssrInterpolate(unref(t)("contact.form.options.course"))}</option><option value="workspace">${ssrInterpolate(unref(t)("contact.form.options.workspace"))}</option><option value="other">${ssrInterpolate(unref(t)("contact.form.options.other"))}</option></select></div><div><label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">${ssrInterpolate(unref(t)("contact.form.message"))}</label><textarea rows="4" placeholder="اكتب رسالتك هنا..." class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all resize-y min-h-28"></textarea></div><button class="w-full py-4 bg-[#d4a373] hover:bg-[#b5835a] text-white font-bold rounded-lg transition-all hover:-translate-y-1 shadow-lg">${ssrInterpolate(unref(t)("contact.form.submit"))}</button></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/home/Contact/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(GallerySection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B3lGrVtM.mjs.map
