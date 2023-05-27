import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import styles from './Home.module.css';
import { portfolioInfo } from './portfolioData';
import emailjs from '@emailjs/browser';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
// @ts-ignore
import Resume from '../../assets/IndhuResume.pdf';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface IFormInput {
    name: string;
    email: string;
    subject: string;
    message: string
}

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        mode: "onChange"
    });
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<string>('');
    const form = useRef<HTMLFormElement>(null);

    const onSubmit = async (formData: any) => {
        if (form?.current !== null) {
            console.log(form?.current);

            try {
                await emailjs.sendForm('indhuParkavi@123', 'template_l9340zb', form.current, 'YIRtEjpFO_lbVbqHj')
                setOpen(true);
                setSeverity('success')
            } catch (err) {
                console.error(err);
                setOpen(true);
                setSeverity('error')
            }

        }
    };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box className={styles.box} id="contact">
            <Typography variant="h6">
                GET IN TOUCH
            </Typography>
            <Typography variant='h2'>
                CONTACT
            </Typography>
            <Grid container style={{ marginTop: '20px' }}
                alignItems="center"
                justifyContent="center"
            >
                {portfolioInfo?.contact?.map((el, ind) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={ind} m={0} p={0}>
                            <div className={styles.card}>
                                <Box className={styles.contact}>
                                    <Box className={styles.contactIcon}>
                                        {el?.icon}
                                    </Box>
                                    <Typography className={styles.contactUsTitle}>
                                        {el.name}
                                    </Typography>
                                    <Typography variant='subtitle1' mt={2} mb={2} className={styles.contactDetail}>
                                        {el?.details}
                                    </Typography>
                                </Box>
                                <br />
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6} m={0} p={0}>
                    <Card className={styles.card}>
                        <Typography p={2}>
                            Resume
                        </Typography>
                        <div className={styles.button}>
                            <Button type='submit' className={styles.buttonTheme} style={{ paddingRight: '0', paddingLeft: '0' }} >
                                <a href={Resume} download style={{ textDecoration: 'none', width: '100%' }}>
                                    Download
                                </a>
                            </Button>
                        </div>
                    </Card>
                    <br />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={styles.card} style={{ backgroundColor: 'transparent' }}>
                        <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                            <TextField
                                size="small"
                                variant="outlined"
                                placeholder='Name'
                                style={{ width: '99%' }}
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <Typography color="red" fontSize={10} p={0} m={0} variant='body2'>
                                    This field is required
                                </Typography>
                            )}
                            <br />
                            <TextField
                                variant="outlined"
                                size='small'
                                placeholder='Email'
                                style={{ width: '99%' }}
                                {...register("email", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    },
                                })}
                            />
                            {errors.email && (
                                <Typography color="red" variant='body2' p={0} m={0} fontSize={10}>
                                    {errors.email?.message}
                                </Typography>
                            )}
                            <br />
                            <TextField
                                variant="outlined"
                                size='small'
                                placeholder='Subject'
                                style={{ width: '99%' }}
                                {...register("subject", { required: true })}
                            />
                            {errors.subject && (
                                <Typography color="red" variant='body2' p={0} m={0} fontSize={10}>
                                    This field is required
                                </Typography>
                            )}
                            <br />
                            <TextField
                                placeholder="Message"
                                variant="outlined"
                                size='small'
                                style={{ width: '99%' }}
                                multiline={true}
                                rows={5}
                                {...register("message", { required: true })}
                            />
                            {errors.message && (
                                <Typography color="red" variant='body2' p={0} m={0} fontSize={10}>
                                    This field is required
                                </Typography>
                            )}
                            <br />
                            <div className={styles.button}>
                                <Button type='submit' className={styles.buttonTheme}>
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <div>
                    {severity === 'success' &&
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Your submission has been sent! Catch you soon.
                        </Alert>
                    }
                    {severity === 'error' &&
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Something went wrong. Please try again later!
                        </Alert>
                    }
                </div>
            </Snackbar>
        </Box>
    )
}
