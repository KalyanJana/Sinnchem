import dotenv from 'dotenv'

dotenv.config() // Load environment variables from .env file

export const PORT = process.env.PORT || 4000 //Define port variable

export const MONGO_URL = process.env.MONGO_URL //Define port variable.