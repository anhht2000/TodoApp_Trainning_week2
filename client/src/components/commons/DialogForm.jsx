import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../FormFields/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("You must typing in name's todo")
    .min(4, "Please enter min 4 character")
    .typeError("You must enter letter"),
  description: yup
    .string()
    .required("You must typing in description's todo")
    .typeError("You must enter letter"),
});

export default function DialogForm({ initialValue, onSubmit, open, handleClose, label }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  const handleSm = (value) => {
    reset(initialValue);
    onSubmit(value);
    handleClose();
  };
  // const handleAddTodo = ()=>{}
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-slide-title'>{label + " Form!!!"}</DialogTitle>
      <form onSubmit={handleSubmit(handleSm)}>
        <DialogContent>
          <Card>
            <CardContent>
              <InputField control={control} name='name' label='Todo Name' />
              <InputField control={control} name='description' label='Todo Name' />
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button type='submit' variant='contained' color='secondary'>
            Add
          </Button>
          <Button onClick={handleClose} variant='contained' color='secondary'>
            Cancle
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
