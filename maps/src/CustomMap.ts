export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId:string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      center: { lat: 37.422, lng: -122.084 },
      zoom: 1,
    });
  }
}
