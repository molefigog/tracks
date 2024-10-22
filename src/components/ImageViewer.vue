<template>
    <div v-if="src" class="row">
        <div v-for="(img, index) in images" :key="index">
            <q-img :style="{ width, height, ...style }" v-bind="$attrs" v-if="index < numDisplay"
                @click="openGallery(index)" :src="$utils.setImgUrl2(img)" class="cursor-pointer">
                <template v-slot:error>
                    <div class="absolute-full shadow-1 flex flex-center bg-grey-3 text-grey-8">!</div>
                </template>
            </q-img>
        </div>
    </div>
    <q-img v-else src="images/no-image-available.png" :style="{ height, width, ...style }"></q-img>
</template>

<script>
import { useApp } from 'src/composables/app';
export default {
    setup() {
        const app = useApp();
        return { app }
    },
    props: {
        src: {
            type: String,
        },
        width: {
            type: String,
            required: false,
            default: '50px'
        },
        height: {
            type: String,
            required: false,
            default: '50px'
        },
        numDisplay: {
            type: Number,
            required: false,
            default: 1
        },
        style: {
            type: Object,
            required: false,
            default: () => { return { maxWidth: '100%' } }
        },
    },
    data() {
        return {
            images: [],
        };
    },
    computed: {
        getLargeImages() {
            return this.images.map(path => this.$utils.setImgUrl2(path));
        },
    },
    methods: {
        openGallery(index) {
            let payload = {
                currentSlide: index,
                images: this.getLargeImages
            }
            this.app.openImageDialog(payload);
        },
        setImages() {
            if (this.src) {
                this.images = this.src.toString().split(",");
            }
        },
    },
    watch: {
        src() {
            this.setImages();
        }
    },
    mounted() {
        this.setImages();
    },
}
</script>
