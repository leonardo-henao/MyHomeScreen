import { GetIconFromWebsite } from "../helpers/GetIconFromWebsite";
import { IGroupBookmark } from "../interfaces/IBookmark";

/**
 * AllBookmarks
 * @example
 * export const AllBookmarks: IGroupBookmark[] = [
 *  { title: "MyBookmar",
 *    data: [
 *      { name: "name", url: "url", img: "img" },
 *      { name: "name", url: "url", img: "img" },
 *    ]
 *  },
 * ]
 */
export const AllBookmarks: IGroupBookmark[] = [
  {
    title: "Bookmarks",
    data: [
      {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
        img: `https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico`,
      },
      {
        name: "Play Console",
        url: "https://play.google.com/console/u/0/developers/7404460400144886326/app-list?pli=1",
        img: `https://www.gstatic.com/play-apps-publisher/play_console_favicon.png`,
      },
      {
        name: "Translator",
        url: "https://translate.google.com/?hl=es&sl=en&tl=es&op=translate",
        img: GetIconFromWebsite("https://translate.google.com"),
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com",
        img: GetIconFromWebsite("https://chat.openai.com"),
      },
      {
        name: "Gemini",
        url: "https://gemini.google.com/app?hl=es",
        img: GetIconFromWebsite("https://gemini.google.com/app?hl=es"),
      },
      // {
      //   name: "Copy IA",
      //   url: "https://app.copy.ai/",
      //   img: GetIconFromWebsite("https://app.copy.ai/"),
      // },
      {
        name: "Github",
        url: "https://github.com/leonardo-henao",
        img: `https://github.com/fluidicon.png`,
      },
      {
        name: "WakaTime",
        url: "https://wakatime.com/dashboard",
        img: `https://wakatime.com/favicon.ico`,
      },
      // {
      //   name: "IPTV Lists Admin",
      //   url: "https://iptvlistasm3u.com/",
      //   img: `https://iptv-list.vercel.app/favicon.svg`,
      // },
    ],
  },
  {
    title: "Study",
    data: [
      {
        name: "Open English",
        url: "https://student.openenglish.com/",
        img: GetIconFromWebsite("https://learningplatform.openenglish.com/"),
      },
      {
        name: "Cisco Skills",
        url: "https://skillsforall.com/",
        img: GetIconFromWebsite("https://skillsforall.com/"),
      },
      {
        name: "Udemy",
        url: "https://www.udemy.com/home/my-courses/learning/",
        img: GetIconFromWebsite("https://www.udemy.com/"),
      },
      {
        name: "Alura",
        url: "https://app.aluracursos.com/dashboard",
        img: GetIconFromWebsite("https://aluracursos.com/"),
      },
      // {
      //   name: "Open EDG",
      //   url: "https://edube.org/",
      //   img: GetIconFromWebsite("https://edube.org/"),
      // },
      {
        name: "FreeCodeCamp",
        url: "https://www.freecodecamp.org/",
        img: GetIconFromWebsite("https://www.freecodecamp.org/"),
      },
      {
        name: "BananaRancia",
        url: "https://bananarancia.com/",
        img: GetIconFromWebsite("https://bananarancia.com/"),
      },
    ],
  },
  {
    title: "Entertainment",
    data: [
      {
        name: "Youtube",
        url: "https://youtube.com",
        img: GetIconFromWebsite("https://www.youtube.com"),
      },
      {
        name: "Youtube Music",
        url: "https://music.youtube.com",
        img: GetIconFromWebsite("https://music.youtube.com"),
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/",
        img: GetIconFromWebsite("https://spotify.com"),
      },
      {
        name: "Discord",
        url: "https://discord.com/channels/@me",
        img: GetIconFromWebsite("https://discord.com/"),
      },
      {
        name: "Twitch",
        url: "https://www.twitch.tv/lhenaoll",
        img: GetIconFromWebsite("https://www.twitch.tv/"),
      },
      {
        name: "Anime FLV",
        url: "https://www3.animeflv.net/",
        img: GetIconFromWebsite("https://www3.animeflv.net/"),
      },
    ],
  },
  {
    title: "Crypto",
    data: [
      {
        name: "Trading View",
        url: "https://es.tradingview.com/chart/",
        img: GetIconFromWebsite("https://es.tradingview.com/"),
      },
      {
        name: "Binance",
        url: "https://www.binance.com/es/",
        img: GetIconFromWebsite("https://www.binance.com/"),
      },
      {
        name: "CoinMarketCap",
        url: "https://coinmarketcap.com/es",
        img: GetIconFromWebsite("https://coinmarketcap.com/"),
      },
    ],
  },
];
