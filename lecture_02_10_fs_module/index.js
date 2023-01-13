const fs = require("fs");

//dosya okumak
// fs.readFile("password.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
//   console.log("dosya okundu");
// });

//dosya yazmak
// fs.writeFile("example.txt", "Kodluyoruzzzz", "utf8", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("dosyaya bilgi yazildi");
// });

// fs.writeFile("example.json", '{ name: "Arin", age: 6 }', "utf8", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("dosyaya json bilgi yazildi");
// });

//Veri eklemek
// fs.appendFile("example.txt", "\n KODLUYORUZ 22222", "utf8", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("yeni veri eklendi");
// });

//Dosya Silmek
// fs.unlink("example.json", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//Klasörler Oluşturmak
//recursive true ile iç içe dosya oluşturmaya izin veriyoruz
// fs.mkdir("uploads/img", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Klasörler oluşturuldu");
// });

//Klasörleri silmek
fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Klasörler silindi");
});
