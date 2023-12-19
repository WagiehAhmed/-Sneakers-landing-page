import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import HomeSectionStyles from "./HomeSection.module.css";
export default function HomeSection() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: { xs: "100vh" },
        position: "relative",
        bgcolor: "red",
      }}
    >
      <Box
        sx={{
          padding: 3,
          paddingTop:{xs:"400px",md:"300px"},
          paddingLeft:{xs:"15px",md:"300px"},
          minWidth: { sm: "500px", lg: "600px", xl: "800px" },
          bgcolor: "blue",
        }}
      >

        <Typography
          variant="h6"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        >
          nike
        </Typography>
        <Typography
          variant="h2"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        >
          air max mothion 2
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: { sm: "530px" },
            marginTop: 1,
            marginBottom: 3,
            fontWeight: "normal",
          }}
        >
          rule the streets in the nike air max mothion 2, they biend performance
          details with streetwear.
        </Typography>

        <Stack
          sx={{
            width: "250px",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {["40", "41", "42"].map((size) => (
            <Button
              sx={{ paddingY: 2, margin: 1, marginLeft: 0, flexGrow: 1 }}
              className="btn"
            >
              {size}
            </Button>
          ))}
        </Stack>
        <Typography
          variant="h4"
          sx={{ padding: 4, paddingLeft: 0, fontWeight: "bold" }}
        >
          $99.00
        </Typography>

        {/* image */}
        <Box
          sx={{
            position: "absolute",
            top: {xs: "50px", md:"80px"},
            right: {xs: "50px", md:"300px"},
            width: { xs: "380px", sm: "400px" },
            height: { xs: "330px", sm: "400px" },
            bgcolor: "black",
          }}
          className={HomeSectionStyles.circle}
        >
          <img
            src="./images/imghome-black.png"
            style={{
              width: "400px",
              height: "240px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-57%, -50%) scaleX(-1) rotate(20deg)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
