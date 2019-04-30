import 'jest';
import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount,createLocalVue } from '@vue/test-utils'
import StepList from '@/components/Step-list/StepList.vue';

Vue.use(Vuetify);

describe('StepList.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(StepList, {
        });
    });



    it('Component mounted', () => {
        wrapper = shallowMount(StepList, {
        });
        expect(wrapper.text()).toContain('Add step')
    });


    // test('renders props.msg when passed', () => {
    //     const msg = 'new message';
    //     const wrapper = shallowMount(StepList, {
    //         propsData: { msg }
    //     });
    //     expect(wrapper.text()).toMatch(msg)
    // })
});
