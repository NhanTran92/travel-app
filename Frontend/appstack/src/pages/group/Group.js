import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import {
  selectGroup,
  selectPage,
  selectSelectedRows,
  selectSize,
  selectSortField,
  selectSortType,
  selectTotalElement,
} from "../../redux/selectors/GroupSelector";
import { getListGroupAction } from "../../redux/actions/GroupActions";
import GroupApi from "../../api/GroupApi";
import * as Icon from "react-feather";
import * as Yup from "yup";
import { ReactstrapInput } from "reactstrap-formik";
import { toastr } from "react-redux-toastr";
import { Formik, FastField, Form } from "formik";

const tableColumns = [
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "totalMember",
    text: "Total Member",
    sort: true,
  },
];

const Group = (props) => {
  const getListGroup = props.getListGroupAction;
  const size = props.size;
  useEffect(() => {
    const getAllGroup = async () => {
      const result = await GroupApi.getAll();
      const groups = result.content;
      console.log(groups);
      getListGroup(groups);
    };
    getAllGroup();
  }, [getListGroup]);

  const deleteGroups = async () => {
    if (
      props.selectedRows === null ||
      props.selectedRows === undefined ||
      props.selectedRows.length === 0
    ) {
      showWrongNotification("Delete Group", "You have not selected group!");
    } else {
      await GroupApi.deleteByIds(props.selectedRows);
      // show notification
      showSuccessNotification("Delete Group", "Delete Group Successfully!");
      // reload group page
      refreshForm();
    }
  };
  const showWrongNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: false,
      progressBar: false,
      position: "top-right",
    };

    // show notification
    toastr.error(title, message, options);
  };

  const handleTableChange = (
    type,
    { page, sizePerPage, sortField, sortOrder, searchText, filters }
  ) => {
    const filter =
      filters && filters.totalMember && filters.totalMember.filterVal
        ? filters.totalMember.filterVal
        : null;
    const minTotalMember =
      filter && filter.minTotalMember ? filter.minTotalMember : null;
    const maxTotalMember =
      filter && filter.maxTotalMember ? filter.maxTotalMember : null;
    getListGroup(
      page,
      sizePerPage,
      sortField,
      sortOrder,
      searchText,
      minTotalMember,
      maxTotalMember
    );
  };
  const refreshForm = () => {
    handleTableChange(null, {
      page: 1,
      sizePerPage: size,
      sortField: null,
      sortOrder: null,
      searchText: "",
      filters: {
        totalMember: null,
      },
    });
  };
  //create
  const [isOpenModals, setOpenModal] = useState(false);

  const showSuccessNotification = (title, message) => {
    const options = {
      timeOut: 2500,
      showCloseButton: false,
      progressBar: false,
      position: "top-right",
    };

    // show notification
    toastr.success(title, message, options);
  };

  return (
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Groups Management</h1>

      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h5" className="mb-0">
                Empty card
              </CardTitle>
            </CardHeader>
            <CardBody>
              <BootstrapTable
                keyField="name"
                data={props.groups}
                columns={tableColumns}
                bootstrap4
                striped
                hover
                bordered={true}
                pagination={paginationFactory({
                  sizePerPage: 5,
                  sizePerPageList: [5, 10, 25, 50],
                })}
              />

              <Row style={{ alignItems: "flex-end" }}>
                <Col xs="3" style={{ paddingBottom: 20 }}>
                  <div className="float-right pull-right">
                    {/* filter button */}
                    <Icon.PlusCircle
                      size="24"
                      className="align-middle mr-2"
                      onClick={() => setOpenModal(true)}
                    />{" "}
                    <Icon.Trash2
                      size="24"
                      className="align-middle mr-2"
                      onClick={deleteGroups}
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={isOpenModals}>
        <ModalHeader>Create Group</ModalHeader>

        <ModalBody className=" m-3">
          <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required("Required")
                .max(50, "Must be between 6 to 50 characters")
                .min(6, "Must be between 6 to 50 characters")
                .test(
                  "checkUniqueName",
                  "This name is already exists.",
                  async (name) => {
                    // call api
                    const isExists = await GroupApi.existsByName(name);
                    return !isExists;
                  }
                ),
            })}
            onSubmit={async (values) => {
              try {
                // call api
                await GroupApi.create(values.name);
                setOpenModal(false);
                // show notification
                showSuccessNotification(
                  "Create Group",
                  "Create Group Successfully!"
                );
                // reload group page
                refreshForm();
              } catch (error) {
                console.log(error);
                setOpenModal(false);
              }
            }}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* header */}
                <ModalHeader>Create Group</ModalHeader>

                {/* body */}
                <ModalBody className="m-3">
                  {/* Firstname */}
                  <Row style={{ alignItems: "center" }}>
                    <Col xs="auto">Group Name:</Col>
                    <Col>
                      <FastField
                        //label="Group Name"
                        bsSize="lg"
                        type="text"
                        name="name"
                        placeholder="Enter Group Name"
                        component={ReactstrapInput}
                      />
                    </Col>
                  </Row>
                </ModalBody>

                {/* footer */}
                <ModalFooter>
                  {/* resend */}
                  <Button
                    color="primary"
                    style={{ marginLeft: 10 }}
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Save
                  </Button>

                  {/* close button */}
                  <Button color="primary" onClick={() => setOpenModal(false)}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </Container>
  );
};

const mapGlobalStateToProps = (state) => {
  return {
    groups: selectGroup(state),
    page: selectPage(state),
    size: selectSize(state),
    totalElement: selectTotalElement(state),
    sortField: selectSortField(state),
    sortType: selectSortType(state),
    selectedRows: selectSelectedRows(state),
  };
};

export default connect(mapGlobalStateToProps, { getListGroupAction })(Group);
