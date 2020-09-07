import { Sequelize, Model, DataTypes } from 'sequelize'

export class Post extends Model {
  public id!: number
  public name!: string
  public created_user_id!: string
  public updated_user_id!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        created_user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
        updated_user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      },
      { sequelize, tableName: 'posts', timestamps: true, underscored: true }
    )
    return this
  }

  public static associate() {}
}
