<template>
    <div v-if="newsletterEnabled" class="justify-center items-center flex mt-6">
        <div class="border-2 border-gray-200 bg-amber-100 rounded-lg p-8">
            <span class="font-bold text-xl mb-8 mt-6">
                Subscribe to get the latest posts by email.
            </span>
            <p v-if="error" class="text-red-500 text-xs italic mb-2">
                Subscription failed. Please retry later
            </p>
            <p v-if="success" class="text-green-500 text-xs italic mb-2">
                You have successfully subscribed
            </p>

            <form :action="formAction" method="post" target="_blank">
                <input
                    v-model="email"
                    name="fields[email]"
                    autocomplete="email"
                    type="email"
                    placeholder="Your email"
                    class="mt-6 p-2 text-gray-700 w-full"
                    required
                />
                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />

                <button
                    class="mt-4 mb-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
                    @click.prevent="subscribe"
                >
                    Subscribe
                </button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const config = useRuntimeConfig();
const newsletterEnabled = config.public.newsletter.enabled;
const formAction = config.public.newsletter.form_action;
const email = ref("");
const success = ref(false);
const error = ref(false);

async function subscribe() {
    const formData = new FormData();
    formData.append("fields[email]", email.value);
    formData.append("ml-submit", "1");
    formData.append("anticsrf", "true");
    const response = await fetch(formAction, {
        method: "POST",
        body: formData,
    });
    email.value = "";

    if (response.ok) {
        success.value = true;
    } else {
        error.value = true;
    }
}
</script>
