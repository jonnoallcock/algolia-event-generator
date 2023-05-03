import fs from 'fs'
import { OUT_DIR } from './constants'

export const startup = (file: string) => {
    if (!fs.existsSync(OUT_DIR)) {
        fs.mkdirSync(OUT_DIR)
    }

    if (fs.existsSync(file)) {
        fs.rmSync(file)
    }
}