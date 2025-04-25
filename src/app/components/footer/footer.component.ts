import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroEnvelope } from "@ng-icons/heroicons/outline"
import { mynaBrandFacebookSolid } from "@ng-icons/mynaui/solid"
import { phosphorInstagramLogoBold, phosphorXLogoBold } from "@ng-icons/phosphor-icons/bold"
import { jamLinkedin } from "@ng-icons/jam-icons"
import { bootstrapSlack } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-footer',
  imports: [
    NgIcon
  ],
  viewProviders: provideIcons({
    heroEnvelope,
    mynaBrandFacebookSolid,
    phosphorInstagramLogoBold,
    phosphorXLogoBold,
    jamLinkedin,
    bootstrapSlack
  }),
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
