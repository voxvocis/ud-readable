import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class FilterButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  handleMenuItemClick = index => {
    const { filterOnDate, filterOnScore, score, date } = this.props
    if (index === 0) {
      filterOnScore(!score)
      filterOnDate(false)
    } else {
      filterOnDate(!date)
      filterOnScore(false)
    }
  }

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleClick}
          label="Filter"
          className="Filter"
          backgroundColor="#0099"
          labelColor="#fff"
          disabled={!this.props.filterEnabled}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          style={{backgroundColor: "#0099"}}
        >
          <Menu onItemClick={(event, menuItem, index) => this.handleMenuItemClick(index)}>
            <MenuItem primaryText="On Score" style={{color: "#fff"}}/>
            <MenuItem primaryText="On Date" style={{color: "#fff"}}/>
          </Menu>
        </Popover>
      </div>
    )
  }
}
