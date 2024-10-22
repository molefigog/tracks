<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <section class="page-section ">
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div class="col comp-grid">
                            <div>
                                <div class="relative-position" style="min-height:100px">
                                    <div>
                                        <q-card class="q-pa-lg q-my-md nice-shadow-6">
                                            <div class="row q-col-gutter-lg">
                                                <div class="col-auto">
                                                    <q-img class="img-fluid" :src="$utils.setImgUrl3($auth.userPhoto)">
                                                        <template v-slot:error>
                                                            <div
                                                                class="absolute-full text-h2 text-bold flex flex-center bg-grey-3 text-grey-8">
                                                                !</div>
                                                        </template>
                                                    </q-img>
                                                </div>
                                                <div class="col">
                                                    <div class="text-h5 text-bold text-primary text-capitalize"> {{
                                                        $auth.userName }} </div>
                                                    <div class="text-caption"> {{ $auth.userEmail }} </div>
                                                </div>
                                            </div>
                                        </q-card>
                                        <div class="row q-col-gutter-md">
                                            <div class="col-sm-3 col-12">
                                                <q-card :flat="isSubPage" class="nice-shadow-6">
                                                    <q-tabs vertical class="text-primary" v-model="tab" no-caps
                                                        inline-label>
                                                        <q-tab name="accountview" icon="fas fa-user"
                                                            label="Account Detail" style="justify-content:initial" />
                                                        <q-tab name="accountedit" icon="fas fa-edit"
                                                            label="Edit Account" style="justify-content:initial" />
                                                        <q-tab name="changepassword" icon="fas fa-key"
                                                            label="Change Password" style="justify-content:initial" />
                                                    </q-tabs>
                                                </q-card>
                                            </div>
                                            <dsiv class="col-sm-9 col-12">
                                                <q-tab-panels v-model="tab" animated transition-prev="jump-up"
                                                    transition-next="jump-up">
                                                    <q-tab-panel name="accountview">
                                                        <div class="row justify-start q-col-gutter-sm">
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Id</div>
                                                                            <div class="text-bold">{{ item.id }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Name</div>
                                                                            <div class="text-bold">{{ item.name }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Email</div>
                                                                            <div class="text-bold">{{ item.email }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Mobile Number</div>
                                                                            <div class="text-bold">{{ item.mobile_number
                                                                                }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Balance</div>
                                                                            <div class="text-bold">{{ item.balance }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Created At</div>
                                                                            <div class="text-bold">{{ item.created_at }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Facebook Id</div>
                                                                            <div class="text-bold">{{ item.facebook_id
                                                                                }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Otp Code</div>
                                                                            <div class="text-bold">{{ item.otp_code }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div
                                                                                class="text-grey text-weight-medium mb-1">
                                                                                Otp Date</div>
                                                                            <div class="text-bold">{{ item.otp_date }}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                        </div>
                                                    </q-tab-panel>
                                                    <q-tab-panel name="accountedit">
                                                        <div class="reset-grid">
                                                            <account-edit-page is-sub-page></account-edit-page>
                                                        </div>
                                                    </q-tab-panel>
                                                    <q-tab-panel name="changepassword">
                                                        <change-password-page is-sub-page></change-password-page>
                                                    </q-tab-panel>
                                                </q-tab-panels>
                                            </dsiv>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="q-pa-sm text-center relative-position">
                <q-inner-loading color="primary" label="Loading..." showing></q-inner-loading>
            </div>
        </template>
    </main>
</template>
<script setup>
import { useMeta } from 'quasar';
import { useApp } from 'src/composables/app.js';
import { useAuth } from 'src/composables/auth';
import { useViewPage } from 'src/composables/viewpage.js';
import { usePageStore } from 'src/stores/page';
import { ref, toRefs } from 'vue';
import AccountEditPage from "./accountedit.vue";
import ChangePasswordPage from "./changepassword.vue";

const props = defineProps({
    id: [String, Number],
    primaryKey: {
        type: String,
        default: 'id',
    },
    pageStoreKey: {
        type: String,
        default: 'ACCOUNT',
    },
    pageName: {
        type: String,
        default: 'users',
    },
    routeName: {
        type: String,
        default: 'usersaccountview',
    },
    apiPath: {
        type: String,
        default: 'account',
    },
    autoLoad: {
        type: Boolean,
        default: true,
    },
    exportButton: {
        type: Boolean,
        default: true,
    },
    showFooter: {
        type: Boolean,
        default: true,
    },
    isSubPage: {
        type: Boolean,
        default: false,
    },
    titleBeforeDelete: {
        type: String,
        default: "Delete record",
    },
    msgBeforeDelete: {
        type: String,
        default: "Are you sure you want to delete this record?",
    },
    msgAfterDelete: {
        type: String,
        default: "Record deleted successfully",
    },
    showHeader: {
        type: Boolean,
        default: true,
    },
});

const store = usePageStore(props.pageStoreKey);
const app = useApp(props);
const auth = useAuth();
const page = useViewPage({ store, props });

const { currentRecord } = toRefs(store.state);
const { loading, pageReady } = toRefs(page.state);
const item = currentRecord;
const { load, deleteItem, } = page.methods;

const tab = ref('accountview');


useMeta(() => {
    return {
        //set browser title
        title: "My Account"
    }
});
</script>
<style scoped></style>
