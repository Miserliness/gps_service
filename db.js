const { Pool } = require('pg');
const pool = new Pool({
    user: 'doadmin',
    password: 'bukclm0kfwy8n7c7',
    host: 'db-postgresql-nyc3-38342-do-user-9304008-0.b.db.ondigitalocean.com',
    port: 25060,
    database: "defaultdb",
	sslmode = "require"
})

module.exports = pool