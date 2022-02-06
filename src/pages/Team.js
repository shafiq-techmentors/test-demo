import React, { useState, useEffect } from "react";
import { Grid, Divider, Paper } from "@mui/material";

export default function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  console.log("Data from api....", data);

  return (
    <div>
      <h1>Our Team</h1>
      <Divider />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
        spacing={2}
      >
        {data?.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              style={{ marginBottom: "10px" }}
              key={item.id}
            >
              <Paper elevation={3} sx={{ p: 3 }}>
                <h3>{item.name}</h3>
                <h5>{item.email}</h5>
                <h5>{item.phone}</h5>
                <h5>{item.username}</h5>
                <h5>{item.website}</h5>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
