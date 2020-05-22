import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e)=>{
        e.preventDefault();
        this.props.prevstep();
    }
    render() {
        const {values, handleChange}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details"></AppBar>
                    <TextField
                        hintText="Enter your Occupation"
                        floatingLabelFixed="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br></br>
                    <TextField
                        hintText="Enter your City"
                        floatingLabelFixed="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br></br>
                    <TextField
                        hintText="Enter your Biodata"
                        floatingLabelFixed="BioData"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br></br>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails
