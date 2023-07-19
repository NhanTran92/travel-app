// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { NavLink, Outlet } from 'react-router-dom';
// import "./features.scss"
// import useResize from '../../hook/useResize';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import Diversity2Icon from '@mui/icons-material/Diversity2';
// import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
// import GiteIcon from '@mui/icons-material/Gite';


// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);

//   const [menu, setMenu] = React.useState([
//     {
//       path : "home",
//       name : "Home",
//       icon : <GiteIcon/>
//     },
//     {
//       path : "inbox",
//       name : "Inbox",
//       icon : <MoveToInboxIcon/>
//     },
//     {
//       path : "group",
//       name : "Group",
//       icon : <Diversity2Icon/>
//     },
//     {
//       path : "signup",
//       name : "SignUp",
//       icon : <SentimentSatisfiedAltIcon/>
//     },
//     {
//       path : "signin",
//       name : "SignIn",
//       icon : <VpnKeyIcon />
//     }
//   ]);

//   const size = useResize();

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const navLinkClass = ({isActive}) =>{
//     return isActive ? "active nav-link" : "nav-link" 
//   }
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//            {size.width > 768 ? "PC" : "Mobile"}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {menu.map((item, index) => (
//             <NavLink key={index} to={item.path} className={navLinkClass}>
            
//               <ListItem  disablePadding sx={{ display: 'block' }}>
                
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//             </NavLink>
//           ))}
//         </List>
//         <Divider />
      
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//        <Outlet/>
//       </Box>
//     </Box>
//   );
// }

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import "./features.scss"
import { Outlet } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Promotion from './Header/Promotion';
import News from './Header/News';
import Transport from './Header/Transport';
import Travel from './Header/Travel';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
 
 // Hiện menu khi click vào Du lịch ở header
    const [isOpenMenu, setIsMenuOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };


    // Vận chuyển
    const [isOpenMenuTransport, setIsMenuOpenTransport] = React.useState(false);
  
    const toggleMenuTransport = () => {
      setIsMenuOpenTransport(!isOpenMenuTransport);
    };

    const closeMenuTranssport = () => {
      setIsMenuOpenTransport(false);
    };

    // Tin tức

    const [isOpenMenuNews, setIsMenuOpenNews] = React.useState(false);
  
    const toggleMenuNews = () => {
      setIsMenuOpenNews(!isOpenMenuNews);
    };

    const closeMenuNews = () => {
      setIsMenuOpenNews(false);
    };

    // Khuyến mãi
    const [isOpenMenuPromotion, setIsMenuOpenPromotion] = React.useState(false);
  
    const toggleMenuPromotion = () => {
      setIsMenuOpenPromotion(!isOpenMenuPromotion);
    };

    const closeMenuPromotion = () => {
      setIsMenuOpenPromotion(false);
    };


  return (
    <Box sx={{ flexGrow: 12 }}>
      <AppBar  position="static" color="">
      <Toolbar >
      <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <img style={{height : "70px" ,width : "100px"}} src='https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Travel-logo-design-Graphics-9786083-1-1-580x435.jpg'></img>
          </Typography>

          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{padding:"20px",cursor: 'pointer', position: 'relative'}} 
              onClick={isOpenMenu ? closeMenu : toggleMenu}
            >
              Du lịch
                {isOpenMenu ? (
                  <ExpandLessIcon style={{ marginLeft: '5px' }} />
                    ) : (
                      <ArrowDropDownIcon style={{ marginLeft: '5px' }} />
                    )}
            </Typography>
            {isOpenMenu && <div className="slide-in-travel">
          <Travel />
        </div>}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{padding:"20px" , left:"20px"}} 
            >
              <a className='a' href='https://vietravelmice.com/'> Vietravel MICE</a>
             
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{padding:"20px" , left:"20px",cursor: 'pointer', position: 'relative'}} 
              onClick={isOpenMenuTransport ? closeMenuTranssport : toggleMenuTransport}
            >
              Vận Chuyển
              {isOpenMenuTransport ? (
                  <ExpandLessIcon style={{ marginLeft: '5px' }} />
                    ) : (
                      <ArrowDropDownIcon style={{ marginLeft: '5px' }} />
                    )}
            </Typography>
            {isOpenMenuTransport && <div className="slide-in-transport">
          <Transport />
        </div>}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{padding:"20px" , left:"20px",cursor: 'pointer', position: 'relative'}} 
              onClick={isOpenMenuNews ? closeMenuNews : toggleMenuNews}
            >
             Tin Tức
             {isOpenMenuNews ? (
                  <ExpandLessIcon style={{ marginLeft: '5px' }} />
                    ) : (
                      <ArrowDropDownIcon style={{ marginLeft: '5px' }} />
                    )}
             
            </Typography>
            {isOpenMenuNews && <div className="slide-in-news">
          <News />
        </div>}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{padding:"20px" , left:"20px" ,cursor: 'pointer', position: 'relative'}} 
              onClick={isOpenMenuPromotion ? closeMenuPromotion : toggleMenuPromotion}
            >
              Khuyến Mãi
              {isOpenMenuPromotion ? (
                  <ExpandLessIcon style={{ marginLeft: '5px' }} />
                    ) : (
                      <ArrowDropDownIcon style={{ marginLeft: '5px' }} />
                    )}
            </Typography>
            {isOpenMenuPromotion && <div className="slide-in-promotion">
          <Promotion />
        </div>}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{padding:"20px" , left:"20px"}} 
            >
              <a className="a" href='https://vietravelplus.com/'> VietravelPlus</a>
             
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{padding:"20px" , left:"20px"}} 
            >
              <a className='a' href='https://travel.com.vn/lien-he.aspx'> Liên Hệ</a>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Bắt đầu tìm kiếm"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
       
      </AppBar>
      <Outlet/>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

