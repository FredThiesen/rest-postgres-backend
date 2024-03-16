import { Model, DataTypes } from "sequelize"
import { sequelize } from "../sequelize"

class BlogPost extends Model {
	public id!: number
	public title!: string
	public description!: string
	public content!: string
	public readonly createdat!: Date
	public readonly updatedat!: Date
}

BlogPost.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: new DataTypes.STRING(128),
			allowNull: false,
		},
		description: {
			type: new DataTypes.STRING(256),
			allowNull: false,
		},
		content: {
			type: new DataTypes.TEXT(),
			allowNull: false,
		},
		createdat: {
			type: new DataTypes.DATE(),
			allowNull: true,
		},
		updatedat: {
			type: new DataTypes.DATE(),
			allowNull: true,
		},
	},
	{
		tableName: "blogposts",
		sequelize, // passing the `sequelize` instance is required
	}
)

export { BlogPost }
