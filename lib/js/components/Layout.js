import React from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'wuriyanto48'
    };
  }

  changeTitle(){
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }

}
export default Layout;
