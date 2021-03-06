import React from 'react'

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand text-white" href="#" >PIZZAMANIA</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">About Pizza <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-white" href="#">Pizza Type <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar