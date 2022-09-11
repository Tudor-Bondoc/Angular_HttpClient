import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../service/locations.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  constructor(private locatie:LocationsService) { }

  buildTable(data):void {
    /*var block1 = document.getElementById('column1');
    var block2 = document.getElementById('column2');

    for(var i=0; i<30; i+=2) {
          var row = `
          <p class="heading">Name: <span class="info_value info_title">${data[i].name}</span></p>
          <p class="info">Country: <span class="info_value">${data[i].country}</span></p>
          <p class="info">Latitude: <span class="info_value">${data[i].lat}</span></p>
          <p class="info">Longitude: <span class="info_value">${data[i].long}</span></p>
          <p class="info">Wind probability: <span class="info_value">${data[i].probability}</span></p>
          <p class="info last">When to go: <span class="info_value">${data[i].month}</span></p>
                    `
          block1!.innerHTML += row;
    }

          for(i=1;i<30;i+=2)
          {
            row = `
            <p class="heading1">Name: <span class="info_value info_title">${data[i].name}</span></p>
            <p class="info1">Country: <span class="info_value">${data[i].country}</span></p>
            <p class="info1">Latitude: <span class="info_value">${data[i].lat}</span></p>
            <p class="info1">Longitude: <span class="info_value">${data[i].long}</span></p>
            <p class="info1">Wind probability: <span class="info_value">${data[i].probability}</span></p>
            <p class="info1 last">When to go: <span class="info_value">${data[i].month}</span></p>
                      `
            block2!.innerHTML += row;
          }*/

          var block = document.getElementById('my_table');
          for (var i=0; i<30; i++)
          {
            var row = `<tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].country}</td>
                    <td>${data[i].lat}</td>
                    <td>${data[i].long}</td>
                    <td>${data[i].probability}</td>
                    <td>${data[i].month}</td>
                      </tr>`
            block!.innerHTML+=row;
          }
          
        

    }
  

  onGetLocations():void {
    this.locatie.getLocations().subscribe(
      (response) => {
        console.log(response);
        this.buildTable(response);
      },
      (error) => console.log(error),
      () => console.log('Done getting spots')
    );
  }



  ngOnInit(): void {
    this.onGetLocations();
  }

}
