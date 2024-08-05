import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement, 
    HasMany,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import { Perras } from "./chambePerras";

@Table({
    tableName: "clientes",
    timestamps: true
})
export class Clientes extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @ForeignKey(() => Perras)
    @Column({
        type: DataType.INTEGER, 
        allowNull: false
    })
    perraId!: number;

    @BelongsTo(() => Perras)
    perraUser!: Perras
}
