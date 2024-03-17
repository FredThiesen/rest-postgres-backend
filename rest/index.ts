import express, { Request, Response } from "express"
import https from "https"
import fs from "fs"
import cors from "cors"
import { BlogPost } from "./models/BlogPost" // Assuming you have a BlogPost model defined
import { isEmpty } from "lodash"
import { Op } from "sequelize"

// Certificate is saved at: /etc/letsencrypt/live/ricardothiesenapi.sytes.net/fullchain.pem
// Key is saved at:         /etc/letsencrypt/live/ricardothiesenapi.sytes.net/privkey.pem

const httpsOptions = {
	key: fs.readFileSync(
		"/etc/letsencrypt/live/ricardothiesenapi.sytes.net/privkey.pem"
	),
	cert: fs.readFileSync(
		"/etc/letsencrypt/live/ricardothiesenapi.sytes.net/cert.pem"
	),
}

const app = express()

const corsOptions = {
	origin: ["https://ricardothiesen.com.br"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	credentials: true,
	allowedHeaders: "Content-Type, Authorization, X-Requested-With",
}

app.use(cors(corsOptions))
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!")
})

app.post("/posts/blog", (req: Request, res: Response) => {
	const { title = "", description = "" } = req.body || {}
	const blogPost = {
		title,
		description,
		content: req.body?.content || "",
	}
	if (isEmpty(description) || isEmpty(title)) {
		res.status(400).send({ error: "Title and description are required" })
		return
	}

	BlogPost.create(blogPost)
		.then(() => {
			console.log("Blog post created successfully")
		})
		.catch((error) => {
			console.error("Error creating blog post:", error)
			res.status(500).send({ error: "Error creating blog post" })
		})

	res.status(201).send(blogPost)
})

//route to get all posts
app.get("/posts/blog", (req: Request, res: Response) => {
	BlogPost.findAll()
		.then((posts) => {
			res.status(200).send(posts)
		})
		.catch((error) => {
			console.error("Error getting blog posts:", error)
			res.status(500).send({ error: "Error getting blog posts" })
		})
})

//route to search post by title or description
app.get("/posts/blog/search", (req: Request, res: Response) => {
	const { title, description } = req.query || {}
	let condition: {
		title?: any
		description?: any
	} = {}

	if (title) {
		condition["title"] = {
			[Op.like]: `%${title}%`,
		}
	}

	if (description) {
		condition["description"] = {
			[Op.like]: `%${description}%`,
		}
	}

	BlogPost.findAll({
		where: condition,
	})
		.then((posts) => {
			res.status(200).send(posts)
		})
		.catch((error) => {
			console.error("Error getting blog posts:", error)
			res.status(500).send({ error: "Error getting blog posts" })
		})
})

const server = https.createServer(httpsOptions, app)

server.listen(3000, () => {
	console.log("Server running on port 3000")
})
