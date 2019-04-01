import Vue from 'vue'
import { Component, Watch, Prop } from 'vue-property-decorator'


@Component({

})
export default class UIDatePicker extends Vue {
    dateFormatted: string = '';
    selectedDate: string = '';
    dateValue: string = '';
    menu: boolean = false;

    @Prop(String) label!: string;
    @Prop(Boolean) solo!: boolean;

    @Watch('dateFormatted')
    ParentEmitterData(){
        this.$emit('input', this.formattedDate)
    }

    @Watch('selectedDate')
    onChangeDate(){
        this.dateValue = this.selectedDate;
    }

    chooseDate(){
        this.dateValue = this.selectedDate;
        this.menu = false;
    }

    get formatDate () {
        if (!this.dateValue) return '';
        const [year, month, day] = this.dateValue.split('-');
        return `${month}.${day}.${year}`
    }

    parseDate (date: any) {
        if (!date) return '';

        const [month, day, year] = date.split('.');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }

    get formattedDate() {
        return this.dateValue ? this.formatDate : '';
    }


}
