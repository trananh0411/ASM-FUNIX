import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

class Staff extends Component {
  renderStaff(staff) {
    return (
      <div className="mb-4 row mt-4">
        <div className="col-12 col-lg-6">
          <CardImg src={staff.image} className="staff-card-img"></CardImg>
        </div>
        <div className="col-12 col-lg-6">
          <h5>Họ và tên: {staff.name}</h5>

          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </div>
      </div>
    );
  }

  render() {
    const staff = this.props.staffSelected;

    return (
      <div className="container">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <h1 className="pb-3 text-dark">Thông tin nhân viên</h1>

        <div>{this.renderStaff(staff)}</div>

      </div>
    );
  }
}

export default Staff;


