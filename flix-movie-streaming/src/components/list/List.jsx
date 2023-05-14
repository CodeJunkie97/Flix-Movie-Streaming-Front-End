import './list.scss'
import ArrowBackIosOutlined from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined'
import ListItem from '../listitem/ListItem'
import { useRef } from 'react'
function List() {
    const listRef = useRef()
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left"){
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === "right"){
            listRef.current.style.transform = `translateX(${distance - 230}px)`
        }
    }
  return (
    <div className = "list">
        <span className="listTitle">Continue Watching</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick =  {() => handleClick("left")}/>
            <div className="container" ref = {listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlined className = 'sliderArrow right' onClick = {() => handleClick("right")} />
        </div>
    </div>
  )
}

export default List