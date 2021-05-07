<!DOCTYPE html>
<html>
<head>
<title>ahmad</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Intership Application</h1>
<p>Please fill out the form bellow and hit submit to be considered for the intership.</p>
<form id="myForm">
<fieldset>
<legend>Prersonlita:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br>
  <label for="Web">Personal Website:</label>
  <input type="url" id="Web" name="Web"><br>
  <label for="phone">Enter a phone number:</label>
  <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required><br>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email" required><br>
  <label for="Username">Username:</label>
  <input type="text" id="Username" name="Username"><br>
   <label for="pass">Passoword:</label>
  <input type="password" id="Pass" name="Pass"><br>
  </fieldset>
<fieldset>
<legend>Education:</legend>
  <label for="Degree">Degree:</label>
  <input list="Degrees" name="Degree" id="Degree">
  <datalist id="Degrees">
    <option value="Associate">
    <option value="Bachelor">
    <option value="Masters">
    <option value="Ph.D">
    <option value="other">
  </datalist>
  <br>
<label for="graduate">When will you graduate:</label>
<input type="date" id="graduate" name="graduate"><br>
<label for="CV">Upload your CV and other docouments:</label>
<input type="file" id="CV" name="CV">
</fieldset>
<div class="center">
<input type="submit" value="Submit" onclick="return validateForm()">
<input type="submit" value="Save" onclick ="return Save()">
<input type="reset" value="Reset">
</div>
</form>	
<script src="jsfile.js"></script>
</body>
</html>
