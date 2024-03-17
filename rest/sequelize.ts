import { Sequelize } from "sequelize"

export const sequelize = new Sequelize(
	"freddb",
	"freduser",
	"freduserpassword",
	{
		host: "database",
		dialect: "postgres",
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
		define: {
			timestamps: false,
		},
	}
)
