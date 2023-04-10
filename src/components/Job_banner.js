import exp from "../assets/exp.json";

function Job_banner (props) {

    var bgColor = '';
    var logoLink = '';


    exp.map((xp, index) => {
        if (xp.name == props.name) {
            bgColor = xp.color
            logoLink = xp.logo
        }
    })

    return (
        <div style={{backgroundColor: bgColor}} className="job_header">
            <div>
                <img className="job_logo" src={logoLink}/>
            </div>
        </div>
    )
}

export default Job_banner