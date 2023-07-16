import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import GroupApi from "../../../Api/GroupApi"
// import getListGroupAction from "../../../redux/actions/GroupActions"
import { Button , TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./Group.scss"
import SearchIcon from '@mui/icons-material/Search';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"




export default function DataTable(props) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: ' Name', width: 200 },
    {
      field: 'totalMember',
      headerName: 'TotalMember',
      type: 'number',
      width : 300
    },
    {
    
      width: 90,
      renderCell: (params) => (
        <DeleteIcon fontSize='small'
        onClick={() => handleDeleteGroup(params.row.id)}
        style={{ cursor: 'pointer' }} />
      ),
    },
   
   
  ];
  

  // get All Group
  const getListGroup = props.getListGroupAction;
  // const size = props.size;
  React.useEffect(() => {
    const getAllGroup = async () => {
      const result = await GroupApi.getAll();
      const groups = result.data.content;
      // console.log(result);
      setState(groups);
    };
    getAllGroup();
  }, []);

  const [state , setState] = React.useState([]);

  // Get Group
  const getGroup =async () =>{
    const result = await GroupApi.getAll();
    const groups = result.data.content;
    // console.log(result);
    setState(groups);
  }
  // Create Group
  const [showTable , setShowTable] = React.useState(false);

  const [groupName, setGroupName] = React.useState();

  const [groupList, setGroupList] = React.useState([]);

  const handleCreateGroup = async  (e) => {
    try {
    
      const group = await GroupApi.create(
         groupName);
      setGroupList([...state, group.data] );
      setGroupName("")
      // setShowTable(true)
      if (group.status===200) {
        alert("Create Success!!!!")
        getGroup();
        setShowTable(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Show ô input cho người dùng nhập thông tin tạo Group
  const handleIconClick = () => {
    setShowTable(true);
  };

  // set dữ liệu của người dùng nhập vào
  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };


  // Delete Group

  // cập nhật id của Gruop vào selectedGroupId
  const [selectedGroupId, setSelectedGroupId] = React.useState('');

  const [Groups, setGroups] = React.useState([]);

  const handleDeleteGroup = async (id) => {
    try {
      const group = await GroupApi.deleteById(id)
      // setState(state.filter((group) => group.id !== id));
      const updatedRows = state.filter((row) => row.id !== id);
      if (group.status===200) {
        alert("Delete Success!!!!")
        getGroup();
      }
    } catch (error) {
      console.error('Error deleting object:', error);
    }
  };
  
  // Search

  //Tạo một biến state để lưu trữ giá trị tìm kiếm
  const [searchGroup, setSearchGroup] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([])


  //Tạo hàm handleSearch để thực hiện tìm kiếm dựa trên tên của group.
  const [inforGroup , setInforGroup ] = React.useState({})
  const handleSearch = async (name) => {
    try {
      const response = await GroupApi.existsByName(name);
     
      if (response.status === 200) {
        // setSearchResults(response.data);
        setState(response.data);
      }
      else {
        setSearchResults([]);
        // setState([])
      }
    } catch (error) {
      console.error('Error searching groups:', error);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchGroup(value);
    handleSearch(value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchGroup);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
    
    <form onSubmit={handleSearchSubmit}>
  <input
    type="text"
    placeholder="Search group..."
    value={searchGroup}
    onChange={handleSearchChange}
    style={{ width: '400px', height: '33px' }}
  />
  <button type="submit"><SearchIcon fontSize='medium' onClick = {handleSearch}/></button>
 
</form>

       {!showTable && (
        <Button  onClick={handleIconClick}>
          <AddCircleOutlineIcon fontSize='large'/>
        </Button>
      )}

      {showTable && (
        <div>
          <TextField
            label="Group Name"
            placeholder='Group Name'
            value={props.groupName}
            onChange={handleGroupNameChange}
          />
          <Button variant="contained" onClick={handleCreateGroup}>
            Add to Group List
          </Button>
        </div>
      )}
      <DataGrid
       rows={state}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5},
          },
        }}
        pageSizeOptions={[5, 30]}
        checkboxSelection
      />
      {/* {searchResults.length > 0 ? (
  <DataGrid rows={searchResults} columns={columns} pageSize={5} />
) : (
  <DataGrid rows={state} columns={columns} pageSize={5} />
)} */}
   
  
      {/* <Button onClick={handleTable}>onClick</Button> */}
  
    </div>
  );
}