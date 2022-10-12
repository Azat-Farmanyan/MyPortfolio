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
    { img: 'akar-icons_github-fill.png', name: 'github', url: 'github' },
    {
      img: 'akar-icons_linkedin-box-fill.png',
      name: 'linkedin',
      url: 'linkedin',
    },
    {
      img: 'ant-design_facebook-filled.png',
      name: 'facebook',
      url: 'facebook',
    },
    {
      img: 'ant-design_instagram-filled.png',
      name: 'instagram',
      url: 'instagram',
    },
    { img: 'akar-icons_telegram-fill.png', name: 'telegram', url: 'telegram' },
    { img: 'akar-icons_discord-fill.png', name: 'discord', url: 'discord' },
  ];
  constructor() {}
}
