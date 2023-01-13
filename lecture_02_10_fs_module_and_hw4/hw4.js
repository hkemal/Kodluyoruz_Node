const fs = require("fs");

//Ödeve ek olarak employee kalsörü oluşturdum
fs.mkdir("employee", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Klasör oluşturuldu");
});

//employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
fs.writeFile(
  "employee/employees.json",
  '{"name": "Employee 1 Name", "salary": 2000} ',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("dosyaya bilgi yazildi");
  }
);

//Bu veriyi okuyalım. (READ)
fs.readFile("employee/employees.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  //Bu veriyi güncelleyelim.
  let dataJSON = JSON.parse(data);
  dataJSON.name = "Kemal";
  dataJSON.salary = 3000;
  console.log(dataJSON);
  fs.writeFile(
    "employee/employees.json",
    JSON.stringify(dataJSON),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("dosyaya json bilgi yazildi");
    }
  );
});

fs.unlink("employee/employees.json", (err) => {
  if (err) {
    console.log(err);
  }
});

//Ödeve ek olarak eklediğim klasörü sildim
fs.rmdir("employee", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Klasörler silindi");
});
