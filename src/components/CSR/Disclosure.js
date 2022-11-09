import { Link, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Expire from 'react-expire'
import { useNavigate } from 'react-router-dom'
import ConfirmationScn from './ConfirmationScn'
import Main from '../Layout/Main'

function Disclosure() {
  const navigate = useNavigate();
  const status = {'expired': true};
  return (
    <> <Expire until={10000}>
        {(expired) =>
          !expired ? (
      <Main title="Optima Health" >
        <Typography variant="h5" component="div" sx={{ paddingTop: '15%', alignItems: 'center', textAlign: 'center' }}>
          Authorization for use or disclosure of medical information.<br></br>
          (Designated Representive)
        </Typography>
        <Typography variant="p" component="div" sx={{ pt: '15px', alignItems: 'center', textAlign: 'center', fontSize: '18px' }}>
          You should complete this form if you wish to authorize Optima health to use or disclose your medical information
          to persons who may or may not directly invloved in making decisions regarding your health care.
        </Typography>
        <Stack spacing={2} direction="column" sx={{ alignItems: 'center', pt: 4}}>
          <button type='submit' onClick={ () => navigate('/memberlogin')} style={{ cursor: 'pointer', background: '#3D3635', fontWeight: '600', color: 'white', borderRadius: '15px', width: '100px', height: '50px' }}>Enter</button>
          <Link component="a" variant="body2" href='/' style={{ textAlign: 'center', cursor: 'pointer', color: '#3D3635', fontWeight: '600',textDecorationColor: '#3D3635', textDecorationThickness: '2px', borderRadius: '15px', width: '100px', height: '50px' }}> Cancel </Link>
        </Stack>
        <Typography variant="p" component="div" sx={{ pt: '15px', alignItems: 'center', textAlign: 'center', fontSize: '14px' }}>
          The link will expire in 24 hours
        </Typography>
      </Main>) : ( <ConfirmationScn status={status} />) 
    }
    </Expire>
            </>
  )
}

export default Disclosure