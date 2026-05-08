<template>
  <div
    ref="cardRef"
    class="group relative transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
    :style="{ transitionDelay: `${index * 100}ms` }"
  >
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
      <!-- Number -->
      <div class="shrink-0">
        <span class="font-mono text-sm text-muted-foreground">{{ feature.number }}</span>
      </div>

      <!-- Content -->
      <div class="flex-1 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
            {{ feature.title }}
          </h3>
          <p class="text-lg text-muted-foreground leading-relaxed">
            {{ feature.description }}
          </p>
        </div>

        <!-- Visual -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-48 h-40 text-foreground">
            <AnimatedVisual :type="feature.visual" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AnimatedVisual from './AnimatedVisual.vue'

const props = defineProps<{
  feature: {
    number: string
    title: string
    description: string
    visual: string
  }
  index: number
}>()

const isVisible = ref(false)
const cardRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) isVisible.value = true
    },
    { threshold: 0.2 }
  )
  if (cardRef.value) observer.observe(cardRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
