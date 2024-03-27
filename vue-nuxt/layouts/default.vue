<template>
  <div class="bg-slate-800">
    <main className="flex min-h-screen flex-col items-center">
      <organisms-header />
      <div className="container mx-auto my-8">
        <slot />
      </div>
    </main>
  </div>
</template>