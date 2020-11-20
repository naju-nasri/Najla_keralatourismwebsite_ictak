new WOW().init();
$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function validateform() {
  var name = document.myform.Username.value.trim();
  var password = document.myform.password.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  var confirm_password = document.myform.confirm_password.value;

  if (password == confirm_password) {
    return true;
  }
  else {
    alert("password must be same!");
    return false;
  }
}




document.addEventListener('DOMContentLoaded', function(e) {
  const form = document.getElementById('demoForm');
  const fv = FormValidation.formValidation(
      form,
      {
          fields: {
              phoneNumber: {
                  validators: {
                      phone: {
                          country: function() {
                              return form.querySelector('[name="country"]').value;
                          },
                          message: 'The value is not a valid phone number'
                      }
                  }
              },
          },
          plugins: {
              trigger: new FormValidation.plugins.Trigger(),
              tachyons: new FormValidation.plugins.Tachyons(),
              submitButton: new FormValidation.plugins.SubmitButton(),
              icon: new FormValidation.plugins.Icon({
                  valid: 'fa fa-check',
                  invalid: 'fa fa-times',
                  validating: 'fa fa-refresh'
              }),
          },
      }
  );

  form.querySelector('[name="country"]').addEventListener('change', function() {
      // Revalidate the phone number field whenever user changes the country
      fv.revalidateField('phoneNumber');
  });
});
function passwordChanged() {
  var strength = document.getElementById('strength');
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
  var enoughRegex = new RegExp("(?=.{6,}).*", "g");
  var pwd = document.getElementById("password");
  if (pwd.value.length == 0) {
      strength.innerHTML = 'Type Password';
  } else if (false == enoughRegex.test(pwd.value)) {
      strength.innerHTML = 'More Characters';
  } else if (strongRegex.test(pwd.value)) {
      strength.innerHTML = '<span style="color:green">Strong!</span>';
  } else if (mediumRegex.test(pwd.value)) {
      strength.innerHTML = '<span style="color:orange">Medium!</span>';
  } else {
      strength.innerHTML = '<span style="color:red">Weak!</span>';
  }
}