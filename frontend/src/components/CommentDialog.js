import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class CommentDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: this.props.open,
      message: this.props.message ? this.props.message : '',
      author: this.props.author ? this.props.author : '',
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.closeModal()
  }

  handleSubmit = () => {
    const { parentId, createComment } = this.props
    const body = {
      body: this.state.message,
      author: this.state.author,
      parentId,
    }
    createComment(body, parentId)
    this.handleClose()
  }

  handleEdit = () => {
    const body = {
      timestamp: Date.now(),
      body: this.state.message,
    }
    this.props.editComment(this.props.commentId, body, this.props.parentId)
    this.handleClose()
  }

  handleAuthor = (e, newValue) => {
    this.setState({
      author: newValue
    })
  }

  handleMessage = (e, newValue) => {
    this.setState({
      message: newValue
    })
  }

  render() {
    const { edit } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label={edit ? 'Edit' : 'Submit'}
        primary={true}
        keyboardFocused={true}
        onClick={edit ? this.handleEdit : this.handleSubmit}
        backgroundColor="#0099"
      />,
    ]

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        <center><h1>{edit ? 'Edit Comment' : 'Create a new Comment!'}</h1>
        <div>
          <TextField
            floatingLabelText="Author"
            value={this.state.author}
            onChange={this.handleAuthor}
          /><br />
          <TextField
            floatingLabelText="Comment"
            value={this.state.message}
            onChange={this.handleMessage}
            multiLine={true}
            rows={2}
          /><br />
        </div></center>
      </Dialog>
    )
  }
}
