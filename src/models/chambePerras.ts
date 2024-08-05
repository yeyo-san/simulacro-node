import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement, 
    HasMany
} from "sequelize-typescript";
import { Clientes } from "./clientes";


@Table({
    tableName: "perrasUser",
    timestamps: true
})
export class Perras extends Model {
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

    @Column({
        type: DataType.INTEGER,
        allowNull: false 
    })
    tamañoDelCuloDeUnoADiez!: number
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    image_url!: string | null; 

    @HasMany(() => Clientes)
    clientes!: Clientes[]
}