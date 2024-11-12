const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://0.0.0.0:1234");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/launch-app", (req, res) => {
  // Remplacez 'mathilde' par le nom de l'utilisateur souhaité
  exec("/usr/bin/code", (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors du lancement de l'application : ${error.message}`);
      res.status(500).send("Erreur lors du lancement de l'application.");
      return;
    }
    if (stderr) {
      console.error(`Erreur stderr : ${stderr}`);
      res.status(500).send("Erreur lors du lancement de l'application.");
      return;
    }
    console.log(`Application lancée : ${stdout}`);
    res.send("Application lancée avec succès !");
  });
});


app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
