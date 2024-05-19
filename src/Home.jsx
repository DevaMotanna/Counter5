import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/base";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Grid container>
      <Grid item>
        <Grid>
          <Typography sx={{ color: "blue" }}>Count : {count}</Typography>
          <Button onClick={() => handleIncrement()}>Increment</Button>
          <Button onClick={() => handleDecrement()}>Decrement</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
