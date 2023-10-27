import React from 'react'
import cl from './MyModal.module.css'
const MyModal = ({ children, visible, setVisible }) => {
    const rootCl = [cl.myModal]
    if (visible) {
        rootCl.push(cl.active)
    }
    return (
        <div onClick={() => setVisible(false)} className={rootCl.join(' ')}>
            <div className={cl.myModalContent}
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal