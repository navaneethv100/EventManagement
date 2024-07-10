import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'


type Props = {
    setAuth: (value: boolean) => void;
}


export default function SingOutButtons({setAuth}: Props) {
    
  return (
    <div>
      <MenuItem position='right'>
        <Button basic inverted content='login' onClick={()=>setAuth(true)}/>
        <Button basic inverted content='Register' style={{marginLeft:'0.5em'}}/>
    </MenuItem>
    </div>
  )
}