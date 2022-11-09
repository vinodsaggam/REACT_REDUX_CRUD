import { Box, Stack, TextField, Typography } from '@mui/material'
import React, {  useState } from 'react'
import styled from '@emotion/styled';
import { useForm } from "react-hook-form";
import ConfirmationScn from './ConfirmationScn';
// import { send } from 'emailjs-com';
import CircularProgress from '@mui/material/CircularProgress';
import Main from '../Layout/Main';
import { useDispatch } from 'react-redux';
import {  saveOHUser } from '../../Actions/OHUser';
import {  useNavigate } from 'react-router-dom';

const CustomTextFields = styled(TextField)`
fieldset {
  border-radius: 10px;
}
`;


function SaleForceScn() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useNavigate()

    const [status, setStatus] = useState({
        loading: false,
        error: false,
        success: false
    })

        
    const onSubmit = (e, data) => {
        setStatus({
            ...status,
            loading: true,
            error: false,
            success: false

        });

        const OHUser = {
            firstName: e.firstName,
            lastName: e.lastName,
            mobileNumber: e.mobileNumber,
            emailAddress: e.emailAddress,
            memberId: e.mobileNumber
        }

        data.preventDefault();

        // send(
        //     'service_zv9pnqv',
        //     'template_7thavpy',
        //     {
        //         from_name: "Proxy Authorization",
        //         to_name: `${e.firstName} ${e.lastName}`,
        //         message: "Use the below link to complete Proxy Authorization",
        //         reply_to: `${e.emailAddress}`,
        //         link: 'http://localhost:3000/disclosure',
        //         link_name: "Proxy Form"
        //     },
        //     'sul0Mjq5ckabe9CaT'
        // )
        // myPromise.then((response) => {
                setStatus({
                    ...status,
                    loading: false,
                    error: false,
                    success: true

                })
                dispatch(saveOHUser(OHUser))
                 // eslint-disable-next-line no-restricted-globals
                 history('/memberlogin')

            // })
            // .catch((err) => {
            //     console.log('FAILED...', err);
            //     setStatus({
            //         ...status,
            //         loading: false,
            //         error: true,
            //         success: false

            //     })
            // });

    }

    return (
        <>
        <Main title="CSR">
            <Box>
                {(status.error || status.success) && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <ConfirmationScn status={status} /> </Box>}

                { !status.loading && !status.success && !status.error && <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h5" component="div" sx={{ p: 4, pl: 0 }}>
                        Proxy details
                    </Typography>
                    <Typography variant="div" component="div" sx={{ pt: 2, pb: 2 }}>
                        <label htmlFor="component-simple">First name</label>
                        <CustomTextFields fullWidth placeholder='First name' id="firstName" {...register("firstName", { required: true, maxLength: 10 })} hiddenLabel />
                    </Typography>
                    {errors.firstName && <Typography variant="p" component="div" sx={{ pb: 2, color: 'red' }}>
                        Please check the First Name
                    </Typography>}
                    <Typography variant="div" component="div" sx={{ pb: 2, }}>
                        <label htmlFor="component-simple">Last name</label>
                        <CustomTextFields fullWidth placeholder='Last name' id="lastName" {...register("lastName", { required: true, maxLength: 10 })} hiddenLabel />
                    </Typography>
                    {errors.lastName && <Typography variant="p" component="div" sx={{ pb: 2, color: 'red' }}>
                        Please check the Last Name
                    </Typography>}
                    <Typography variant="div" component="div" sx={{ pb: 2 }}>
                        <label htmlFor="component-simple">Mobile number</label>
                        <CustomTextFields fullWidth placeholder='Mobile number' id="mobileNumber" type="number" {...register("mobileNumber", { required: true, maxLength: 10, minLength: 10 })} hiddenLabel />
                    </Typography>
                    {errors.mobileNumber && <Typography variant="p" component="div" sx={{ pb: 2, color: 'red' }}>
                         Please check the Mobile Number
                    </Typography>}
                    <Typography variant="div" component="div" sx={{ pb: 2 }}>
                        <label htmlFor="component-simple">Email address</label>
                        <CustomTextFields fullWidth placeholder='Email address' id="emailAddress" {...register("emailAddress", {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} hiddenLabel />
                    </Typography>
                    {errors.emailAddress && <Typography variant="p" component="div" sx={{ pb: 2, color: 'red' }}>
                        Please check the Email Address
                    </Typography>}
                    <Stack spacing={2} direction="row">
                        <button type='submit' style={{ cursor: 'pointer', background: '#3D3635', fontWeight: '500', color: 'white', borderRadius: '15px', width: '100px', height: '50px' }}>Email</button>
                        <button type='submit' style={{ background: '#3D3635', cursor: 'pointer', color: 'white', fontWeight: '500', borderRadius: '15px', width: '100px', height: '50px' }}>SMS</button>
                    </Stack>
                </form>}
            </Box>
            {status.loading && <Box sx={{ pt: '35%', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>}
            </Main>
        </>
    )
}

export default SaleForceScn