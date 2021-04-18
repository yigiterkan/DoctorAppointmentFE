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
      
      <br/>

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <TextField id="hasta-adi" label="Hasta Adı" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="hasta-soyadi" label="Hasta Soyadı" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
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
              style={{ width: 200 }}
            >

              <MenuItem value={10}>Ali</MenuItem>
              <MenuItem value={20}>Veli</MenuItem>
              <MenuItem value={30}>Mahmut</MenuItem>
            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12}>
          <TextField id="treatment" label="Tedavi" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
            <Button variant="contained" color="primary">
            Randevu Al
            </Button>
        </Grid>

      </Grid>


    </div>
  );
}

export default App;
