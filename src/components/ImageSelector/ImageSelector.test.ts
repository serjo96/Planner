import 'jest';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ImageSelector from '@/components/ImageSelector/ImageSelector.vue';


const localVue = createLocalVue();

localVue.use(Vuex);
Vue.use(Vuetify);

describe('ImageSelector.vue', () => {
    let getters: any;
    let store: any;
    beforeEach(() => {
        getters = {
            getUploadStatus: () => false,
            getStartUploading: () => false
        };

        store = new Vuex.Store({
            getters
        });
    });


    test('является экземпляром Vue', () => {
        const wrapper = shallowMount(ImageSelector, { store, localVue })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
});
