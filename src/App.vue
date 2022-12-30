<script setup lang="ts">
import { nanoid } from "nanoid";
import { computed, ref } from "vue";
import { sortByIsFinished } from "./utils/sortByIsFinished";
import { sortByTime } from "./utils/sortByTime";
import type { Task } from "./types/task";
import TaskCard from "./components/TaskCard.vue";
import TaskForm from "./components/TaskForm.vue";

const tasks = ref<Task[]>([]);
const formInput = ref("");

function addTask() {
  if (formInput.value === "") return;
  tasks.value.push({
    id: nanoid(),
    title: formInput.value,
    createdAt: Date.now(),
    isFinished: false,
  });
  formInput.value = "";
}

function deleteTask(id: string) {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index === -1) return;
  tasks.value.splice(index, 1);
}

function toggleTask(id: string) {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index === -1) return;
  tasks.value[index].isFinished = !tasks.value[index].isFinished;
  tasks.value[index].updatedAt = Date.now();
}

const sortedTasks = computed(() =>
  tasks.value.slice().sort(sortByTime).reverse().sort(sortByIsFinished)
);

const countOfTasks = computed(() => tasks.value.length);
const countOfFinishedTasks = computed(() =>
  tasks.value.reduce((count, task) => (task.isFinished ? ++count : count), 0)
);
</script>

<template>
  <div class="min-h-screen bg-white p-4 font-inter">
    <div class="m-auto max-w-lg space-y-4">
      <h1 class="text-center text-2xl font-bold">Vue ToDo</h1>
      <TaskForm v-model="formInput" @add-task="addTask" />
      <div v-show="countOfTasks > 0">
        {{ countOfFinishedTasks }} / {{ countOfTasks }} finished
      </div>
      <TaskCard
        v-for="task in sortedTasks"
        :key="task.id"
        :task="task"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>
