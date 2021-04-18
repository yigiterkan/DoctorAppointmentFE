import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


function App() {
  const classes = useStyles();
  const [doctor, setDoctor] = React.useState('');
  const [patientName, setPatientName] = React.useState('');
  const [patientSurname, setPatientSurname] = React.useState('');
  const [appointmentStartDate, setAppointmentStartDate] = React.useState('');
  const [appointmentEndDate, setAppointmentEndDate] = React.useState('');
  const [treatment, setTreatment] = React.useState('');

  const saveAppointment = () => {
    debugger;

    axios(`https://localhost:44313/api/Appointments`, {
      method: 'POST',
      headers: {   'Accept': 'application/json'  , 'Content-Type': 'application/json'  },
      data: JSON.stringify({
        appointmentDoctorId: doctor,
        AppointmentPatient: {
          PatientName:patientName,
          PatientSurname:patientSurname
        },
        appointmentStartDate: appointmentStartDate,
        appointmentEndDate: appointmentEndDate,
        treatment:treatment        
      })
    }).then((response) => {


    });

  }

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Randevu Alma Sistemi
          </Typography>
        </Toolbar>
      </AppBar>

      <br />

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <TextField id="hasta-adi" label="Hasta Adı" variant="outlined" value={patientName} onChange={(event) => { setPatientName(event.target.value) }} />
        </Grid>
        <Grid item xs={12}>
          <TextField id="hasta-soyadi" label="Hasta Soyadı" variant="outlined" value={patientSurname} onChange={(event) => { setPatientSurname(event.target.value) }} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            value={appointmentStartDate}
            onChange={(event) => { setAppointmentStartDate(event.target.value) }}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            value={appointmentEndDate}
            onChange={(event) => { setAppointmentEndDate(event.target.value) }}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Doktor</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={doctor}
              onChange={handleChange}
              label="Doktor"
              style={{ width: 223 }}
            >
              <MenuItem value={1}>Ali</MenuItem>
              <MenuItem value={2}>Veli</MenuItem>
              <MenuItem value={3}>Mahmut</MenuItem>
            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12}>
          <TextField id="treatment" label="Tedavi" variant="outlined" value={treatment} onChange={(event) => { setTreatment(event.target.value) }} />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={saveAppointment}>
            Randevu Al
            </Button>
        </Grid>

      </Grid>


    </div>
  );
}

export default App;
