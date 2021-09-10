import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Cancel from '@material-ui/icons/Cancel';


const useStyles = makeStyles((theme)=>({
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    logoLg:{
      display:"none",
      [theme.breakpoints.up('sm')]:{
          display:"block",
      },
  },
    logoSm:{
    display:"block",
    [theme.breakpoints.up('sm')]:{
        display:"none",
    },
  },
  search:{
      display:"flex",
      alignItems:"center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover":{
          backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius:theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down('sm')]:{
        display:(props)=> (props.open ? "flex" : "none"),
        width:"70%",
    },
  },
  input:{
      color:'white',
      marginLeft: theme.spacing(1),
  },
  cancel: {
      [theme.breakpoints.up("sm")] :{
          display: "none",
      },
  },
  searchButton:{
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
        display: "none",
    },
  },
  icons:{
    alignItems:'center',
    display:(props)=> (props.open ? "none" : "flex"),
  },
  badge:{
      marginRight: theme.spacing(2),
  }
}));


const Navbar = () => {
    const [open,setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
            Lama Dev
        </Typography> {/* There is already an h1 in the page, let's not duplicate it. {/* There is already an h1 in the page, let's not duplicate it. */}
        <Typography variant="h6" className={classes.logoSm}>
            Lama
        </Typography>
        <div className={classes.search}>
            <SearchIcon/>
            <InputBase placeholder="Search..." className={classes.input}/>
            <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
        </div>
        <div className={classes.icons}>
            <SearchIcon className={classes.searchButton} 
            onClick={() =>setOpen(true)} />
        <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon />
        </Badge>
        <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
        </Badge>
        <Avatar alt="Remy Sharp" src="https://s1.eestatic.com/2017/09/27/mundo/europa/grecia-santorini-mar_egeo_249988121_48372205_1024x576.jpg" />
        </div>
        </Toolbar>
    </AppBar>
  ) 
};

export default Navbar;