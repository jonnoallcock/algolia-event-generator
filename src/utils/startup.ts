import fs from 'fs'
import { OUT_DIR } from './constants'

export const startup = () => {
    fs.rmSync(OUT_DIR, {recursive: true})
    fs.mkdirSync(OUT_DIR)
}