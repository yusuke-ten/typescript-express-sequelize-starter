import { Sequelize } from 'sequelize'
import { Post } from './post'

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || 'database',
  process.env.MYSQL_USER || 'docker',
  process.env.MYSQL_PASSWORD || 'password',
  {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
    dialect: 'mysql',
    timezone: '+09:00',
  }
)

const db = {
  Post: Post.initialize(sequelize),
}

Object.keys(db).forEach(tableName => {
  const model = db[tableName as keyof typeof db]
  if (model.associate) {
    model.associate()
  }
})

export default db
