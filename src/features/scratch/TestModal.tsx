import React from 'react'
import { useAppSelector } from '../../app/store/Store'
import ModalWrapper from '../../app/common/modals/ModalWrapper'

export default function TestModal() {
    const {data} = useAppSelector(state => state.modals)
  return (
    <ModalWrapper header={'Testing 123'}>
      <div>
        Test Data is {data}
      </div>
    </ModalWrapper>
  )
}

