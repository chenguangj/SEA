<template>
  <section id="how-it-works" ref="sectionRef" class="section">
    <!-- Diagonal lines pattern -->
    <div class="bg-pattern" />

    <div class="container">
      <!-- Header -->
      <div class="header">
        <span class="label">
          <span class="label-line" />
          Process
        </span>
        <h2 class="title" :class="isVisible ? 'visible' : 'hidden-up'">
          Three steps.
          <br />
          <span class="title-muted">Infinite possibilities.</span>
        </h2>
      </div>

      <!-- Main content -->
      <div class="content-grid">
        <!-- Steps -->
        <div class="steps">
          <button
            v-for="(step, index) in steps"
            :key="step.number"
            type="button"
            class="step-btn"
            :class="activeStep === index ? 'step-active' : 'step-inactive'"
            @click="activeStep = index"
          >
            <div class="step-inner">
              <span class="step-number">{{ step.number }}</span>
              <div class="step-body">
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-desc">{{ step.description }}</p>
                <div v-if="activeStep === index" class="progress-track">
                  <div class="progress-bar" :key="activeStep" />
                </div>
              </div>
            </div>
          </button>
        </div>

        <!-- Code display -->
        <div class="code-panel">
          <div class="code-window">
            <!-- Window header -->
            <div class="window-header">
              <div class="window-dots">
                <div class="dot" />
                <div class="dot" />
                <div class="dot" />
              </div>
              <span class="window-filename">workflow.js</span>
            </div>

            <!-- Code content -->
            <div class="code-body">
              <pre class="code-pre">
                <div
                  v-for="(line, lineIndex) in steps[activeStep].code.split('\n')"
                  :key="`${activeStep}-${lineIndex}`"
                  class="code-line"
                  :style="{ animationDelay: `${lineIndex * 80}ms` }"
                >
                  <span class="line-num">{{ lineIndex + 1 }}</span>
                  <span class="line-chars">
                    <span
                      v-for="(char, charIndex) in line.split('')"
                      :key="`${activeStep}-${lineIndex}-${charIndex}`"
                      class="code-char"
                      :style="{ animationDelay: `${lineIndex * 80 + charIndex * 15}ms` }"
                    >{{ char === ' ' ? '\u00A0' : char }}</span>
                  </span>
                </div>
              </pre>
            </div>

            <!-- Status -->
            <div class="window-footer">
              <span class="status-dot" />
              <span class="status-text">Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

const steps = [
  {
    number: 'I',
    title: 'Connect your tools',
    description: 'Integrate with your existing stack in minutes. We support 200+ data sources out of the box.',
    code: `import { optimus } from '@optimus/core'

optimus.connect({
  source: 'your-database',
  sync: true
})`,
  },
  {
    number: 'II',
    title: 'Build your workflow',
    description: 'Design powerful automations with our visual builder or write code directly.',
    code: `optimus.workflow('process', {
  trigger: 'event',
  actions: [
    'validate',
    'transform',
    'deliver'
  ]
})`,
  },
  {
    number: 'III',
    title: 'Ship to production',
    description: 'Deploy globally with zero configuration. Your app goes live in under 30 seconds.',
    code: `optimus.deploy({
  target: 'production',
  regions: 'auto'
})

// Deployed to 12 regions`,
  },
]

export default {
  setup() {
    const activeStep = ref(0)
    const isVisible = ref(false)
    const sectionRef = ref(null)
    let observer = null
    let interval = null

    onMounted(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) isVisible.value = true
        },
        { threshold: 0.1 }
      )
      if (sectionRef.value) observer.observe(sectionRef.value)

      interval = setInterval(() => {
        activeStep.value = (activeStep.value + 1) % steps.length
      }, 5000)
    })

    onUnmounted(() => {
      observer?.disconnect()
      clearInterval(interval)
    })

    return { steps, activeStep, isVisible, sectionRef }
  }
}
</script>

<style scoped>
.section {
  position: relative;
  padding: 96px 0;
  background: #111;
  color: #fff;
  overflow: hidden;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 40px,
    currentColor 40px,
    currentColor 41px
  );
}

.container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.header {
  margin-bottom: 64px;
}

.label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-family: monospace;
  color: rgba(255,255,255,0.5);
  margin-bottom: 24px;
}

.label-line {
  display: inline-block;
  width: 32px;
  height: 1px;
  background: rgba(255,255,255,0.3);
}

.title {
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  transition: opacity 0.7s, transform 0.7s;
}

.title.visible {
  opacity: 1;
  transform: translateY(0);
}

.title.hidden-up {
  opacity: 0;
  transform: translateY(16px);
}

.title-muted {
  color: rgba(255,255,255,0.5);
}

/* Grid */
.content-grid {
  display: grid;
  gap: 64px;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
    gap: 96px;
  }
  .header {
    margin-bottom: 96px;
  }
  .code-panel {
    position: sticky;
    top: 128px;
    align-self: start;
  }
}

/* Steps */
.step-btn {
  width: 100%;
  text-align: left;
  padding: 32px 0;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.5s;
}

.step-active { opacity: 1; }
.step-inactive { opacity: 0.4; }
.step-inactive:hover { opacity: 0.7; }

.step-inner {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.step-number {
  font-size: 1.875rem;
  font-weight: 700;
  color: rgba(255,255,255,0.3);
  flex-shrink: 0;
  min-width: 40px;
}

.step-body { flex: 1; }

.step-title {
  font-size: clamp(1.25rem, 2.5vw, 1.875rem);
  font-weight: 700;
  margin: 0 0 12px;
  transition: transform 0.3s;
}

.step-btn:hover .step-title {
  transform: translateX(8px);
}

.step-desc {
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
  margin: 0;
}

/* Progress bar */
.progress-track {
  margin-top: 16px;
  height: 1px;
  background: rgba(255,255,255,0.2);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #fff;
  width: 0;
  animation: progress 5s linear forwards;
}

/* Code window */
.code-window {
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
}

.window-header {
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
}

.window-filename {
  font-size: 12px;
  font-family: monospace;
  color: rgba(255,255,255,0.4);
}

.code-body {
  padding: 32px;
  font-family: monospace;
  font-size: 14px;
  min-height: 280px;
}

.code-pre {
  color: rgba(255,255,255,0.7);
  margin: 0;
}

.code-line {
  display: block;
  line-height: 2;
  opacity: 0;
  transform: translateX(-8px);
  animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.line-num {
  color: rgba(255,255,255,0.2);
  user-select: none;
  display: inline-block;
  width: 32px;
}

.code-char {
  opacity: 0;
  filter: blur(8px);
  animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.window-footer {
  padding: 16px 24px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 1.5s ease-in-out infinite;
}

.status-text {
  font-size: 12px;
  font-family: monospace;
  color: rgba(255,255,255,0.4);
}

/* Animations */
@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}

@keyframes lineReveal {
  to { opacity: 1; transform: translateX(0); }
}

@keyframes charReveal {
  to { opacity: 1; filter: blur(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>
