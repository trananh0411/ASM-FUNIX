import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, Form, Input, Button, Modal, ModalBody, ModalHeader, Label, Col, Row} from "reactstrap";
import { Link } from "react-router-dom";

const StaffList = ({ staffs, updateState }) => {
  // set state for name & search for search function
  const [Name, setName] = useState(null);
  const [SEARCH, setSEARCH] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const [New, setNew] = useState({
    name: "",
    doB: "",
    startDate: "",
    department: "Sales",
    salaryScale: "",
    annualLeave: "",
    overTime: "",
  });


  const [touchName, settouchName] = useState(false);

  const [touchdoB, settouchdoB] = useState(false);

  const [touchstartDate, settouchstartDate] = useState(false);

  const [touchsalaryScale, settouchsalaryScale] = useState(false);

  const [touchannualLeave, settouchannualLeave] = useState(false);

  const [touchoverTime, settouchoverTime] = useState(false);

  const STAFFS = staffs.map((staff) => {
    return (
      <Link
        to={`/staff/${staff.id}`}
        className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
        style={{ textDecoration: "none" }}
      >
        <div key={staff.id}>
          <Card tag="li" className="mt-2 p-1">
            <CardImg src={staff.image}></CardImg>
            <CardText>{staff.name}</CardText>
          </Card>
        </div>
      </Link>
    );
  });

  const handleSearch = (event, Name) => {
    event.preventDefault();
    const name = Name.value;
    const X = staffs
      .filter((staff) => {
        if (name === "") {
          return staff;
        } else if (staff.name.toLowerCase().includes(name.toLowerCase())) {
          return staff;
        }
      })
      .map((staff) => {
        return (
          <Link
            to={`/staff/${staff.id}`}
            className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
            style={{ textDecoration: "none" }}
          >
            <div key={staff.id}>
              <Card tag="li" className="mt-2 p-1">
                <CardImg src={staff.image}></CardImg>
                <CardText>{staff.name}</CardText>
              </Card>
            </div>
          </Link>
        );
      });
    setSEARCH(X);
    Name.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ( touchName && error.name != '' || touchdoB && error.doB != ''
      || touchstartDate && error.startDate != '' || touchsalaryScale && error.salaryScale != ''
      || touchannualLeave && error.annualLeave != '' || touchoverTime && error.overTime != ''
      || !touchName && error.name == '' || !touchdoB && error.doB == ''
      || !touchstartDate && error.startDate == '' || !touchsalaryScale && error.salaryScale == ''
      || !touchannualLeave && error.annualLeave == '' || !touchoverTime && error.overTime == '') {
      window.alert("Yêu cầu nhập đủ và chính xác thông tin");
      return;
    } else {
      console.log(error);
      const newStaff = {
        id: staffs.length,
        name: New.name,
        doB: New.doB,
        startDate: New.startDate,
        department: New.department,
        salaryScale: New.salaryScale,
        annualLeave: New.annualLeave,
        overTime: New.overTime,
        image: "/assets/images/alberto.png",
      };
  
      setNew({
        name: "",
        doB: "",
        startDate: "",
        department: "",
        salaryScale: "",
        annualLeave: "",
        overTime: "",
      });
  
      settouchName(false);
      settouchdoB(false);
      settouchstartDate(false);
      settouchsalaryScale(false);
      settouchannualLeave(false);
      settouchoverTime(false);
      setModalOpen(!modalOpen);
  
      updateState(newStaff);
    }
    setModalOpen(!modalOpen);
  };

  // form validation
  const validate = (
    name,
    doB,
    startDate,
    salaryScale,
    annualLeave,
    overTime
  ) => {
    const error = {
      name: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };

    if (touchName && name === "") {
      error.name = "Yêu cầu nhập";
    }

    if (touchName && name.length > 15) {
      error.name = "Nhập tên dưới 15 ký tự";
    }

    if (touchdoB && doB === "") {
      error.doB = "Yêu cầu nhập";
    }

    if (touchstartDate && startDate === "") {
      error.startDate = "Yêu cầu nhập";
    }

    if (touchsalaryScale && salaryScale === "") {
      error.salaryScale = "Yêu cầu nhập";
    }

    if (touchsalaryScale && isNaN(salaryScale)) {
      error.salaryScale = "Yêu cầu nhập số";
    }

    if (touchannualLeave && annualLeave === "") {
      error.annualLeave = "Yêu cầu nhập";
    }

    if (touchannualLeave && isNaN(annualLeave)) {
      error.annualLeave = "Yêu cầu nhập số";
    }

    if (touchoverTime && overTime === "") {
      error.overTime = "Yêu cầu nhập";
    }

    if (touchoverTime && isNaN(overTime)) {
      error.overTime = "Yêu cầu nhập số";
    }

    return error;
  };

  const error = validate(
    New.name,
    New.doB,
    New.startDate,
    New.salaryScale,
    New.annualLeave,
    New.overTime
  );

  return (
    <div className="container">
      <h1 className="pb-3 text-dark">Danh sách nhân viên</h1>

      <div className="row mb-1">
        <div className="col-md-1 mt-1">
          <Button
            className="btn btn-primary"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Add
          </Button>
        </div>

        <div className="col-md-11">
          <form className="form-inline">
            <div className="row">
              <div className="col-md-10">
                  <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nhập tên nhân viên"
                  ref={(input) => {
                    return setName(input);
                  }}
                  className="form-control"
                />
              </div>
              <div className="col-md-2">
                  <button
                  type="submit"
                  onClick={(event) => handleSearch(event, Name)}
                  className="btn btn-info"
                  >
                    Tìm
                  </button>
              </div>
            </div>
          </form>
        </div>

      </div>

      <div>
        <p>
          {SEARCH === null
            ? "* Bấm vào tên nhân viên để xem thông tin."
            : SEARCH.length === 0
            ? ""
            : "* Bấm vào tên nhân viên để xem thông tin."}
        </p>
      </div>

      <div className="row">
        {SEARCH === null
          ? STAFFS
          : SEARCH.length == 0
          ? "Không tìm thấy nhân viên nào"
          : SEARCH}
      </div>

      <div>
        <Modal
          isOpen={modalOpen}
          toggle={(modalOpen) => setModalOpen(!modalOpen)}
        >
          <ModalHeader
            isOpen={modalOpen}
            toggle={(modalOpen) => setModalOpen(!modalOpen)}
          >
            Thêm nhân viên
          </ModalHeader>
          <ModalBody>
            <Form
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              <Row className="mt-2">
                <Label htmlFor="name" md={3}>
                  Tên nhân viên:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={New.name}
                    onChange={(event) => {
                      return setNew({ ...New, name: event.target.value });
                    }}
                    onBlur={(touch) => {
                      return settouchName(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.name}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="doB" md={3}>
                  Ngày sinh:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    value={New.doB}
                    onChange={(event) => {
                      return setNew({ ...New, doB: event.target.value });
                    }}
                    onBlur={(touch) => {
                      return settouchdoB(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.doB}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="startDate" md={3}>
                  Ngày bắt đầu:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={New.startDate}
                    onChange={(event) => {
                      return setNew({ ...New, startDate: event.target.value });
                    }}
                    onBlur={(touch) => {
                      return settouchstartDate(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.startDate}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="department" md={3}>
                  Phòng ban:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    value={New.department}
                    onChange={(event) => {
                      return setNew({ ...New, department: event.target.value });
                    }}
                  >
                    <option>Sales</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                  <p className="text-danger">{error.department}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="salaryScale" md={3}>
                  Hệ số lương:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                    value={New.salaryScale}
                    onChange={(event) => {
                      return setNew({
                        ...New,
                        salaryScale: event.target.value,
                      });
                    }}
                    onBlur={(touch) => {
                      return settouchsalaryScale(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.salaryScale}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="annualLeave" md={3}>
                  Số ngày nghỉ phép còn lại:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                    value={New.annualLeave}
                    onChange={(event) => {
                      return setNew({
                        ...New,
                        annualLeave: event.target.value,
                      });
                    }}
                    onBlur={(touch) => {
                      return settouchannualLeave(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.annualLeave}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="overTime" md={3}>
                  Số ngày làm thêm:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    value={New.overTime}
                    onChange={(event) => {
                      return setNew({ ...New, overTime: event.target.value });
                    }}
                    onBlur={(touch) => {
                      return settouchoverTime(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.overTime}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={{ size: 3, offset: 3 }}>
                  <Button type="submit">Thêm</Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default StaffList;
