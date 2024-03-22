import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Selector = () => {
  const [country, setCountry] = React.useState('');
  
  const [language,setLang ] = React.useState('');


  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handelLanguageChange  = (event) => {
    setLang(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }} >
        <InputLabel id="demo-simple-select-error-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={country}
          label="Country"
          onChange={handleCountryChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="US">United States</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
          <MenuItem value="MX">Mexico</MenuItem>
          <MenuItem value="CN">China</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
         
      <FormControl required sx={{ m: 1, minWidth: 150 }} error >
        <InputLabel id="demo-simple-select-required-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={language}
          label="Language *"
          onChange={handelLanguageChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="EN">English</MenuItem>
          <MenuItem value="ES">Spanish</MenuItem>
          <MenuItem value="FR">French</MenuItem>
          <MenuItem value="JP">Japanese</MenuItem>
          <MenuItem value="AR">Arabic</MenuItem>
          <MenuItem value="RU">Russian</MenuItem>
          <MenuItem value="KO">Korean</MenuItem>

        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Selector;
