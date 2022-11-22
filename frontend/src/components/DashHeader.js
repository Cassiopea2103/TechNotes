import { Link } from "react-router-dom";

const DashHeader= ()=> {

    const content= (
        <div className="dash-header">
            <div className="dash-header__container">
                <h1>
                    <Link to={'/dash'}>
                        TechNotes
                    </Link>
                </h1>
            </div>
        </div>
    )

    return content
}

export default DashHeader