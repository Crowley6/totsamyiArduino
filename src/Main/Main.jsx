import React from 'react';
import './Main.css';
import proj1 from '../Pictures/proj1.svg';
import proj2 from '../Pictures/proj2.svg';
import proj3 from '../Pictures/proj3.png';
import proj4 from '../Pictures/proj4.png';

const Main = () => {
    return (
        <>
            <div className='box_engineer'>
                <div className='engineer'>
                    <a>ИНЖЕНЕРИЯ</a>
                    <p>Платформа выделяющая аспекты <br />
                        проектирования и реализацию схем на <br />
                        практике с помощью конструктора <br />
                    </p>
                    <p className='engineer_span'>ARDUINO</p>
                    <p>
                        Руководитель проекта: <br/><b>Кулибеков Н.А.</b>
                    </p>
                </div>
            </div>
            <div>
                <div className='box_details'>

                    <div className="details">
                        <div className='details_tinkercad_1'></div>
                        <div className='details_tinkercad'>
                            <a className='details_tinkercad_2'>Все проекты были реализованы в среде моделирования </a>
                            <a className='details_tinkercad_3'>TinkerCad</a>
                            <p className='details_tinkercad_4'> Бесплатное веб-приложение для 3D проектирования, <br />
                                удивительно простой и одновременно мощный <br /> эмулятор, с которого можно начинать обучение
                                <br /> электронике и робототехнике</p>
                        </div>
                    </div>
                </div>

                <div className='arduino'>
                    <div className='arduino_box'>
                        <div className='arduino_container'>
                            <div className='arduino_container_out'>
                                <h1 className='arduino_container_out_name'>Arduino</h1>
                                <p className='arduino_container_out_about'>На протяжении многих лет был мозгом тысяч проектов, от повседневных предметов до сложных научных приборов.
                                    Вокруг этой платформы с открытым исходным кодом собралось всемирное сообщество разработчиков - студентов, любителей, художников,
                                    программистов и профессионалов, их вклад привел к невероятному количеству доступных знаний, которые могут оказать большую помощь как новичкам,
                                    так и экспертам.</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='examplearduino'>
                <a>Примеры проектов</a>
                <div className='examplearduino_img'>
                    <img className='examplearduino_img_item' src={proj1} width='500px' height='350px' />
                    <img className='examplearduino_img_item' src={proj2} width='500px' height='350px' />
                    <img className='examplearduino_img_item' src={proj3} width='500px' height='350px' />
                    <img className='examplearduino_img_item' src={proj4} width='500px' height='350px' />
                    <div className='AboutPlatformFooter'>
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

        </>
    );
}
export default Main