import React, { useEffect } from 'react'

function Items() {
  // 정보 가져오기

  useEffect(() => {
    let reqOption = {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/get', reqOption)
      .then(res => res.json())
      .then(data => console.log(data))
  });

  return (
    <div>상품 정보</div>
  )
}

export default Items