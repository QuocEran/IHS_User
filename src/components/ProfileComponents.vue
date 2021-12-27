<template>
  <!--Info -->
  <div class="row" v-if="user">
    <div class="container mx-auto">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="@/assets/images/ava.jpg"
            size="xs"
            alt="user_img"
          />
        </div>
        <div class="font-bold text-2xl mt-3 text-black">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-600 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>

  <!-- Menu -->
  <div class="row mt-2">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul class="text-dark">
            <li v-for="(profileOption, index) in profileOptions" :key="index">
              <router-link
                :to="profileOption.route"
                class="flex items-center py-3 justify-between"
              >
                <div
                  class="flex items-center text-left"
                  :class="[
                    index === profileOptions.length - 1
                      ? 'text-yellow-700'
                      : 'text-black',
                  ]"
                >
                  <div class="flex items-center w-8 h-full">
                    <fa :icon="profileOption.icon" class="text-2xl" />
                  </div>

                  <h5 class="font-semibold ml-3">
                    {{ profileOption.name }}
                  </h5>
                </div>
                <div class="text-right">
                  <fa icon="chevron-right"></fa>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants/index";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();
    return { profileOptions, user };
  },
};
</script>
