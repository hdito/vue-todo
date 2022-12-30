<script setup lang="ts">
import { computed, ref } from "vue";

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "add-task"): void;
}>();
const props = defineProps<{ modelValue: string }>();
const formInput = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const isChanged = ref(false);
const hasError = computed(() => {
  if (!isChanged.value) return false;
  if (formInput.value === "") return true;
  return false;
});

function handleInput() {
  if (isChanged.value) return;
  isChanged.value = true;
}

function handleSubmit() {
  if (hasError.value) {
    return;
  }
  isChanged.value = false;
  emit("add-task");
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="m-auto flex max-w-xs flex-col gap-2 rounded-md p-2 shadow-md shadow-slate-500"
  >
    <label class="flex flex-col gap-0.5">
      <span>New task</span>
      <input
        v-model="formInput"
        class="rounded border border-slate-300 p-1 px-2"
        type="text"
        aria-required="true"
        :aria-invalid="hasError"
        @input="handleInput"
      />
      <span class="text-red-700" v-show="hasError">Can't be empty</span>
    </label>
    <button
      class="w-full rounded-md bg-blue-500 p-1 text-white hover:shadow-md"
    >
      Add
    </button>
  </form>
</template>
