import {useState} from 'react';
import moment from 'moment';

function MomentCalendar () {
    const [getMoment, setMoment]=useState(moment());

    const today = getMoment;
    // 이번 달의 첫번째 주
    const firstWeek = today.clone().startOf('month').week();
    // 이번 달의 마지막 주
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const testWeek = today.clone().endOf('month')
    console.log(testWeek)

    const calendarArr=()=>{

        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            // index : 0~6 반복
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
                            console.log(days)


                            // 오늘 날짜에는 빨간색으로 처리
                            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                                return(
                                    <td key={index} style={{backgroundColor:'red'}} >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }
                            // 이번 달이 아닌 날들에는 회색으로 처리
                            else if(days.format('MM') !== today.format('MM')){
                                return(
                                    <td key={index} style={{backgroundColor:'gray'}} >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }else{
                                return(
                                    <td key={index}  >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }
                        })
                    }
                </tr>
            );
        }
        return result;
    }

    return (
        <div className="App">
            <h1>Momnet Calendar</h1>
            <div className="control">
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'year')) }} > « </button>
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} > ‹ </button>
                <span>{today.format('YYYY 년 MM 월')}</span>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} > › </button>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'year')) }} > » </button>
            </div>
            <table>
                <tbody>
                {calendarArr()}
                </tbody>
            </table>
        </div>
    );
}
export default MomentCalendar;