import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabOptions: string[] = ['CountryInformation', 'EmergencyServices', 'PublicWarningSystem'];
  title = 'berec-europa';
  currentTab: string = 'CountryInformation';

  ngOnInit(): void {
    this.tabOptions;
  }

  toggleTabs(selectedTab: string): void {
    this.currentTab = selectedTab;
  }
}


