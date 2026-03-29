<template>
  <div>
    <!-- Hero Section -->
    <section id="hero" class="relative h-screen flex items-center bg-cover bg-center" :style="{ backgroundImage: 'url(/img/hero.avif)' }">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="container mx-auto px-4 relative z-10 text-white">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="text-primary">{{ $t('hero.titlePrefix') }}</span>
            <span class="block">{{ $t('hero.brand') }}</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            {{ $t('hero.tagline') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="#courses" class="btn btn-primary">
              {{ $t('hero.btnBookCourse') }}
            </NuxtLink>
            <NuxtLink to="#workspace" class="btn border-2 border-white text-white hover:bg-white hover:text-gray-900">
              {{ $t('hero.btnBookWorkspace') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-white">
          <i class="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/img/env.jpg" alt="About Al-Marsam" class="rounded-lg shadow-lg">
            <div class="bg-primary text-white p-4 rounded-lg -mt-8 ml-8 relative">
              <h3 class="text-lg font-bold">{{ $t('about.subtitle') }}</h3>
              <p>{{ $t('about.p1') }}</p>
            </div>
          </div>
          <div>
            <h4 class="text-primary font-bold text-sm uppercase tracking-wider mb-2">{{ $t('about.subtitle') }}</h4>
            <h2 class="text-4xl font-bold mb-6">
              {{ $t('about.title') }}
            </h2>
            <p class="text-gray-600 mb-6">{{ $t('about.p1') }}</p>
            <p class="text-gray-600 mb-8">{{ $t('about.p2') }}</p>
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <i class="fa-solid fa-palette text-3xl text-primary mb-2"></i>
                <p class="font-medium">{{ $t('about.features.art') }}</p>
              </div>
              <div class="text-center">
                <i class="fa-solid fa-music text-3xl text-primary mb-2"></i>
                <p class="font-medium">{{ $t('about.features.music') }}</p>
              </div>
              <div class="text-center">
                <i class="fa-solid fa-laptop text-3xl text-primary mb-2"></i>
                <p class="font-medium">{{ $t('about.features.workspace') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses Section -->
    <section id="courses" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h4 class="text-primary font-bold text-sm uppercase tracking-wider mb-2">{{ $t('courses.subtitle') }}</h4>
          <h2 class="text-4xl font-bold mb-4">{{ $t('courses.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('courses.desc') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Drawing Course -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://i.pinimg.com/1200x/b1/ce/a8/b1cea80291897e2898ec130ce60d7738.jpg" alt="Drawing Course" class="w-full h-48 object-cover">
            <div class="p-6">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">فنون بصرية</span>
              <h3 class="text-xl font-bold mt-4 mb-2">دورات ومبادئ الرسم</h3>
              <p class="text-gray-600 mb-4">تعلم أساسيات الرسم والتلوين (رصاص، فحم، زيتي، وألوان مائية) في دورات متخصصة تؤسسك كفنان محترف.</p>
              <div class="flex justify-between text-sm text-gray-500 mb-4">
                <span>المستوى: مبتدئ إلى متقدم</span>
                <span>المدة: شهر واحد (8 حصص)</span>
              </div>
              <NuxtLink to="#contact" class="btn btn-primary w-full">
                سجل الآن
              </NuxtLink>
            </div>
          </div>

          <!-- Piano Course -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop" alt="Piano Course" class="w-full h-48 object-cover">
            <div class="p-6">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">موسيقى</span>
              <h3 class="text-xl font-bold mt-4 mb-2">دروس العزف على البيانو</h3>
              <p class="text-gray-600 mb-4">اكتشف شغفك الموسيقي من خلال جلسات فردية أو جماعية تركز على قراءة النوتة وتعلم المقاطع الكلاسيكية والمعاصرة.</p>
              <div class="flex justify-between text-sm text-gray-500 mb-4">
                <span>المستوى: جميع المستويات</span>
                <span>المدة: حسب الباقة المرادة</span>
              </div>
              <NuxtLink to="#contact" class="btn btn-primary w-full">
                سجل الآن
              </NuxtLink>
            </div>
          </div>

          <!-- Sculpture Course -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Sculpture Course" class="w-full h-48 object-cover">
            <div class="p-6">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">نحت</span>
              <h3 class="text-xl font-bold mt-4 mb-2">دورات النحت</h3>
              <p class="text-gray-600 mb-4">تعلم فن النحت بمختلف المواد والتقنيات. مناسب للأطفال من 4 سنوات ولجميع المستويات.</p>
              <div class="flex justify-between text-sm text-gray-500 mb-4">
                <span>العمر: من 4 سنوات</span>
                <span>النوع: اشتراك شهري</span>
              </div>
              <NuxtLink to="#contact" class="btn btn-primary w-full">
                سجل الآن
              </NuxtLink>
            </div>
          </div>

          <!-- Pottery Course -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=2070&auto=format&fit=crop" alt="Pottery Course" class="w-full h-48 object-cover">
            <div class="p-6">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">فخار</span>
              <h3 class="text-xl font-bold mt-4 mb-2">دورات الفخار</h3>
              <p class="text-gray-600 mb-4">تعلم صناعة الفخار يدوياً وعلى عجلة الفخار. اكتشف جمال تشكيل الطين والحرق.</p>
              <div class="flex justify-between text-sm text-gray-500 mb-4">
                <span>العمر: من 4 سنوات</span>
                <span>النوع: اشتراك شهري</span>
              </div>
              <NuxtLink to="#contact" class="btn btn-primary w-full">
                سجل الآن
              </NuxtLink>
            </div>
          </div>

          <!-- Mosaic Course -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2070&auto=format&fit=crop" alt="Mosaic Course" class="w-full h-48 object-cover">
            <div class="p-6">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">موزايك</span>
              <h3 class="text-xl font-bold mt-4 mb-2">دورات الموزايك</h3>
              <p class="text-gray-600 mb-4">تعلم فن تركيب القطع الملونة لإنشاء لوحات فنية رائعة.</p>
              <div class="flex justify-between text-sm text-gray-500 mb-4">
                <span>العمر: من 12 سنة</span>
                <span>النوع: اشتراك شهري</span>
              </div>
              <NuxtLink to="#contact" class="btn btn-primary w-full">
                سجل الآن
              </NuxtLink>
            </div>
          </div>

          <!-- Handmade Course -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop" alt="Handmade Course" class="w-full h-48 object-cover">
            <div class="p-6">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">أعمال يدوية</span>
              <h3 class="text-xl font-bold mt-4 mb-2">دورات الأعمال اليدوية</h3>
              <p class="text-gray-600 mb-4">مكرميه، بانش نيدل، كروشيه، ريزن، كونكريت. دورات متنوعة لتعلم الحرف اليدوية.</p>
              <div class="flex justify-between text-sm text-gray-500 mb-4">
                <span>الأنواع: متنوعة</span>
                <span>النوع: اشتراك شهري</span>
              </div>
              <NuxtLink to="#contact" class="btn btn-primary w-full">
                سجل الآن
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Daily Workshops Section -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-center mb-8">الورش اليومية</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-palette text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">رسم على المرايا</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-tree text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">رسم على الخشب</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-image text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">رسم على الكانفاس</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-circle text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">رسم على الفخار</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-cog text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">صناعة الفخار (يدوي)</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-record-vinyl text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">صناعة الفخار (على العجلة)</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-scissors text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">كروشيه</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-needle text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">بانش نيدل</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-knot text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">مكرميه</h4>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <i class="fa-solid fa-puzzle-piece text-3xl text-primary mb-2"></i>
              <h4 class="font-bold">موزايك</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workspace Section -->
    <section id="workspace" class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" alt="Workspace" class="rounded-lg shadow-lg">
          </div>
          <div>
            <h4 class="text-primary font-bold text-sm uppercase tracking-wider mb-2">{{ $t('workspace.subtitle') }}</h4>
            <h2 class="text-4xl font-bold mb-6">{{ $t('workspace.title') }}</h2>
            <p class="text-gray-300 mb-8">{{ $t('workspace.desc') }}</p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center">
                <i class="fa-solid fa-wifi text-primary mr-3"></i>
                <span>{{ $t('workspace.features.wifi') }}</span>
              </div>
              <div class="flex items-center">
                <i class="fa-solid fa-mug-hot text-primary mr-3"></i>
                <span>{{ $t('workspace.features.coffee') }}</span>
              </div>
              <div class="flex items-center">
                <i class="fa-solid fa-couch text-primary mr-3"></i>
                <span>{{ $t('workspace.features.comfort') }}</span>
              </div>
              <div class="flex items-center">
                <i class="fa-regular fa-calendar-check text-primary mr-3"></i>
                <span>{{ $t('workspace.features.flexible') }}</span>
              </div>
            </div>
            <NuxtLink to="#contact" class="btn btn-primary">
              {{ $t('hero.btnBookWorkspace') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h4 class="text-primary font-bold text-sm uppercase tracking-wider mb-2">{{ $t('gallery.subtitle') }}</h4>
          <h2 class="text-4xl font-bold mb-4">{{ $t('gallery.title') }}</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="gallery-item">
            <img src="https://i.pinimg.com/1200x/39/87/13/3987139406a39295c222d13a7d373ee3.jpg" alt="Drawing Session" class="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform">
          </div>
          <div class="gallery-item">
            <img src="https://i.pinimg.com/736x/41/0d/d0/410dd0b0670e1a360cd4a23b6daf3719.jpg" alt="Piano Lessons" class="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform">
          </div>
          <div class="gallery-item md:col-span-2">
            <img src="https://i.pinimg.com/1200x/70/43/89/704389eafa135477153b84694a71da77.jpg" alt="Workspace Overview" class="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform">
          </div>
          <div class="gallery-item md:row-span-2">
            <img src="https://i.pinimg.com/736x/b6/52/01/b6520151c239a6d732bc02a3ea99c262.jpg" alt="Art Materials" class="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform">
          </div>
          <div class="gallery-item">
            <img src="https://i.pinimg.com/736x/84/0c/10/840c102bb78646dc9bb02e2bb17a5830.jpg" alt="Students Working" class="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform">
          </div>
          <div class="gallery-item">
            <img src="https://i.pinimg.com/736x/69/0f/b0/690fb0ad94dfe6ffd4230a19920176f1.jpg" alt="Focus Area" class="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform">
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h4 class="text-primary font-bold text-sm uppercase tracking-wider mb-2">{{ $t('testimonials.subtitle') }}</h4>
          <h2 class="text-4xl font-bold mb-4">{{ $t('testimonials.title') }}</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="review in $t('testimonials.reviews')" :key="review.name" class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <i class="fa-solid fa-quote-right text-primary text-2xl mr-3"></i>
            </div>
            <p class="text-gray-600 mb-6">{{ review.text }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold">{{ review.name }}</h4>
                <p class="text-gray-500 text-sm">{{ review.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h4 class="text-primary font-bold text-sm uppercase tracking-wider mb-2">{{ $t('contact.subtitle') }}</h4>
            <h2 class="text-4xl font-bold mb-6">{{ $t('contact.title') }}</h2>
            <p class="text-gray-600 mb-8">{{ $t('contact.desc') }}</p>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary text-white p-3 rounded-lg mr-4">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-1">{{ $t('contact.location') }}</h4>
                  <p class="text-gray-600">{{ $t('contact.valLocation') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-primary text-white p-3 rounded-lg mr-4">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-1">{{ $t('contact.labelPhone') }}</h4>
                  <p class="text-gray-600" dir="ltr">{{ $t('contact.phone') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-primary text-white p-3 rounded-lg mr-4">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-1">{{ $t('contact.labelEmail') }}</h4>
                  <p class="text-gray-600">{{ $t('contact.email') }}</p>
                </div>
              </div>
            </div>

            <div class="flex space-x-4 rtl:space-x-reverse mt-8">
              <a href="#" class="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-6">{{ $t('contact.form.title') }}</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-medium mb-2">{{ $t('contact.form.name') }}</label>
                <input type="text" v-model="form.name" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">{{ $t('contact.form.email') }}</label>
                <input type="email" v-model="form.email" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">{{ $t('contact.form.service') }}</label>
                <select v-model="form.service" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="course">{{ $t('contact.form.options.course') }}</option>
                  <option value="workspace">{{ $t('contact.form.options.workspace') }}</option>
                  <option value="other">{{ $t('contact.form.options.other') }}</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">{{ $t('contact.form.message') }}</label>
                <textarea v-model="form.message" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">
                {{ $t('contact.form.submit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  service: 'course',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = { name: '', email: '', service: 'course', message: '' }
}
</script>