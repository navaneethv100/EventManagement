import React from 'react'
import TestModal from '../../../features/scratch/TestModal'
import { useAppSelector } from '../../store/Store'
import LoginForm from '../../../features/auth/LoginForm'

export default function ModalManager() {
    const modalLockup = {
        TestModal,
        LoginForm
    }

    const {type, data, open} = useAppSelector(state => state.modals)
    

    let renderedModal;

    if(open && type){
        const ModalComponent = (modalLockup as any)[type];
        renderedModal = <ModalComponent data={data} />
    }

    return (
        <span>
            {renderedModal}
        </span>
    )
}
