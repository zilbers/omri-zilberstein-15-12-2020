import React, { Component } from 'react';

export const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
  }

  changeTheme = () => {
    this.setState({ ...this.state, darkMode: !this.state.darkMode });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeTheme: this.changeTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
