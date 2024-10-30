import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ServicesComponent } from "./services/services.component";
import { WhyChooseUsComponent } from "./why-choose-us/why-choose-us.component";
import { AboutSectionComponent } from './about-section/about-section.component';
import { TeamComponent } from "./team/team.component";
import { ReviewsComponent } from './reviews/reviews.component';
import { BlogComponent } from "./blog/blog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, FeaturesComponent, SubscribeComponent, FooterComponent, ServicesComponent, WhyChooseUsComponent, AboutSectionComponent, TeamComponent, ReviewsComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'InsWebsite';
}
