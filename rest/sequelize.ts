import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("freddb", "postgres", "postgres", {
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
})
