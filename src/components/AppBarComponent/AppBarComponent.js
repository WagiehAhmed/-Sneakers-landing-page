import {
    AppBar,
    Avatar,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    Box
  } from "@mui/material";
  import React, { useState } from "react";
  import LocalMallIcon from "@mui/icons-material/LocalMall";
  import MenuIcon from "@mui/icons-material/Menu";
export default function AppBarComponent(props) {
    const [isOpen, setIsOpen] = useState(false)
    const drawerTragerHandler = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <Box >
      <AppBar className="app-bar" sx={{paddingX:{md:5, lg:15}}}>
        <Toolbar>
          <Stack
            sx={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // border: "2px solid red",
            }}
          >
            <IconButton
              sx={{ display: { xs: "block", md: "none" }, color: "inherit" }} onClick={drawerTragerHandler}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Stack
              sx={{
                flexDirection: "row",
                flexGrow: 1,
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                // border: "2px solid red",
              }}
            >
              <IconButton>
                <Avatar src="./images/favcion.png" alt="logo"/>
              </IconButton>
              <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                sneakers
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: { xs: "none", md: "block" },
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // border: "2px solid red",
              }}
            >

              {props.navItems.map(item=>(
                <Button
                sx={{
                  marginX: 2,
                  color: "inherit",
                  textTransform: "capitalize",
                }}
                key={item}
                className="nav-hover"
              >
                {item}
              </Button>
              ))}
             
              <IconButton sx={{ marginX: 2, color: "inherit" }}>
                <LocalMallIcon />
              </IconButton>
            </Stack>
            <IconButton
              sx={{
                display: { xs: "block", md: "none" },
                marginX: 2,
                color: "inherit",
              }}
            >
              <LocalMallIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isOpen} onClose={drawerTragerHandler} sx={{position:"absolute",zIndex:1}}>
        <Toolbar/>
        <List sx={{width:"200px"}}>
          {["home", "featured", "woman", "new", "sale"].map((text) => (
            <ListItem key={text} disablePadding sx={{ textTransform: "uppercase"}} className="nav-hover" onClick={drawerTragerHandler}>
              <ListItemButton>
                <ListItemText primary={text}  sx={{marginX:"25px"}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
