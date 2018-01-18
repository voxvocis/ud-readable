import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class CreatePost extends Component {
  state = {
    open: this.props.open,
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.closeModal()
  }

  render() {
    const { Title } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ]

    return (
      <Dialog
        title={Title}
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        <center><h1>Create a new Post!</h1>
        <div>
          <TextField
            hintText="Title"
            value={this.state.value}
            onChange={this.handleTitle}
          /><br />
          <TextField
            hintText="Author"
          /><br />
          <TextField
            hintText="Post message"
            floatingLabelText="Post message"
            multiLine={true}
            rows={2}
          /><br />
        </div></center>
      </Dialog>
    )
  }
}
