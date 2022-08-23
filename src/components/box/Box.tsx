import React, { PropsWithChildren } from 'react'
import './box.scss'
type Props = {
    purple?:boolean,
    fullheight?:boolean
}

const Box = (props: PropsWithChildren<Props>) => {
    const className = {
        box: 'box',
        purple: props.purple && 'box-purple',
        fullheight: props.fullheight && 'box-fullheight'
    }
  return (
    <div className={Object.values(className).join(' ')}>
    {props.children}
</div>
  )
}

export default Box