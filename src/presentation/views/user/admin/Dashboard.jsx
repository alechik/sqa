
import './dashboard.css'
import Analytics from "../../../components/dashboard/Analytics.jsx";
export default function Dashboard(){
    return (
        <div className='content'>
           <span className="section-title">Datos estadisticos</span>
            <div className="row square">
                <Analytics/>
            </div>
            <div className="row square">
                <Analytics/>
            </div>
            <div className="row square">
                <Analytics/>
            </div>
            <div className="row square">
                <Analytics/>
            </div>
        </div>
    );
}