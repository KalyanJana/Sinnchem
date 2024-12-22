import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";
import { Rating } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { linearProgressClasses } from "@mui/material/LinearProgress";

const starBar = [
  { id: 1, barPercentage: 100, userCounts: 3, noOfStar: 5 },
  { id: 2, barPercentage: 80, userCounts: 1, noOfStar: 4 },
  { id: 3, barPercentage: 0, userCounts: 0, noOfStar: 3 },
  { id: 4, barPercentage: 0, userCounts: 0, noOfStar: 2 },
  { id: 5, barPercentage: 20, userCounts: 1, noOfStar: 1 },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));


const totalStar = starBar.reduce((acc,curr)=>{
  return acc +=(curr.noOfStar * curr.userCounts)
}, 0)

const totalUsers = starBar.reduce((acc,curr)=>{
  return acc +=curr.userCounts
}, 0)

function RatingAndReview() {
  const [value, setValue] = useState<number | null>(totalStar/totalUsers);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Typography variant="h4">Rating & Reviews</Typography>

        <Grid container spacing={2}  sx={{mt: '2rem'}}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Typography>{`${value}/${totalUsers}`}</Typography>
              <Rating
                name="simple-controlled"
                readOnly 
                precision={0.5}
                value={value}
                size="large"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <Typography>{`Reviewed by ${totalUsers} users`}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} >
            {starBar.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile, left align on larger screens
                  }}
                >
                  <Typography>{item.noOfStar}</Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={item.barPercentage}
                    sx={{ width: "40%" }}
                  />
                  <Typography>{item.userCounts}</Typography>
                </Grid>
              );
            })}
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}

export default RatingAndReview;
