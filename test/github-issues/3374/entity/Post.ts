import {Column} from "../../../../src/decorator/columns/Column.ts";
import {Entity} from "../../../../src/decorator/entity/Entity.ts";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";

@Entity()
export class Post {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({ type: String })
    name!: string;

}
