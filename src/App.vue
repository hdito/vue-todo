<script setup lang="ts"></script>

<template>
  <div class="m-auto max-w-lg space-y-4 p-4">
    <h1 class="text-center text-2xl font-bold">Vue ToDo</h1>
    <form
      class="m-auto flex max-w-xs flex-col gap-2 rounded-md p-2 shadow-md shadow-slate-500"
    >
      <label class="flex flex-col">
        <span>New task</span>
        <input class="rounded border border-slate-300 p-1 px-2" type="text" />
      </label>
      <button
        class="w-full rounded-md bg-blue-500 p-1 text-white hover:shadow-md"
      >
        Add
      </button>
    </form>
    <div
      class="flex items-center gap-4 rounded-md py-2 pl-4 pr-2 shadow-md shadow-slate-500"
    >
      <label class="flex flex-1 gap-2">
        <input class="peer scale-150" type="checkbox" id="toggle" />
        <span class="peer-checked:line-through">ToDo</span>
      </label>
      <button
        class="flex flex-col items-center rounded-md py-0.5 px-2 transition-shadow hover:shadow-md"
      >
        <v-icon scale="1.75" name="bi-trash" />
        <span class="text-sm">Delete</span>
      </button>
    </div>
  </div>
</template>
