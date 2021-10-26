import React from "react";
import { Card, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from 'react-router-dom';

const DepList = ({departments}) => {

    const Dep = departments.map((dep) => {
      return (
          <div key={dep.id} className="col col-12 col-md-6 col-lg-4">
            <Card tag="li" className="mt-2 p-1">
              <CardTitle>{dep.name}</CardTitle>
              <CardText>Số lượng nhân viên: {dep.numberOfStaff} </CardText>
            </Card>
          </div>
      );
    });

    return (
      <div className="container mb-3">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h1 className="pb-3 text-dark">Danh sách phòng ban</h1>
        <div className="row">{Dep}</div>
      </div>
    );
}

export default DepList;
