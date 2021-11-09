import React, { Component } from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem,} from "reactstrap";
import { Link } from "react-router-dom";

const basicSalary = 1000000;
const overTimeSalary = 50000;


class SalaryList extends Component {
  render() {

    const STAFFS = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col col-12 col-md-6 col-lg-4 p-2">
          <Card className="mt-2 p-1">
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
              Lương: {(
                staff.salaryScale * basicSalary +
                staff.overTime * overTimeSalary
              ).toFixed(0)}
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
        <h1 className="pb-3 text-dark">Danh sách bảng lương</h1>
        <div className="row">{ STAFFS }</div>
      </div>
    );
  }
}

export default SalaryList;
