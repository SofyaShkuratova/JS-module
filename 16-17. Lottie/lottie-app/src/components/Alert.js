import React,{useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if(!alert.visible) {
      return null
  }

  return (
      <div
          className={`alert alert-${alert.type || 'warning'} alert-dismissible`}
      >
          <strong>Внимание!</strong>
          {alert.text}
          <button onClick={hide} type="button" className="btn-close"  data-bs-dismiss="alert" aria-label="Close">

          </button>
      </div>
  )
}