import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

export default function DialogConfirm({ todo, open, handleClose, handleDelete }) {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-slide-title'>{"Confirm!!!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          Are your sure want to remove this todo from list??
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined' color='secondary'>
          Cancle
        </Button>
        <Button
          onClick={() => {
            handleDelete(todo?.id);
            handleClose();
          }}
          variant='outlined'
          color='secondary'
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
