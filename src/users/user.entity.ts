import { AdminEntity } from 'nestjs-admin';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}

export class UserAdmin extends AdminEntity {
  entity = User;
  listDisplay = ['firstName', 'lastName'];
}
