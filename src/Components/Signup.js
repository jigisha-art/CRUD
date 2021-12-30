import React  from 'react';
import "./Signup.css";
function Signup() {
    return (
        <>
        <form>  
          <div class="header">
        <h4>Enter details</h4>
        </div>
        <br/>
    <div class="col-md-5">
    <h6>Name</h6>
    <input type="Name" class="form-control" id="Name"/>
    </div>
    <h6> Gender </h6>
     <div class= "form-check form-check-inline">
     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio" value="OptionMale"/>
      <label class="form-check-label" for="inlineRadio1">
    Male
     </label>
     </div>
      <div class="form-check form-check-inline">
       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio" value="OptionFemale"/>
      <label class="form-check-label" for="inlineRadio2">
    Female
      </label>

      </div>
      <div class="form-check form-check-inline">
       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio" value="OptionOther"/>
     <label class="form-check-label" for="inlineRadio3">
    Other
     </label>

     </div>
  <div class="col-5">
  <h6>Blood Group</h6>
  <select class="form-select" aria-label="Default select example">
  <option selected>select option</option>
  <option value="1">O'+'</option>
  <option value="2">B'+'</option>
  <option value="3">AB'+'</option>
</select>
</div>
<div class="col-5">
<h6>Medical Condition</h6>
  <select class="form-select" arial-label="Default select example">
  <option selected>select option</option>
  <option value="1">Heart disease</option>
  <option value="2">Chronic lower respiratory diseases</option>
  <option value="3">Diabetes</option>
</select>
</div>
<h6>Covid History</h6>
<div class= "form-check form-check-inline">
     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio" value="OptionYes"/>
      <label class="form-check-label" for="inlineRadio1">
    Yes
     </label>
     </div>
      <div class="form-check form-check-inline">
       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio" value="OptionNo"/>
      <label class="form-check-label" for="inlineRadio2">
      No
      </label>

      </div>
  <div class="col-6">
    <h6>Address</h6>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-6">
    <h6>Address 2</h6>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <h6>City</h6>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <h6>State</h6>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <h6>Zip</h6>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-3">
    <h6>Mobile no.</h6>
    <input type="Mobile" class="form-control" id="Mobile"/>
  </div>
  <br/>
  <div class="col-md-3">
    <h6>Email</h6>
    <input type="Email" class="form-control" id="inputEmail4"/>
  </div>
  <br/>
  <div class="col-md-3">
    <button type="submit" class="btn btn-primary">Register</button>
  </div>

</form>
  </>
    )
}
export default Signup;