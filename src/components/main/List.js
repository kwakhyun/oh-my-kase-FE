import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const List = () => {
  const items = useSelector((state)=>state.info.data)
  return (
    <>
      {items.map(item=>(
        <Item {...item} key={item.id}/>
      ))}
    </>
  );
};

export default List;