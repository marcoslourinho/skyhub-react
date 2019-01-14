import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as ReportActions from './store/actions'
import Header from './components/header'
import Panel from './components/panel'
import List from './components/list'
import './App.css'

class App extends Component {

  componentWillMount() {
    this.props.listReports();
  } 

  render(){
    return (
        <div>
          <section>
             <Header />
          </section>
          <section>
              <Panel />
          </section>
          <section>
             <List />
          </section>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  reports: state.reports
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ReportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

