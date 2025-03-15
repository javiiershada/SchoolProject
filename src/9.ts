import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular Template';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.example.com/data').subscribe((response: any) => {
      console.log(response);
    });
  }

  ngOnDestroy(): void {
    // Unsubscribing from HTTP request when component is destroyed
    this.http.get('https://api.example.com/data').unsubscribe();
  }
}