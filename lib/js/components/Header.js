import React from 'react';

import Title from './Title';

class Header extends React.Component {

  handleChange(e){
    let title = e.target.title;
    this.props.changeTitle(title);
  }

  render(){
      return (
        <div>
          <Title title={this.props.title}/>
          <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
        </div>
      );
  }
}

export default Header;
