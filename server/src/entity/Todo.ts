import { timeStamp } from "console";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100, nullable: true })
  description: string;

  @Column({ default: false })
  status: boolean;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @Column({ type: "timestamp", nullable: true })
  // createdAt: Date;

  // @Column({ type: "timestamp", nullable: true })
  // updatedAt: Date;

  // @CreateDateColumn({ name: "created_at" }) "created_at": Date;
  // @UpdateDateColumn({ name: "updated_at" }) "updated_at": Date;
}
