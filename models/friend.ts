import { Sequelize, Model, DataTypes, BuildOptions} from 'sequelize'
import * as path from 'path'
let env = process.env.NODE_ENV || 'development';
