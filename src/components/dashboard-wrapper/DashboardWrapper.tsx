import React, { PropsWithChildren } from 'react'
import './dashboard-wrapper.scss'

type Props = {
   
}

const DashboardWrapper = (props: PropsWithChildren<Props>) => {
  return (
    <div className='dashboard-wrapper'>
    {props.children}
</div>
  )
}

export default DashboardWrapper

export const DashboardWrapperMain = (props: PropsWithChildren<Props>) => {
    return (
        <div className='dashboard-wrapper__main'>
            {props.children}
        </div>
    )
}

export const DashboardWrapperRight = (props: PropsWithChildren<Props>) => {
    return (
        <div className='dashboard-wrapper__right'>
            {props.children}
        </div>
    )
}