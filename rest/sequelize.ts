import { Sequelize } from "sequelize"

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env

//@ts-ignore
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
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
})
