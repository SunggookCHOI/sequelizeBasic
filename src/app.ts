import express from 'express'
import { Model, Sequelize, DataTypes } from 'sequelize';
import People from '../models/friend'

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
async function addPeople(name:string, hobby: string){
    const newPeople = await People.create({
        name : name,
        hobby : hobby,
    });
    console.log(name+' 님 추가 완료')
}