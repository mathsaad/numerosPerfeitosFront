import './PerfectNumberPage.css';
import PerfectNumberForm from '../components/PerfectNumberForm.jsx'
import PerfectNumberRange from '../components/PerfectNumberRange.jsx'

export function PerfectNumberPage() {
    return (
        <div className='panel-perfect-number'>
            <h1 className="text-3xl font-bold underline">
                Checks if a number is perfect
            </h1>
            <br></br>
            <PerfectNumberForm></PerfectNumberForm>
            <br></br>
            <br></br>

            <h1 className="text-3xl font-bold underline">
                Check which perfect numbers are in this range
            </h1>
            <br></br>
            <PerfectNumberRange></PerfectNumberRange>
        </div>
    )
}

