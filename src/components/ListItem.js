import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import ghibliApi from '../api/ghibliApi'

function ListItem({link}) {

  const [item, setItem] = useState({
    loading: false,
    data: null
  });
  
  useEffect(() => {
    setItem({
      loading: true,
      data: null
    })

    const getItem = async () => {
      let response = null;

      response = await ghibliApi.getWithLink(link);
      setItem({
        loading: false,
        data: response
      })
    }
    getItem();
  }, []);

  let content = null;

  if(item.data) {
    
    if(item.data.length > 0) {
      content = <p>There are no items</p>
    } else {
      let type = item.data.url.split('/')[3];
      content = <ul><li><Link to={`/${type}/${item.data.id}`}>{item.data.name}</Link></li></ul>
    }
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default ListItem
