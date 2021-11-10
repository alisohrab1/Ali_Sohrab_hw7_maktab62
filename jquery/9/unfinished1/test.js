$(document).ready(function () {
  let userData = [
    {
      uid: 112233,
      firstName: "Amirhossein",
      lastName: "Kazemi",
      city: "Isfahan",
      personalCode: "2345672345",
      phoneNumber: "03111234234",
      position: "UI Designer",
    },
    {
      uid: 223344,
      firstName: "Ali",
      lastName: "Ahmadi",
      city: "Abhar",
      personalCode: "3345673232",
      phoneNumber: "04111334452",
      position: "Analyzer",
    },
    {
      uid: 334455,
      firstName: "Ali",
      lastName: "Ahmadi",
      city: "Rasht",
      personalCode: "9945643232",
      phoneNumber: "01131394855",
      position: "UI Designer",
    },
    {
      uid: 445566,
      firstName: "Shahriar",
      lastName: "Ahmadi Gol",
      city: "Mashad",
      personalCode: "5545689232",
      phoneNumber: "04121334415",
      position: "UI designer",
    },
    {
      uid: 556677,
      firstName: "Reza",
      lastName: "Rahmani",
      city: "Semnan",
      personalCode: "774565392",
      phoneNumber: "09331334225",
      position: "Analyzer",
    },
    {
      uid: 667788,
      firstName: "Mohammadhadi",
      lastName: "Soleimani",
      city: "Shiraz",
      personalCode: "7845482232",
      phoneNumber: "07771333455",
      position: "PHP Programmer",
    },
    {
      uid: 778899,
      firstName: "Mohsen",
      lastName: "Zare",
      city: "Zahedan",
      personalCode: "1145119212",
      phoneNumber: "01221399450",
      position: "UX Designer",
    },
    {
      uid: 889900,
      firstName: "Milad",
      lastName: "Rabani",
      city: "Qom",
      personalCode: "8845383233",
      phoneNumber: "08121320452",
      position: "Node Programmer",
    },
    {
      uid: 990011,
      firstName: "Mahdi",
      lastName: "Mohseni naseb",
      city: "Ahvaz",
      personalCode: "2242689035",
      phoneNumber: "02211783452",
      position: "UX Designer",
    },
    {
      uid: 113344,
      firstName: "Soheil",
      lastName: "Hossein",
      city: "Arak",
      personalCode: "1145129244",
      phoneNumber: "01221334665",
      position: "Java Programmer",
    },
  ];

  //create and it's modal
  $("#createBtn").click(function () {
    $("#createModal").css("display", "block");
    $("#createUid").val("");
    $("#createFname").val("");
    $("#createLname").val("");
    $("#createCity").val("");
    $("#createPcode").val("");
    $("#createPhone").val("");
    $("#createPosition").val("");
  });
  $(".createClose").click(function () {
    $("#createModal").css("display", "none");
  });
  $("#createSubmit").click(function () {
    readFormCreate();
    $("#createModal").css("display", "none");
  });
  function readFormCreate() {
    var formData = {};
    formData["uid"] = $("#createUid").val();
    formData["firstName"] = $("#createFname").val();
    formData["lastName"] = $("#createLname").val();
    formData["city"] = $("#createCity").val();
    formData["personalCode"] = $("#createPcode").val();
    formData["phoneNumber"] = $("#createPhone").val();
    formData["position"] = $("#createPosition").val();
    console.log(formData);
    if (isNaN(formData.uid)) {
      alert("invalid uid");
      return;
    }
    for (el of Object.values(formData)) {
      if (el === "") {
        alert("empty input");
        return;
      }
    }

    let targetPerson = userData.find((el) => el.uid == formData.uid);
    if (targetPerson) {
      alert("duplicate uid");
      return;
    }
    formData.uid = Number(formData.uid);
    userData.push(formData);
    console.log(userData);
    $("tbody").remove();
    createTable(userData);
  }

  //update and its modal

  //  console.log();

  function createTable(arr) {
    let count = 0;

    var content = `<tbody id="tbody">`;
    for (let i = 0; i < arr.length; i++) {
      count++;
      let values = Object.values(arr[i]);
      values.unshift(i + 1);
      // console.log(values);
      content += `<tr id="${i}" >`;
      for (let j = 0; j < values.length + 1; j++) {
        if (j === values.length) {
          content +=
            `<td id="${i}${j}" >` +
            `<button class="updateBtn" value="${i}">` +
            "A" +
            "</button></td>";
        } else {
          content += `<td id="${i}${j}" >` + values[j] + "</td>";
        }
      }
      content += "</tr>";
    }
    content += "</tbody>";
    $("#myTable").append(content);
  }
  createTable(userData);

  $(".updateBtn").click(function (e) {
    let index = e.target.value;
    let currentObj = userData[index];
    $("#updateModal").css("display", "block");
    $("#updateUid").val(currentObj.uid);
    $("#updateFname").val(currentObj.firstName);
    $("#updateLname").val(currentObj.lastName);
    $("#updateCity").val(currentObj.city);
    $("#updatePcode").val(currentObj.personalCode);
    $("#updatePhone").val(currentObj.phoneNumber);
    $("#updatePosition").val(currentObj.position);
  });
  $(".updateClose").click(function(){
    $("#updateModal").css("display", "none");
  })
});
