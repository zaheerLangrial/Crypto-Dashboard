import React from 'react'
import CurrentPrice from './CurrentPrice'
import Transections from './Transections'

function CurrentPriceAndTransection() {
  return (
    <div className=' w-full mt-6'>
        <div className=' w-[960px] flex mx-auto justify-between'>
            <CurrentPrice />
            <Transections />
        </div>
    </div>
  )
}

export default CurrentPriceAndTransection