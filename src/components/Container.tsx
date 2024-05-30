import Box from "@mui/material/Box";

const Container = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="section"
    sx={{
      p: 5,
      border: "1px dashed grey",
      boxShadow: 4,
      backgroundColor: "#DBDFDF",
    }}
  >
    {children}
  </Box>
);

export default Container;
