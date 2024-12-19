import {
  Avatar,
  Box,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const usersRating = [
  {
    id: 1,
    userName: "Anitha",
    State: "Telangana",
    city: "Hyderabad",
    noOfStar: 5,
    comments: "Awsome product!",
    ratingDate: "19-July-22",
    productCategory: "Chemical Compound",
    productName: "6-Chloro Uracil CAS",
  },
  {
    id: 2,
    userName: "Ayan",
    State: "Madhya Pradesh",
    city: "Sagar",
    noOfStar: 3.5,
    comments: "Good",
    ratingDate: "19-July-22",
    productCategory: "Diethyl Malonate",
    productName: "6-Chloro Uracil CAS",
  },
  {
    id: 3,
    userName: "Niraj",
    State: "Telangana",
    city: "Hyderabad",
    noOfStar: 1,
    comments: "Poor",
    ratingDate: "19-July-22",
    productCategory: "Chemical Compound",
    productName: "6-Chloro Uracil CAS",
  },
];
function UsersRating() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "70%",margin: "0 auto",}}>          
        <Typography variant="h5" marginBottom={"2rem"}>
          Most Relevant Reviews
        </Typography>

        {usersRating.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {item.userName[0]}
              </Avatar>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Typography variant="p">
                  {`${item.userName} `}
                  <Typography variant="p" sx={{ color: "gray" }}>
                    | {item.city}, {item.State}
                  </Typography>
                </Typography>

                <Rating
                  name="simple-controlled"
                  readOnly
                  precision={0.5}
                  value={item.noOfStar}
                  size="small"
                />

                <Typography variant="p">
                  {item.ratingDate}
                  <Typography variant="p" sx={{ color: "gray" }}>
                    {" "}
                    | Product Name:
                  </Typography>{" "}
                  {item.productCategory}
                </Typography>

                {item.comments.trim() && (
                  <Typography variant="p">{item.comments}</Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}

export default UsersRating;
