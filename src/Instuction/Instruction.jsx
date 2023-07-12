import './css/Instruction.css';
import bgInstr from './img/bgInstr.png';
import Rectangle_01 from './img/Rectangle_01.png';
import Rectangle_02 from './img/Rectangle_02.png';
import Rectangle_03 from './img/Rectangle_03.png';
import Rectangle_04 from './img/Rectangle_04.png';
import Rectangle_05 from './img/Rectangle_05.png';

const Instruction = () => {
    return (
        <>
        <div className='Instruction'>
            <img className='bgInstr' src={bgInstr} alt="" />
            <div className='Instruction_01'>
                <h1>Дополнительные ссылки</h1>
                <div>
                    <h4>01</h4>
                    <p>
                        Чтобы установить библиотеку для Arduino, для начала необходимо скачать ее с любого ресурса, и установить в папку с программой под названием libraries (библиотеки).
                        Например, установим с официального сайта:
                    </p>
                    <a href='https://www.arduino.cc/reference/en/libraries/'>https://www.arduino.cc/reference/en/libraries/</a>
                </div>
                <img src={Rectangle_01} alt="" />
            </div>
            <div className='Instruction_02'>
                <img src={Rectangle_02} alt="" />
                <div>
                    <h4>02</h4>
                    <p>Выбираем нужную нам библиотеку</p>
                </div>
            </div>
            <div className='Instruction_03'>
                <img src={Rectangle_03} alt="" />
                <div>
                    <h4>03</h4>
                    <p>Скачиваем последнюю версию</p>
                </div>
            </div>
            <div className='Instruction_04'>
                <div>
                    <h4>04</h4>
                    <p>Устанавливаем в папку libraries(перед началом требуется извлечь файлы из архива) </p>
                </div>
                <img src={Rectangle_04} alt="" />
            </div>
            <div className='Instruction_05'>
                <div>
                    <h4>05</h4>
                    <p>Готово. Вы установили необходимую библиотеку,
                        Чтобы подключить её в вашем коде, используйте команду:
                        #include {"<(название библиотеки)>"} </p>
                </div>
                <img src={Rectangle_05} alt="" />
            </div>

        </div>
            <div className='InstructionAbout AboutPlatformFooter'>
                <div></div>
                <div className='FooterText'>
                    <div>{`© ${new Date().getFullYear()} Программная Инженерия`}</div>
                    <div>
                        <div className='telegram'></div>
                        <div className='youtube'></div>
                    </div>
                </div>
            </div>
            </>
    )
}
export default Instruction;
