<script setup lang="ts"></script>

<template>
  <div class="max-w-lg m-auto p-4 space-y-4">
    <h1 class="text-center text-2xl font-bold">Vue ToDo</h1>
    <form
      class="shadow-md shadow-slate-500 rounded-md max-w-xs m-auto flex flex-col p-2 gap-2"
    >
      <label class="flex flex-col">
        <span>New task</span>
        <input class="border rounded p-1 border-slate-300 px-2" type="text" />
      </label>
      <button
        class="w-full bg-blue-500 text-white p-1 rounded-md hover:shadow-md"
      >
        Add
      </button>
    </form>
    <div
      class="shadow-md shadow-slate-500 rounded-md pl-4 pr-2 py-2 flex gap-4 items-center"
    >
      <label class="flex gap-2 flex-1">
        <input class="peer scale-150" type="checkbox" id="toggle" />
        <span class="peer-checked:line-through">ToDo</span>
      </label>
      <button
        class="flex flex-col py-0.5 px-2 items-center hover:shadow-md rounded-md transition-shadow"
      >
        <v-icon scale="1.75" name="bi-trash" />
        <span class="text-sm">Delete</span>
      </button>
    </div>
  </div>
</template>
