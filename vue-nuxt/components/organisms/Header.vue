<template>
  <header class="bg-gray-900 text-white w-screen">
    <div class="container mx-auto">
      <div class="flex justify-between py-6 px-4 w-full items-center">
        <nuxt-link to="#">
          <nuxt-img src="/logo-ticketandgo.svg" alt="Ticket N Go" loading="lazy" />
        </nuxt-link>
        <molecules-menu-navigation />
        <molecules-action-navigation />
      </div>
    </div>
  </header>
</template>