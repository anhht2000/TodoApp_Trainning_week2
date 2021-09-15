import { Box, Button, ButtonGroup, Checkbox, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { toast } from "react-toastify";
import DialogConfirm from "../../../components/commons/DialogConfirm";
import DialogForm from "../../../components/commons/DialogForm";

const useStyles = makeStyles((theme) => ({
  root: {},
  todoName: {
    flexGrow: 1,
  },
  todoNameDone: {
    textDecoration: "line-through",
    flexGrow: 1,
  },
}));

export default function TodoItems({
  data,
  handleDelete,
  handleChange,
  handleGetOne,
  initialValue,
  handleClickOpenForm,
  handleSubmit,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {data?.map((element) => (
        <Box display='flex' alignItems='center' key={element.id}>
          <Checkbox
            size='small'
            checked={element.status}
            onClick={() => handleChange(element.id, !element.status)}
          />
          <Typography
            variant='subtitle1'
            className={element.status ? classes.todoNameDone : classes.todoName}
          >
            {element.name}
          </Typography>
          <ButtonGroup variant='text' color='secondary' size='small'>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => handleClickOpenForm(element.id)}
            >
              Edit
            </Button>
            <Button variant='contained' color='primary' onClick={handleClickOpen}>
              Delete
            </Button>
          </ButtonGroup>
          {/* dialog  */}
          <DialogConfirm
            todo={element}
            open={open}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </Box>
      ))}
    </>
  );
}
