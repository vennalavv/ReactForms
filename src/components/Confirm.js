import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e)=>{
        e.preventDefault();
        this.props.prevstep();
    }
    render() {
        const {values : {firstName,lastName,email,occupation,city,bio}}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmation"></AppBar>
                    <List>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />
                    <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                    />
                    <ListItem
                        primaryText="EmailID"
                        secondaryText={email}
                    />
                    <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                    />
                    <ListItem
                        primaryText="City"
                        secondaryText={city}
                    />
                    <ListItem
                        primaryText="Biodata"
                        secondaryText={bio}
                    />
                     
                    </List>
                        
                    
                    
                    <br></br>
                    <RaisedButton
                        label="Confrim and Continue"
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

export default FormUserDetails
