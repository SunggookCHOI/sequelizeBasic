import express from 'express'
import { Model, Sequelize, DataTypes } from 'sequelize/types';

class People extends Model{
    public id !: number;
    public name !: string;
    public hobby !: string;
    public readonly created !: Date;
}

const sequelize = new Sequelize('mysql://root:root1234@localhost:3306/people');

People.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: new DataTypes.STRING(128),
        allowNull:false,
    },
},{
        sequelize,
        tableName: 'people'
});
