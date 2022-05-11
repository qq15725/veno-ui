<template>
  <app-progress />

  <app-header />

  <app-nav />

  <app-toc />

  <app-toolbar />

  <ve-main>
    <ve-container style="max-width: 900px;" class="px-md-10">
      <router-view v-slot="{ Component }">
        <ve-fade-transition hide-on-leave>
          <component :is="Component" />
        </ve-fade-transition>
      </router-view>
    </ve-container>
  </ve-main>
</template>
