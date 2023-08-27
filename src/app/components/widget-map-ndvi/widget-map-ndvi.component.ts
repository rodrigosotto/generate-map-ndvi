import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-widget-map-ndvi',
  templateUrl: './widget-map-ndvi.component.html',
  styleUrls: ['./widget-map-ndvi.component.css']
})
export class WidgetMapNdviComponent implements OnInit {
  mapHtml: string = ''; // HTML received from API
  API_URL = 'https://www.api.automaticfarmsolutionwebapp.com/AFS/VegetationIndexHtmlWidget?vegetationindex=ndvi';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make an HTTP request to your API to get the map HTML
    this.http.get<string>(this.API_URL).subscribe((response) => {
      this.mapHtml = response;
      this.renderMap();
      console.log(this.mapHtml)
    });
  }

  private renderMap(): void {
    const mapContainer = document.getElementById('map-ndvi');
    if (mapContainer) {
      mapContainer.innerHTML = this.mapHtml;
    }
  }
}
