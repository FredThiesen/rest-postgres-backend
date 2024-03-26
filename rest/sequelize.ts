import { Sequelize } from "sequelize"

const {
	DB_HOST,
	POSTGRES_USER = "",
	POSTGRES_PASSWORD,
	POSTGRES_DB = "",
} = process.env

export const sequelize = new Sequelize(
	POSTGRES_DB,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	{
		host: DB_HOST,
		dialect: "postgres",
		pool: {
			max: 5,
			min: 0,
			acquire: 15000,
			idle: 10000,
		},
		define: {
			timestamps: false,
		},
	}
)
