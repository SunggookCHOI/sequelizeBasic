import express from 'express'
import { Model, Sequelize, DataTypes } from 'sequelize';
import People from '../models/friend'
import * as DB from '../models/index'


const mysql: Sequelize = DB.init();

async function test(){
    const newPeople = await People.create({
        name : '남세영',
        hobby : '독서'
    });
    console.log('입력 완료');
};
/*
async function printAll(){
    await People.findAll({
        attributes : ['name','hobby'],
        raw : true
    }).then(result =>{
        console.log(result)
        return result;
    }).catch(e=>{
        throw(e);
    });
}
*/

async function allPeople(){
    let temp = await People.findAll({
        attributes : ['name','hobby'],
        raw : true
    })
    console.log(temp);
    return temp;
}

test()
console.log(allPeople())