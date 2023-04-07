import dropdown1 from '../../../../assets/images/dropdown1.png';
import dropdown2 from '../../../../assets/images/dropdown2.png';

const list = ['Item1', 'Item2', 'Item3'];
const details = [
    {title: 'Google Play Store', img: <img src={dropdown1} width='12%' style={{marginRight: '5px', marginBottom: '-6px'}} />, list},
    {title: 'United States', img: <img src={dropdown2} width='15%' style={{marginRight: '5px', marginBottom: '-1px'}} />, list},
    {title: 'Art & Design', list, paddingLeft: "1.5rem"},
    {title: 'Top Free', list, paddingLeft: "1.5rem"},
];

export default details;