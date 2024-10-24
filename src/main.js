import { QBtn, QInput, QSelect } from "quasar";
import { boot } from 'quasar/wrappers';

// Helpers and Services
import { AppMenus } from './menus';
import { ApiService } from './services/api';
import { StorageService } from './services/storage';
import { utils } from './utils';

// Custom Components
import ApiDataSource from 'components/ApiDataSource.vue';
import CheckDuplicate from 'components/CheckDuplicate.vue';
import FileViewer from 'components/FileViewer.vue';
import FilterTags from 'components/FilterTags.vue';
import FullQEditor from 'components/FullQEditor.vue';
import ImageViewer from 'components/ImageViewer.vue';
import ImageViewerP from 'components/ImageViewerP.vue';
import ImportData from 'components/ImportData.vue';
import InlineEdit from 'components/InlineEdit.vue';
import LangSwitcher from 'components/LangSwitcher.vue';
import PageSearch from 'components/PageSearch.vue';
import QUploaderInput from 'components/QUploaderInput.vue';
import QUploaderInputs from 'components/QUploaderInputs.vue';
import RecordCount from 'components/RecordCount.vue';
import NiceSelect from 'src/components/NiceSelect.vue';

export default boot(async ({ app }) => {

	app.config.globalProperties.$appName = process.env.APP_NAME;

	const apiUrl = process.env.API_URL; //get the api base url
	app.config.globalProperties.$apiUrl = apiUrl;

	const apiPath = process.env.API_PATH; //get the the api path
	app.config.globalProperties.$apiPath = apiPath;

	//axio api service use for making api request
	ApiService.init();
	app.config.globalProperties.$api = ApiService;

	//save data to localstorage
	app.config.globalProperties.$localStore = StorageService;

	//all application menu
	app.config.globalProperties.$menus = AppMenus;

	app.config.globalProperties.$utils = utils;

	app.component('NiceSelect', NiceSelect);
	app.component('PageSearch', PageSearch);
	app.component('InlineEdit', InlineEdit);
	app.component('ApiDataSource', ApiDataSource);
	app.component('QUploaderInput', QUploaderInput);
    app.component('QUploaderInputs', QUploaderInputs);
	app.component('RecordCount', RecordCount);
	app.component('CheckDuplicate', CheckDuplicate);
	app.component('FileViewer', FileViewer);
	app.component('ImageViewer', ImageViewer);
    app.component('ImageViewerP', ImageViewerP);
	app.component('FullQEditor', FullQEditor);
	app.component('ImportData', ImportData);
	app.component('LangSwitcher', LangSwitcher);
	app.component('FilterTags', FilterTags);


	//set input default design props
	QInput.props.outlined = {
		type: QInput.props.outlined,
		default: true
	};

	QInput.props.dense = {
		type: QInput.props.dense,
		default: true
	};
	QInput.props.clearable = {
		type: QInput.props.clearable,
		default: false
	};
	QInput.props.filled = {
		type: QInput.props.filled,
		default: false
	};
	QInput.props.square = {
		type: QInput.props.square,
		default: false
	};
	QInput.props.rounded = {
		type: QInput.props.rounded,
		default: false
	};

	//set select default design props
	QSelect.props.outlined = {
		type: QSelect.props.outlined,
		default: true
	};

	QSelect.props.dense = {
		type: QSelect.props.dense,
		default: true
	};

	QSelect.props.clearable = {
		type: QSelect.props.clearable,
		default: false
	};

	QSelect.props.filled = {
		type: QSelect.props.filled,
		default: false
	};

	QSelect.props.square = {
		type: QSelect.props.square,
		default: false
	};
	QSelect.props.rounded = {
		type: QSelect.props.rounded,
		default: false
	};

	//set button default design props
	QBtn.props.flat = {
		type: QBtn.props.flat,
		default: false
	};
	QBtn.props.glossy = {
		type: QBtn.props.glossy,
		default: false
	};
	QBtn.props.rounded = {
		type: QBtn.props.rounded,
		default: false
	};
	QBtn.props.unelevated = {
		type: QBtn.props.unelevated,
		default: true
	};
	QBtn.props.outline = {
		type: QBtn.props.outline,
		default: false
	};
	QBtn.props.noCaps = {
		type: QBtn.props.noCaps,
		default: true
	};
	QBtn.props.round = {
		type: QBtn.props.round,
		default: false
	};
});
