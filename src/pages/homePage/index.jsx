import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import HobbyList from '../../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from './../../actions/hobby';
HomePage.propsType = {

};
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();
    // console.log('Hobby list:', hobbyList);


    const handleAddHobbyClick = () => {
        //random a hobby Object:

        const idRandom = Math.floor(Math.random() * 1000)
        const newHobby = {
            id: idRandom,
            title: `Hooby number ${idRandom}`,
        }

        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby)
        dispatch(action);
    }
    const onHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action);
    }

    return (
        <div className='home-page'>
            <h1>REDUX_REACT</h1>
            <button onClick={handleAddHobbyClick}>Add Random Hobby</button>
            <HobbyList
                activeId={activeId}
                onHobbyClick={onHobbyClick}
                HobbyList={hobbyList} />
        </div>
    )
}

export default HomePage