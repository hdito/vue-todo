<script setup lang="ts">
import { computed, ref } from "vue";
import TransitionFade from "./TransitionFade.vue";

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

const isShowMessage = ref(false);

function handleSubmit() {
  if (formInput.value === "" && !isShowMessage.value) {
    isShowMessage.value = true;
    return;
  }
  if (isShowMessage.value) isShowMessage.value = false;
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
        :aria-invalid="isShowMessage"
      />
      <TransitionFade>
        <span class="text-slate-700" v-show="isShowMessage">
          Task's title can't be empty
        </span>
      </TransitionFade>
    </label>
    <button
      class="w-full rounded-md bg-blue-500 p-1 text-white hover:shadow-md"
    >
      Add
    </button>
  </form>
</template>
