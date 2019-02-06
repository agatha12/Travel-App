import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  )
}

export function SelectDate(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  )
  
  // <select className="form-control" {...props}>
  //   <option value="January">1</option>
  //   <option value="February">2</option>
  //   <option value="March">3</option>
  //   <option value="April">4</option>
  //   <option value="May">5</option>
  //   <option value="June">6</option>
  //   <option value="July">7</option>
  //   <option value="August">8</option>
  //   <option value="September">9</option>
  //   <option value="October">10</option>
  //   <option value="November">11</option>
  //   <option value="December">12</option>
  // </select>
}

// export function SelectDay(props) {
//   return <select className="form-control" {...props} >
//         <option value="1">01</option>
//         <option value="2">02</option>
//         <option value="3">03</option>
//         <option value="4">04</option>
//         <option value="5">05</option>
//         <option value="6">06</option>
//         <option value="7">07</option>
//         <option value="8">08</option>
//         <option value="9">09</option>
//         <option value="10">10</option>
//         <option value="11">11</option>
//         <option value="12">12</option>
//         <option value="13">13</option>
//         <option value="14">14</option>
//         <option value="15">15</option>
//         <option value="16">16</option>
//         <option value="17">17</option>
//         <option value="18">18</option>
//         <option value="19">19</option>
//         <option value="20">20</option>
//         <option value="21">21</option>
//         <option value="22">22</option>
//         <option value="23">23</option>
//         <option value="24">24</option>
//         <option value="25">25</option>
//         <option value="26">26</option>
//         <option value="27">27</option>
//         <option value="28">28</option>
//         <option value="29">29</option>
//         <option value="30">30</option>
//         <option value="31">31</option>
//     </select>
// }

// <select className="form-control" >
//   <option value="2019">2019</option>
// </select>

export function Time(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  )
}

export function FormButton(props) {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export function DeleteButton (props) {
  return (
    <button {...props}>
    {props.children}
    </button>
  )
}