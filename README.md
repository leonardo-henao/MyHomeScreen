# Customizable browser home screen

Customize your home screen in all browsers with a single file.

![imagen demo](/assets/demo.png)

When you open the page for the first time in the day, the system automatically loads a wallpaper <b>ONCE A DAY</b> from the [Unsplash](https://unsplash.com/) API.
The wallpaper url is saved in localStorage on your browser for next open and wallpaper upgrade is in the nex day.
<div align="center">

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/E1E6XIB4J)
</div>
<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Requirements

- Unsplash account
- Any web browser

## Get Unsplash API credentials

You need the `apikey` and `topic_id` for load background wallpapers on the page.
<br />
Set `env` or environment with the follow name

| env name | data |
|-|-|
| VITE_UNSPLASH_API_KEY | Create app in Unsplash [here](https://unsplash.com/oauth/applications),after, open the app and scroll down to seccion `Keys` and copy `Access Key`.|
| VITE_UNSPLASH_TOPIC | For the topic id, go to [here](https://unsplash.com/t/) after you selected any, you watch the URL and copy the tag mark. |

![How to get topic id image](/assets/topics-unsplash.png)

## Update current background wallpaper

At the bottom left you will see a button with the `reload` symbol to change the current wallpaper

## Installation

- Clone/Fork repository
- Configure your bookmark on `/src/data/MyBookMarks.ts` following the next parameters:

```
export const AllBookmarks: IGroupBookmark[] = [
 { title: "MyBookmar",
   data: [
     { name: "name", url: "url", img: "img" },
     { name: "name", url: "url", img: "img" },
   ]
 },
]
```

- Deploy in your hosting proveedor favorite, i like [Vercel](https://vercel.com)

## Browser settings

In your browser, go to the section settings and customize:

|Section| Configuration |
|-|-|
| On startup | Set a specific page and paste the page that you open in browser. |
| Appearance | Enable `Show home button` and set page, paste the page that you open in browser. |

<br>
<br>
<hr>
<br>

<div align="center">

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/E1E6XIB4J)

</div>
