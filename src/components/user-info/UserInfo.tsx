import React from 'react'
import './user-info.scss'
type Props = {
    user:{
        name: string,
        img: any
    }
}

const UserInfo = ({user}: Props) => {
  return (
    <div className='user-info'>
    <div className="user-info__img">
        <img src={user.img} alt="" />
    </div>
    <div className="user-info__name">
        <span>{user.name}</span>
    </div>
</div>
  )
}

export default UserInfo