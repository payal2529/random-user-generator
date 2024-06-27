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

// userDataId is using for Referencing user data Element👇
const applyClickEventListner = (copyButtonId, userDataId) => {
  document.getElementById(copyButtonId).addEventListener("click", () => {
    copyUserInfoToClipboard(userDataId);
  });
};

// for copying content
applyClickEventListner("copyUserFirstNameBtn1", "displayUserFirstName");
applyClickEventListner("copyUserFirstNameBtn2", "displayUserFirstName");
applyClickEventListner("copyUserLastNameBtn1", "displayUserLastName");
applyClickEventListner("copyUserLastNameBtn2", "displayUserLastName");
applyClickEventListner("copyUserFullNameBtn1", "displayUserFullName");
applyClickEventListner("copyUserFullNameBtn2", "displayUserFullName");
applyClickEventListner("copyUserIdBtn1", "displayUserId");
applyClickEventListner("copyUserIdBtn2", "displayUserId");
applyClickEventListner("copyUserPasswordBtn1", "displayUserPassword");
applyClickEventListner("copyUserPasswordBtn2", "displayUserPassword");
applyClickEventListner("copyUserEmailBtn1", "displayUserEmail");
applyClickEventListner("copyUserEmailBtn2", "displayUserEmail");
applyClickEventListner("copyUserPhoneNumberBtn1", "displayUserPhoneNumber");
applyClickEventListner("copyUserPhoneNumberBtn2", "displayUserPhoneNumber");
applyClickEventListner("copyUserGenderBtn1", "displayUserGender");
applyClickEventListner("copyUserGenderBtn2", "displayUserGender");
applyClickEventListner("copyUserDobBtn1", "displayUserDob");
applyClickEventListner("copyUserDobBtn2", "displayUserDob");
applyClickEventListner("copyUserCityBtn1", "displayUserCity");
applyClickEventListner("copyUserCityBtn2", "displayUserCity");
applyClickEventListner("copyUserStateBtn1", "displayUserState");
applyClickEventListner("copyUserStateBtn2", "displayUserState");
applyClickEventListner("copyUserPostcodeBtn1", "displayUserPostcode");
applyClickEventListner("copyUserPostcodeBtn2", "displayUserPostcode");
applyClickEventListner("copyUserCountryBtn1", "displayUserCountry");
applyClickEventListner("copyUserCountryBtn2", "displayUserCountry");
applyClickEventListner("copyUserAddressBtn1", "displayUserAddress");
applyClickEventListner("copyUserAddressBtn2", "displayUserAddress");
applyClickEventListner("copyUserLatitudeBtn1", "displayUserLatitude");
applyClickEventListner("copyUserLatitudeBtn2", "displayUserLatitude");
applyClickEventListner("copyUserLongitudeBtn1", "displayUserLongitude");
applyClickEventListner("copyUserLongitudeBtn2", "displayUserLongitude");

// this function takes an element id as input, retrieves the HTML content of that element,
//  copies it to the clipboard, updates a message indicating that the content has been copied,
// and then triggers a Bootstrap toast to display a notification to the user. 👇👇

const copyUserInfoToClipboard = (id) => {
  const copyText = document.getElementById(id).innerText;
  if (copyText) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Attempt to copy to clipboard using Clipboard API
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          // Success message
          document.getElementById(
            "copiedToClipboardMessage"
          ).innerText = `Copied: "${copyText}"`;
          // Show toast or any other UI feedback
          showToast();
        })
        .catch((error) => {
          console.error("Unable to copy to clipboard:", error);
          // Fallback mechanism for mobile devices
          copyTextFallback(copyText);
        });
    } else {
      // Fallback mechanism for browsers that don't support Clipboard API
      copyTextFallback(copyText);
    }
  }
};

function copyTextFallback(text) {
  // Create a temporary text input element
  const tempInput = document.createElement("input");
  tempInput.setAttribute("value", text);
  document.body.appendChild(tempInput);
  // Select the text in the input element
  tempInput.select();
  // Execute the copy command
  document.execCommand("copy");
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  // Show success message or any other UI feedback
  // Ensure that the value is passed to the success message
  showCopiedToClipboardMessage(text);
  // Show toast
  showToast();
}

function showCopiedToClipboardMessage(text) {
  // Display the message with the copied text value
  const messageElement = document.getElementById("copiedToClipboardMessage");
  messageElement.innerText = `Copied: "${text}"`;
}

function showToast() {
  const copiedToClipboardToastTrigged = document.getElementById(
    "copiedToClipboardToast"
  );
  const toast = new bootstrap.Toast(copiedToClipboardToastTrigged);
  toast.show();
}

// for  header and footer dynamic data
const dynamicData = {
  developerName: "Payal Porwal",
  headerheading: "RANDOM USER GENERATOR",
};

const developerNameElement = document.getElementById("dynamicDeveloperName");
developerNameElement.innerHTML = dynamicData.developerName;

const dynamicHeadingElement = document.getElementById("dynamicHeaderHeading");
dynamicHeadingElement.innerHTML = dynamicData.headerheading;

const dynamicYearElement = document.getElementById("dynamicYear");
dynamicYearElement.innerHTML = new Date().getFullYear();
