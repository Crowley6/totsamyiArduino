import React, {useState} from "react";
import './Projects.css';
import {projects} from "../Store/ProjectsReducer";
import {Navigate} from "react-router-dom";

const ProjectsMap = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState();

    const handleClick = e => {
        e.preventDefault();
        setRedirect(true);
        setData(props);
        console.log(data);
    }
    if (redirect)
        return <Navigate to={{ pathname: '/Info' }} state={{ data }} replace/>
    return (
        <div className="flip" onClick={handleClick}>
            <div className="front" style={{backgroundImage: `url(${props.img})`}}>
                <h1 className="text-shadow">{props.h1}
                </h1></div>
            <div className="back">
                <h2>{props.h1}</h2>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Projects: []
        }
    }
    componentDidMount(){
        projects().then(response => {
            console.log(response, typeof response, response.length)
            this.setState({Projects: response.map((mapd, index) => <ProjectsMap img={mapd.images_id[0]} h1={++index + '. ' + mapd.name_project} name={mapd.desc} allInfo={mapd}/>)})
        });
    }
    render() {
        //console.log(this.props.store, typeof this.props.store.ProjectsData, this.props.store.ProjectsData)
        if(!this.state.Projects.length)
            return null;
        return (

            <div>
                <br/>
                <div className='ProjectsBody'>
                    <div className='ProjectsBodyTextH1'>Проекты на Arduino
                    </div>
                    <div className='ProjectsBodyText'>
                        Проект Ардуино – это всегда сочетание электронной схемы, <br />
                        некоторых связанных друг с другом аппаратных и механических <br />
                        устройств, системы питания и программного обеспечения <br />
                        Все проекты можно  разделить на несколько групп:
                    </div>
                    <div className='ProjectsBodyText2'>
                        <ul>
                            <li>Мигающие светодиоды – маячок, мигалка, светофор и другие.</li>
                            <li>Проекты с датчиками: от простейших аналоговых до цифровых, использующих разнообразные протоколы для обмена данными.</li>
                            <li>Устройства регистрации и отображения информации.</li>
                            <li>Машины и устройства с сервоприводами и шаговыми двигателями.</li>
                        </ul>
                    </div>
                    <div className='AllProjects'>
                        {this.state.Projects}
                        <div className='ProjectsFooter'>
                            <div></div>
                            <div className='FooterText'>
                                <div className="copyrate">{`© ${new Date().getFullYear()} Программная Инженерия`}</div>
                                <div></div>
                                <div>
                                    <div className='telegram'></div>
                                    <div className='youtube'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Projects;
