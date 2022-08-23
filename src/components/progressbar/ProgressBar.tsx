import React, { useEffect, useRef } from 'react'
import './progress-bar.scss'

type Props = {
    value :number
}

const ProgressBar = ({value}: Props) => {
    const barInnerRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        barInnerRef.current!.style.width = `${value}%`
    }, [])

  return (
    <div className='progress-bar'>
    <div ref={barInnerRef} className="progress-bar__inner"></div>
</div>
  )
}

export default ProgressBar