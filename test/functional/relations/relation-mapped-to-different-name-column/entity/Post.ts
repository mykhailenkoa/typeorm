import {Entity} from "../../../../../src/decorator/entity/Entity.ts";
import {Column} from "../../../../../src/decorator/columns/Column.ts";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";
import {PostDetails} from "./PostDetails.ts";
import {OneToOne} from "../../../../../src/decorator/relations/OneToOne.ts";
import {JoinColumn} from "../../../../../src/decorator/relations/JoinColumn.ts";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(type => PostDetails)
    @JoinColumn()
    details!: PostDetails;

    @Column({ type: String })
    title!: string;

}
