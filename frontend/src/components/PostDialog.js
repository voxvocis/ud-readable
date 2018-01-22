import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class PostDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: this.props.open,
      title: this.props.title ? this.props.title : '',
      message: this.props.message ? this.props.message : '',
      author: this.props.author ? this.props.author : '',
      categoryValue: this.props.categoryValue ? this.props.categoryValue : '',
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
    const body = {
      title: this.state.title,
      body: this.state.message,
      author: this.state.author,
      category: this.state.categoryValue,
    }
    this.props.createPost(body)
    this.handleClose()
  }

  handleEdit = () => {
    const body = {
      title: this.state.title,
      body: this.state.message,
      author: this.state.author,
      category: this.state.categoryValue,
    }
    // this.props.createPost(body)
    this.handleClose()
  }

  handleTitle = (e, newValue) => {
    this.setState({
      title: newValue
    })
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

  handleCategoryValue = (event, index, value) => {
    this.setState({
      categoryValue: value
    })
  }

  render() {
    const { categories, edit } = this.props

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
        <center><h1>Create a new Post!</h1>
        <div>
          <TextField
            floatingLabelText="Title"
            value={this.state.title}
            onChange={this.handleTitle}
          /><br />
          <TextField
            floatingLabelText="Author"
            value={this.state.author}
            onChange={this.handleAuthor}
          /><br />
          <TextField
            floatingLabelText="Post message"
            value={this.state.message}
            onChange={this.handleMessage}
            multiLine={true}
            rows={2}
          /><br />
          <SelectField
          floatingLabelText="Category"
          value={this.state.categoryValue}
          onChange={this.handleCategoryValue}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.path} primaryText={category.path} />
            ))}
          </SelectField>
          <br />
        </div></center>
      </Dialog>
    )
  }
}
