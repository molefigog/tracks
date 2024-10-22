<template>
	<div class="container">
        <div class="row justify-center">
            <div class="col col-md-4">
				<q-card  flat bordered class="q-my-lg">
                    <q-card-section>
                        <div class="q-my-md">
                            <div class="text-h5 text-bold">Password Reset </div>
                        </div>
                        <q-form ref="observer" @submit.prevent="submitForm()">
							<div class="q-my-md">
								<q-input v-model="formData.password" outlined dense placeholder="New Password" type="password" :error="isFieldValid('password')" :error-message="getFieldError('password')" />
							</div>
							<div class="q-my-md">
								<q-input v-model="formData.confirm_password" outlined dense placeholder="Confirm new password" type="password" :error="isFieldValid('confirm_password')" :error-message="getFieldError('confirm_password')" />
							</div>
							<div class="col-md-3 col-sm-4">
								<q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
									<template v-slot:loading>
										<q-spinner-oval />
									</template>
									Change Password
								</q-btn>
							</div>
                        </q-form>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script setup>
	import { computed, reactive, toRefs } from 'vue';
	import { useRoute } from 'vue-router';
	import { useMeta } from 'quasar';
	import { required, sameAs, } from 'src/services/validators';
	import { useApp } from 'src/composables/app.js';
	import { useForm } from 'src/composables/formpage';
	import { $t } from 'src/services/i18n';
	const props = defineProps({
		pageName: {
			type: String,
			default: 'resetpassword',
		},
		routeName: {
			type: String,
			default: 'resetpassword',
		},
		apiPath: {
			type: String,
			default: 'auth/resetpassword',
		},
		formValidationError: {
			type: String,
			default: "Form is invalid",
		},
		formValidationMsg: {
			type: String,
			default: "Please complete the form",
		},
	});
	const app = useApp();
	const route = useRoute();
	const formDefaultValues = {
		password: "",
		confirm_password: "",
		token: route.query.token,
		email: route.query.email
	}
	const formData = reactive({ ...formDefaultValues });
	// redirect to another page
	function afterSubmit(response) {
		app.navigateTo("/index/resetpassword_completed");
	}
	//form validation rules
	const rules = computed(() => {
		return {
			password: { required },
			confirm_password: { required, sameAs: sameAs(formData.password, 'Password') }
		}
	});
	const page = useForm({ props, formData, rules, afterSubmit });
	const { saving, } = toRefs(page.state);
	const { submitForm, getFieldError, isFieldValid } = page;
	useMeta(() => {
		return {
			//set browser title
			title:  "Reset Password"
		}
	});
</script>