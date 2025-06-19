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
        name: "Leonardo's Portfolio",
        url: "https://leonardohenao.com",
        img: GetIconFromWebsite("https://leonardohenao.com"),
      },
      {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
        img: `https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico`,
      },
      {
        name: "Outlook",
        url: "https://outlook.office.com/mail/",
        img: `https://outlook.office.com/mail/favicon.ico`,
      },

      {
        name: "spreadsheets",
        url: "https://docs.google.com/spreadsheets/u/0/",
        img: GetIconFromWebsite("https://docs.google.com/spreadsheets/u/0/"),
      },
      {
        name: "Play Console",
        url: "https://play.google.com/console/u/0/developers/7404460400144886326/app-list?pli=1",
        img: `https://www.gstatic.com/play-apps-publisher/play_console_favicon.png`,
      },
      {
        name: "Translator",
        url: "https://translate.google.com/?hl=es&sl=en&tl=es&op=translate",
        img: "https://www.gstatic.com/translate/favicon.ico",
      },
      {
        name: "Github",
        url: "https://github.com/leonardo-henao",
        img: `https://github.com/fluidicon.png`,
      },
      {
        name: "Vercel",
        url: "https://vercel.com/leonardohenaos-projects",
        img: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
      },
    ],
  },
  {
    title: "IAs",
    data: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com",
        img: GetIconFromWebsite("https://chat.openai.com"),
      },
      {
        name: "Gemini",
        url: "https://gemini.google.com/app?hl=es",
        img: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
      },
      {
        name: "Toolify",
        url: "https://www.toolify.ai",
        img: "https://www.toolify.ai//favicon.ico",
      },
    ],
  },
  {
    title: "Study",
    data: [
      // {
      // name: "Open English",
      // url: "https://student.openenglish.com/",
      // img: GetIconFromWebsite("https://learningplatform.openenglish.com/"),
      // },
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
        name: "IBM",
        url: "https://skills.yourlearning.ibm.com/activity/PLAN-5AAD513B3914?ngo-id=0232",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      },
      // {
      //   name: "Open EDG",
      //   url: "https://edube.org/",
      //   img: GetIconFromWebsite("https://edube.org/"),
      // },
      // {
      //   name: "FreeCodeCamp",
      //   url: "https://www.freecodecamp.org/",
      //   img: GetIconFromWebsite("https://www.freecodecamp.org/"),
      // },
      //{
      //  name: "BananaRancia",
      //  url: "https://bananarancia.com/",
      //  img: GetIconFromWebsite("https://bananarancia.com/"),
      //},
      {
        name: "Google Skill Boost",
        url: "https://www.cloudskillsboost.google/?locale=es",
        img: GetIconFromWebsite("https://www.cloudskillsboost.google/"),
      },
      {
        name: "Fundación Telefonica",
        url: "https://conectaempleo-formacion.fundaciontelefonica.com/mi-perfil",
        img: GetIconFromWebsite(
          "https://conectaempleo-formacion.fundaciontelefonica.com/",
        ),
      },
    ],
  },
  {
    title: "Entertainment",
    data: [
      {
        name: "Youtube",
        url: "https://youtube.com",
        img: "https://www.youtube.com/s/desktop/a21ec0bb/img/logos/favicon_144x144.png",
      },
      {
        name: "YT Music",
        url: "https://music.youtube.com",
        img: GetIconFromWebsite("https://music.youtube.com"),
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
        img: "https://www3.animeflv.net/favicon.ico",
      },
      {
        name: "Reddit",
        url: "https://www.reddit.com",
        img: GetIconFromWebsite("https://www.reddit.com"),
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
        img: "https://cdn.freebiesupply.com/logos/large/2x/binance-coin-logo-png-transparent.png",
      },
      {
        name: "CoinMarketCap",
        url: "https://coinmarketcap.com/es",
        img: "https://s2.coinmarketcap.com/static/cloud/img/banners/cmc.png",
      },
    ],
  },
  {
    title: "Others",
    data: [
      {
        name: "WakaTime",
        url: "https://wakatime.com/dashboard",
        img: `https://wakatime.com/favicon.ico`,
      },
      {
        name: "Whatsapp",
        url: "https://web.whatsapp.com/",
        img: "https://static.whatsapp.net/rsrc.php/v4/yP/r/rYZqPCBaG70.png",
      },
    ],
  },
];
