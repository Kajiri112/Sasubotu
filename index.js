require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

let replies = [
  "In meinem fall hat stalker schuld",
  "Ich mach nun feierabend",
  "Ich empfinde nur Liebe für Dinge mit Lichtstärke 2.8 oder besser",
  "Ich hoffe du hast Kuchen mitgebracht",
  "So zerbröselt der Keks nunmal",
  "for more horo cuteness",
  "Aber frische luft tut gut!",
  "Ich hatte da hunger drauf!",
  "Sounds like fun. Not",
  "Dann gebe ich keinen fick :D",
  "Ich sag hier gar nix mehr!",
  "So nen bullshit",
  "boop beep boop",
  "Ich bin zu alt für so nen scheiß",
  "Bring Eis mit",
  "So bin ich nunmal",
  "Das was stalker sagt",
  "Ich hätte nichts dagegen von ch'en gefesselt zu werden...",
  "Richtig. Geld ausgeben anstatt aufzubewahren",
  "PAH",
  "jo mein körper sagt da einfach nein",
  "das hatte ich auch schon gesehen und extra dir nicht geschickt",
  "not sure if want",
  "ah shit, ich hab seit 2h meinen tee in der küche vergessen",
  "Ich bin halt süß und trinke auch genau so meinen tee",
  "FAGETS",
  "stalker ist ein faget",
  "stalker Mittag normal?",
  "I COULD and I WILL!",
  "Ahhh food. Best shit",
  "Wer das faget ist ein liest",
  "egal was ich mach, immer jemand am quengeln..."
];

let tilden = [
  "Oi, keine Tilden hier",
  "Wer tilden nutzt wählt auch Grüne",
  "hau dir einfach selbst mit nem brett vorm kopf und schlag dich KO"
]

let moins = [
  "Guten Morgen fargettos",
  "Bonjour Bitchés",
  "wow. da fängt der tag mit ner shitty nachricht an",
  "Ich hab Tee",
  "ah le Faget",
  "ich will wieder ins bett..."
]

bot.on("message", (msg) => {
  if (msg.content.toUpperCase() === "!SASU" ) {
    let reply = replies[Math.floor(Math.random() * replies.length)];
    msg.channel.send(reply);
  } else if (msg.content.startsWith("Sasu~")) {
    let tilde = tilden[Math.floor(Math.random() * tilden.length)];
    msg.channel.send(tilde);
  } else if (msg.content.toUpperCase() === "SasuHelp") {
    msg.channel.send(
      "Keine Zeit mich mit solchen Problematiken zu beschäftigen"
    );
  } else if (msg.content.startsWith("moin")) {
    let moin = moins[Math.floor(Math.random() * moins.length)];
    msg.channel.send(moin);
  }
});
