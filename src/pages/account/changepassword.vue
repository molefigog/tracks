
	
<template>
	<div class="container">
		<div class="row justify-center">
			<div class="col-md-7 col-12">
				<div class="text-h6 text-bold q-my-md">Change Password</div>
				<q-form ref="observer" @submit.prevent="submitForm()">
					<q-input   label="Current Password" placeholder="Current Password" v-model="formData.oldpassword"  type="password" :error="isFieldValid('oldpassword')" :error-message="getFieldError('oldpassword')" />
					
					<q-input   label="New Password" placeholder="New Password" v-model="formData.newpassword" type="password" :error="isFieldValid('newpassword')" :error-message="getFieldError('newpassword')" />
					
					<q-input  label="Confirm new password" placeholder="Confirm new password" v-model="formData.confirmpassword" type="password"  :error="isFieldValid('confirmpassword')" :error-message="getFieldError('confirmpassword')"/>
					
					<div class="q-mt-md text-center">
						<q-btn unelevated type="submit" icon="fas fa-paper-plane" color="primary" large :loading="saving">
							 Change Password

							 <template v-slot:loading>
								<q-spinner-oval />
							</template>
						</q-btn>
					</div>
				</q-form>
			</div>
		</div>
	</div>
</template>
<script setup>
	import {  computed, reactive, ref, toRefs } from 'vue';
	import { required, sameAs } from '@vuelidate/validators';
	import { useApp } from 'src/composables/app';
	import { useForm } from 'src/composables/formpage';
	import { $t } from 'src/services/i18n';
	const props = defineProps({
		pageName : {
			type : String,
			default : 'changepassword',
		},
		apiPath: {
			type: String,
			default: 'account/changepassword'
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
	
	const formData = reactive({
		oldpassword: '', 
		newpassword: '', 
		confirmpassword: '', 
	});

	function afterSubmit(response) {
		app.flashMsg("Password change completed");
		
		//reset form data
		Object.assign(formData, { oldpassword: "", newpassword: "", confirmpassword: "" });
	}
	
	const rules = computed(() => {
		return {
			oldpassword: { required },
			newpassword: { required },
			confirmpassword: { required,  sameAs: sameAs(formData.newpassword) }
		}
	});

	const page = useForm({ props, formData, rules, afterSubmit });

	const { saving, } = toRefs(page.state);
	const {submitForm, isFieldValid, getFieldError, } = page;

</script>
