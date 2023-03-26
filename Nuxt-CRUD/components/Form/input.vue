<template>
<div class="w-full">
    <label v-if="label" for="$attrs.id">{{ label }}</label>
</div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
    label: String,
    name: String,
    rules: String,
    modelValue: [String, Number],
});

const { errorMessage, value } = useField(ref(props.name), props.rules, {
    initialValue: props.modelValue,
    label: props.label || props.name,
});
</script>