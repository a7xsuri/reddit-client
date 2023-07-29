import  styles from './ListMenu.module.css'
import 'bootstrap/'
const ListMenu = ({menuList}) =>{

    
    return (
        <>
        {menuList.map(elem => <li><img className={styles.icon} src={elem.icon}/>{elem.name}</li>)}
        </>
    )
}

export default ListMenu