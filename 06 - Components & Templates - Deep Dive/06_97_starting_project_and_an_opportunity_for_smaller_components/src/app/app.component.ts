import { Component } from '@angular/core';

import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Traffic } from './dashboard/traffic/traffic';
import { Tickets } from './dashboard/tickets/tickets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [Header, ServerStatus, Traffic, Tickets],
})
export class AppComponent {}
