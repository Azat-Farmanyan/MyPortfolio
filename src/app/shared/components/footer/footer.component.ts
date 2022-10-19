import { Component, OnInit } from '@angular/core';
import {
  socialMedia,
  SocialMediaService,
} from '../../services/social-media.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  iconPath = '../../../../assets/icons/';

  constructor(public socialMediaService: SocialMediaService) {}

  ngOnInit(): void {}
}
