# ™️URL

Please use URL shorten services to avoid fxxking long content.
（打那麼多誰 ™️ 看得完，請多加使用短網址。）

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Getting Start](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Getting Started

1. Clone the repo
   ```sh
   git clone git@github.com:kuouu/tmurl.git
   ```
2. Install YARN packages
   ```sh
   yarn
   ```
3. Set up your [Notion Integration](https://developers.notion.com/)
4. Enter your URL in `/.env`
   ```
   NOTION_TOKEN='ENTER YOUR NOTION TOKEN'
   NOTION_DATABASE_ID='ENTER YOUR NOTION DATABASE ID'
   ```
5. Run the Next application
   ```sh
   yarn dev
   ```
 
## Usage

Type the setting url(ex: kuouu.tw/`fb`), then it will be directed to the curresponding website.

### URL shortener explain

![image](https://user-images.githubusercontent.com/20458463/204087876-afd23e87-e5dc-484d-b3eb-7737a86b72b6.png)

### Notion Database

- Schema：Short URL / Original URL

### Frontend

No. Notion page is easy enough to use🥴.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

About me: [Yu-Tsung (Eric) Kuo](https://www.linkedin.com/in/kuouu/) - erickuo5124@gmail.com

Project Link: [https://github.com/kuouu/smart-room-frontend](https://github.com/kuouu/smart-room-frontend)
