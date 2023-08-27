import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { WidgetMapNdviService } from './services/widget-map-ndvi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'automaticFarmSolutionApi';
  mapHtml: string = ''; // HTML received from API
  API_URL =
    'https://www.api.automaticfarmsolutionwebapp.com/AFS/VegetationIndexHtmlWidget?vegetationindex=ndvi';

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private el: ElementRef,
    private widgetMapService: WidgetMapNdviService
  ) {}

  ngOnInit(): void {
    this.widgetMapService.getHtmlContent().subscribe(
      response => {
        this.renderMap(response);
      },
      error => console.error('Error:', error)
    );
  }

  private renderMap(html: string): void {
    const mapContainer = document.getElementById('map-ndvi');
    if (mapContainer) {
      mapContainer.innerHTML = this.mapHtml;
    }
  }
}
