
import { useState} from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './UserForm.css';


const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 }));
const UserForm = () =>{
    const [value, setValue] = useState(moment().format('dd/mm/yy'));
    return(
        <Stack spacing={2}>
        <Item><p>User Form</p></Item>
        <Item >
           <TextField id="user-first" label="First Name" variant="standard" /><br/><br/>
           <TextField id="user-lastname" label="Last Name" variant="standard" /><br/><br/>
           <TextField id="user-collage" label="Collage Name" variant="standard" /><br/><br/>
       </Item>
        <Item>
        <LocalizationProvider dateAdapter={AdapterMoment}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                 <DatePicker label="DOB" value={value} onChange={(newValue) => setValue(newValue)} />
              </DemoContainer>
            </LocalizationProvider>
        </Item>
        <Item>
           <TextField id="user-age" label="Age" variant="filled" className='width100'/>
        </Item>
        <Item>
        <FormControl>
                 <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel><br/>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                     <FormControlLabel value="female" control={<Radio />} label="Female"/><br/><br/>
                     <FormControlLabel value="male" control={<Radio />} label="Male" /><br/><br/>
                     <FormControlLabel value="other" control={<Radio />} label="Other" />
                 </RadioGroup>
              </FormControl>
        </Item>
        <Item>buttons</Item>

      </Stack>
        
    )

};
export default UserForm;