import moment from 'moment';
import _ from 'lodash';

export default {
    formatDateTime: (momentObj, format, uppercase = true) => {
        const mm = moment.isMoment(momentObj) ? momentObj : moment(parameter);
        const fm = format || 'D MMM YYYY H:mma';

        const dateTime = mm.format(fm);
        return uppercase ? dateTime.toUpperCase() : dateTime;
    },

    formatMonetary: (amount, decimals, currency) => {
        const withComma = value => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const withCurrency = value => currency ? `${currency} ${value}` : value;
        const format = value => withCurrency(withComma(value));
        const number = Number(amount);

        if (_.isNaN(number)) console.warn('The first argument must be valid number');

        if (decimals) {
            return format(number.toFixed(decimals));
        } else {
            const string = _.isInteger(number) ? number.toFixed(0) : number.toFixed(2);
            return format(string);
        }
    }
};