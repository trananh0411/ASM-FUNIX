import React, { Component } from "react";
import {Card, CardImg, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from "./LoadingComponent";

class DepStaffs extends Component {

  render() {
    const STAFFS = this.props.depStaffs.depStaffs.map((staff) => {
      return (
        <Link
          to={`/staff/${staff.id}`}
          className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
          style={{ textDecoration: "none" }} key={staff.id}
        >
          <div>
            <Card tag="li" className="mt-2 p-1">
              <CardImg src={staff.image}></CardImg>
              <CardText>{staff.name}</CardText>
            </Card>
          </div>
        </Link>
      );
    });
  
    return (
      <div className="container">
        <h1 className="pb-3 text-dark">Danh sách nhân viên phòng ban {this.props.depName} </h1>
  
        <div>
          <p>
            * Bấm vào tên nhân viên để xem thông tin.
          </p>
        </div>
  
        <div className="row">
          {this.props.depStaffs.isLoading? <Loading /> 
          : this.props.depStaffs.errMes != null ? this.props.depStaffs.errMes 
          : STAFFS} 
        </div>
  
      </div>
    );
  }
}

export default DepStaffs;



