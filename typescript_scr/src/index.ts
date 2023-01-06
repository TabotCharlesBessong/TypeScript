
class User {
  email:string
  name:string
  private readonly city: string = 'Limbe'
  constructor(email:string,name:string){
    this.email = email;
    this.name = name;
  }
}

const charles = new User('charles@tabot.com','charles')