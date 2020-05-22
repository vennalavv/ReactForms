import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"></AppBar>
                    <TextField
                        hintText="Enter First Name"
                        floatingLabelFixed="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br></br>
                    <TextField
                        hintText="Enter Last Name"
                        floatingLabelFixed="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br></br>
                    <TextField
                        hintText="Enter Email ID"
                        floatingLabelFixed="Email ID"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br></br>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
