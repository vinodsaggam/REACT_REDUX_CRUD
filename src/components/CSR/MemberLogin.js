import styled from '@emotion/styled';
import { Box, CircularProgress, Link, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOHUser } from '../../Actions/OHUser';
import Main from '../Layout/Main';


const CustomTextFields = styled(TextField)`
fieldset {
  border-radius: 10px;
}
`;

function MemberLogin() {

    const { ohusers } = useSelector(state => state.ohusers)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

    useEffect(() => {
        dispatch(getOHUser());
    }, [dispatch])

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

        })
        data.preventDefault();

        if (e.lastName === '' && e.memberId === '') {
            setError("lastName", {
                type: "manual",
                message: "You must fill out either last name or member id"
            });
            setError("memberId", {
                type: "manual",
                message: "You must fill out either member id or last name"
            });
            setStatus({
                ...status,
                loading: false,
                error: false,
                success: false

            })
            return;
        } else if (String(e.lastName).length > 10 || String(e.memberId).length > 10) {

            if (String(e.lastName).length > 10) {
                setError("lastName", {
                    type: "manual",
                    message: "Max length should be 10 character"
                });
            }

            if (String(e.memberId).length > 10) {
                setError("memberId", {
                    type: "manual",
                    message: "Min and Max length should be 10 character"
                });
            }

            setStatus({
                ...status,
                loading: false,
                error: false,
                success: false

            })
            return;

        } else if (e.memberId === ohusers.memberId || e.lastName === ohusers.lastName) {

            setStatus({
                ...status,
                loading: false,
                error: false,
                success: true

            })
            navigate('/dr_form')

        } else if (e.memberId !== ohusers.memberId || e.lastName !== ohusers.lastName) {

            if (String(e.lastName).length <= 10) {
                setError("lastName", {
                    type: "manual",
                    message: "Invalid last name"
                });
            }

            if (String(e.memberId).length === 10) {
                setError("memberId", {
                    type: "manual",
                    message: "Invalid mobile number"
                });
            }

            setStatus({
                ...status,
                loading: false,
                error: false,
                success: false

            })
            return;
        }
    }

    return (
        <>
            <Main title="Optima Health" >
                <Typography variant="h5" component="div" sx={{ paddingTop: '15%', alignItems: 'center' }}>
                    Enter your details to view form:
                </Typography>
                <Typography variant="p" component="div" sx={{ pt: '15px', alignItems: 'center', fontSize: '18px', color: 'grey', fontWeight: '400' }}>
                    Please provide any one of the following.
                </Typography>
                <Box>

                    {!status.loading && !status.success && !status.error && <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="div" component="div" sx={{ pt: 2, pb: 2, }}>
                            <label htmlFor="component-simple">Last name</label>
                            <CustomTextFields fullWidth placeholder='Last name' id="lastName" {...register("lastName")} onChange={() => clearErrors("memberId")} hiddenLabel />
                        </Typography>
                        {errors.lastName && <Typography variant="p" component="div" sx={{ pb: 2, color: 'red' }}>{errors.lastName.message}</Typography>}
                        <Typography variant="h6" component="div" sx={{ alignItems: 'center', textAlign: 'center' }}>
                            -Or-
                        </Typography>
                        <Typography variant="div" component="div" sx={{ pb: 2 }}>
                            <label htmlFor="component-simple">Member id</label>
                            <CustomTextFields fullWidth placeholder='- - -  - - -  - - - - - -' id="memberId" type="number" {...register("memberId")} onChange={() => clearErrors("lastName")} hiddenLabel />
                        </Typography>
                        {errors.memberId && <Typography variant="p" component="div" sx={{ pb: 2, color: 'red' }}>
                            {errors.memberId.message}
                        </Typography>}
                        <Stack spacing={2} direction="column" sx={{ alignItems: 'center', pt: 4 }}>
                            <button type='submit' onClick={() => navigate('/memberlogin')} style={{ cursor: 'pointer', background: '#3D3635', fontWeight: '600', color: 'white', borderRadius: '15px', width: '100px', height: '50px' }}>Submit</button>
                            <Link component="a" variant="body2" href='/disclosure' style={{ textAlign: 'center', cursor: 'pointer', color: '#3D3635', fontWeight: '600', textDecorationColor: '#3D3635', textDecorationThickness: '2px', borderRadius: '15px', width: '100px', height: '50px' }}> Cancel </Link>
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

export default MemberLogin