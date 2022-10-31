import { Typography } from '@mui/material';
import React from 'react'

function ConfirmationScn({status}) {
  return (

      <Typography variant="h2" component="div" sx={{ paddingTop: '15%'}}>
        {status.success && <p>Form submitted successfully, Please check your email/sms for more info.</p>}
        {status.error && <p> Error while form submitting, Please try again later.</p>}
      </Typography>


  )
}

export default ConfirmationScn