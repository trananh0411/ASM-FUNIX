import React, { Component } from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";


class SalaryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const STAFFS = this.props.staffsSalaries.map((staff) => {
      return (
        <div key={staff.id} className="col col-12 col-md-6 col-lg-4 p-2">
          <Card tag="li" className="mt-2 p-1">
            <CardTitle>{staff.name}</CardTitle>
            <CardText className="pl-2 pb-2">Mã nhân viên: {staff.id}</CardText>
            <CardText className="pl-2 pb-2">
              Hệ số lương: {staff.salaryScale}
            </CardText>
            <CardText className="pl-2 pb-2">
              Số giờ làm thêm: {staff.overTime}
            </CardText>
            <CardText
              className="pl-3 pb-2 bg-light"
              style={{ borderTop: "1px solid #878787" }}
            >
              Lương: {staff.salary}
            </CardText>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">{ this.props.isLoading ? <Loading />
        : this.props.errMes != null ? this.props.errMes: STAFFS}</div>
      </div>
    );
  }
}

export default SalaryList;
