// import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
/*

class MainAPIContainer1 extends React.Component {
    componentDidMount() {
        // для запросов данных

    }
    render() {
        return (<Main />)
    }
}

const MainAPIContainer = () => {
    debugger
    return (<Main />)
}
*/

let MainMapToProps = (state) => {
    return {
        store:state
    }
}
let MainMapToDispatch = () => {
    return {}
}

const MainContainer = connect(MainMapToProps, MainMapToDispatch)(Main)

export default MainContainer;