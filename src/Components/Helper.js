import moment from 'moment';

export default function militaryToStandard(milTime) {
    console.log(
        moment(milTime, 'YYYY-MM-DDTHH:mm').format('YYYY-MM-DDThh:mm a')
        )
}
