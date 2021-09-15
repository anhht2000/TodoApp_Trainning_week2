import {
  Box,
  Button,
  Fab,
  FormControl,
  makeStyles,
  OutlinedInput,
  Paper,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { todoApi } from "../../apis/todoApi";
import { theme } from "../../App";
import DialogForm from "../../components/commons/DialogForm";
import { AppContext } from "../../context/AppProvider";
import TodoItems from "./components/TodoItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "600px",
    maxWidth: "100%",
    margin: "0 auto",
    marginTop: theme.spacing(8),
    // [theme.breakpoints.down("md")]: {
    //   backgroundColor: "red",
    // },
  },
  title: {
    flexGrow: 1,
  },
  outlineInput: {
    padding: "0",
  },
  buttonSubmit: { width: "140px", color: "white" },
  todoList: {
    padding: "10px 20px",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const {
    todoList,
    handleDelete,
    handleAdd,
    handleGetOne,
    handleEdit,
    handleSearch,
    handleChange,
  } = useContext(AppContext);
  //form
  const [initialValue, setInitialValue] = useState({ name: "", description: "" });
  //handlesubmit
  const handleSubmit = (value) => {
    handleAdd(value);
  };
  const handleSubmitEdit = (value) => {
    handleEdit(value);
  };
  //form
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenEdit = async (id) => {
    const res = await todoApi.getTodo(id);
    if (res.errCode === 0) {
      setInitialValue({
        id: res.data[0].id,
        name: res.data[0].name,
        description: res.data[0].description,
      });
    }
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setInitialValue({
      id: null,
      name: "",
      description: "",
    });
  };

  return (
    <Paper elevation={3} className={classes.root}>
      {console.log(initialValue)}
      <Box display='flex' padding={theme.spacing(1, 3)}>
        <Typography variant='h6' className={classes.title}>
          Todos
        </Typography>
        <Fab color='secondary' aria-label='add' size='small' onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Box>
      <Box padding={2}>
        <FormControl size='small' fullWidth>
          <OutlinedInput
            className={classes.outlineInput}
            placeholder='Enter to search'
            color='secondary'
            onChange={(e) => setValue(e.target.value)}
            endAdornment={
              <Button
                variant='contained'
                color='secondary'
                className={classes.buttonSubmit}
                onClick={(e) => handleSearch(value)}
              >
                Submit
              </Button>
            }
          />
        </FormControl>
      </Box>
      <Paper elevation={2} className={classes.todoList}>
        <TodoItems
          data={todoList.data}
          handleDelete={handleDelete}
          handleGetOne={handleGetOne}
          handleClickOpenForm={handleOpenEdit}
          handleChange={handleChange}
        />
      </Paper>
      {/* dialgo */}
      {open && (
        <DialogForm
          initialValue={initialValue}
          onSubmit={handleSubmit}
          label='Add'
          open={open}
          handleClose={handleClose}
        />
      )}
      {openEdit && (
        <DialogForm
          initialValue={initialValue}
          onSubmit={handleSubmitEdit}
          label='Edit'
          open={openEdit}
          handleClose={handleCloseEdit}
        />
      )}
    </Paper>
  );
}
