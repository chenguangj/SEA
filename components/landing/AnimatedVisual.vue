<template>
  <svg v-if="type === 'deploy'" viewBox="0 0 200 160" class="w-full h-full">
    <defs>
      <clipPath id="deployClip">
        <rect x="30" y="20" width="140" height="120" rx="4" />
      </clipPath>
    </defs>
    <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" stroke-width="2" />
    <g clip-path="url(#deployClip)">
      <rect
        v-for="i in 6"
        :key="i"
        x="40"
        :y="35 + (i - 1) * 16"
        width="120"
        height="10"
        rx="2"
        fill="currentColor"
        opacity="0.15"
      >
        <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" :begin="`${(i - 1) * 0.15}s`" repeatCount="indefinite" />
        <animate attributeName="width" values="20;120;20" dur="2s" :begin="`${(i - 1) * 0.15}s`" repeatCount="indefinite" />
      </rect>
    </g>
    <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
    </circle>
  </svg>

  <svg v-else-if="type === 'ai'" viewBox="0 0 200 160" class="w-full h-full">
    <circle cx="100" cy="80" r="12" fill="currentColor">
      <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
    </circle>
    <g v-for="i in 6" :key="i">
      <line
        x1="100" y1="80"
        :x2="100 + Math.cos((i - 1) * 60 * Math.PI / 180) * 50"
        :y2="80 + Math.sin((i - 1) * 60 * Math.PI / 180) * 50"
        stroke="currentColor" stroke-width="1" opacity="0.3"
      >
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" :begin="`${(i - 1) * 0.3}s`" repeatCount="indefinite" />
      </line>
      <circle
        :cx="100 + Math.cos((i - 1) * 60 * Math.PI / 180) * 50"
        :cy="80 + Math.sin((i - 1) * 60 * Math.PI / 180) * 50"
        r="6" fill="none" stroke="currentColor" stroke-width="2"
      >
        <animate attributeName="r" values="6;8;6" dur="2s" :begin="`${(i - 1) * 0.3}s`" repeatCount="indefinite" />
      </circle>
    </g>
    <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" stroke-width="1" opacity="0">
      <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>

  <svg v-else-if="type === 'collab'" viewBox="0 0 200 160" class="w-full h-full">
    <g>
      <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="2" />
      <text x="55" y="85" text-anchor="middle" font-size="20" font-family="monospace" fill="currentColor">A</text>
      <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" stroke-width="2" />
    </g>
    <g>
      <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="2" />
      <text x="145" y="85" text-anchor="middle" font-size="20" font-family="monospace" fill="currentColor">B</text>
      <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" stroke-width="2" />
    </g>
    <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
    </line>
    <circle r="4" fill="currentColor">
      <animateMotion dur="1.5s" repeatCount="indefinite">
        <mpath href="#dataPath" />
      </animateMotion>
    </circle>
    <path id="dataPath" d="M 80 80 L 120 80" fill="none" />
    <g transform="translate(100, 130)">
      <circle r="6" fill="none" stroke="currentColor" stroke-width="2">
        <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>

  <svg v-else viewBox="0 0 200 160" class="w-full h-full">
    <path d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z" fill="none" stroke="currentColor" stroke-width="2" />
    <path d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z" fill="currentColor" opacity="0.1">
      <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
    </path>
    <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />
    <path d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
    <circle cx="100" cy="80" r="4" fill="white" />
    <rect x="98" y="82" width="4" height="8" fill="white" />
    <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="1" opacity="0">
      <animate attributeName="y1" values="40;120;40" dur="3s" repeatCount="indefinite" />
      <animate attributeName="y2" values="40;120;40" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
    </line>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>
