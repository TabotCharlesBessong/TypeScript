
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ){}

  abstract getSepia(): void

  getReelTime(): number{
    // calculation
    return 8
  }
}

class Instagrams extends TakePhoto{
  constructor(public cameraMode:string,public filter:string,public burst: number){
    super(cameraMode, filter)
  }

  getSepia(): void {
      console.log('sepia')
  }
}

const tabot = new Instagrams("Selfie",'test',3)
console.log(tabot.getReelTime())