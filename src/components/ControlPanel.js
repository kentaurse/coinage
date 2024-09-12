import React, { Component } from 'react';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: false
    }
  }
  render() {
    const {addOpen} = this.state;
    const form = addOpen ? <input type="text" /> : null;

    return (
      <div className="control-panel">    
        <button 
          className="add-button"
          onClick={() => this.setState({addOpen: !addOpen})}
        >Add</button>    
        <button>Remove</button>
        <button onClick={this.props.handleRefresh} >Refresh</button>
        {form}
      </div>
    )
  }
}

export default ControlPanel;