import { Injectable } from '@angular/core';

export interface socialMedia {
  img: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  socialMedia: socialMedia[] = [
    {
      img: 'akar-icons_github-fill.png',
      name: 'github',
      url: 'https://github.com/Azat-Farmanyan',
    },
    {
      img: 'akar-icons_linkedin-box-fill.png',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/azat-farmanyan-607305254/',
    },
    {
      img: 'ant-design_facebook-filled.png',
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100007929288834',
    },
    {
      img: 'ant-design_instagram-filled.png',
      name: 'instagram',
      url: 'https://www.instagram.com/azat_09.5/',
    },
    {
      img: 'akar-icons_telegram-fill.png',
      name: 'telegram',
      url: 'https://t.me/AzatFarmanyan',
    },
    {
      img: 'akar-icons_discord-fill.png',
      name: 'discord',
      url: 'https://discordapp.com/users/908978735020146719/',
    },
  ];
  constructor() {}
}
