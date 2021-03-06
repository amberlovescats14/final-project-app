import React, { Component } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  floatingLabelFocusStyle: {
    color: "white",
    fontFamily: "monospace"
},
  root: {
  minHeight: '675px',
  width: '100%'
  },
  container: {
  display: 'flex',
  flexWrap: 'wrap'
  },
  textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit
  },
  dense: {
  marginTop: 16
  },
  menu: {
  width: 200
  },
  button: {
  marginRight: theme.spacing.unit
  }
  });

export class ActivityPicker extends Component {
  state = {
    anchorEl: null,
  };
  handlePickActivity = (event) => {
    // set categoryId in state
    this.setState({
      anchorEl: event.target.value
    // categoryId: this.state.categoryId
    });
    localStorage.setItem("activity", event.target.value);
    console.log("event.target.value",event.target.value)
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
    render() {
      const {classes}=this.props;
      const Activites = [
{id:105,value:'Art'},
{id:103,value:'Music'},
{id:108,value:'Sports and Fitness'},
{id:109,value:'Travel and Outdoors'},
{id:113,value:'Community'},
{id:104,value:'Film and Media'}
];
      return (
        <form className={classes.container} noValidate autoComplete="off">
      <TextField 
        style={{ fontFamily: "monospace", color: 'white', backgroundColor: "none" }}
            id="outlined-select"
            select
            className={classes.textField}
            label="What type of event are you looking for?"

            value={this.state.anchorEl}
            onChange={this.handlePickActivity}
            SelectProps={{
              MenuProps: {
              className: classes.menu
              }
              }}
              
            margin="normal"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
          }}
            InputProps={{ style: { fontFamily: "monospace", color: "white" } }}

      >
            {Activites.map(option => (
            <MenuItem style={{ fontFamily: "monospace",text: "white" }}
            InputProps={{ style: { color: "white" } }}
            key={option.id}
            value={ option.id}
            >
            {option.value}
            </MenuItem>
            ))}
            </TextField>
      </form>
      )    
    }
}
export default withStyles(styles) (ActivityPicker)