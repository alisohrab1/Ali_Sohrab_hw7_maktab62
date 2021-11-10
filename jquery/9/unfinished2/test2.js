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
  function createTable(arr) {
    var table = $("<table>");
    // caption
    table
      .append("<caption>MyTable</caption>")
      // thead
      .append("<thead>")
      .children("thead")
      .append("<tr />")
      .children("tr")
      .append(
        "<th>Row</th><th>uid</th><th>firstName</th><th>lastName</th><th>city</th><th>personalCode</th><th>phoneNumber</th><th>position</th>"
      );

    //tbody
    var tbody = table.append("<tbody />").children("tbody");

    // add row
    for (let i = 0; i < arr.length; i++) {
      let obj = arr[i];
      tbody
        .append("<tr />")
        .children("tr:last")
        .append(`<td>${i + 1}</td>`)
        .append(`<td>${obj.uid}</td>`)
        .append(`<td>${obj.firstName}</td>`)
        .append(`<td>${obj.lastName}</td>`)
        .append(`<td>${obj.city}</td>`)
        .append(`<td>${obj.personalCode}</td>`)
        .append(`<td>${obj.phoneNumber}</td>`)
        .append(`<td>${obj.position}</td>`);
    }

    // add table to dom
    table.appendTo("#myTable");
    let tableHeads = $("th");

    $(tableHeads[1]).click(function () {
      userData = userData.sort((a, b) => b.uid - a.uid);
      $("#myTable").empty();
      createTable(userData);
    });
    $(tableHeads[2]).click(function () {
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const x = a.firstName.toUpperCase();
        const y = b.firstName.toUpperCase();

        let comparison = 0;
        if (x > y) {
          comparison = -1;
        } else if (x < y) {
          comparison = +1;
        }
        return comparison;
      }
      userData = userData.sort(compare);
      $("#myTable").empty();
      createTable(userData);
    });
    $(tableHeads[3]).click(function () {
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const x = a.lastName.toUpperCase();
        const y = b.lastName.toUpperCase();

        let comparison = 0;
        if (x > y) {
          comparison = -1;
        } else if (x < y) {
          comparison = +1;
        }
        return comparison;
      }
      userData = userData.sort(compare);
      $("#myTable").empty();
      createTable(userData);
    });
    $(tableHeads[4]).click(function () {
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const x = a.city.toUpperCase();
        const y = b.city.toUpperCase();

        let comparison = 0;
        if (x > y) {
          comparison = -1;
        } else if (x < y) {
          comparison = +1;
        }
        return comparison;
      }
      userData = userData.sort(compare);
      $("#myTable").empty();
      createTable(userData);
    });
    $(tableHeads[5]).click(function () {
      userData = userData.sort((a, b) => b.personalCode - a.personalCode);
      $("#myTable").empty();
      createTable(userData);
    });
    $(tableHeads[6]).click(function () {
      userData = userData.sort((a, b) => b.phoneNumber - a.phoneNumber);
      $("#myTable").empty();
      createTable(userData);
    });
    $(tableHeads[7]).click(function () {
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const x = a.position.toUpperCase();
        const y = b.position.toUpperCase();

        let comparison = 0;
        if (x > y) {
          comparison = -1;
        } else if (x < y) {
          comparison = +1;
        }
        return comparison;
      }
      userData = userData.sort(compare);
      $("#myTable").empty();
      createTable(userData);
    });
    let rowArr = Array.from($("tr"));
    rowArr.shift();
    for (let i = 0; i < rowArr.length; i++) {
      $(rowArr[i]).click(function () {
        updateForm(i);
      });
    }
    function updateForm(index) {
      //create the form

      $("#form").css("display", "block");
      $("#form").submit(function (e) {
        e.preventDefault();
        // update(index);
      });
      $("#uid").attr("value", userData[index].uid);
      $("#uid").attr("readonly", true);
      $("#firstName").attr("value", userData[index].firstName);
      $("#lastName").attr("value", userData[index].lastName);
      $("#city").attr("value", userData[index].city);
      $("#personalCode").attr("value", userData[index].personalCode);
      $("#position").attr("value", userData[index].position);
      $("#phoneNumber").attr("value", userData[index].phoneNumber);
      $("#updateB").click(function () {
        update(index);
      });
      $("#delB").click(function (){
        del(index);
      })
    }
    function update(index) {
      //creating new form
      $("#form2").css("display", "block");
      $("#form2").submit(function (e) {
        e.preventDefault();
      });
      $("#updateC").click(function () {
        readForm(index);
      });
    }
    function readForm(index) {
      var formData = {};
      formData["uid"] = userData[index].uid;
      formData["firstName"] = $("#firstName2").val();
      formData["lastName"] = $("#lastName2").val();
      formData["city"] = $("#city2").val();
      formData["personalCode"] = $("#personalCode2").val();
      formData["position"] = $("#position2").val();
      formData["phoneNumber"] = $("#phoneNumber2").val();

      //checking new data
      console.log(formData);
      for (let property in formData) {
        if (formData[property] === "") {
          alert("empty input");
          return;
        }
      }
      userData = userData.map((el) => {
        if (el.uid ==  formData.uid) {
          return { ...el, ... formData };
        }
        return el;
      });

      $("#myTable").empty();
      // $("#form").empty();
      createTable(userData);
    }
    function del(index){
      let obj = userData[index];
      userData = userData.filter((el) => el.uid != obj.uid);
      $("#myTable").empty();
      createTable(userData);

      
    }

    
  

  }
  
  createTable(userData);

});
