<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Name *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlname" v-model.trim="formData.name"  label="Name" type="text" placeholder="Enter Name"
                                                    class="" :error="isFieldValid('name')" :error-message="getFieldError('name')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mobile Number
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmobile_number" v-model.trim="formData.mobile_number"  label="Mobile Number" type="text" placeholder="Enter Mobile Number"
                                                    class="" :error="isFieldValid('mobile_number')" :error-message="getFieldError('mobile_number')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Avatar *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-inputs show-uploaded-files :max-files="1" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg" :multiple="false" delete-icon="clear" style="width:100%" label="Choose files or drop files here" upload-path="fileuploader/upload/avatar" v-model="formData.avatar"  ></q-uploader-inputs>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Facebook Id
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfacebook_id" v-model.trim="formData.facebook_id"  label="Facebook Id" type="text" placeholder="Enter Facebook Id"
                                                    class="" :error="isFieldValid('facebook_id')" :error-message="getFieldError('facebook_id')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlemail" v-model.trim="formData.email"  label="Email" type="email" placeholder="Enter Email"
                                                    class="" :error="isFieldValid('email')" :error-message="getFieldError('email')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Otp Code
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlotp_code" v-model.trim="formData.otp_code"  label="Otp Code" type="text" placeholder="Enter Otp Code"
                                                    class="" :error="isFieldValid('otp_code')" :error-message="getFieldError('otp_code')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Otp Date
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlotp_date" v-model="formData.otp_date"    :error="isFieldValid('otp_date')" :error-message="getFieldError('otp_date')">
                                                    <template v-slot:prepend>
                                                        <q-icon name="fas fa-calendar" class="cursor-pointer">
                                                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                        <q-date      mask="YYYY-MM-DD HH:mm" v-model="formData.otp_date" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    <template v-slot:append>
                                                        <q-icon name="fas fa-clock" class="cursor-pointer">
                                                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                        <q-time v-model="formData.otp_date" mask="YYYY-MM-DD HH:mm" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="fas fa-paper-plane" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
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
import { useApp } from 'src/composables/app';
import { useEditPage } from 'src/composables/editpage';
import { email, required, } from 'src/services/validators';
import { usePageStore } from 'src/stores/page';
import { computed, onMounted, reactive, toRefs } from 'vue';

	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'users',
		},
		pageStoreKey: {
			type: String,
			default: 'ACCOUNT',
		},
		routeName: {
			type: String,
			default: 'usersaccountedit',
		},
		pagePath: {
			type : String,
			default : 'account/edit',
		},
		apiPath: {
			type: String,
			default: 'account/edit',
		},
		submitButtonLabel: {
			type: String,
			default: "Update",
		},
		msgTitle: {
			type: String,
			default: "Update Record",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		msgAfterSave: {
			type: String,
			default: "Record updated successfully",
		},
		formValidationError: {
			type: String,
			default: "Form is invalid",
		},
		formValidationMsg: {
			type: String,
			default: "Please complete the form",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});

	const store = usePageStore(props.pageStoreKey);
	const app = useApp();

	const formDefaultValues = Object.assign({
		name: "", mobile_number: "NULL", avatar: "", facebook_id: "NULL", email: "", otp_code: "NULL", otp_date: "NULL",
	}, props.pageData);

	const formData = reactive({ ...formDefaultValues });

	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		location.reload();
	}

	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			name: { required },
		avatar: { required },
		email: { required, email }
		}
	});

	const page = useEditPage({ store, props, formData, rules, afterSubmit });

	const {  saving, loading, pageReady,   } = toRefs(page.state);

	const {  currentRecord: editRecord } = toRefs(store.state);

	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;

	useMeta(() => {
		return {
			//set browser title
			title: "My Account"
		}
	});

	onMounted(()=>{
	});
</script>
<style scoped>
</style>
