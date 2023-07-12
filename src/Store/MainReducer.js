let initial = {
    RouterBtns: [
        { id: 1, name: "Главная", url: '/', flag:true },
        { id: 2, name: "Проекты", url: '/Projects', flag:true },
        { id: 3, name: "О Платформе", url: '/Platform', flag:false },
        { id: 4, name: "Инструкция", url: '/Instruction', flag:false }
    ]
}

let MainReducer = (state = initial, action) => {
    if (action.type === 'SUBSCR') {
        let stateDOM = {...state}
        stateDOM.RouterBtns = {...state.RouterBtns}
        return stateDOM;
    }
    return state;
}
export default MainReducer;
