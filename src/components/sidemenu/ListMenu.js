import  styles from './ListMenu.module.css'
import { loadMenu } from '../../features/menu/menuSlice'
import { useDispatch } from 'react-redux'
import 'bootstrap/'
const ListMenu = ({menuList}) =>{
    const dispatch = useDispatch()

    function clickHandler({target}){
        dispatch(loadMenu(target.id))
    }
    return (
        <>
        {menuList.map(elem => <li key={elem.id} id={elem.name} onClick={clickHandler}><img className={styles.icon} src={elem.icon}/>{elem.name}</li>)}
        </>
    )
}

export default ListMenu