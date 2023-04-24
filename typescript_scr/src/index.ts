// class User {
//   public email:string
//   private name:string
//   private readonly city: string = 'Limbe'
//   constructor(email:string,name:string){
//     this.email = email;
//     this.name = name;
//   }
// }
class User {

  protected _courseCount = 1

  readonly city: string = "Limbe";
  constructor(
    public email: string, 
    public name: string,
    // private userId: string
  ) {
  }

  private deleteToken() {
    console.log('Token deleted')
  }

  get getAppleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum){
    if(courseNum <=1) {
      throw new Error('Course count must be greater than 1')
    }
    this._courseCount = courseNum
  }
}

class SubUser extends User {
  isFamily: boolean = true

  changeCourseCount(){
    this._courseCount = 4
  }
}

const charles = new User("charles@tabot.com", "charles");

console.log(charles);
