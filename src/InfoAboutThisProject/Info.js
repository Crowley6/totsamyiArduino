import React, {useEffect} from 'react';
import './Info.css';
/*import jpg1 from '../Pictures/lowsales.png';
import srtl1 from '../Pictures/strl1.svg';*/
import {useLocation} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

export const escapedNewLineToLineBreakTag = (string) => {
    return string.split('\\n').map((item, index) => {
        return (index === 0) ? item : [<br key={index} />, item]
    })
}

const Info = (props) => {
    const { state } = useLocation();
    const { data } = state;

    const imgList = (img) => {
        return img.filter((imgs, index) => index !== img.length - 1)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(data)
    return (
        <div>
            <div className='infoHead'>
                <h1 className='infoHeadH1'>
                    Проект: {data.h1}
                </h1>

                <div className='infoHeadImg'>
                    <div className='iimain'>
                        {/*<img className='ii1' alt='Картина' />
                        <img className='ii2' alt='Картина' />
                        <img className='ii3' alt='Картина' />*/}

                        <Carousel className='Carousel'>
                            {/* eslint-disable-next-line array-callback-return */}
                            {imgList(data.allInfo["images_id"]).map((img) => <img className={"img_projects"} src={img} alt={"Картинка"}/> )}
                        </Carousel>
                    </div>
                </div>
                <div className='infoHeadLNF'>
                    Выполнили проект :<br />
                    {escapedNewLineToLineBreakTag(data.allInfo["whoDid"])}
                </div>
            </div>

            <div className='InfoAboutProject'>
                <div className='infoAbout'>

                    {data.allInfo["tinkercad"] === null ? <><h1 className='infoAboutH1'>Схема соединения</h1>
                        <img className='infoAboutImg'src={data.allInfo["images_id"][data.allInfo["images_id"].length - 1]}
                             alt={"About schem"} /></>: <h1 className='infoAboutH1'>О проекте</h1>}
                    <div className='InfoAboutModules'>
                        <div className='IAM1'>{data.allInfo["desc"]}{/*Основой для программирования и создание схемы  проекта  реализованы на платформе <span>TinkerCad</span>*/}{/*<br/>{data.allInfo["desc"]}*/}</div>
                        <div className='IAM2'>
                            Используемые модули:<br />
                            {escapedNewLineToLineBreakTag(data.allInfo["modules"])}
                        </div>
                    </div>
                </div>
                <div className='infoAboutWasCreated'>
                    {data.allInfo["tinkercad"] === null ? <div className='infoAWCCode'>
                        <h1 className='infoAWCH1'>Код проекта</h1>
                        <iframe
                            src={"https://carbon.now.sh/embed/"+data.allInfo["codeUrl"].replace("https://gist.github.com/MrNagaron/", "")+"?bg=rgba(74%2C144%2C226%2C1)&t=material&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=152%25&si=false&es=2x&wm=false"}
                            title={"carbon"}
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </div> : <div className="infoAWCCode">
                        <h1 className="infoAWCH1">Проект в TinkerCad</h1>
                        <iframe width="725" height="453" src={"https://www.tinkercad.com/embed/" + data.allInfo["tinkercad"] }
                                frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" title={"TinkerCad"}></iframe>
                    </div>}
                    <div className='infoAWCText'>
                        Видеоролик как работает проект, можно посмотреть тут:
                    </div>
                    <div className='infoAWCVideo'>
                        <iframe width="970" height="500" id={"ytplayer"} src={data.allInfo["video"]}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <div className='infoFooter'>
                            <div></div>
                            <div className='FooterText'>
                                <div className="copyrate">{`© ${new Date().getFullYear()} Программная Инженерия`}</div>
                                <div>
                                    <div className='telegram'></div>
                                    <div className='youtube'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;
