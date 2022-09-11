import { JsonPipe } from '@angular/common';
import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import { LocationsService } from '../service/locations.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MapComponent implements AfterViewInit {

  public mapp;

  public initMap(): void {
    this.mapp = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.mapp);
  }

  public addMarker(x:number, y:number): void {
    L.marker([x, y]).addTo(this.mapp);
    /*L.marker.bind('Hello').openPopup(this.mapp);*/
  }

  constructor(private locatie:LocationsService) { }

  onGetLocations():void {
    this.locatie.getLocations().subscribe(
      (response) => {
        console.log(response);
        if(response === undefined) {return}
        for (let i=0; i<30; i++)
        {
          this.addMarker(parseFloat(response[i].lat), parseFloat(response[i].long));
          var popupContent =
          '<p class="popup_name">' +
          response[i].name +
          '</p>' +
          '<p class="country">' +
          response[i].country +
          '</p>' +
          '<p class="title"> Wind probability' +
          '<p class="info">'+
          response[i].probability+'%'+
          '</p>' +
          '</p>' +
          '<p class="title"> Latitude' +
          '<p class="info">'+
          response[i].lat+
          '</p>' +
          '</p>' +
          '<p class="title"> Longitude' +
          '<p class="info">'+
          response[i].long+
          '</p>' +
          '</p>' +
          '<p class="title"> When to go' +
          '<p class="info">'+
          response[i].month+
          '</p>' +
          '</p>'

          ;
          /*L.marker.bindPopup('Hello').openPopup();*/
          L.marker([parseFloat(response[i].lat), parseFloat(response[i].long)]).addTo(this.mapp).bindPopup(popupContent);
          /*var popup = L.popup()
            .setLatLng([parseFloat(response[i].lat), parseFloat(response[i].long)])
            .setContent('<p>Hello world!<br />This is a nice popup.</p>')
            .openOn(this.mapp);*/
        }
          
      },
      (error) => console.log(error),
      () => console.log('Done getting spots')
    );
  }


  ngAfterViewInit(): void {
    this.initMap();
    this.onGetLocations();
    /*for(let i = 0; i<30; i++)
      this.addMarker(response[i].lat, response[i].long);*/
  }


}










