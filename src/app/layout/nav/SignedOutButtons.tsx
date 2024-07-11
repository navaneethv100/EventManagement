import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'
import { useAppDispatch } from '../../store/Store'
import { openModal } from '../../common/modals/modalSlice';


export default function SingOutButtons() {
    const dispatch = useAppDispatch();

    

    return (
      <div>
        <MenuItem position='right'>
          <Button 
            basic inverted 
            content='login' 
            onClick={()=>dispatch(openModal({type: 'LoginForm'}))}/>
          <Button basic inverted content='Register' style={{marginLeft:'0.5em'}}/>
      </MenuItem>
      </div>
    )
}
