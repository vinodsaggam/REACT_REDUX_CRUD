import {  ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react'

function ConfirmationScn({status}) {
  return (
<>

      <Typography variant="h2" component="div" sx={{ paddingTop: '15%', textAlign: 'center'}}>
      {status.success &&  <ThumbUpOutlined  sx={{ fontSize: 50, textAlign:"center" }} />}
      <br />
        {status.success && "Form submitted successfully, Please check your email/sms for more info."}
        {status.error &&  <ThumbDownAltOutlined  sx={{ fontSize: 50, textAlign:"center" }} />}
        <br />
        {status.error && "Error while form submitting, Please try again later."}
        {status.expired && <p> Link Expired, Please submit the form again.</p>}
      </Typography>

      </>
  )
}

export default ConfirmationScn