import React from 'react';
import {
    AlertDialog,
    AlertDialogLabel,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogContent,
  } from "@reach/alert-dialog";

export default function ExampleAlert(props) {
    const [showDialog, setShowDialog] = React.useState(false);
    const cancelRef = React.useRef();
    const open = () => setShowDialog(true);
    const destroyStuff = () => {
      console.log("Destroyed!");
      setShowDialog(false);
    };
    const close = () => setShowDialog(false);
    return (
      <div>
        <button onClick={open}>Delete something</button>
        {showDialog && (
          <AlertDialog onDismiss={close} leastDestructiveRef={cancelRef}>
            <AlertDialogLabel>Please Confirm!</AlertDialogLabel>
            <AlertDialogDescription>
              Are you sure you want to delete something? This action is permanent,
              and we're totally not just flipping a field called "deleted" to
              "true" in our database, we're actually deleting something.
            </AlertDialogDescription>
            <div className="alert-buttons">
              <button onClick={destroyStuff}>Yes, delete</button>{" "}
              <button ref={cancelRef} onClick={close}>
                Nevermind, don't delete.
              </button>
            </div>
          </AlertDialog>
        )}
      </div>
    );
  }