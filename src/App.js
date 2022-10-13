import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value);
  // };

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(1111, event.target.value)
  };

  const options = [
    {label: 'React',      value: 0   },
    {label: 'JavaScript', value: 1   },
    {label: 'TypeScript', value: 2   }
  ];

  return (
    <div>

<FormControl sx={{ m: 1, minWidth: 120 }}>
        
        <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >

          {/* <MenuItem value=""><em>Nongge</em></MenuItem> */}
          
          {options?.map(option => {
            return (
              <MenuItem key={option.label} value={option.value}>
                {/* {option.label ?? option.value} */}
                {option.label}
              </MenuItem>
            );
          })}

        </Select>

        <FormHelperText>Without label</FormHelperText>
      <Button variant="contained" disableElevation>
        Enter
      </Button>
      </FormControl>

      
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={age} label="Age" onChange={handleChange} >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl> */}

      

      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <FormHelperText>Without label</FormHelperText>
      </FormControl> */}

    </div>
  );
}
