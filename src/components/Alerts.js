import React from 'react'

export default function Alerts(props) {
  return (
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
    <strong>{props.message}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  )
}
