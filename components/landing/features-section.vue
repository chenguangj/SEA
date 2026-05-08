<template>
  <section id="features" ref="sectionRef" class="relative py-24 lg:py-32">
    <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-16 lg:mb-24">
        <span class="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span class="w-8 h-px bg-foreground/30" />
          Capabilities
        </span>
        <h2
          class="text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Everything you need.
          <br />
          <span class="text-muted-foreground">Nothing you don't.</span>
        </h2>
      </div>

      <!-- Features List -->
      <div>
        <FeatureCard
          v-for="(feature, index) in features"
          :key="feature.number"
          :feature="feature"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FeatureCard from './FeatureCard.vue'

const features = [
  {
    number: '01',
    title: 'Instant Deployment',
    description: 'Push to production in seconds. Our edge network ensures your applications load instantly, anywhere in the world.',
    visual: 'deploy',
  },
  {
    number: '02',
    title: 'AI-Native Workflows',
    description: 'Build intelligent applications with built-in AI capabilities. From inference to training, everything scales automatically.',
    visual: 'ai',
  },
  {
    number: '03',
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly. Live preview, instant feedback, and version control that actually makes sense.',
    visual: 'collab',
  },
  {
    number: '04',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and granular access controls. Your data stays yours.',
    visual: 'security',
  },
]

const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) isVisible.value = true
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
