function fetchUserData() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      console.log(user);
      // fetching data
      document.getElementById("displayUserPhoto").src = user.picture.large;
      userFirstName = user.name.first;
      document.getElementById("displayUserFirstName").innerHTML = userFirstName;

      userLastName = user.name.last;
      document.getElementById("displayUserLastName").innerHTML = userLastName;

      const userName = `${user.name.first} ${user.name.last}`;
      document.getElementById("displayUserName").innerHTML = userName;

      const userFullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      document.getElementById("displayUserFullName").innerHTML = userFullName;

      const userId = user.login.uuid;
      document.getElementById("displayUserId").innerHTML = userId;

      const userPassword = user.login.password;
      document.getElementById("displayUserPassword").innerHTML = userPassword;

      const userEmailAddress = user.email;
      document.getElementById("displayUserEmail").innerHTML = userEmailAddress;

      const userPhoneNumber = user.phone;
      document.getElementById("displayUserPhoneNumber").innerHTML =
        userPhoneNumber;

      const userGender = user.gender;
      document.getElementById("displayUserGender").innerHTML = userGender;

      let userDOB = new Date(user.dob.date);
      userDOB = `${userDOB.getDate()}/${
        userDOB.getMonth() + 1
      }/${userDOB.getFullYear()} (${user.dob.age} years old)`;
      document.getElementById("displayUserDob").innerHTML = userDOB;

      const userCity = user.location.city;
      document.getElementById("displayUserCity").innerHTML = userCity;

      const userState = user.location.state;
      document.getElementById("displayUserState").innerHTML = userState;

      const userPostCode = user.location.postcode;
      document.getElementById("displayUserPostcode").innerHTML = userPostCode;

      const userCountry = user.location.country;
      document.getElementById("displayUserCountry").innerHTML = userCountry;

      const userAddress = `Street: ${user.location.street.number} ${user.location.street.name}, City: ${user.location.city}, State: ${user.location.state}, Postcode: ${user.location.postcode}, ${user.location.country}.`;
      document.getElementById("displayUserAddress").innerHTML = userAddress;

      const userLatitude = user.location.coordinates.latitude;
      document.getElementById("displayUserLatitude").innerHTML = userLatitude;

      const userLongitude = user.location.coordinates.longitude;
      document.getElementById("displayUserLongitude").innerHTML = userLongitude;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// for copying content

// ---for btn 1
document
  .getElementById("copyUserFirstNameBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserFirstName");
  });

//--- for btn 2
document
  .getElementById("copyUserFirstNameBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserFirstName");
  });

// for btn 1
document
  .getElementById("copyUserLastNameBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserLastName");
  });
//  for btn 2
document
  .getElementById("copyUserLastNameBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserLastName");
  });

document
  .getElementById("copyUserFullNameBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserFullName");
  });

document
  .getElementById("copyUserFullNameBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserFullName");
  });

document.getElementById("copyUserIdBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserId");
});

document.getElementById("copyUserIdBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserId");
});

document
  .getElementById("copyUserPasswordBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserPassword");
  });

document
  .getElementById("copyUserPasswordBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserPassword");
  });

document.getElementById("copyUserEmailBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserEmail");
});

document.getElementById("copyUserEmailBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserEmail");
});

document
  .getElementById("copyUserPhoneNumberBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserPhoneNumber");
  });

document
  .getElementById("copyUserPhoneNumberBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserPhoneNumber");
  });

document.getElementById("copyUserGenderBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserGender");
});

document.getElementById("copyUserGenderBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserGender");
});

document.getElementById("copyUserDobBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserDob");
});

document.getElementById("copyUserDobBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserDob");
});

document.getElementById("copyUserCityBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserCity");
});

document.getElementById("copyUserCityBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserCity");
});
document.getElementById("copyUserStateBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserState");
});

document.getElementById("copyUserStateBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserState");
});

document
  .getElementById("copyUserPostcodeBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserPostcode");
  });

document
  .getElementById("copyUserPostcodeBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserPostcode");
  });

document.getElementById("copyUserCountryBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserCountry");
});

document.getElementById("copyUserCountryBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserCountry");
});

document.getElementById("copyUserAddressBtn1").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserAddress");
});

document.getElementById("copyUserAddressBtn2").addEventListener("click", () => {
  copyUserInfoToClipboard("displayUserAddress");
});

document
  .getElementById("copyUserLatitudeBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserLatitude");
  });

document
  .getElementById("copyUserLatitudeBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserLatitude");
  });

document
  .getElementById("copyUserLongitudeBtn1")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserLongitude");
  });

document
  .getElementById("copyUserLongitudeBtn2")
  .addEventListener("click", () => {
    copyUserInfoToClipboard("displayUserLongitude");
  });

// this function takes an element id as input, retrieves the HTML content of that element,
//  copies it to the clipboard, updates a message indicating that the content has been copied,
// and then triggers a Bootstrap toast to display a notification to the user. 👇👇

const copyUserInfoToClipboard = (id) => {
  const copyText = document.getElementById(id).innerHTML;
  if (copyText) {
    navigator.clipboard.writeText(copyText).then(() => {});

    document.getElementById(
      "copiedToClipboardMessage"
    ).innerText = `Copied: "${copyText}"`;

    const copiedToClipboardToastTrigged = document.getElementById(
      "copiedToClipboardToast"
    );
    const toast = new bootstrap.Toast(copiedToClipboardToastTrigged);
    toast.show();
    console.log(toast);
  }
};
