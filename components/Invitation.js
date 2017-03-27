const React = require('react');

class Invitation extends React.Component {
  render() {
    const title = "You've been invited!";
    return (
      <div>
        <h1>{title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

module.exports = Invitation;
