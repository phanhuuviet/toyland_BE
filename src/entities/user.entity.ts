import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    default: 0,
  })
  role: number;

  @Column({
    default: true,
  })
  isActive: boolean;

  @Column()
  source: string;

  @Column()
  shopifyCustomerId: string;

  @Column()
  shopbaseCustomerId: string;

  @Column()
  avatar: string;

  @CreateDateColumn({
    default: new Date(),
    type: 'timestamp',
  })
  birth: Date;

  @Column()
  gender: string;

  @Column()
  address: string;

  @CreateDateColumn({
    default: new Date(),
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    default: new Date(),
    type: 'timestamp',
  })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      const salt = bcrypt.genSaltSync(10);
      this.password = bcrypt.hashSync(this.password, salt);
    }
  }
}
