<script setup lang="ts">
import type { Task } from "../types/task";

defineProps<{ task: Task }>();
defineEmits<{
  (e: "toggle-task", id: string): void;
  (e: "delete-task", id: string): void;
}>();
</script>

<template>
  <div class="flex items-center gap-4 rounded-md shadow-md shadow-slate-500">
    <label class="flex min-w-0 flex-1 gap-2 pl-4">
      <input
        :checked="task.isFinished"
        @change="$emit('toggle-task', task.id)"
        class="peer scale-150"
        type="checkbox"
        id="toggle"
      />
      <span class="overflow-hidden text-ellipsis peer-checked:line-through">{{
        task.title
      }}</span>
    </label>
    <div class="p-2">
      <button
        @click="$emit('delete-task', task.id)"
        class="flex flex-col items-center rounded-md py-0.5 px-2 transition-shadow hover:shadow-md"
      >
        <v-icon scale="1.75" name="bi-trash" />
        <span class="text-sm">Delete</span>
      </button>
    </div>
  </div>
</template>
