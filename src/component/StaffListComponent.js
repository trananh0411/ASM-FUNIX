import React, { Component } from 'react';
import dateFormat from 'dateformat'; 
class Staffs extends Component {
    constructor(props) {
        super(props);
      
       this.state = {
         selectedSatffs: null
       }
  }

    onStaffsSelect(staffs) {
      this.setState({selectedSatffs: staffs});
    }

    renderStaffs(staffs) {
      if (staffs != null) {
        return(
              <div>
                  <p>Họ và tên: {staffs.name}</p>
                  <p>Ngày sinh:{dateFormat(staffs.doB, "dd/mm/yyyy")}</p>
                  <p>Ngày vào công ty: {dateFormat(staffs.starDate, "dd/mm/yyyy")}</p>
                  <p>Phòng ban:{staffs.department.name}</p>
                  <p>Số ngày nghỉ còn lại: {staffs.annualLeave}</p>
                  <p>Số ngày đã làm thêm: {staffs.overTime}</p>
              </div>
        )
      }else {
        return(
          <div></div>
        )
      }
    }
   
    render() {
        const info = this.renderStaffs(this.state.selectedSatffs);
        const menu = this.props.staffs.map((staffs) => {
            return (
              
              <div key={staffs.id} className="col-lg-4 col-sm-6 col-12 mt-5">
                  <button className="button" onClick={()=>this.onStaffsSelect(staffs)}>{staffs.name}                  
                  </button>
              </div>
                
            );
        });
        return (
          <div className="container">
            <div className="row">
              {menu}
              {info}
            </div>
          </div>
        );
    }
}

export default Staffs;