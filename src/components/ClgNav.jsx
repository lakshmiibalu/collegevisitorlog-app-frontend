import React from 'react'
import { Link } from 'react-router-dom'

const ClgNav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">FISAT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/entry">Visitor Entry</Link>
        <Link class="nav-link" to="/view">View Log</Link>
        
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default ClgNav