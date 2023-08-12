import { Company } from './Company';
import { User } from './User';
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId:string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      center: { lat: 37.422, lng: -122.084 },
      zoom: 1,
    });
  }

  public addUserMarker(user:User): void {
    const marker = new google.maps.Marker({
      position:{
        lat: user.location.lat,
        lng: user.location.lng
      },
      map: this.googleMap,
    });
  }

  public addCompanyMarker(company:Company): void {
    const marker = new google.maps.Marker({
      position:{
        lat: company.location.lat,
        lng: company.location.lng
      },
      map: this.googleMap,
    });
  }
}
