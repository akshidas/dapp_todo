import { Box, Button } from "@mui/material";
import useDelete from "./hooks/use-delete";

const Remove = ({ id }) => {
  const remove = useDelete();
  return (
    <Box>
      <Button onClick={remove(id)} variant="contained" size="small">
        remove
      </Button>
    </Box>
  );
};

export default Remove;
