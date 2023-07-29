import { useEffect, useState } from "react"
import ListMenu from "./ListMenu"

const SideMenu = () =>{
    const [menuList, setMenuList] = useState([])
    
    useEffect(()=>{
        fetch('https://www.reddit.com/subreddits.json').then(response=>response.json()).then(responseItem=>{
            return setMenuList(responseItem.data.children.map(elem=>({
                name: elem.data.display_name,
                url: elem.data.url,
                icon: elem.data.icon_img
            })))
        })
    }, [])

    

    return(
        <div>
            <ul>
                <ListMenu menuList={menuList} />
            </ul>
        </div>
    )
}

export default SideMenu