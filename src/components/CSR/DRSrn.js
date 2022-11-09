import styled from '@emotion/styled'
import { Box, Checkbox, CircularProgress, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOHUser, saveDRDetails } from '../../Actions/OHUser'
import Main from '../Layout/Main';
import ConfirmationScn from './ConfirmationScn'

const CustomTextFields = styled(TextField)`
fieldset {
  border-radius: 5px;
}
`;

function DRSrn() {

  const { ohusers } = useSelector(state => state.ohusers);

  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false
  })


  const [info, setInfo] = useState({
    "medicalClaims": false,
    "primaryPhysician": false,
    "accountInformation": false,
    "medicalAuthorization": false
  })

  const [isChecked, setIschecked] = useState(false)

  const [isSelected, setIsSelected] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOHUser());
    isChecked ?
      setInfo({
        "medicalClaims": true,
        "primaryPhysician": true,
        "accountInformation": true,
        "medicalAuthorization": true
      })
      :
      setInfo({
        "medicalClaims": false,
        "primaryPhysician": false,
        "accountInformation": false,
        "medicalAuthorization": false
      })
  }, [dispatch, isChecked])


  const handleChecked = () => {
    setIschecked(!isChecked)

  }

  const onSubmit = (e, data) => {

    setStatus({
        ...status,
        loading: true,
        error: false,
        success: false

    })
    data.preventDefault();

    if (e.accountInformation === false && e.medicalAuthorization === false && e.medicalClaims === false && e.primaryPhysician === false && !isChecked) {
        setError("accountInformation", {
            type: "manual",
            message: "Please check atleast one checkbox"
        });

        setStatus({
            ...status,
            loading: false,
            error: false,
            success: false

        })
        return;
    } else if (e.apAddress === '' || e.apName === '') {

            setError("apName", {
                type: "manual",
                message: "Please enter authorized person name"
            });

            setError("apAddress", {
                type: "manual",
                message: "Please enter authorized person address"
            });

        setStatus({
            ...status,
            loading: false,
            error: false,
            success: false

        })
        return;

    }else{

      const DRDetails = {
        info,
        "preferred":e.preferred,
        "ExpiryOpt":e.ExpiryOpt,
        "expireDate":e.expireDate,
        "commOpt":e.commOpt,
        "requestReason":e.requestReason,
        "apName":e.apName,
        "apAddress":e.apAddress,
        "terminateDate":e.terminateDate
      }

      dispatch(saveDRDetails(DRDetails))

        setStatus({
            ...status,
            loading: false,
            error: false,
            success: true

        })

    }

}

  return (
    <>
    {(status.error || status.success) && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <ConfirmationScn status={status} /> </Box>}
    { !status.loading && !status.success && !status.error &&  <Main title="Optima Health">
        <Typography variant="p" component="div" sx={{ pt: '15px', pb: '15px', alignItems: 'left', textAlign: 'center', fontWeight: '500' }}>
          Authorization for use or disclosure of medical information.<br></br>
          (Designated Representive)
        </Typography>
        <Divider variant="middle" sx={{ margin: 'auto', borderWidth: '1px' }} />
        <Typography variant="p" component="div" sx={{ fontSize: '16px', p: '15px', pl: '10px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
          Designated representative's information
        </Typography>
        <Box sx={{ pl: '10px', pr: '10px' }}>
          {!status.loading && !status.success && !status.error && <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="p" component="div" sx={{ fontSize: '14px', fontWeight: '500' }}>First name</Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '14px', pb: '10px' }}>{ohusers.firstName}</Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '14px', fontWeight: '500' }}>Last name</Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '14px' }}>{ohusers.lastName}</Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '14px', pt: '15px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
              Preferred communication
            </Typography>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" sx={{ color: 'grey', fontSize: '12px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
                Proxy would receive all communication on the selected option
              </FormLabel>
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={ohusers.mobileNumber} name="radio-buttons-group">
                <FormControlLabel  control={
                  <Radio id="preferred" {...register("preferred")} value={ohusers.mobileNumber} sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, pb: '0px' }} />
                } label="Mobile number" />
                <Typography variant="p" component="div" sx={{ fontSize: '12px', alignItems: 'center', textAlign: 'left', fontWeight: '500', pl: '35px', pb: '5px' }}>
                  {ohusers.mobileNumber}
                </Typography>
                <FormControlLabel control={
                  <Radio id="preferred" {...register("preferred")}  value={ohusers.emailAddress} sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, pb: '0px' }} />
                } label="Email address" />
                <Typography variant="p" component="div" sx={{ fontSize: '12px', alignItems: 'center', textAlign: 'left', fontWeight: '500', pl: '35px' }}>{ohusers.emailAddress}</Typography>
              </RadioGroup>
            </FormControl>
            <Divider variant="middle" sx={{ marginTop: '15px', borderWidth: '1px', ml: '0px' }} />
            <Typography variant="p" component="div" sx={{ pt: '15px', color: 'grey', fontSize: '10px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
              (All fields are required unless specified optional)
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '14px', pt: '15px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
              Information to disclose
            </Typography>
            <Typography variant="p" component="div" sx={{ pt: '10px', fontSize: '10px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
              Check the appropriate to indicate what information maybe used/disclosed.
            </Typography>
            <FormGroup>
              <FormControlLabel control={
                <Checkbox id="medicalClaims" {...register("medicalClaims")} checked={info.medicalClaims} onChange={() => setInfo({ ...info, medicalClaims: !info.medicalClaims })}
                  sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, fontSize: '12px' }} />
              } label="Medical claims" />
              <FormControlLabel control={
                <Checkbox id="primaryPhysician" {...register("primaryPhysician")} checked={info.primaryPhysician} onChange={() => setInfo({ ...info, primaryPhysician: !info.primaryPhysician })}
                  sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, fontSize: '12px' }} />
              } label="Primary physician" />
              <FormControlLabel control={
                <Checkbox id="accountInformation" {...register("accountInformation")} checked={info.accountInformation} onChange={() => setInfo({ ...info, accountInformation: !info.accountInformation })}
                  sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, fontSize: '12px' }} />
              } label="Account information" />
              <FormControlLabel control={
                <Checkbox id="medicalAuthorization" {...register("medicalAuthorization")} checked={info.medicalAuthorization} onChange={() => setInfo({ ...info, medicalAuthorization: !info.medicalAuthorization })}
                  sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, fontSize: '12px' }} />
              } label="Medical authorization" />
              <FormControlLabel control={
                <Checkbox checked={isChecked} onChange={handleChecked}
                  sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, fontSize: '12px' }} />} label="All above" />
                  {errors.accountInformation && <Typography variant="p" component="div" sx={{ fontSize: '14px' ,pb: 2, color: 'red' }}>{errors.accountInformation.message}</Typography>}
            </FormGroup>
            <Divider variant="middle" sx={{ marginTop: '15px', borderWidth: '1px', ml: '0px' }} />
            <Typography variant="p" component="div" sx={{ fontSize: '14px', pt: '15px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
              Expiration date
            </Typography>
            <FormControl fullWidth>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                defaultValue="ExpirationOnDissenrollment"
              >
                <FormControlLabel control={
                <Radio value='ExpirationOnDissenrollment' id="ExpiryOpt" {...register("ExpiryOpt")} sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, }} />
                } label="Expiration on dissenrollment" />
                <FormControlLabel  control={
                <Radio value='CustomExpiryDate' id="ExpiryOpt" {...register("ExpiryOpt")} sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, }} />
                } label="Add custom expiration date" />
                <TextField type="date" id="ExpireDate" {...register("expireDate")} sx={{ pl: '35px', width: '35ch', fontSize: '12px', alignItems: 'left', textAlign: 'left', fontWeight: '500', }}
                  variant="outlined" hiddenLabel />
              </RadioGroup>
            </FormControl>
            <Divider variant="middle" sx={{ marginTop: '15px', borderWidth: '1px', ml: '0px' }} />
            <Typography variant="p" component="div" sx={{ fontSize: '14px', pt: '15px', alignItems: 'left', textAlign: 'left', fontWeight: '400' }}>
              Purpose of the of use or disclose
            </Typography>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" sx={{ color: 'grey', fontSize: '12px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
                Proxy would receive all communication on the selected option</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                defaultValue="atMyRequest"
              >
                <FormControlLabel control={<Radio id="commOpt" {...register("commOpt")} onChange={() => setIsSelected(!isSelected)} value="atMyRequest" sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, }} />} label="At my request" />
                <FormControlLabel control={<Radio id="commOpt" {...register("commOpt")} onChange={() => setIsSelected(!isSelected)} value="other" sx={{ color: 'black', '&.Mui-checked': { color: 'black', }, }} />} label="Other" />
                <TextField id="requestReason" {...register("requestReason")} type="text" multiline maxRows={4} placeholder='Please state reason here'
                  sx={{ pl: '35px', width: '100%', fontSize: '10px', alignItems: 'left', textAlign: 'left', fontWeight: '400', }} variant="outlined" hiddenLabel disabled={isSelected}/>
              </RadioGroup>
            </FormControl>
            <Divider variant="middle" sx={{ marginTop: '15px', borderWidth: '1px', ml: '0px' }} />
            <Typography variant="p" component="div" sx={{ fontSize: '14px', pt: '15px', alignItems: 'center', textAlign: 'left', fontWeight: '400' }}>
              Authorized person to use or disclose medical information
            </Typography>
            <Typography variant="div" component="div" sx={{ pt: 2 }}>
              <Typography variant="p" component="div" sx={{ fontSize: '14px', fontWeight: '500', pb: 1 }}>Name of Authorized person </Typography>
              <CustomTextFields placeholder='Name of Authorized person' id="apName" {...register("apName")} hiddenLabel />
              {errors.apName && <Typography variant="p" component="div" sx={{ fontSize: '14px' ,pb: 2, color: 'red' }}>{errors.apName.message}</Typography>}
            </Typography>
            <Typography variant="div" component="div" sx={{ pt: 2, pb: 2, }}>
              <Typography variant="p" component="div" sx={{ fontSize: '14px', fontWeight: '500', pb: 1 }}>Address of Authorized person</Typography>
              <CustomTextFields fullWidth multiline placeholder='Address of Authorized person' id="apAddress" {...register("apAddress")} hiddenLabel />
              {errors.apAddress && <Typography variant="p" component="div" sx={{ fontSize: '14px' ,pb: 2, color: 'red' }}>{errors.apAddress.message}</Typography>}
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '14px', fontWeight: '500', pb: 1 }}>Authorization termination date</Typography>
            <FormHelperText>Optional</FormHelperText>
            <TextField type="date" id="terminateDate" {...register("terminateDate")} sx={{ width: '35ch', fontSize: '12px', alignItems: 'left', textAlign: 'left', fontWeight: '500', }} variant="outlined" hiddenLabel />
            <Divider variant="middle" sx={{ marginTop: '15px', borderWidth: '1px', ml: '0px' }} />
            <Stack spacing={2} direction="column" sx={{ alignItems: 'center', pt: 4 }}>
              <button type='submit'
                style={{ cursor: 'pointer', background: '#3D3635', fontWeight: '600', color: 'white', borderRadius: '15px', width: '100px', height: '50px' }}>Submit</button>
              <Link component="a" variant="body2" href='/disclosure'
                style={{ textAlign: 'center', cursor: 'pointer', color: '#3D3635', fontWeight: '600', textDecorationColor: '#3D3635', textDecorationThickness: '2px', borderRadius: '15px', width: '100px', height: '50px' }}> Cancel </Link>
            </Stack>
          </form>}
        </Box>
        {status.loading && <Box sx={{ pt: '35%', display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>}

      </Main> }
    </>
  )
}

export default DRSrn