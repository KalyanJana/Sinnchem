import { Box, Button, Container, Grid, Typography } from "@mui/material";

import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import { Link } from "react-router-dom";

const companyProfile = [
  {
    iconComponet: <FactoryOutlinedIcon />,
    type: "Nature of Business",
    value: "Manufacturere",
    id: "1",
  },
  {
    iconComponet: <GroupsOutlinedIcon />,
    type: "Total Number of Employees",
    value: "Upto 10 People",
    id: "2",
  },
  {
    iconComponet: <BusinessOutlinedIcon />,
    type: "Year of Establishment",
    value: "2021",
    id: "3",
  },
  {
    iconComponet: <BalanceOutlinedIcon />,
    type: "Legal Status of Firm",
    value: "Limited Company (Ltd./Pvt.)",
    id: "4",
  },
  {
    iconComponet: <LeaderboardOutlinedIcon />,
    type: "Annual Turnover",
    value: "Upto Rs. 50 Lakh",
    id: "5",
  },
  {
    iconComponet: <TaskOutlinedIcon />,
    type: "GST Number",
    value: "36ABFCS9022H1Z8",
    id: "6",
  },
];

function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1rem",
          m: "1rem",
        }}
      >
        <Typography variant="h5">About Us</Typography>
        <Typography variant="body1">
          Established as a Pvt.Limited Company firm in the year 2021, we
          “Sinnchem Life Sciences (opc) Private Limited” are a leading
          Manufacturer of a wide range of Industrial Chemical. Sinnchem Life
          Sciences Pvt. Ltd is a contract research and manufacturing
          organization, which supports R&D programs from lead generation to
          clinical.
        </Typography>
        <Button
          variant="text"
          component={Link}
          to={"/about"}
          sx={{
            display: "block",
            margin: "0 auto",
            p: "0",
            borderRadius: "5px",
          }}
        >
          + Read More
        </Button>

        <Grid
          container
          rowSpacing={3}
          sx={{width: '100%', m: "0 auto",}}
        >
          {
            companyProfile.map(item=>{
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "48%",
                      backgroundColor: "rgba(0,0,0,0.1)",
                      p: "1rem",
                    }}
                  >
                    {item.iconComponet}
                  </Box>
  
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "gray" }}>{item.type}</Typography>
                    <Typography>{item.value}</Typography>
                  </Box>
                </Grid>
              );
            })
          }
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
