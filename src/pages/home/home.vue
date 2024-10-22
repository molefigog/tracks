<template>
    <q-page class="main-page" id="">
        <section class="page-section q-pa-md">
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col comp-grid">
                        <div class="">
                            <div
                                class="row items-center q-col-gutter-sm q-px-sm"
                            >
                                <div class="col-auto">
                                    <q-icon class=" q-mr-md" color="dark" style="opacity:1" size="40px" name="fas fa-home"></q-icon>
                                </div>
                                <div class="col">
                                    <div class="text-h6 text-bold text-center">
                                        GW ENTMT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section q-mb-md">
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col-md-3 col-12 comp-grid">
                        <record-count
                            api-path="components_data/getcount_music"
                            max=""
                            v-slot="record"
                        >
                            <q-btn
                                align="left"
                                unelevated
                                push
                                :rounded="false"
                                block
                                no-caps
                                text-color="dark"
                                color="white"
                                :to="`/music`"
                                padding="md"
                                class="full-width animated zoomIn"
                            >
                                <q-icon
                                    class="q-mr-md"
                                    color="dark"
                                    style="opacity: 1"
                                    size="40px"
                                    name="fas fa-compact-disc"
                                ></q-icon>
                                <div class="flex-column text-left">
                                    <div class="text-bold">Music</div>
                                    <div class="text-caption">Total Music</div>
                                </div>
                                <div
                                    class="text-h5 absolute-top-right q-ma-md q-mt-lg"
                                >
                                    <span v-if="!record.loading">{{
                                        record.num
                                    }}</span>
                                    <q-spinner v-else size="14px" />
                                </div>
                            </q-btn>
                        </record-count>
                    </div>
                    <div class="col-md-3 col-12 comp-grid">
                        <record-count
                            api-path="components_data/getcount_users"
                            max=""
                            v-slot="record"
                        >
                            <q-btn
                                align="left"
                                unelevated
                                push
                                :rounded="false"
                                block
                                no-caps
                                text-color="dark"
                                color="white"
                                :to="`/users`"
                                padding="md"
                                class="full-width animated zoomIn"
                            >
                                <q-icon
                                    class="q-mr-md"
                                    color="dark"
                                    style="opacity: 1"
                                    size="40px"
                                    name="fas fa-user-tie"
                                ></q-icon>
                                <div class="flex-column text-left">
                                    <div class="text-bold">Users</div>
                                    <div class="text-caption">Total Users</div>
                                </div>
                                <div
                                    class="text-h5 absolute-top-right q-ma-md q-mt-lg"
                                >
                                    <span v-if="!record.loading">{{
                                        record.num
                                    }}</span>
                                    <q-spinner v-else size="14px" />
                                </div>
                            </q-btn>
                        </record-count>
                    </div>

                    <div class="col-md-3 col-12 comp-grid">
                        <record-count
                            api-path="components_data/getcount_genres"
                            max=""
                            v-slot="record"
                        >
                            <q-btn
                                align="left"
                                unelevated
                                push
                                :rounded="false"
                                block
                                no-caps
                                text-color="dark"
                                color="white"
                                :to="`/genres`"
                                padding="md"
                                class="full-width animated zoomIn"
                            >
                                <q-icon
                                    class="q-mr-md"
                                    color="dark"
                                    style="opacity: 1"
                                    size="40px"
                                    name="fas fa-tags"
                                ></q-icon>
                                <div class="flex-column text-left">
                                    <div class="text-bold">Genres</div>
                                    <div class="text-caption">Total Genres</div>
                                </div>
                                <div
                                    class="text-h5 absolute-top-right q-ma-md q-mt-lg"
                                >
                                    <span v-if="!record.loading">{{
                                        record.num
                                    }}</span>
                                    <q-spinner v-else size="14px" />
                                </div>
                            </q-btn>
                        </record-count>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>
<script setup>
import { ref } from "vue";

import { useApp } from "src/composables/app.js";

const props = defineProps({
    pageName: {
        type: String,
        default: "home",
    },
    routeName: {
        type: String,
        default: "home",
    },
    isSubPage: {
        type: Boolean,
        default: false,
    },
});
const app = useApp();

const pageReady = ref(true);
</script>
<style scoped></style>
