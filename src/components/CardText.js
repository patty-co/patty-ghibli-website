import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import ghibliApi from '../api/ghibliApi'

function CardText({link}) {

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
      content = "There are no items"
    } else {
      let type = item.data.url.split('/')[3];
      content = <Link to={`/${type}/${item.data.id}`}>{item.data.name ?? item.data.title}</Link>
    }
  }

  return (
    <p className="mb-2 detail card-text">{content}</p>
  )
}

export default CardText
