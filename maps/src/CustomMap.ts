
export interface Mappable {
  location:{
    lat:number,
    lng:number
  }
  markerContent() : string
  color:string
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId:string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      center: { lat: 37.422, lng: -122.084 },
      zoom: 1,
    });
  }

  public addMarker(mappable:Mappable): void {
    const marker = new google.maps.Marker({
      position:{
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      map: this.googleMap,
    });

    marker.addListener('click',() => {
      const infoWindow = new google.maps.InfoWindow({
        content:mappable.markerContent()
      })

      infoWindow.open(this.googleMap,marker)
    })
  }
}
