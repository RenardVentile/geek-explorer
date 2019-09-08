import React, { Component } from "react";
import axios from "axios";
import ExplorePage from "../components/ExplorePage/ExplorePage";

const initialState = {
  error: null,
  firstOptions: [],
  secondOptions: [],
  cheatSheets: [],
  currentFirstOption: null,
  currentSecondOption: null,
  currentCheatSheet: null,
  showSecondOption: false,
  showDetail: false
};

class ExploreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.fetchFirstOption = this.fetchFirstOption.bind(this);
    this.fetchSecondOption = this.fetchSecondOption.bind(this);
    this.fetchCheatSheets = this.fetchCheatSheets.bind(this);
    this.handleChangeFirstOption = this.handleChangeFirstOption.bind(this);
    this.handleChangeSecondOption = this.handleChangeSecondOption.bind(this);
  }

  fetchFirstOption() {
    let category = this.props.match.params.category;
    axios
      .get(`/api/categories/${category}/first-options`)
      .then(response => response.data)
      .then(firstOptions => this.setState({ firstOptions }));
  }

  fetchSecondOption() {
    let category = this.props.match.params.category;
    axios
      .get(`/api/categories/${category}/second-options`)
      .then(response => response.data)
      .then(secondOptions => this.setState({ secondOptions }));
  }

  fetchCheatSheets() {
    let category = this.props.match.params.category;
    axios
      .get(`/api/categories/${category}/cheat-sheets`)
      .then(response => response.data)
      .then(cheatSheets => this.setState({ cheatSheets }));
  }

  componentDidMount() {
    this.fetchFirstOption();
    this.fetchSecondOption();
    this.fetchCheatSheets();
  }

  componentDidUpdate(prevProps) {
    const prevCategory = prevProps.match.params.category;
    const category = this.props.match.params.category;
    if (prevCategory !== category) {
      this.setState(initialState);
      this.componentDidMount();
    }
  }

  handleChangeFirstOption(currentValue) {
    if (this.state.currentCheatSheet !== null) {
      this.setState({
        currentCheatSheet: {}
      });
    }
    const currentFirstOption = this.state.firstOptions.find(
      firstOption => firstOption.value === currentValue
    );

    this.setState({
      currentFirstOption
    });

    if (currentFirstOption.hasSecondOption === 1) {
      this.setState({
        showSecondOption: true,
        showDetail: false
      });
    } else if (currentFirstOption.hasSecondOption === 0) {
      const currentCheatSheet = this.state.cheatSheets.find(
        cheatsheet => cheatsheet.firstOptionId === currentFirstOption.id
      );
      this.setState({
        showSecondOption: false,
        showDetail: true,
        currentCheatSheet
      });
    }
  }

  handleChangeSecondOption(currentValue) {
    const currentSecondOption = this.state.secondOptions.find(
      secondOption => secondOption.value === currentValue
    );
    const currentCheatSheet = this.state.cheatSheets.find(
      cheatsheet => cheatsheet.secondOptionId === currentSecondOption.id
    );
    this.setState({
      currentSecondOption,
      currentCheatSheet,
      showDetail: true
    });
  }

  render() {
    const category = this.props.match.params.category;
    return (
      <ExplorePage
        handleChangeFirstOption={this.handleChangeFirstOption}
        handleChangeSecondOption={this.handleChangeSecondOption}
        state={this.state}
        category={category}
      />
    );
  }
}

export default ExploreContainer;
