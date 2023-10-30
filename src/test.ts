import {AppDataSource} from "./data-source";
import {CarPart} from "./entity/CarPart";

export function Test() {
  AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new CarPart()
    user.name = "Timber"
    user.description = "Saw"
    user.serialNumber = 25
    user.isAvailable = false
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(CarPart)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

  }).catch(error => console.log(error))
}



