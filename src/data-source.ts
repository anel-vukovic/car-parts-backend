import "reflect-metadata"
import { DataSource } from "typeorm"
import { CarPart } from "./entity/CarPart"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "",
  database: "car_parts_database",
  synchronize: true,
  logging: false,
  entities: [CarPart],
  migrations: [],
  subscribers: [],
})
