import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../App.css";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import StaffList from "./StaffListComponent";
import Staff from "./StaffComponent";
import Header from "./HeaderComponent";
import DepList from "./DepartmentComponent";
import Footer from "./FooterComponent";
import SalaryList from "./SalaryListComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      staffSelected: null,
    };
  }

  
  onStaffSelected(staffId) {
    this.setState({ staffSelected: staffId });
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <Staff
          staffSelected={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.id, 10)
            )[0]
          }
          department={this.state.departments}
        />
      );
    };

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch> 
            <Route
              exact
              path="/"
              component={() => (
                <StaffList
                  staffs={this.state.staffs}
                  departments={this.state.departments}
                  onClick={(staffId) => this.onStaffSelected(staffId)}
                />
              )}
            />
            <Route path="/staff/:id" component={StaffWithId} />
            <Route
              path="/departments"
              component={() => <DepList departments={this.state.departments} />}
            />
            <Route
              path="/salarylist"
              component={() => <SalaryList staffs={this.state.staffs} />}
            />

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
