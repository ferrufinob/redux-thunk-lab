import React, { Component } from "react";
import { connect } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./actions/catActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    console.log(this.props.cats);
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cats: state.cats,
  loading: state.loading,
});
export default connect(mapStateToProps, { fetchCats })(App);
