<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section q-pa-md" >
                    <div class="container">
                        <div class="row justify-between items-center q-col-gutter-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="fas fa-angle-left"></q-icon>                              
                                </q-btn>
                            </div>
                            <div  class="col " >
                                <div class=" text-h6 text-primary" >
                                    Upload New Music
                                </div>
                            </div>
                            <!--topcardactiontemplates-->
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-form ref="observer" @submit.prevent="submitForm()">
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Genre *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'genre_id')"  api-path="components_data/genre_id_option_list"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlgenre_id" v-model="formData.genre_id" :options="req.response" label="Genre"  :error="isFieldValid('genre_id')" :error-message="getFieldError('genre_id')">
                                                        <template v-slot:option="scope">
                                                            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                                                                <q-item-section v-if="scope.opt.image" avatar>
                                                                    <image-viewer :src="scope.opt.image" image-size="small"></image-viewer>
                                                                </q-item-section>
                                                                <q-item-section>
                                                                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                                                                    <q-item-label v-if="scope.opt.caption" caption>{{ scope.opt.caption }}</q-item-label>
                                                                </q-item-section>
                                                            </q-item>
                                                        </template>
                                                        <template v-slot:selected-item="scope">
                                                            <q-item  v-if="scope.opt">
                                                                <q-item-section v-if="scope.opt.image" avatar>
                                                                    <image-viewer :src="scope.opt.image" image-size="small"></image-viewer>
                                                                </q-item-section>
                                                                <q-item-section>
                                                                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                                                                    <q-item-label v-if="scope.opt.caption" caption>{{ scope.opt.caption }}</q-item-label>
                                                                </q-item-section>
                                                            </q-item>
                                                        </template>
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Artist *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlartist" v-model.trim="formData.artist"  label="Artist" type="text" placeholder="Enter Artist"      
                                                    class="" :error="isFieldValid('artist')" :error-message="getFieldError('artist')">
                                                    <template v-slot:append>
                                                        <q-icon name="fas fa-user-tie"></q-icon>
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Title *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltitle" v-model.trim="formData.title"  label="Title" type="text" placeholder="Enter Title"      
                                                    class="" :error="isFieldValid('title')" :error-message="getFieldError('title')">
                                                    <template v-slot:append>
                                                        <q-icon name="fab fa-autoprefixer"></q-icon>
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Amount *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlamount" v-model.trim="formData.amount"  label="Amount" type="number" placeholder="Enter Amount"   step="any"    
                                                    class="" :error="isFieldValid('amount')" :error-message="getFieldError('amount')">
                                                    <template v-slot:append>
                                                        <q-icon name="fas fa-dollar-sign"></q-icon>
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Image *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-input :max-files="1" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg" :multiple="false" delete-icon="fas fa-times" style="width:100%" label="Choose files or drop files here" upload-path="fileuploader/upload/image" v-model="formData.image"></q-uploader-input>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    File *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-input :max-files="1" :max-file-size="13" accept=".mp3,.mp4,.webm,.wav,.avi,.mpg,.mpeg" :multiple="false" delete-icon="fas fa-times" style="width:100%" label="Choose files or drop files here" upload-path="fileuploader/upload/file" v-model="formData.file"></q-uploader-input>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Description *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <full-q-editor label="Description" ref="ctrldescription" placeholder="Enter Description" v-model="formData.description" min-height=""></full-q-editor>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Free *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-field hint="For Free Downloads" borderless   :error="isFieldValid('free')" :error-message="getFieldError('free')">
                                                    <q-option-group  ref="ctrlfree" v-model="formData.free" :options="app.menus.free"  inline size="md" ></q-option-group>
                                                    </q-field>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Beat *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-field hint="This track is a song or a beat?" borderless   :error="isFieldValid('beat')" :error-message="getFieldError('beat')">
                                                    <q-option-group  ref="ctrlbeat" v-model="formData.beat" :options="app.menus.beat"  inline size="md" ></q-option-group>
                                                    </q-field>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Publish *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-field hint="Save to Draft or Public" borderless   :error="isFieldValid('publish')" :error-message="getFieldError('publish')">
                                                    <q-option-group  ref="ctrlpublish" v-model="formData.publish" :options="app.menus.publish"  inline size="md" ></q-option-group>
                                                    </q-field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn type="submit"    :rounded="false"  color="primary"  no-caps  unelevated    icon-right="fas fa-paper-plane" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                </q-card>
                                </q-form>
                                <slot :submit="submitForm" :saving="saving"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs, onMounted } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'music',
		},
		pageStoreKey: {
			type: String,
			default: 'MUSIC',
		},
		routeName : {
			type : String,
			default : 'musicadd',
		},
		apiPath : {
			type : String,
			default : 'music/add',
		},
		submitButtonLabel: {
			type: String,
			default: "Submit",
		},
		formValidationError: {
			type: String,
			default: "Form is invalid",
		},
		formValidationMsg: {
			type: String,
			default: "Please complete the form",
		},
		msgTitle: {
			type: String,
			default: "Create Record",
		},
		msgAfterSave: {
			type: String,
			default: "Record added successfully",
		},
		msgBeforeSave: {
			type: String,
			default: "",
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
		pageData: { // use to set formData default values from another page
			type: Object,
			default: () => ({
				genre_id: "", artist: "", title: "", amount: "", image: "", file: "", description: "", free: "", beat: "", publish: "", 
			})
		},
	});
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();// application state and methods
	
	const formData = reactive({ ...props.pageData });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			genre_id: { required },
		artist: { required },
		title: { required },
		amount: { required, numeric },
		image: { required },
		file: { required },
		description: { required },
		free: { required },
		beat: { required },
		publish: { required }
		}
	});
	
	const page = useAddPage({ store, props, formData, rules, beforeSubmit, afterSubmit });// page form hook
	
	//event raised before form submit
	function beforeSubmit(){
		return true;
	}
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		page.setFormDefaultValues(); // reset form data
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/music`);
		}
	}
	
	const {  saving, pageReady,   } = toRefs(page.state);
	
	const { submitForm, isFieldValid, getFieldError, mapOptionField } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Add New Music"
		}
	});
	
	onMounted(()=>{ 
	});
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
