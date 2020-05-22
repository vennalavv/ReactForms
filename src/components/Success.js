import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class FormUserDetails extends Component {
    
    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"></AppBar>
                    <h1>Thank you for Submission</h1>
                    <p>You will receive the confirmation mail soon</p>                   
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
