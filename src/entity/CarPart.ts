import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class CarPart {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  serialNumber: number

  @Column()
  description: string

  @Column()
  isAvailable: boolean
}
